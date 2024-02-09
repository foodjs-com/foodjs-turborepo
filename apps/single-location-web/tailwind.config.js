/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    '../../packages/ui/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "oklch(62.45% 0.278 3.8363600743192197)",
          "primary-content": "#fff",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["business"],
          "primary": "oklch(62.45% 0.278 3.8363600743192197)",
          "primary-content": "#fff",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
        },
      },
    ],
  },
}

