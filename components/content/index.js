import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { Heading } from "../heading-anchor/index.js";

import "./index.css";

/**
 * @param {Fred.Context<Rari.DocPage>} context
 */
export function Content(context) {
  return html`<div class="content">
    <h1>${context?.doc?.title}</h1>
    ${context?.doc?.body.map((section) => Section(section))}
  </div>`;
}

/**
 * @param {Rari.Section} section
 */
function Section({ type, value }) {
  switch (type) {
    case "browser_compatibility": {
      return BCD(value);
    }
    default: {
      // @ts-ignore
      return Prose(value);
    }
  }
}

/**
 * @param {Rari.Prose} section
 */
function Prose({ id, title, content, isH3 }) {
  const level = isH3 ? 3 : 2;
  // @ts-nocheck
  return html`<section aria-labelledby=${id}>
    ${Heading(level, id ? String(id) : undefined, String(title))}
    ${unsafeHTML(content)}
  </section>`;
}

/**
 * @param {Rari.Compat} section
 */
function BCD({ id, title, query, isH3 }) {
  const level = isH3 ? 3 : 2;
  return html`<section aria-labelledby=${id}>
    ${Heading(level, id ? String(id) : undefined, String(title))}
    <bcd-table query=${query}></bcd-table>
  </section>`;
}
