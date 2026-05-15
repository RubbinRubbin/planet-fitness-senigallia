/* Planet Fitness Senigallia — interactions */
(function () {
  'use strict';

  var nav      = document.getElementById('nav');
  var burger   = document.getElementById('burger');
  var links    = document.getElementById('navLinks');
  var backdrop = document.getElementById('navBackdrop');
  var toTop    = document.getElementById('toTop');
  var reduce  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- nav scroll state + back-to-top ---- */
  function onScroll() {
    var s = window.scrollY || window.pageYOffset;
    nav.classList.toggle('scrolled', s > 40);
    toTop.classList.toggle('show', s > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  function setMenu(open) {
    burger.classList.toggle('open', open);
    links.classList.toggle('open', open);
    backdrop.classList.toggle('show', open);
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeMenu() { setMenu(false); }
  burger.addEventListener('click', function () {
    setMenu(!burger.classList.contains('open'));
  });
  backdrop.addEventListener('click', closeMenu);
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 12% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- count-up stats ---- */
  var nums = document.querySelectorAll('.num[data-count]');
  function runCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var start = performance.now(), dur = 1500;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCount(en.target); io2.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { io2.observe(el); });
  } else {
    nums.forEach(runCount);
  }
})();
