var express = require('express');
var router = express.Router();
const ibmWatson = require('../lib/ibmWatsonCredentials');

/* post para o serviço: IBM Watson Assistant */
router.post('/assistant', function(req, res, next) {
  //recupera mensagem de texto e contexto da conversa
var { text, contextDialog } = req.body;
context = JSON.parse(contextDialog);
// constrói json para envio dos dados ao serviço
const params = {
  input: {text},
  workspaceId: '0875993a-d607-4b86-b9e2-445a16cfe2b2',
  context
};
//envio os dados ao serviço e retorna mensagem
ibmWatson.assistant.message(
  params,
  function (err, response){
    if(err)
    res.json({ status: 'ERRO', data: err.toString()});
    else
    res.json({ status:'OK', data: response});
  }
);
});

module.exports = router;
