let estatesList = document.getElementById('estadosID');
let links = document.getElementById('link');

if(estatesList){
    let nomes;
    const req = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    req.then((obj) => obj.json())
        .then((data) => {
            nomes = data.map((x) => x.nome);
            dfs = data.map((x)=> x.sigla);
            nomes.forEach(element => {
                li = document.createElement("li");
                li.textContent = element;
                estatesList.appendChild(li);
            });
        })
};



