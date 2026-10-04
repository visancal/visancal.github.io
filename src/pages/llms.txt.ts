import type { APIRoute } from 'astro';

const SITE_URL = 'https://vicentsanjaime.net';

const body = `# Vicent Sanjaime

> GIS developer and consultant at CARTO Professional Services, based in Valencia, Spain. 20+ years of experience in geospatial web applications, mapping libraries and spatial databases.

Personal portfolio site of Vicent Sanjaime Calvet. This file follows the llms.txt convention
(https://llmstxt.org/) to help AI agents and LLMs navigate the site. See \`/llms-full.txt\`
for the complete bio, employment history, education, skills and project list inlined as a
single plain-text document.

## Pages

- [Home](${SITE_URL}/): Landing page with intro photos.
- [Background](${SITE_URL}/background): Bio, technical skills, employment history and education.
- [Projects](${SITE_URL}/projects): Timeline of professional and personal projects.
- [Trips](${SITE_URL}/trips): Interactive deck.gl map of places visited, highlighted standout places and wishlist destinations.

## Full content

- [llms-full.txt](${SITE_URL}/llms-full.txt): All site content (bio, employment, education, skills, projects) inlined for LLM consumption.
`;

export const GET: APIRoute = () => {
  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
