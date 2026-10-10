// Minimal, dependency-free nav toggle for mobile.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Swipeable image carousel for Insights carousel-style posts.
// Markup: .carousel > .carousel-track > img*  (swipe/scroll works with zero JS;
// this just wires up the prev/next buttons and the "n / total" counter.)
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = track ? track.querySelectorAll('img') : [];
    var prevBtn = carousel.querySelector('.carousel-prev');
    var nextBtn = carousel.querySelector('.carousel-next');
    var counter = carousel.querySelector('.carousel-counter');
    if (!track || !slides.length) return;

    function activeIndex() {
      var w = track.clientWidth;
      return w ? Math.round(track.scrollLeft / w) : 0;
    }
    function updateCounter() {
      if (!counter) return;
      counter.textContent = (activeIndex() + 1) + ' / ' + slides.length;
    }
    function goTo(index) {
      var clamped = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({ left: clamped * track.clientWidth, behavior: 'smooth' });
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(activeIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(activeIndex() + 1); });
    track.addEventListener('scroll', function () {
      window.clearTimeout(track._scrollEnd);
      track._scrollEnd = window.setTimeout(updateCounter, 80);
    });
    updateCounter();
  });
});
