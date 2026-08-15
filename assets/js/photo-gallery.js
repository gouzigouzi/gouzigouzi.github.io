(function () {
  var track = document.querySelector('[data-gallery-track]');
  if (!track) return;

  var scrollAmount = function () {
    var firstItem = track.querySelector('.photo-gallery__item');
    return firstItem ? firstItem.getBoundingClientRect().width + 18 : track.clientWidth * 0.8;
  };

  track.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    track.scrollBy({
      left: (event.key === 'ArrowRight' ? 1 : -1) * scrollAmount(),
      behavior: 'smooth'
    });
  });

  var dragStartX = 0;
  var dragStartScrollLeft = 0;
  var isDragging = false;

  track.addEventListener('pointerdown', function (event) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragStartX = event.clientX;
    dragStartScrollLeft = track.scrollLeft;
    isDragging = true;
    track.classList.add('is-dragging');
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener('pointermove', function (event) {
    if (!isDragging) return;
    track.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
  });

  var stopDragging = function () {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
  };

  track.addEventListener('pointerup', stopDragging);
  track.addEventListener('pointercancel', stopDragging);
})();
