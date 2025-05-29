const input = document.getElementById('colorInput');
const colorValue = document.getElementById('colorValue');

input.addEventListener('input', () => {
  const color = input.value.trim();
  document.body.style.backgroundColor = color;
  colorValue.textContent = color || 'None';
});
