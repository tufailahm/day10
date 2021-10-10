import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;

  //1. HttpTestingController
  let httpMock :HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      //2. HttpClientTestingModule
      imports :[
        HttpClientTestingModule
      ],
      //3. Providers ?
      providers :[
        PostsService
      ]
    });
    service = TestBed.inject(PostsService);
    //4.     httpMock = TestBed.get(HttpTestingController)
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //5 .. our spec
  it('should fetch the posts as an observable', 
  async(inject([HttpTestingController,PostsService],(httpClient:HttpTestingController,postsService:PostsService) => {

    const postItem = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
    ]

  
    //in our tests also we have to hit the URL and get all the data 
    postsService.getPosts().subscribe(posts => {
      expect(posts.length).toBe(5)
    });


    let req = httpMock.expectOne("https://jsonplaceholder.typicode.com/posts");
    expect(req.request.method).toBe("GET");

    req.flush(postItem);
    httpMock.verify();

  })))

});
