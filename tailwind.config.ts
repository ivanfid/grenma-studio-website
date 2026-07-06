export default {
    content: [
        "./app/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "sans-serif"],
                inter: ['Inter', 'sans-serif'],
                prompt: ['Prompt', 'sans-serif'],
            },
            colors: {
                brand: {
                    DEFAULT: "#dd504d",
                    dark: "#700e0c",
                },
            },
        },
    },
    plugins: [],
}
