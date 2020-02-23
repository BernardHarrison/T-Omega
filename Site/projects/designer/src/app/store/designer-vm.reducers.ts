import { createReducer, on } from "@ngrx/store";
import * as fromActions from './designer-vm.actions';

const INITIAL_WIDTH = 1080;
const MAX_WIDTH = 4000;
const MIN_WIDTH = 320;

export const widthReducer = createReducer(INITIAL_WIDTH,
	on(fromActions.changeWidth, (state, actions) => {
		var newValue = state + actions.changeAmount;
		return newValue >= MAX_WIDTH ? MAX_WIDTH
			: newValue <= MIN_WIDTH ? MIN_WIDTH
				: newValue
	}),
)