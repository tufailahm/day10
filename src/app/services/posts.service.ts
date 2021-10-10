import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/posts';

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(public httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${POSTS_URL}`)
  }
}
