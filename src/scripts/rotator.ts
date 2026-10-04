/**
 * Cross-fades the `[data-slide]` children of every `[data-rotator]` element by
 * moving the `is-active` class. Images in non-initial slides are deferred with
 * `data-src` / `data-srcset` and loaded one step before they are shown, so only
 * the first image is downloaded with the page.
 */
const timers: number[] = [];

function loadSlide(slide: HTMLElement) {
  // The slide can be the <img> itself (banner) or wrap a <picture> (home carousel)
  const deferred = [slide, ...slide.querySelectorAll<HTMLElement>('[data-src], [data-srcset]')];
  deferred.forEach((el) => {
    if (el.dataset.srcset) (el as HTMLImageElement | HTMLSourceElement).srcset = el.dataset.srcset;
    if (el.dataset.src) (el as HTMLImageElement).src = el.dataset.src;
    delete el.dataset.src;
    delete el.dataset.srcset;
  });
}

function start() {
  document.querySelectorAll<HTMLElement>('[data-rotator]').forEach((root) => {
    const slides = root.querySelectorAll<HTMLElement>('[data-slide]');
    if (slides.length < 2) return;
    let cur = 0;

    // Wait for the page (and its LCP image) before fetching the next slide
    if (document.readyState === 'complete') loadSlide(slides[1]);
    else window.addEventListener('load', () => loadSlide(slides[1]), { once: true });

    timers.push(
      window.setInterval(() => {
        slides[cur].classList.remove('is-active');
        cur = (cur + 1) % slides.length;
        slides[cur].classList.add('is-active');
        loadSlide(slides[(cur + 1) % slides.length]);
      }, Number(root.dataset.interval) || 7000),
    );
  });
}

document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', () => timers.splice(0).forEach(clearInterval));
