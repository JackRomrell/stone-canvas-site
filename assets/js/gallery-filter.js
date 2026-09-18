/*
 * Stone Canvas Design — "Browse by Project Type" filter/jump behavior.
 *
 * Progressive enhancement: every pill is a real <a href="#id"> pointing at
 * a real element on the page, so category jump-links work even if this
 * script fails to load. When JS is available, clicking a pill also
 * filters the project groups (hides non-matching categories) and marks
 * the active pill, instead of just jumping.
 *
 * This script is generic — it does not hardcode category names. It reads
 * whatever data-cat values exist on the pills and on the .proj-cat-group
 * elements, so new categories can be added later just by adding markup.
 */
document.addEventListener('DOMContentLoaded', function () {
  var pills = document.querySelectorAll('.cat-pills [data-cat]');
  var groups = document.querySelectorAll('.proj-cat-group[data-cat]');
  if (!pills.length || !groups.length) return;

  function setActive(pill) {
    pills.forEach(function (p) {
      p.classList.remove('active');
      p.removeAttribute('aria-current');
    });
    pill.classList.add('active');
    pill.setAttribute('aria-current', 'true');
  }

  function showCategory(cat) {
    groups.forEach(function (g) {
      var match = cat === 'all' || g.getAttribute('data-cat') === cat;
      g.hidden = !match;
    });
  }

  pills.forEach(function (pill) {
    pill.addEventListener('click', function (e) {
      var cat = pill.getAttribute('data-cat');
      if (!cat) return;
      e.preventDefault();
      setActive(pill);
      showCategory(cat);
      var target = document.getElementById(pill.getAttribute('href').slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (history.replaceState) {
        history.replaceState(null, '', cat === 'all' ? location.pathname : '#' + cat);
      }
    });
  });

  var initial = location.hash ? location.hash.slice(1) : 'all';
  var initialPill = document.querySelector('.cat-pills [data-cat="' + initial + '"]');
  if (initialPill) {
    setActive(initialPill);
    showCategory(initial);
  }
});
