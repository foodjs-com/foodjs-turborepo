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
                    "primary": "#E63859",
                    "primary-content": "#fff",
                    // "--rounded-box": "1rem",
                    // "--rounded-btn": ".5rem",
                    // "--rounded-badge": "1.9rem",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "primary": "#E63859",
                    "primary-content": "#fff",
                    // "--rounded-box": "1rem",
                    // "--rounded-btn": ".5rem",
                    // "--rounded-badge": "1.9rem",
                },
            },
        ],
    },
}

