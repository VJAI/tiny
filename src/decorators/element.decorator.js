import { getMeta, setMeta } from './meta.service';

/**
 * Decorator that helps to register a class as custom web element.
 * @param {String} name The element name.
 * @param {String} [tpl] The template.
 * @param {Boolean} [shadow=false] True if shadow dom is needed.
 */
export function element(name, tpl, shadow = false) {
  return (target) => {
    if (window.customElements.get(name)) {
      throw new Error(`Already an element is registered with the name ${name}`);
    }

    window.customElements.define(name, target);

    const metadata = getMeta(target);
    metadata.name = name;
    metadata.tpl = tpl;
    metadata.shadow = shadow;

    setMeta(target, metadata);
  }
}
