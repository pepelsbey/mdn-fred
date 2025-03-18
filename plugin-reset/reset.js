/** @returns {import("@rsbuild/core").RsbuildPlugin} */
export const pluginReset = () => ({
  name: "mdn-reset-plugin",
  setup(api) {
    api.modifyBundlerChain(async (chain, { CHAIN_ID }) => {
      // delete Rsbuild builtin SVG rules
      if (chain.module.rules.has(CHAIN_ID.RULE.SVG)) {
        chain.module.rules.delete(CHAIN_ID.RULE.SVG);
      }
    });
  },
});
