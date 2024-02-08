function latinhas() {
    const section = document.querySelector('section')
    const kilo = document.querySelector('#kilo');
    const din = document.querySelector('#preco');
    if (kilo.value.length == 0 || din.value.length == 0) {
        alert("Insira os dados nos campos corretamente.")
        area.innerHTML = '';
        kilo.value = '';
        din.value = '';
    } else {
        const peso = Number(kilo.value);
        const preco = Number(din.value);
        const area = document.createElement('div');
        area.style.textAlign = 'center';
        area.innerHTML = ' ';
        section.appendChild(area);
        area.innerHTML = `${peso + preco}`;
    }

    kilo.value = '';
    din.value = '';
}