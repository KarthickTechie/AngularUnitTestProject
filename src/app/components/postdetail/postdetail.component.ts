import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/Post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.scss'
})
export class PostdetailComponent {

  @Input({required:true})post!:Post;
  @Output()onDelete = new EventEmitter<Post>()

  delete(post:Post){
    this.onDelete.emit(post)
  }
}
