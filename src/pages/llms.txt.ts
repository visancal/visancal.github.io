import type { APIRoute } from 'astro';
import { SITE_URL, socials } from '../data/content';

const profiles = socials.map((s) => `- [${s.label}](${s.url})`).join('\n');

const body = `# Vicent Sanjaime

> GIS developer and consultant at CARTO Professional Services, based in Valencia, Spain. 20+ years of experience in geospatial web applications, mapping libraries and spatial databases.

Personal portfolio site of Vicent Sanjaime Calvet (also known as Vicente Sanjaime). This file
follows the llms.txt convention (https://llmstxt.org/) to help AI agents and LLMs navigate the
site. See \`/llms-full.txt\` for the complete bio, skills, employment history, education,
languages, projects and trips inlined as a single plain-text document.

## Pages

- [Home](${SITE_URL}/): Landing page with intro photos and links to social profiles.
- [Background](${SITE_URL}/background): Bio, technical skills, education, employment history and languages.
- [Projects](${SITE_URL}/projects): Timeline of professional, personal and R&D projects with the technologies used.
- [Trips](${SITE_URL}/trips): Interactive deck.gl globe/map of places visited, highlighted places and wishlist destinations.

## Full content

- [llms-full.txt](${SITE_URL}/llms-full.txt): All site content inlined as plain text for LLM consumption.

## Profiles

${profiles}
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
