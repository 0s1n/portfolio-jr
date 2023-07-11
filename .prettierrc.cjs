/** @type {import("prettier").Options} */

module.exports = {
    "printWidth": 80,
    "tabWidth": 2,
    "trailingComma": "es5",
    "singleQuote": true,
    "semi": true,
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "plugins": ["@trivago/prettier-plugin-sort-imports"]
};