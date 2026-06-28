export default {
    content: [
        "./app/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                body: ["Roboto Serif", "serif"],
                muli: ['Muli', 'sans-serif'],
                merriweather: ['Merriweather', 'serif'],
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
