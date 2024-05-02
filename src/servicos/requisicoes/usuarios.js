import api from "../api"

export async function buscaUsuario(nomeUsuario) {
    try {
        const resultado = await api.get(`/users?login=${nomeUsuario}`)
        return resultado.data[0]
        // como resultado será um Array. colocar .data para pegar apenas os dados
        // e colocamos também a posição 0 para retornar a primeira posição
        // do que estamos buscando
    }

    catch (error) {
        console.log(error)
        return {}
    }
}

//Outra forma de escrever a mesma função sem o Try Catch

// api.get("/users?login=andreocunha").then(
//     resposta => {
//         console.log(resposta.data)
//     }
// ).catch(error => {
//     console.log(error)
// })