# Yanxin Huang — academic homepage

Canonical homepage: **https://huangyanxin-china.github.io/**

English academic homepage with Chinese research summaries, paper DOI links and three project pages. The CTV-DGG manuscript is **under review**; no accepted venue or DOI is asserted for it.

## Content

- `index.html`: biography, news, publications and project navigation.
- `projects/`: dedicated pages for CTV-DGG, cardiac MRI reconstruction and missing-modality segmentation.
- `publications.bib`: verified citations for three published papers.
- `assets/`: an existing public portrait, original manuscript/publisher architecture figures and aggregate results.
- `styles.css` and `app.js`: responsive presentation, publication filters and enlarged paper figures.
- `projects/ctv-dgg.html` and `projects/ctv-dgg.js`: CTV-DGG method, Chinese introduction, interactive contour-budget results and clinical-context figures.

## Deployment

GitHub Pages → **Deploy from a branch** → **main / (root)**. This buildless site uses `.nojekyll`; no package installation or build process is needed.

## Maintenance

Update titles, authors and DOI links against the publisher record. Keep English and Chinese summaries aligned. CTV aggregate metrics in `projects/ctv-dgg.js`, `research.json` and `assets/aggregate-results.csv` must remain synchronized. The original results figure is retained.

Use the dedicated project repositories for source code. The older `/User-Page/` URL redirects to this homepage through `User-Page/index.html` in this repository. Repositories associated with AIML-UESTC are outside this maintenance scope.

No clinical volumes, case-level results, model weights, credentials or local source paths are included in this site.

## Visual reference

The layout retains the academic structure inspired by [w-r-s/academic-homepage-template](https://github.com/w-r-s/academic-homepage-template). Typography and link colors follow [Haobin Li’s homepage](https://hbinli.github.io/) and its [stylesheet](https://hbinli.github.io/assets/css/main.css): `"Trebuchet MS", Helvetica, Arial, "PingFang SC", "Microsoft YaHei", sans-serif`, with 15px body text. The font is resolved from the visitor’s system; no external font requests are required. Exact glyph appearance depends on installed fonts.

Publication cards show actual figures from the corresponding papers: CTV-DGG manuscript Figure 3, USF author-manuscript Figure 1, cardiac MRI published Figure 1, and brainstem glioma published Figure 2. The cardiac project page also includes published Figure 2. CTV-DGG’s original vector PDF is available from the method section of its project page.

Figures preserve their original proportions and contents. Click a thumbnail for an accessible enlarged view; Escape or Close returns to the page. Without JavaScript, each thumbnail opens its original image directly. Ctrl/Cmd-click remains available. The homepage retains publication filtering. Interactive contour-budget results are available on the CTV-DGG project page; old homepage method/results/Chinese-summary bookmarks redirect there.

See [`assets/publications/sources.json`](assets/publications/sources.json) for figure provenance, source URLs and SHA-256 hashes. The USF image is specifically labeled as an author-manuscript figure. Figures retain their original paper attribution and applicable rights.

Edit this repository directly to maintain the current design. The earlier account-preparation script is an archival generator for the preceding layout.
