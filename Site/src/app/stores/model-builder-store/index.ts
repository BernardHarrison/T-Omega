import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { MergeField, MergeFieldState } from "../merge-field-store";
import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";

//1) Define a key for this store
export const MODEL_BUILDER_KEY = "modelBuilderState";

//2) Define the model for this store
export class MergeObject {
  fieldName: string; //Example Address
  fields: Array<MergeField>;
  objects: Array<MergeObject>;
}

export class ModelDefinition {
  id: number | null;
  name: string;
  object: MergeObject;
}

/*
  {
    firstname: stirng,
    address: {
    
    }
  }
*/

//    FirstName: string

export interface ModelBuilderState {
  list: ModelDefinition[];
  error: Error;
  busy: boolean;
}
//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class ModelBuilderAppState {
  modelBuilderState: ModelBuilderState;
}

export interface IModelDefinitionApi {
  get(): Observable<ModelDefinition[]>;
  update(entity: ModelDefinition): Observable<ModelDefinition[]>;
  create(entity: ModelDefinition): Observable<ModelDefinition[]>;
  delete(entity: ModelDefinition): Observable<ModelDefinition[]>;
  addField(
    field: MergeField,
    model: ModelDefinition
  ): Observable<ModelDefinition[]>;
  removeField(
    field: MergeField,
    model: ModelDefinition
  ): Observable<ModelDefinition[]>;
}

export const MODEL_FIELD_STORE_API = new InjectionToken<IModelDefinitionApi>(
  "MODEL_FIELD_STORE_API"
);
