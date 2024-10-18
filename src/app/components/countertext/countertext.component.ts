import { ChangeDetectionStrategy, Component, Input, OnChanges, effect, input } from '@angular/core';

@Component({
  selector: 'app-countertext',
  standalone: true,
  imports: [],
  templateUrl: './countertext.component.html',
  styleUrl: './countertext.component.scss',
})
export class CountertextComponent implements OnChanges {
  count = 0
  @Input()ops !: string 

  disabled = input(false)

  constructor(){
    effect(()=>{
      console.log(`input disables => ${this.disabled()}`)
    })
  }
 
  ngOnInit(){

  }

  ngOnDestroy(){

  }


  ngOnChanges(){
    console.log(`ops value changes ${this.ops}`)
    this.countOperation()
  }

  countOperation(){

    switch(this.ops){
      case '+':
        this.count++
        break;
      case '-':
        this.count--;
        break;
    }
  }

}
