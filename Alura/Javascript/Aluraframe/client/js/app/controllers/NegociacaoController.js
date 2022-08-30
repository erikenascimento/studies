class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia')

        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto')
    }

    importaNegociacoes() {
        let service = new NegociacaoService

        Promise.all([service.obterNegociacoesDaSemana(), service.obterNegociacoesDaSemanaAnterior(), service.obterNegociacoesDaSemanaRetrasada()]).then(negociacoes => {
            negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array), []).forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            this._mensagem.texto = 'Negociações importadas com sucesso'
        }).catch(erro => this._mensagem.texto = erro)
/*
        service.obterNegociacoesDaSemana().then(negociacoes => {
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
                    this._mensagem.texto = 'Negociações importadas com sucesso'
                }
                ).catch(erro => this._mensagem.texto = erro)
            }

    adiciona(event) {
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._mensagem.texto = 'Negociacao adicionada com sucesso'

        this._limpaForumulario()*/
    }

    apaga() {
        this._negociacoesView.update(this._listaNegociacoes)
        this._mensagem.texto = 'Negociacoes apagadas com sucesso'
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaForumulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = '1'
        this._inputValor.value = '0.1'

        this._inputData.focus()
    }
}