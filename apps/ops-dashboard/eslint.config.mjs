import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  { ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**", "**/coverage/**"] },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off",
    },
  },
  {
    files: ["**/__tests__/**", "**/__mocks__/**", "**/e2e/**"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "no-empty": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "jsx-a11y/alt-text": "off",
    },
  },
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["app/api/**/*.ts"],
    rules: {
      "no-empty": "off",
    },
  },
  {
    files: ["components/resources/**/*.{ts,tsx}", "hooks/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "no-empty": "off",
    },
  },
  {
    files: ["lib/agent/**/*.ts", "lib/agents/**/*.ts"],
    rules: {
      "no-constant-condition": "off",
    },
  },
];

export default config;
