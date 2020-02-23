import { createAction, props } from "@ngrx/store";

const PREFIX = "[Designer Vm] - ";

export const changeWidth = createAction(
	`${PREFIX} Change the designer width by given amount`,
	props<{ changeAmount: number }>()
);
