import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/posts/post.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NgIf,NgFor,CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  products = []

  mapper = {}

  defaultKeys = ['thumbnail','brand','category','sku','price']

  finalKeys = [...this.defaultKeys]

  isShowProductGrid = false

  title = "Report works.!!"
  obs = new Observable((obs)=>{
    obs.next('Hii...')
    obs.next('Hello')
    obs.next('How are you')
    obs.error('some error')
    obs.next('I luv earth')
    obs.next('I luv mars')

})

constructor(private postService:PostService){

}

ngOnInit(){
// this.obs.subscribe({
//       next:(v )=>{
//         this.title = v as string
//         alert(this.title)
//       },
//       error:(e)=>{
//         alert(e)
//       },
//       complete:()=>{
//         alert('over')
//       }
//     })
}

showProducts(){
  this.postService.getProducts().subscribe({
    next:(data:any)=>{
      console.log(data)
      this.products = data.products
    }
  })
}

getKeys(){
  return Object.keys(this.products[0])
}

getChecked(k:string){
  return this.defaultKeys.filter(e=>e==k).length > 0
}

showProductGrid(){



}

setKeys(k:string){
  if(!this.finalKeys.includes(k)){
    this.finalKeys.push(k)
    console.log(this.finalKeys)
  
  }
}

}
