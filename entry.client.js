import "./symmetric-context/client.js";
import "@lit-labs/ssr-client/lit-element-hydrate-support.js";
import "./components/content-feedback/index.js";
import "./components/color-theme/index.js";
import "./components/compat/index.js";
import "./components/quick-search/index.js";
import "./components/dropdown/index.js";
import "./observatory/landing/form.js";
import "./observatory/results/results.js";
import "./components/site-search/index.js";

import Prism from "prismjs";

console.log("ENtER");
globalThis.addEventListener("DOMContentLoaded", () => {
  for (const pre of document.querySelectorAll('pre[class~="brush:"]') || []) {
    const code = pre.firstChild;
    if (code instanceof HTMLElement && Prism.languages.html) {
      code.innerHTML = Prism.highlight(
        code.textContent || "",
        Prism.languages.html,
        "html",
      );
    }
  }
});
