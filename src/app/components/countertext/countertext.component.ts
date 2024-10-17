import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countertext',
  standalone: true,
  imports: [],
  templateUrl: './countertext.component.html',
  styleUrl: './countertext.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CountertextComponent implements OnChanges {
  @Input()ops !: number | string 

 
  ngOnInit(){

  }

  ngOnDestroy(){

  }

  ngAfterViewInit(){

  }

  ngOnChanges(){
    console.log(`ops value changes ${this.ops}`)
  }


}
