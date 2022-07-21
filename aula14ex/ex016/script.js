function verificar() {
    var numini = window.document.getElementById("numini")
    var numfim = window.document.getElementById("numfim")
    var numpas = window.document.getElementById("numpas")
    var cont = window.document.getElementById("cont")
    if (numini.value.length == 0 || numfim.value.length == 0 ) {
        cont.innerHTML = "Impossível contar!"
    } else if (numpas.value == 0) {
        window.alert("Passo inválido! Considerando PASSO 1")
        numpas = 1
    }
    else {
        for (var c = numini; c <= numfim; c += numpas) {
            cont.innerHTML = c.value
        }
    }
}