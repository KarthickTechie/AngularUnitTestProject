import { Injectable } from "@angular/core";
import { Post } from "../../models/Post";
import { HttpClient } from "@angular/common/http";
// import { environment } from "../../../environments/environment";
import { catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  // URL = environment.APIURL;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  deletePost(post: Post) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/post/${post.id}`
    );
  }

  getDataFromLocal(fileName: string) {
    return this.http.get(`../assets/${fileName}.json`);
  }

  // getPostData(method: string, data?: any) {
  //   return this.http
  //     .post(`${this.URL}/${method}`, data)
  //     .pipe(catchError(this.errorHandler));
  // }

  errorHandler(error: Response) {
    return throwError(error);
  }
}
