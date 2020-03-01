import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { setTemplateDefinition } from 'src/app/stores/designer-store/designer-store.actions';
import { mapTo, map, tap } from 'rxjs/operators';
import { setSelectedTemplate } from './designer-vm.actions';

@Injectable()
export class DesignerVmEffects {
	constructor(
		private actions$: Actions
	) { }

	@Effect() setDefaultTemplate$: Observable<Action> = this.actions$.pipe(
		ofType(setTemplateDefinition),
		map(value => setSelectedTemplate({ template: value.definition && value.definition.default }))
	);


}