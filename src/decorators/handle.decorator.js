import 'reflect-metadata';
import { ELEMENT_META_KEY } from './constants';

export default function handle(eventName, element = 'self') {
  return function(target, handler) {
    let metadata = Reflect.getMetadata(ELEMENT_META_KEY, target.constructor) || {};
    metadata.handlers = metadata.handlers || {};
    metadata.handlers[element] = metadata.handlers[element] || [];
    metadata.handlers[element].push({ eventName, handler });
    Reflect.defineMetadata(ELEMENT_META_KEY, metadata, target.constructor);
  }
}
