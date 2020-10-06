
var count = 0;
var respCorreta = 0;
var numQuest = 0;

function loadQuestion(resp) {
    var f = question;
    var indice;


    var indiceAlt = Math.floor((Math.random() * 4));

    document.getElementById('qtdImagens').innerHTML = numQuest + " / 10 – ";
    numQuest++;


    if (numQuest <= 10) {
        do {
            indice = Math.floor((Math.random() * 11));
        } while (!f[indice]);

        switch(f[indice].name){
            case ("opera"):
                document.getElementById('displayText').innerHTML = f[indice].img;
                break;
            case("guarani"):
                 document.getElementById('displayText').className = 'guarani';
                 break; 
            case("traviata"):
                document.getElementById('displayText').className = 'traviata';
                break;
            case("barbeiro"):
                document.getElementById('displayText').className = 'barbeiro';
                break;
            case("turandot"):
                document.getElementById('displayText').className = 'turandot';
                break;
            case("flauta"):
                document.getElementById('displayText').className = 'flauta';   
                break;     
            case("macbeth"):
                document.getElementById('displayText').className = 'macbeth';     
                break;
            case("orfeu"):
                document.getElementById('displayText').className = 'orfeu'; 
                break;
            case("dido"):
                 document.getElementById('displayText').className = 'dido';     
                 break; 
            case("tosca"):
                 document.getElementById('displayText').className = 'tosca';     
                 break;          
        }

        var res;
        for (var i = 0; i < 4; i++) {
            document.getElementById('resp' + i).innerHTML = f[indice].answers[(indiceAlt % 4)];
            indiceAlt++;

            if (f[indice].correctAnswer == f[indice].answers[(indiceAlt % 4)]) {
                if (i == 3)
                    res = 0;
                else
                    res = i + 1;
                console.log("res" + res);
            }
        }

        document.getElementById('imgQuiz').innerHTML = "<img src=" + f[indice].img + " class = editarImagens> ";

        if (resp != -1) {
            if (resp == answers)
                count++;

            document.getElementById('contQuiz').innerHTML = count;
        }

        respCorreta = res;

        delete f[indice];
    } else {

        if (resp != -1) {
            if (resp == respCorreta) {
                count++;
            }
            document.getElementById('contQuiz').innerHTML = count;
        }

        if (count != 0)
            window.location.href = "./pages/PagResult.html?" + (count) + "=count=";
        else
            window.location.href = ".resultado.html?" + 0 + "=count=";

    }
}

function comecar() {
    console.log("entrou......");
}
window.onload = function () {
    comecar();
}

