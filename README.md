# Yanxin Huang — academic homepage

Canonical homepage: **https://huangyanxin-china.github.io/**

English academic homepage with Chinese research summaries, paper DOI links and three project pages. The CTV-DGG manuscript is **under review**; no accepted venue or DOI is asserted for it.

## Content

- `index.html`: biography, publications, project navigation and aggregate CTV results.
- `projects/`: dedicated pages for CTV-DGG, cardiac MRI reconstruction and missing-modality segmentation.
- `publications.bib`: verified citations for three published papers.
- `assets/`: an existing public portrait, conceptual diagrams and aggregate figures.
- `styles.css` and `app.js`: responsive presentation and contour-budget interaction.

## Deployment

GitHub Pages → **Deploy from a branch** → **main / (root)**. This buildless site uses `.nojekyll`; no package installation or build process is needed.

## Maintenance

Update titles, authors and DOI links against the publisher record. Keep English and Chinese summaries aligned. CTV aggregate metrics in `app.js`, `research.json` and `assets/aggregate-results.csv` must remain synchronized. The original results figure is retained.

Use the dedicated project repositories for source code. The older `User-Page` is a compatibility entry to this homepage. Repositories associated with AIML-UESTC are outside this maintenance scope.

No clinical volumes, case-level results, model weights, credentials or local source paths are included in this site.

## Visual reference

The current design follows [w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template): a centered academic page, biography and portrait, warm accent links, highlighted publication rows, topic filters and section navigation. The HTML, CSS and interactions are implemented for this site's verified content; fictional template identities, publications, awards and contact links are not imported. No remote font or tracking service is required.

Edit this repository directly to maintain the current design. The earlier account-preparation script is an archival generator for the preceding layout.
