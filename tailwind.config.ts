import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {},
  plugins: [require("tailwind-scrollbar")],
};

export default config;
