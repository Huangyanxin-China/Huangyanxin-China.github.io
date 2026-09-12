// Preserve bookmarks to CTV-DGG sections moved from the personal homepage.
function redirectProjectSection() {
  const projectAnchors = ['#method', '#results', '#chinese-summary', '#clinical-context'];
  if (projectAnchors.includes(location.hash)) {
    location.replace(new URL(`projects/ctv-dgg.html${location.hash}`, location.href));
  }
}
window.addEventListener('hashchange', redirectProjectSection);
redirectProjectSection();

// Topic filters keep the original paper order, authors and links intact.
const papers = [...document.querySelectorAll('.publication[data-topic]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
function filterPublications(topic) {
  let visible = 0;
  papers.forEach(paper => {
    paper.hidden = topic !== 'all' && paper.dataset.topic !== topic;
    if (!paper.hidden) visible++;
  });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
  const status = document.getElementById('filter-status');
  if (status) status.textContent = `Showing ${visible} of ${papers.length} publications.`;
}
filterButtons.forEach(button => button.addEventListener('click', () => filterPublications(button.dataset.filter)));

// A direct link to a paper always reveals it, including after using a filter.
function revealLinkedPaper() {
  const target = document.getElementById(location.hash.slice(1));
  const paper = target?.closest('.publication');
  if (paper?.hidden) {
    filterPublications('all');
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealLinkedPaper);
revealLinkedPaper();

const sectionLinks = [...document.querySelectorAll('.section-nav a')];
if ('IntersectionObserver' in window && sectionLinks.length) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach(link => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -70% 0px', threshold: 0 });
  sectionLinks.forEach(link => {
    const section = document.getElementById(link.hash.slice(1));
    if (section) observer.observe(section);
  });
}

// A normal image link remains available without JavaScript or dialog support.
const figureDialog = document.getElementById('figure-dialog');
if (figureDialog && typeof figureDialog.showModal === 'function') {
  const figureImage = document.getElementById('figure-dialog-img');
  const figureTitle = document.getElementById('figure-dialog-title');
  const figureCaption = document.getElementById('figure-dialog-caption');
  const figureOriginal = document.getElementById('figure-dialog-original');
  document.querySelectorAll('.paper-thumb[data-figure]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      figureImage.src = link.href;
      figureImage.alt = link.querySelector('img').alt;
      figureTitle.textContent = link.dataset.figure;
      figureCaption.textContent = link.dataset.caption;
      figureOriginal.href = link.href;
      figureDialog.showModal();
    });
  });
  figureDialog.querySelector('.figure-dialog-close').addEventListener('click', () => figureDialog.close());
  figureDialog.addEventListener('click', event => {
    if (event.target === figureDialog) figureDialog.close();
  });
}
