function calcular(limpar) {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const kilo = document.querySelector("#kilo");
    const preco = document.querySelector("#preco");
    const section = document.querySelector("section");
    const res = document.querySelector("#res");
    section.appendChild(res);
    res.style.display = 'none'
    if (kilo.value.length == 0 || preco.value.length == 0) {
        alert("Insira os dados corretamente.")
        kilo.focus();
    } else {
        const valor = Number(kilo.value) * Number(preco.value);
        btn1.style.display = 'none';
        btn2.style.display = 'block';
        res.style.display = 'block';
        res.style.textAlign = 'center';
        res.style.margin = '13px 0px';
        res.style.fontSize = '1.1rem'
        res.textContent = `Preço Total: R$${valor}`;
        limpar()
    }
}

let limpar = () => {
    kilo.value = '';
    preco.value = '';
    btn2.style.display = 'none';
    btn1.style.display = 'block';
    res.style.display = 'none'
}