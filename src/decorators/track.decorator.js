import 'reflect-metadata';
import { ELEMENT_META_KEY } from '../constants';

export function track(attribute = false) {
  return (target, property) => {
    let metadata = Reflect.getMetadata(ELEMENT_META_KEY, target.constructor) || {};
    metadata.trackers = metadata.trackers || [];
    metadata.trackers.push({ property, attribute });
    Reflect.defineMetadata(ELEMENT_META_KEY, metadata, target.constructor);
  }
}
