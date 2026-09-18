/*
 * Stone Canvas Design — service-specific imagery on the Free Floor
 * Assessment page.
 *
 * Reads ?service=<slug> from the URL (set by "Request Assessment" links
 * on the Services page) and, if approved photos exist for that slug in
 * SERVICE_ASSESSMENT_IMAGES (assets/js/site-data.js), swaps the hero
 * photo and shows a small "you're looking at" label + optional extra
 * thumbnails. If the slug is missing, unrecognized, or has no approved
 * photos yet, the page silently keeps its existing default photo —
 * never a broken image, never a fabricated one.
 */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof SERVICE_ASSESSMENT_IMAGES === 'undefined') return;

  var params = new URLSearchParams(location.search);
  var slug = params.get('service');
  if (!slug) return;

  var images = SERVICE_ASSESSMENT_IMAGES[slug];
  if (!images || !images.length) return;

  var heroImg = document.querySelector('.fe-img-col img');
  if (heroImg) {
    heroImg.src = images[0].src;
    heroImg.alt = images[0].alt;
    var heroWrap = document.querySelector('.fe-img-col');
    if (heroWrap) heroWrap.setAttribute('aria-label', images[0].alt);
  }

  var strip = document.getElementById('fe-img-strip');
  if (strip && images.length > 1) {
    strip.innerHTML = '';
    images.slice(1).forEach(function (img) {
      var el = document.createElement('img');
      el.src = img.src;
      el.alt = img.alt;
      el.loading = 'lazy';
      strip.appendChild(el);
    });
    strip.hidden = false;
  }

  var label = document.getElementById('fe-service-context');
  if (label) {
    var category = (typeof STONE_CANVAS_CATEGORIES !== 'undefined')
      ? STONE_CANVAS_CATEGORIES.filter(function (c) { return c.slug === slug; })[0]
      : null;
    if (category) {
      label.textContent = 'Showing project examples related to ' + category.label + '.';
      label.hidden = false;
    }
  }
});
