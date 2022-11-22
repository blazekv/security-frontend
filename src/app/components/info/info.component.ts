import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit, AfterViewInit {
  htmlSnippet: any;

  readonly img =
    '<img src="xyz" onerror="alert(JSON.stringify(localStorage));" />';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    activatedRoute.queryParamMap
      .pipe(map((queryMap) => queryMap.get('search') || ''))
      .subscribe(
        (snippet) =>
          (this.htmlSnippet = this.sanitizer.bypassSecurityTrustHtml(snippet))
      );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
