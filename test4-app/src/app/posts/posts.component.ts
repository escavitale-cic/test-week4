import { Component } from '@angular/core';
import { PostsService } from '../services/posts-service/posts.service';
import { Post } from '../models/post.model';
import { PostService } from '../services/singlepost-service/post.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[];


  constructor(private postsService: PostsService,private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts()
    .subscribe(res => this.posts = res as Post[]);
  }
}
