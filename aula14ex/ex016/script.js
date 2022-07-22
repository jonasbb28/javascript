function contar() {
    var numini = window.document.getElementById("numini")
    var numfim = window.document.getElementById("numfim")
    var numpas = window.document.getElementById("numpas")
    var cont = window.document.getElementById("cont")
    if (numini.value.length == 0 || numfim.value.length == 0 || numfim.value.length == 0) {
        cont.innerHTML = "Impossível contar!"
        // window.alert("[ERRO] Faltam dados!")
    }
    else {
        cont.innerHTML = "Contando: <br>"
        let i = Number(numini.value)
        let f = Number(numfim.value)
        let p = Number(numpas.value)
        if (numpas.value == 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                cont.innerHTML += ` ${c} \u{1F449}`
            }
            cont.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                cont.innerHTML += ` ${c} \u{1F449}`
            }
            cont.innerHTML += `\u{1F3C1}`
        }

    }
}