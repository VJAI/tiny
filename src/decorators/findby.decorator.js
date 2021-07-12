import 'reflect-metadata';
import { ELEMENT_META_KEY } from '../constants';

export function findBy(selector) {
  return (target, property) => {
    let metadata = Reflect.getMetadata(ELEMENT_META_KEY, target.constructor) || {};
    metadata.accessors = metadata.accessors || {};
    metadata.accessors[property] = { selector };
    Reflect.defineMetadata(ELEMENT_META_KEY, metadata, target.constructor);
  }
}
