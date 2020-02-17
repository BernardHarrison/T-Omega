import { Injectable } from '@angular/core';
import { AbstractCrudApi } from './crud-state-abstract-api';
import { ModelDefinition } from '../stores/model-builder-store/model-builder-store.module';

@Injectable({
    providedIn: "root"
  })
  export class ModelBuilderLocalApi extends AbstractCrudApi<ModelDefinition>{
    storageKeyName: string = "MODEL_BUILDER_LOCAL_STORAGE_KEY";

  }