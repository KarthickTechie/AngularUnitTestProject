import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-leaddetail',
  standalone: true,
  imports: [],
  templateUrl: './leaddetail.component.html',
  styleUrl: './leaddetail.component.scss'
})
export class LeaddetailComponent {
private _id = ''
  @Input()
  get id():string{
    return this._id
  }
  set id(leadId:string){
    this._id = leadId
  }


}
