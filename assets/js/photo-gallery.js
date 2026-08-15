(function () {
  var track = document.querySelector('[data-gallery-track]');
  if (!track) return;

  var scrollAmount = function () {
    var firstItem = track.querySelector('.photo-gallery__item');
    return firstItem ? firstItem.getBoundingClientRect().width + 18 : track.clientWidth * 0.8;
  };

  document.querySelectorAll('[data-gallery-scroll]').forEach(function (button) {
    button.addEventListener('click', function () {
      var direction = button.getAttribute('data-gallery-scroll') === 'next' ? 1 : -1;
      track.scrollBy({ left: direction * scrollAmount(), behavior: 'smooth' });
    });
  });

  track.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    track.scrollBy({
      left: (event.key === 'ArrowRight' ? 1 : -1) * scrollAmount(),
      behavior: 'smooth'
    });
  });
})();
