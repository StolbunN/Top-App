import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["warn"],
      quotes: ["error", "double"],
      "prefer-template": ["warn"],
      // allowInterfaces: 'with-single-extends',
      "@typescript-eslint/no-empty-interface": [
        "warn",
        {
          "allowSingleExtends": true
        }
      ]
    },
  }),
];

export default eslintConfig;
