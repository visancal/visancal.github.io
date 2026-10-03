import type { APIRoute } from 'astro';
import { employment, education, skills, projects } from '../data/content';

const SITE_URL = 'https://vicentsanjaime.net';

function buildBody(): string {
  const employmentSection = employment
    .map((job) => {
      const tasks = job.tasks.map((t) => `  - ${t}`).join('\n');
      return `### ${job.title} — ${job.center} (${job.date})\n${job.url}\n\n${tasks}`;
    })
    .join('\n\n');

  const educationSection = education
    .map((e) => `### ${e.title} — ${e.center} (${e.date})\n${e.url}\n${e.subtitle}`)
    .join('\n\n');

  const skillsSection = skills.map((group) => `- ${group.techs.join(', ')}`).join('\n');

  const projectsSection = projects
    .map((p) => {
      const lines = [
        `### ${p.title} (${p.date})`,
        `Company: ${p.company}`,
        `Technologies: ${p.technologies.join(', ')}`,
      ];
      if (p.url) lines.push(`URL: ${p.url}`);
      if (p.rd) lines.push('Type: R&D project');
      if (p.description) lines.push('', p.description);
      return lines.join('\n');
    })
    .join('\n\n');

  return `# Vicent Sanjaime — Full site content

> This document inlines all content from ${SITE_URL} as plain text for AI agents and LLMs.
> See /llms.txt for a short index of the site's pages.

## Bio

I'm Vicent Sanjaime Calvet — developer of geospatial applications and GIS (Geographic
Information System) consultant, currently working at CARTO (https://carto.com/) as part
of the Professional Services team. I love front-end development and usually work with
Vue and web mapping libraries such as OpenLayers, Leaflet, the Google Maps API, Deck.gl
and CARTO. I also have extensive experience in the installation and management of server
components such as spatial databases and map servers. I have worked on a large number of
GIS projects, always integrating different technologies and components, most of them
open-source.

I enjoy working on projects with a strong spatial component, as they allow me to apply my
background in cartography, geography and geodesy to the development of spatial solutions.
I consider myself an adaptable, collaborative and approachable team player with a keen
interest in new technologies.

Based in Valencia, Spain. Languages: Spanish (native), Catalan (native), English
(upper-intermediate).

## Technical skills

${skillsSection}

## Employment history

${employmentSection}

## Education

${educationSection}

## Projects

${projectsSection}
`;
}

export const GET: APIRoute = () => {
  return new Response(buildBody(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
