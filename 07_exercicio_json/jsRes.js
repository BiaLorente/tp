function getQuery() {
    var URL = window.location.search.substring(1);
    console.log(URL);
    var flag = URL.split('=');

    document.getElementById("score").innerHTML = flag[0];
}

function porcentagem(score) {
    var total = 10;
    var resultado = 0;

    resultado = score*100/total;
    resultado = resultado.toFixed(2);
    document.getElementById("porcentagem").innerHTML = resultado + " %";
}