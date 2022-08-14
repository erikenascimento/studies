const campoData = document.querySelector('#data')
const campoQuantidade = document.querySelector('#quantidade')
const campoValor = document.querySelector('#valor')
const tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault()
    var tr = document.createElement('tr')

    tr.appendChild(criaTd(campoData))
    tr.appendChild(criaTd(campoQuantidade))
    tr.appendChild(criaTd(campoValor))

    const tdVolume = document.createElement('td')
    tdVolume.textContent = campoQuantidade.value * campoValor.value
    tr.appendChild(tdVolume)

    tbody.appendChild(tr)

    campoData.value = ''
    campoQuantidade.value = 1
    campoValor.value = 0
    campoData.focus()
})

function criaTd (campo) {
    const td = document.createElement('td')
    td.textContent = campo.value
    return td
}