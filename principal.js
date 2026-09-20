const filtro = document.getElementById("filtro");
const select = document.getElementById("select-filtro");

select.addEventListener('change', () => {
  filtro.textContent = select.options[select.selectedIndex].text;
});