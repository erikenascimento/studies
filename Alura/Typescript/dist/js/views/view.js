export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        // como a variavel é iniciada como false, é preciso fazer a condicional abaixo para atribuir o valor true quando esse vier pelo método.
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
