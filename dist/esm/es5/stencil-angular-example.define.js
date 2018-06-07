// StencilAngularExample: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './stencil-angular-example.core.js';
import {
  ProfileCard
} from './stencil-angular-example.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    ProfileCard
  ], opts);
}