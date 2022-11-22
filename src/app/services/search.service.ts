import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../model/comment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  public search(searchText: string) {
    return this.httpClient.post<{ search: string; results: any[] }>(
      `${environment.apiUrl}/search`,
      { search: searchText }
    );
  }
}
