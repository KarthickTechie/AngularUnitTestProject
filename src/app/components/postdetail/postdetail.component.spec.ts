import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailComponent } from './postdetail.component';
import { Post } from '../../models/Post';
import { first } from 'rxjs';

fdescribe('PostdetailComponent', () => {
  let component: PostdetailComponent;
  let fixture: ComponentFixture<PostdetailComponent>;
  let POST:Post;

  beforeEach( () => {
    component = new PostdetailComponent()
    POST = {id:1,body:"body 1",title:"title 1"}
    component.post = POST
  });

  it('emit delete event when click delete', () => {
    component.onDelete.pipe(first()).subscribe((selectedPost:Post)=>{
      expect(selectedPost).toEqual(POST)
    })

    component.delete(POST)
  });
});
