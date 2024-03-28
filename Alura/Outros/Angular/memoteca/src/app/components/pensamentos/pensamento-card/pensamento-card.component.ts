import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento-card',
  templateUrl: './pensamento-card.component.html',
  styleUrls: ['./pensamento-card.component.css'],
})
export class PensamentoCardComponent implements OnInit {
  @Input() pensamentoCard = {
    conteudo:
      'Consectetur incididunt laboris non minim in nostrud duis ullamco est ullamco ullamco ut.',
    autoria: 'Erik',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}
}
