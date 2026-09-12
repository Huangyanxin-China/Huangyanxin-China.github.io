const cohorts={"Private CTV":{n:31,ours:[.8298,.9122,.9436],sdf:[.8103,.9029,.9378]},"HMM lung CTV":{n:265,ours:[.8540,.9354,.9599],sdf:[.8346,.9317,.9578]}};
function render(k){const i=[3,5,7].indexOf(k);document.querySelectorAll('[data-k]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.k)===k)));document.getElementById('metric-cards').innerHTML=Object.entries(cohorts).map(([name,c])=>`<article class="metric"><h3>${name} · n = ${c.n}</h3><div class="value">${c.ours[i].toFixed(4)}<small>DICE / ${k} PLANES</small></div><div class="gain">+${((c.ours[i]-c.sdf[i])*100).toFixed(2)} percentage points vs. SDF-area</div></article>`).join('');}
document.getElementById('metric-table').innerHTML=Object.entries(cohorts).flatMap(([name,c])=>[3,5,7].map((k,i)=>`<tr><td>${name}</td><td>${k}</td><td>${c.sdf[i].toFixed(4)}</td><td>${c.ours[i].toFixed(4)}</td><td>+${(c.ours[i]-c.sdf[i]).toFixed(4)}</td></tr>`)).join('');document.querySelectorAll('[data-k]').forEach(b=>b.addEventListener('click',()=>render(Number(b.dataset.k))));render(3);
function openSummary(){if(location.hash==='#chinese-summary')document.getElementById('chinese-summary').open=true;}window.addEventListener('hashchange',openSummary);openSummary();
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
