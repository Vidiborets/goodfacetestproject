import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // базовые конфиги Next (core web vitals + TS)
  ...nextVitals,
  ...nextTs,

  // Prettier integration (делает prettier/prettier и отключает конфликтующие правила)
  eslintPluginPrettierRecommended,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
