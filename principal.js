const filtro = document.getElementById("filtro");
const select = document.getElementById("select-filtro");

if (filtro && select) {
    filtro.addEventListener('click', () => {
    select.showPicker();
});

    select.addEventListener('change', () => {
    filtro.textContent = select.options[select.selectedIndex].text;});
}