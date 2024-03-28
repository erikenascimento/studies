import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css'],
})
export class ListaPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo:
        'Occaecat culpa enim occaecat cillum fugiat ipsum et aute labore.',
      autoria: 'Tiberius',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Esse eiusmod elit ullamco proident esse voluptate ex dolor eiusmod duis magna non ea tempor.',
      autoria: 'Julius',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
