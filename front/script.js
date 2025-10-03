const resultsDiv = document.getElementById("results")


async function fetchFuncionarios(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {

        const response = await fetch('../Dados/data.json')
        const data = await response.json()
        console.log(data)
        
        if(data.error){
            resultsDiv.innerHTML = "<p>Erro ao buscar dados!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(item => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}"
                <h2>${item.nome_funcionario}</h2>
                <h3>${item.cargo}</h3>
                <h4>${item.descricao}</h4>
                <p>$${item.salario.toFixed(2)}</p>
            `
            resultsDiv.appendChild(card)
        });


    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar produtos!</p>"
    }

}

fetchFuncionarios()