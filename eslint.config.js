// @ts-check
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const restrictedLayerImports = {
  domain: [
    "../application/**",
    "../../application/**",
    "../components/**",
    "../../components/**",
    "../repository/**",
    "../../repository/**",
  ],
  repository: [
    "../application/**",
    "../../application/**",
    "../components/**",
    "../../components/**",
  ],
  components: [
    "../application/**",
    "../../application/**",
    "../repository/**",
    "../../repository/**",
    "../../../application/**",
    "../../../repository/**",
  ],
};

export default defineConfig(
  {
    ignores: ["dist/**", "docs/macro/**"],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        Actor: "readonly",
        ChatMessage: "readonly",
        FormApplication: "readonly",
        game: "readonly",
        Hooks: "readonly",
        ui: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      eqeqeq: ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-var": "error",
      "prefer-const": "error",
      semi: ["warn", "always"],
    },
  },
  {
    files: ["src/domain/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: restrictedLayerImports.domain,
              message: "domain layer must not depend on application, components, or repository layers.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/repository/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: restrictedLayerImports.repository,
              message: "repository layer must not depend on application or components layers.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "warn",
        {
          patterns: [
            {
              group: restrictedLayerImports.components,
              message: "components layer must not depend on application or repository layers.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
        fetch: "readonly",
        game: "readonly",
        Hooks: "readonly",
      },
    },
    rules: {
      "no-console": "off",
    },
  }
);
