import { Component, OnInit } from '@angular/core';
import { Post } from './post.model'; 
import { PostService } from './ListaPost.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './listaPost.component.html',
  styleUrls: ['./listaPost.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    
   }

  ngOnInit(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

 
}
