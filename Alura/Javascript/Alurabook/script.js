async function buscaEndereco(cep){
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }

        localidade.value = consultaCEPConvertida.localidade
        bairro.value = consultaCEPConvertida.bairro
        logradouro.value = consultaCEPConvertida.logradouro
        uf.value = consultaCEPConvertida.uf

        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

let mensagemErro = document.getElementById('erro')
erro.innerHTML = ''
const cep = document.getElementById('cep')
const logradouro = document.getElementById('endereco')
const bairro = document.getElementById('bairro')
const localidade = document.getElementById('cidade')
const uf = document.getElementById('estado')

cep.addEventListener('focusout', () => buscaEndereco(cep.value))