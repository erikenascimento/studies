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
    {
      conteudo:
        'Consequat consectetur veniam velit quis proident laborum. Amet cillum velit reprehenderit commodo ullamco. Ea ullamco irure dolore dolore excepteur ad tempor nostrud cillum cupidatat esse laboris Lorem. Magna eiusmod est eu veniam cillum consequat. Consectetur do voluptate reprehenderit ullamco et ad id labore ad.',
      autoria: 'Brutus',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
