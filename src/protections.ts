// Basic client-side deterrents for image scraping / casual copying.
// Note: These are deterrents only — they do not prevent determined scraping.

function applyImageProtections() {
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
  imgs.forEach((img) => {
    try {
      img.draggable = false;
      img.setAttribute('draggable', 'false');
      img.style.userSelect = 'none';
      img.style.webkitUserSelect = 'none';
      img.style.msUserSelect = 'none';
      img.addEventListener('contextmenu', (e) => e.preventDefault());
      img.addEventListener('dragstart', (e) => e.preventDefault());
    } catch (err) {
      // noop
    }
  });

  // Add a small stylesheet to further discourage copy/save interactions on images
  const css = `
    img { -webkit-user-drag: none; -webkit-touch-callout: none; }
    img { pointer-events: auto; }
  `;
  const s = document.createElement('style');
  s.setAttribute('data-generated-by', 'protections');
  s.appendChild(document.createTextNode(css));
  document.head?.appendChild(s);

  // Add simple keyboard/selection deterrent for images
  document.addEventListener('copy', (ev) => {
    const sel = document.getSelection();
    if (!sel) return;
    // If the selection contains an image node, cancel copy to deter casual copying
    for (let i = 0; i < sel.rangeCount; i++) {
      const range = sel.getRangeAt(i);
      const containsImage = Array.from(range.cloneContents().querySelectorAll?.('img') ?? []).length > 0;
      if (containsImage) ev.preventDefault();
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyImageProtections);
} else {
  applyImageProtections();
}

export {};
