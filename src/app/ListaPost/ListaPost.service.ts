import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){

  }

  getPosts(){
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts')
  }

}
