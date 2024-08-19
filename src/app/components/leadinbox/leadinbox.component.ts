import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-leadinbox',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leadinbox.component.html',
  styleUrl: './leadinbox.component.scss'
})
export class LeadinboxComponent {

  totalleads:string|null
  leads = [{id:1,name:'Arnold'},{id:2,name:'Bob'},{id:3,name:'Charlie'}]
  constructor(public route:ActivatedRoute){
    if(this.route.snapshot.paramMap.get('id'))
      this.totalleads = this.route.snapshot.paramMap.get('id')
    else
    this.totalleads = ""
  }
}
