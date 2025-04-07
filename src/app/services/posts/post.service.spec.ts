import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';
import { of } from 'rxjs';

fdescribe('PostService', () => {
  let service: PostService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy =  jasmine.createSpyObj('HttpClient', ['get']);
    service = new PostService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a expected post data (httpclient called once ) ', (done:DoneFn)=>{
    const posts:Post[] = [{id:1,body:'post 1 ',title:'post 1'}]
    httpClientSpy.get.and.returnValue(of(posts))
    service.getPosts().subscribe({
      next:(data)=>{
        expect(data).toEqual(posts)
        done()
      },
      error:done.fail
    })
  })
});


