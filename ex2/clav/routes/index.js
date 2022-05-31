var express = require('express');
var router = express.Router();
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNzA5NSwiZXhwIjoxNjU0MDQ1ODk1fQ.rTu3aBCSsKSpDKyPIYkY183Z8Rk48teoBezT4gw7-tPyjPiLXZu-LIGzPa2l9usCANAatlZ0R6jnl6HrHOL40rTBPVbaEfWkfIcLj7_q7oua4Tmvc9GkANqDTGaook1QjyWi7eN-y8Fiqi_ucP_0nSJR_nBUF9W4tn3_YDKsSgFSHPN1Z0a4xXLTqfE2svNDU48RuubRTcTQq93pgxHiaFbyJrM6fp1Qu8koOSeSyT-6LxzKcyNzLcFzrv3oQJHG56e8dxb6vowkswpdlBQPGv3YU5g26crLEjk5b9RfX6KqCTrGQGsWaULprMObRqb_Vw3BgQf9cZnKfcxgMN0rEw'
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?token=' + token)
		.then(dados => res.render('index', {items: dados.data}))
		.catch(erro => res.render('error', {error: erro}))
});

router.get('/classes/:nivel', function(req, res, next) {
	axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel='+ req.params.nivel +'&token='+ token)
		.then(response => {
			var objeto = response.data
			res.render('classe', {classe: objeto});
    })
		.catch(erro => res.render('error', {error: erro}))
})


router.get('/classes?estrutura=lista', function(req, res, next) {
	axios.get('http://clav-api.di.uminho.pt/v2/classes?estrutura=lista&token=' + token)
		.then(dados => {
      console.log(dados.data)
    })
		.catch(erro => res.render('error', {error: erro}))
})

router.get('/classes/:codigo', function(req, res, next) {
	axios.get('http://clav-api.di.uminho.pt/v2/classes/c'+req.params.codigo+'?token=' + token)
		.then(dados => {
      console.log(dados.data)
    })
		.catch(erro => res.render('error', {error: erro}))
})

router.get('/classes/:codigo/descendencia', function(req, res, next) {
	axios.get('http://clav-api.di.uminho.pt/v2/classes/c'+req.params.codigo+'/descendencia?token=' + token)
		.then(dados => {
      console.log(dados.data)
    })
		.catch(erro => res.render('error', {error: erro}))
})

router.get('/termosIndice', function(req, res, next) {
	axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + token)
		.then(dados => {
      console.log(dados.data)
    })
		.catch(erro => res.render('error', {error: erro}))
})


module.exports = router;
