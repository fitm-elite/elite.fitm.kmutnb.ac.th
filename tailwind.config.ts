import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                shimmer: "shimmer 8s infinite",
                meteor: "meteor 5s linear infinite"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                shimmer: {
                    "0%, 90%, 100%": {
                        "background-position": "calc(-100% - var(--shimmer-width)) 0",
                    },
                    "30%, 60%": {
                        "background-position": "calc(100% + var(--shimmer-width)) 0",
                    },
                },
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", "opacity": "1" },
                    "70%": { "opacity": "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        "opacity": "1",
                    },
                },
            }
        },
    },
    plugins: [],
};
export default config;
