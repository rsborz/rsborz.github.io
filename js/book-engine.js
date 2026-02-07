// =============================================
// BOOK ENGINE
// Handles page navigation, TOC, glossary, etc.
// =============================================

(function() {

  // State
  let currentPageIndex = 0;

  // Elements
  const bookCover = document.getElementById('book-cover');
  const bookInterior = document.getElementById('book-interior');
  const openBtn = document.getElementById('open-book');
  const pageContent = document.getElementById('page-content');
  const pageContainer = document.getElementById('page-container');
  const navPrev = document.getElementById('nav-prev');
  const navNext = document.getElementById('nav-next');
  const navPageNum = document.getElementById('nav-page-num');
  const navTocBtn = document.getElementById('nav-toc');
  const tocPanel = document.getElementById('toc-panel');
  const tocList = document.getElementById('toc-list');
  const glossaryPanel = document.getElementById('glossary-panel');
  const glossaryContent = document.getElementById('glossary-content');
  const pageTurn = document.getElementById('page-turn');

  // ---- Build TOC ----
  function buildTOC() {
    tocList.innerHTML = '';
    TOC.forEach(item => {
      const li = document.createElement('li');
      if (item.divider) {
        li.className = 'toc-divider';
      } else {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item.label;
        a.dataset.page = item.page;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          goToPage(item.page);
          closeAllPanels();
        });
        li.appendChild(a);
      }
      tocList.appendChild(li);
    });
  }

  // ---- Render Page ----
  function renderPage(index) {
    if (index < 0 || index >= PAGES.length) return;
    currentPageIndex = index;
    const page = PAGES[index];

    // Page turn effect
    pageTurn.classList.add('turning');
    setTimeout(() => pageTurn.classList.remove('turning'), 500);

    // Scroll to top
    pageContainer.scrollTop = 0;

    // Render content
    pageContent.innerHTML = `<div class="page-section">${page.html}</div>`;

    // If this is the glossary page, render glossary entries inline
    if (page.id === 'glossary') {
      renderGlossaryPage();
    }

    // Update page number
    navPageNum.textContent = `${index + 1} / ${PAGES.length}`;

    // Update nav button states
    navPrev.style.visibility = index === 0 ? 'hidden' : 'visible';
    navNext.style.visibility = index === PAGES.length - 1 ? 'hidden' : 'visible';

    // Attach glossary word listeners
    attachGlossaryListeners();

    // Attach begin-reading listener if on inscription
    const beginBtn = document.getElementById('begin-reading');
    if (beginBtn) {
      beginBtn.addEventListener('click', () => renderPage(1));
    }
  }

  // ---- Navigate ----
  function goToPage(pageId) {
    const idx = PAGES.findIndex(p => p.id === pageId);
    if (idx >= 0) renderPage(idx);
  }

  // ---- Glossary ----
  function openGlossary(term) {
    const entry = GLOSSARY[term];
    if (!entry) return;

    closeAllPanels();

    let html = `<h3 class="glossary-term-title">${entry.title}</h3>`;
    html += `<div class="glossary-term-body">${entry.body}</div>`;

    if (entry.seeAlso && entry.seeAlso.length > 0) {
      html += `<div class="glossary-see-also">See also: `;
      html += entry.seeAlso.map(t => {
        const e = GLOSSARY[t];
        return e ? `<a data-glossary-term="${t}">${e.title}</a>` : '';
      }).filter(Boolean).join(', ');
      html += `</div>`;
    }

    glossaryContent.innerHTML = html;
    glossaryPanel.classList.remove('hidden');

    // Attach listeners inside glossary panel
    glossaryPanel.querySelectorAll('[data-glossary-term]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openGlossary(a.dataset.glossaryTerm);
      });
    });

    glossaryPanel.querySelectorAll('.glossary-link').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openGlossary(a.dataset.term);
      });
    });
  }

  function renderGlossaryPage() {
    const container = document.getElementById('glossary-page-content');
    if (!container) return;

    let html = '';
    const sortedTerms = Object.keys(GLOSSARY).sort((a, b) =>
      GLOSSARY[a].title.localeCompare(GLOSSARY[b].title)
    );

    sortedTerms.forEach(key => {
      const entry = GLOSSARY[key];
      html += `<div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--parchment-edge);">`;
      html += `<h3 class="glossary-term-title">${entry.title}</h3>`;
      html += `<div class="glossary-term-body">${entry.body}</div>`;
      if (entry.seeAlso && entry.seeAlso.length) {
        html += `<div class="glossary-see-also">See also: `;
        html += entry.seeAlso.map(t => {
          const e = GLOSSARY[t];
          return e ? `<a data-glossary-term="${t}">${e.title}</a>` : '';
        }).filter(Boolean).join(', ');
        html += `</div>`;
      }
      html += `</div>`;
    });

    container.innerHTML = html;

    // Attach listeners
    container.querySelectorAll('[data-glossary-term]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll to that entry
        const entries = container.querySelectorAll('.glossary-term-title');
        const term = GLOSSARY[a.dataset.glossaryTerm];
        if (term) {
          entries.forEach(el => {
            if (el.textContent === term.title) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      });
    });

    container.querySelectorAll('.glossary-link').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const entries = container.querySelectorAll('.glossary-term-title');
        const term = GLOSSARY[a.dataset.term];
        if (term) {
          entries.forEach(el => {
            if (el.textContent === term.title) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      });
    });
  }

  function attachGlossaryListeners() {
    pageContent.querySelectorAll('.gw').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openGlossary(a.dataset.term);
      });
    });
  }

  // ---- Panels ----
  function closeAllPanels() {
    tocPanel.classList.add('hidden');
    glossaryPanel.classList.add('hidden');
  }

  // ---- Events ----
  openBtn.addEventListener('click', () => {
    bookCover.style.transition = 'opacity 0.6s';
    bookCover.style.opacity = '0';
    setTimeout(() => {
      bookCover.style.display = 'none';
      bookInterior.classList.remove('hidden');
      renderPage(0);
    }, 600);
  });

  navPrev.addEventListener('click', () => {
    if (currentPageIndex > 0) renderPage(currentPageIndex - 1);
  });

  navNext.addEventListener('click', () => {
    if (currentPageIndex < PAGES.length - 1) renderPage(currentPageIndex + 1);
  });

  navTocBtn.addEventListener('click', () => {
    glossaryPanel.classList.add('hidden');
    tocPanel.classList.toggle('hidden');
  });

  // Close panel buttons
  document.querySelectorAll('.panel-close').forEach(btn => {
    btn.addEventListener('click', closeAllPanels);
  });

  // Click outside panels to close
  pageContainer.addEventListener('click', closeAllPanels);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (bookInterior.classList.contains('hidden')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (currentPageIndex < PAGES.length - 1) renderPage(currentPageIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (currentPageIndex > 0) renderPage(currentPageIndex - 1);
    } else if (e.key === 'Escape') {
      closeAllPanels();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchStartY = 0;

  pageContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  pageContainer.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    // Only handle horizontal swipes (not vertical scrolling)
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && currentPageIndex < PAGES.length - 1) {
        renderPage(currentPageIndex + 1);
      } else if (dx > 0 && currentPageIndex > 0) {
        renderPage(currentPageIndex - 1);
      }
    }
  }, { passive: true });

  // Build TOC
  buildTOC();

})();
