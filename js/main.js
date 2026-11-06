// Services list: the highlighted row follows the pointer, and returns to
// "Door security" (the design's default state) when the pointer leaves the list.
(function () {
  const list = document.querySelector('.service-index');
  if (!list) return;

  const items = Array.from(list.querySelectorAll('.service'));
  const defaultItem = list.querySelector('.service.is-active') || items[0];

  const setActive = (target) => {
    items.forEach((item) => item.classList.toggle('is-active', item === target));
  };

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => setActive(item));
  });
  list.addEventListener('mouseleave', () => setActive(defaultItem));
})();
