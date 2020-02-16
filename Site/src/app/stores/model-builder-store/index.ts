import { MergeField } from "../merge-field-store";
import { ApiEntityState } from '../api-entity';

export enum ModelBuilderTypes {
  String,
  Number,
  Boolean,
  Date
}

export interface MergeObject {
  name: string;
  field: Array<MergeField>;
}
export interface ModelDefinition {
  id: number;
  field: Array<MergeField | MergeObject>;
}

export class ModelBuilderAppState {
  modelBuilderState: ApiEntityState<ModelDefinition>;
}
