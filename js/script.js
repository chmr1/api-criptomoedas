//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    var texto = "";
    for(let i = 0; i < 10; i++){
        var dateString = new Date(api.data[i].first_historical_data);
        texto = texto + `
        <div class="row margin borda">
            <div class="col-md-2">
                <img src="./img/coin.jpg" alt="coin" width="100" height="60">
            </div>
            <div class="col-md-8">
                <h5>${api.data[i].name}</h5>
                <p class="simbolo">${api.data[i].symbol}</p>
            </div>
            <div class="col-md-2">
                <p class="dt-hist-ini">Desde: ${dateString.toLocaleDateString('pt-BR', options)}</p>
            </div>
        </div>`;
        document.getElementById("coins").innerHTML = texto;
    }
})
.catch((error) => {
    console.error(error.message);
});