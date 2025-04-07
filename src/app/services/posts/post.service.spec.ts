import { TestBed } from "@angular/core/testing";

import { PostService } from "./post.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { Post } from "../../models/Post";
import { of } from "rxjs";

fdescribe("PostService", () => {
	let baseUrl = "https://jsonplaceholder.typicode.com";
	let service: PostService;
	let httpTestingController: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PostService],
		});
		service = TestBed.inject(PostService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterAll(() => {
		httpTestingController.verify();
	});
	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should return a expected post data (httpclient called once ) ", (done: DoneFn) => {
		const posts: Post[] = [{ id: 1, body: "post 1 ", title: "post 1" }];
		// httpTestController having expectOnce method which initiate request
		service.getPosts().subscribe({
			next: (data) => {
				expect(data).toEqual(posts);
				done();
			},
			error: done.fail,
		});
		const req = httpTestingController.expectOne(`${baseUrl}/posts`);
		expect(req.request.method).toEqual("GET");

		// flush will return result
		req.flush(posts);
	});

	it("should handle error response", (done: DoneFn) => {
		const errorMessage = "Server Error";

		service.getPosts().subscribe({
			next: () => fail("Should have failed with 500 error"),
			error: (error) => {
				expect(error.status).toEqual(500);
				expect(error.statusText).toEqual(errorMessage);
				done();
			},
		});

		const req = httpTestingController.expectOne(`${baseUrl}/posts`);
		expect(req.request.method).toEqual("GET");
		req.flush(
			{ message: errorMessage },
			{ status: 500, statusText: errorMessage }
		);
	});
	/* 
  // test spec using spyObj of httpClient
	it('should return a expected post data (httpclient called once ) ', (done:DoneFn)=>{
	  const posts:Post[] = [{id:1,body:'post 1 ',title:'post 1'}]
	  httpClientSpy.get.and.returnValue(of(posts))
	  service.getPosts().subscribe({
	    next:(data)=>{
	      c
	      done()
	    },
	    error:done.fail
	  })
	}) */
});
