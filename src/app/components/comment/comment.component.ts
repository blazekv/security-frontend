import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  comments$: Observable<Comment[]> = this.commentService.getComments();

  form: FormGroup;

  constructor(
    public sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private commentService: CommentService
  ) {
    this.form = this.fb.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addComment() {
    if (this.form.valid) {
      this.commentService
        .addComment({
          ...this.form.value,
          author: 'John Doe',
        })
        .subscribe((comment) => {
          this.comments$ = this.commentService.getComments();
        });
    }
  }
}
