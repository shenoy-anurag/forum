import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from './storage';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private WebReqService: WebRequestService) { }

  getComments(post_id: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("post_id", post_id);
    return this.WebReqService.get("comment", queryParams);
  }

  // Unable to edit community
  editPost(post_id: string, username: string, title: string, body: string) {
    return this.WebReqService.patch("post", {
      "id": post_id,
      "username": username,
      "title": title,
      "body": body
    });
  }

  savePost(username: string, post_id: string) {
    return this.WebReqService.patch('profile/savedposts', {
      "username": username,
      "post_id": post_id
    });
  }

  getPosts() {
    // get data from Backend
    return this.WebReqService.post('home', {
      "pagenumber" : 1,
      "numberofposts" : 100,
      "mode" : "hot",
    });
  }

  deletePost(post_id: string) {
    return this.WebReqService.post('post/delete', {
      "id": post_id,
      "username": Storage.username
    });
  }

  votePost(post_id: string, username: string, vote: number) {
    return this.WebReqService.patch("post/vote", {
      "id": post_id,
      "username": username,
      "vote": vote
    });
  }

  voteComment(comment_id: string, username: string, vote: string) {
    return this.WebReqService.post("comment/vote", {
      "username": username,
      "comment_id": comment_id,
      "vote": vote
    });
  }

  createComment(username: string, post_id: string, parent_id: string, body: string) {
    return this.WebReqService.post("comment", {
      "username": username,
      "post_id": post_id,
      "parent_id" : parent_id,
      "body" : body
    });
  }

  saveComment(username: string, comment_id: string) {
    return this.WebReqService.patch("profile/savedcomments", {
      "username": username,
      "comment_id" : comment_id
    });
  }

  deleteComment(username: string, comment_id: string) {
    return this.WebReqService.post("comment/delete", {
      "comment_id": comment_id
    });
  }
}
