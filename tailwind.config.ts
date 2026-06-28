export default {
    content: [
        "./app/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                body: ["Inter", "sans-serif"],
                lato: ['Lato', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
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
