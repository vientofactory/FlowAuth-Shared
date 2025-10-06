import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pkg from "@eslint/js";
const { defineConfig } = pkg;

export default defineConfig([js.configs.recommended, { languageOptions: { globals: globals.browser } }, tseslint.configs.recommended]);
