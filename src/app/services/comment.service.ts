import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Comment } from '../model/comment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  public addComment(comment: Comment) {
    return this.httpClient.post<Comment>(
      `${environment.apiUrl}/comments`,
      comment
    );
  }

  public getComments(): Observable<Comment[]> {
    return this.httpClient
      .get<{ data: Comment[] }>(`${environment.apiUrl}/comments`)
      .pipe(map((response) => response.data));
  }
}
