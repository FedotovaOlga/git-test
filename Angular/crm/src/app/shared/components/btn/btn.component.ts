import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() label!: string; // "!" parce que c'est pas ici qu'on l'initialise (qu'on donne la valeur)
  @Input() styleBtn!: string;
  @Input() route!: string;
}

// => décorateur
// => informe angular que la valeur de label vient du parent


