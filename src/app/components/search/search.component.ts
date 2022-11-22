import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  htmlSnippet: any;
  results: any[] = [];

  readonly img =
    '<img src="xyz" onerror="alert(JSON.stringify(localStorage));" />';

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private sanitizer: DomSanitizer
  ) {
    activatedRoute.queryParamMap
      .pipe(
        map((queryMap) => queryMap.get('search') || ''),
        switchMap((search) => this.searchService.search(search))
      )
      .subscribe(({ search, results }) => {
        this.htmlSnippet = this.sanitizer.bypassSecurityTrustHtml(search);
        this.results = results;
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
