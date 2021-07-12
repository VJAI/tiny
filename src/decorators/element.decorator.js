import 'reflect-metadata';
import { ELEMENT_META_KEY } from './constants';

export default function element(name, tpl, shadow = false) {
  return (target) => {
    window.customElements.define(name, target);
    let metadata = Reflect.getMetadata(ELEMENT_META_KEY, target) || {};
    metadata = {...metadata, tpl, shadow };
    Reflect.defineMetadata(ELEMENT_META_KEY, metadata, target);
  }
}
