function Limpar()
{   
    var op = confirm("Deseja Limpar?");
    
    if (op == true) 
    {
        document.form1.reset();
    }
}

function Enviar()
{   
    wrong =0;
    //Verifica nome
    let nome = document.form1.nome;
    if(nome.value.length < 3)
    {       

       nome.value="";
       wrong=1;
       alert('Nome inválido');
    }
    else
    {   
        nome.value=nome.value.toUpperCase();
    }

    //Verifica estado civil
    let estadocivil = document.form1.estadoCivil.value

    if (estadocivil == null || estadocivil == '') 
    {
        document.getElementById('err').innerHTML = "Selecione um estado civil válido!"
        document.getElementById('err').style.color = "red"
        document.getElementById('err').style.fontWeight = "bold"
        document.getElementById('err').style.fontWeight = "sans-serif"
    }

    //Verifica objetivo
    document.form1.objetivo.value.toLowerCase();
    alert('passou objetivo');

    //Verifica tel e email
    if( !(document.form1.telefone.value.match(document.form1.telefone.pattern) || document.form1.email.value!=""))
    {
        wrong=1;
        alert('inserir email ou telefone');
    }

    
    //Verifica nível idiomas 
    if( document.form1.idiIng.value == "0" || document.form1.idiEsp.value == "0")
    {
        alert('Selecionar nível de idioma');
        wrong=1;
    }
    alert('Saiu nivel idioma');

    //Verifica conhecimento
    let check=0;
    for (let i = 0; i < 7; i++)
    {       
        if (document.form1.conhecimento[i].checked)
        alert('Entrou conhecimento ');

          check++;
    }

    if(check==0)
    {
        if(wrong==0)
        {
        var op = confirm("Não irá selecionar nenhuma linguagem de programação ?");
        if (op == false)
        {
            wrong=1;
        }
        }

    }

    if(wrong==0)
    {
        document.form1.submit();
    }

}
