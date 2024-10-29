import { Component } from '@angular/core';
import { Post, Theme } from '../../models/Post';
import { PostService } from '../../services/posts/post.service';
import { PostdetailComponent } from '../postdetail/postdetail.component';
import { NgFor } from '@angular/common';
import { User } from '../../models/User'; // nameed and default 

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostdetailComponent,NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  posts:Post[] = []
  user !: User ; // I promise to give value for user variable 
  theme : Theme = { mode : 'light'} ;

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
