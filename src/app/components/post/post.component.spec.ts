import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { Post } from '../../models/Post';
import { PostService } from '../../services/posts/post.service';
import { of } from 'rxjs';

fdescribe('PostComponent',()=>{

  let component:PostComponent
  let POSTS:Post[]
  let mockPostService:any;
  beforeEach(()=>{
    POSTS = [{id:1,title:'title 1',body:'body 1'},{id:2,title:'title 2',body:'body 2'}]
     mockPostService = jasmine.createSpyObj(['getPosts','deletePost'])
     component = new PostComponent(mockPostService)
  })

  describe('delete method',()=>{
    beforeEach(()=>{
      mockPostService.deletePost.and.returnValue(of(true))
      component.posts = POSTS
    })
    it('delete post id 1 deletes post id 1 from POSTS',()=>{
      component.deletePost(POSTS[1])
      expect(component.posts.length).toEqual(1)
    })

    it('delete post id 1 removes POST[1] from POSTS',()=>{
      component.deletePost(POSTS[1])
      const result = component.posts.filter(p => p.id == POSTS[1].id )
      expect(result.length).toEqual(0)
    })
  
  })
})
// describe('PostComponent', () => {
//   let component: PostComponent;
//   let fixture: ComponentFixture<PostComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [PostComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(PostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
