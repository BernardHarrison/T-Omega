import { Injectable } from '@angular/core';
import { AbstractCrudApi } from './crud-state-abstract-api';
import { ModelDefinition } from '../stores/model-builder-store/model-builder-store.module';

@Injectable({
    providedIn: "root"
  })
  export class ModelBuilderLocalApi extends AbstractCrudApi<ModelDefinition>{
  
    createNew(entity: ModelDefinition): ModelDefinition {
      entity.id = Math.floor(Math.random() * 10000);
      return entity;
  }
    storageKeyName: string = "MODEL_BUILDER_LOCAL_STORAGE_KEY";
  }