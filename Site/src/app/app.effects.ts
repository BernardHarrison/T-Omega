import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { mergeFieldApiErrorAction } from "./stores/merge-field-store/merge-field.actions";
import { map, tap } from "rxjs/operators";
import { AlertService } from "ngx-alerts";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private alertService: AlertService) {}

  errors$ = createEffect(
    () =>
      this.actions$.pipe(
        tap(err => console.log("TEST")),
        ofType(mergeFieldApiErrorAction),
        tap(err => {
          var msg = err && err.payload && err.payload.message;
          this.alertService.danger(msg);
        })
      ),
    { dispatch: false }
  );
}
