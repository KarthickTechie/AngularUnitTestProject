import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/posts/post.service';
import { PostdetailComponent } from '../postdetail/postdetail.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostdetailComponent,NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  posts:Post[] = []
  constructor(private postservice:PostService){

  }

  ngOnInit(){
    this.getPosts()
  }
  getPosts(){
      this.postservice.getPosts().subscribe((posts)=>{
        this.posts = posts
      })
  }

  deletePost(post:Post){
    this.posts = this.posts.filter(p=>post.id !== p.id)
      this.postservice.deletePost(post).subscribe()
  }

}
