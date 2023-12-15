/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: true,
  semi: true,
  printWidth: 150,
  useTabs: true,
  tabWidth: 2,
  bracketSameLine: true,
  trailingComma: "none",
};

export default config;
