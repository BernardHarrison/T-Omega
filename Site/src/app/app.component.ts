import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { MergeFieldState, MergeField } from './features/merge-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  list$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
  }

}
