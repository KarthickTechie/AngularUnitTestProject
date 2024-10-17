import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WordtextboxComponent } from '../../widgets/wordtextbox/wordtextbox.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CountertextComponent } from '../countertext/countertext.component';

@Component({
  selector: 'app-leadinbox',
  standalone: true,
  imports: [RouterModule , FormsModule,WordtextboxComponent,MatSlideToggleModule,CommonModule,
    MatBadgeModule, MatButtonModule, MatIconModule,CounterbuttonComponent,CountertextComponent
  ],
  templateUrl: './leadinbox.component.html',
  styleUrl: './leadinbox.component.scss'
})
export class LeadinboxComponent {


  count = 0


  hidden = false
  terms = {text:"I agree to all terms and conditions",isAgreed:false}
  qual = ""
  totalleads:string|null
  leads = [{id:1,name:'Arnold'},{id:2,name:'Bob'},{id:3,name:'Charlie'}]
  constructor(public route:ActivatedRoute){
    if(this.route.snapshot.paramMap.get('id'))
      this.totalleads = this.route.snapshot.paramMap.get('id')
    else
    this.totalleads = ""
  }

  onTermsChanges(val:MatSlideToggleChange){
    alert(val.checked)
    this.terms.isAgreed = val.checked
  }

  toggleBadgeVisibility(){
    this.hidden = true
  }

  countClicked(e:string){
    this.countOperation(e)
  }

  countOperation(ops:string){

    switch(ops){
      case '+':
        this.count++
        break;
      case '-':
        this.count--;
        break;
    }
  }

}
