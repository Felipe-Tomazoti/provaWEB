let estatesList = document.getElementById('estadosID');
let links = document.getElementById('link');
let x = 0;
if(estatesList){
    let nomes;
    const req = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    req.then((obj) => obj.json())
        .then((data) => {
            nomes = data.map((x) => x.nome);
            dfs = data.map((x)=> x.sigla);
            nomes.forEach(element => {
                li = document.createElement("li");
                a = document.createElement("a");
                a.href=`./municipios/index.html?uf=${dfs[x]}` 
                x++;
                a.textContent = element
                li.appendChild(a)
                estatesList.appendChild(li);
            });
        })
};




