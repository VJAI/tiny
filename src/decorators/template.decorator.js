import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that renders a template as child to an element.
 */
class TemplateBinding extends Binding {

  /**
   * Function that selects template.
   * @type {Function}
   */
  templateSelector = null;

  constructor(prop, selector, templateSelector) {
    super('template', prop, selector);
    this.templateSelector = templateSelector;
  }

  apply(element, value) {
    const el = element.$(this.selector);
    el && el.remove();

    if (!value) {
      return;
    }

    if (value instanceof HTMLTemplateElement) {
      element.appendChild(value.content.cloneNode(true));
      return;
    }

    if (typeof value === 'string' && value.startsWith('<')) {
      element.updateHtml(value, this.selector);
      return;
    }

    if (typeof value === 'string') {
      const template = this.templateSelector(value, element);
      template && element.appendChild(template.content.cloneNode(true));
      return;
    }
  }
}

/**
 * Decorator that renders template as a child to an element.
 * @param {String} selector The element selector.
 * @param {Function} [templateSelector] The template selector function.
 */
export function template(selector, templateSelector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new TemplateBinding(property, selector, templateSelector));
    setMeta(target.constructor, metadata);
  }
}
