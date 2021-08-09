import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La Base es <strong>{{ operador }}</strong>
    </h3>

    <button (click)="acumular(operador)">+{{ operador }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-operador)">-{{ operador }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 0;
  operador: number = 2;

  acumular(valor: number) {
    this.numero += valor;
  }
}