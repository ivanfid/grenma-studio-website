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
            },
            colors: {
                brand: "#4fbb9b", // KÖZPONTI SZIN
            },
        },
    },
    plugins: [],
}
