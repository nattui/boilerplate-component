import { FlatCompat } from "@eslint/eslintrc"
import perfectionist from "eslint-plugin-perfectionist"
import unicorn from "eslint-plugin-unicorn"
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      perfectionist,
      unicorn,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      ...unicorn.configs["flat/all"].rules,
      // Custom
      "perfectionist/sort-imports": ["error", { newlinesBetween: "never" }],
      "unicorn/import-style": "off",
    },
  },
]

export default eslintConfig
