# Yanxin Huang — academic homepage

[huangyanxin-china.github.io](https://huangyanxin-china.github.io/)

Publications and three project pages with English and Chinese research summaries. CTV-DGG is under review.

## Files

- `index.html` — biography, news, publications and project links.
- `projects/` — CTV-DGG, cardiac MRI reconstruction and missing-modality segmentation.
- `styles.css` and `app.js` — shared styles and homepage interactions.
- `assets/` — portrait, original paper figures and aggregate results. Figure provenance and hashes are recorded in [sources.json](assets/publications/sources.json).
- `publications.bib` — published-paper citations.
- `research.json` — profile and CTV-DGG metadata.
- `User-Page/index.html` — redirects the older `/User-Page/` URL to the homepage.

## Maintenance

Deploy GitHub Pages from `main`, repository root.

Verify titles, authors and DOI links against publisher records. Keep English and Chinese summaries aligned.

Keep CTV metrics synchronized across `projects/ctv-dgg.js`, `research.json` and `assets/aggregate-results.csv`. Retain the original results figure and preserve figure contents, attribution and applicable rights.

Use dedicated project repositories for source code. AIML-UESTC repositories are outside this maintenance scope.

No clinical volumes, case-level results, model weights, credentials or local source paths are included in this site.
