// Rolling text buttons: split each [data-roll] label into letters so CSS can
// roll them up one after another on hover (see "Rolling text" in styles.css).
document.querySelectorAll('[data-roll]').forEach((button) => {
  const text = button.textContent.trim();

  // Screen readers get the plain label; the split letters are visual only.
  button.setAttribute('aria-label', text);

  const label = document.createElement('span');
  label.className = 'roll';
  label.setAttribute('aria-hidden', 'true');

  [...text].forEach((char, i) => {
    const letter = document.createElement('span');
    letter.className = 'roll__char';
    letter.textContent = char === ' ' ? ' ' : char;
    letter.dataset.char = letter.textContent;
    letter.style.setProperty('--i', i);
    label.appendChild(letter);
  });

  button.replaceChildren(label);
});
