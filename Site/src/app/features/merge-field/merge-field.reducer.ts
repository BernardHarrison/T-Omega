import { MergeFieldAction, MergeFieldActionTypes } from './merge-field.actions';
import { ApiState, MergeField } from '.';

const initialState = [];

const initialApiState: ApiState = {
    busy: false,
    error: undefined
}

export function mergeFieldReducer(state: MergeField[] = initialState, action: MergeFieldAction): MergeField[] {
    switch (action.type) {
        case MergeFieldActionTypes.SET_MERGEFIELDS:
            return [...action.payload];
        default:
            return [...state];
    }
}

export function mergeFieldApiReducer(state: ApiState = initialApiState, action: MergeFieldAction) {
    switch (action.type) {
        case MergeFieldActionTypes.LOADING_MERGEFIELD:
        case MergeFieldActionTypes.CREATING_MERGEFIELD:
        case MergeFieldActionTypes.UPDATING_MERGEFIELD:
        case MergeFieldActionTypes.DELETING_MERGEFIELD:
            return { ...state, busy: action.payload }
        case MergeFieldActionTypes.LOADING_MERGEFIELD_ERROR:
        case MergeFieldActionTypes.CREATING_MERGEFIELD_ERROR:
        case MergeFieldActionTypes.UPDATING_MERGEFIELD_ERROR:
        case MergeFieldActionTypes.DELETING_MERGEFIELD_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}
