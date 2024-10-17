import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {

  @Output() onCountButtonClicked = new EventEmitter<string>();

  add(){
    this.onCountButtonClicked.emit('+')
  }

  sub(){
    this.onCountButtonClicked.emit('-')

  }
}
