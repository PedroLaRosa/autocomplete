import tseslint from "@typescript-eslint/eslint-plugin";
import compat from "eslint-plugin-compat";
import figLinter from "@withfig/eslint-plugin-fig-linter";

// Flat port of @fig/eslint-config-autocomplete@2.0.0 (eslintrc-only, dropped).
// ponytail: fig-linter 1.4.1 ships only an eslintrc `recommended`, so its overrides are inlined.
export default [
  { ignores: ["build/"] }, // generated; flat config does not read .gitignore
  ...tseslint.configs["flat/recommended"],
  compat.configs["flat/recommended"], // also adds browser globals (old env.browser)
  {
    plugins: { "@withfig/fig-linter": figLinter },
    rules: {
      "@withfig/fig-linter/no-malicious-script": "error",
      "no-var": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      "@withfig/fig-linter/no-useless-insertvalue": "error",
      "@withfig/fig-linter/no-empty-array-values": "error",
      "@withfig/fig-linter/no-name-equals": "error",
      "@withfig/fig-linter/no-default-value-props": [
        "error",
        [
          { path: "options.[*].isRequired", defaultValue: false },
          { path: "args.[*]?.isOptional", defaultValue: false },
          { path: "args.[*]?.isDangerous", defaultValue: false },
          { path: "options.[*].isDangerous", defaultValue: false },
          { path: "subcommands.[*].isDangerous", defaultValue: false },
          { path: "args.[*]?.isVariadic", defaultValue: false },
        ],
      ],
      "@withfig/fig-linter/no-invalid-name": "error",
      "@withfig/fig-linter/no-duplicate-options-subcommands": "error",
      "@withfig/fig-linter/no-missing-default-export": "error",
      "@withfig/fig-linter/no-useless-arrays": "error",
      "@withfig/fig-linter/conventional-descriptions": "error",
      "@withfig/fig-linter/no-arg-in-option-name": "error",
    },
  },
  {
    files: ["src/**/index.ts"],
    rules: { "@withfig/fig-linter/no-missing-get-version-export": "warn" },
  },
  {
    files: ["src/**/+([0-9]).+([0-9]).+([0-9]).ts"],
    rules: {
      "@withfig/fig-linter/no-missing-versions-export": "error",
      "@withfig/fig-linter/no-default-value-props": "off",
    },
  },
];
