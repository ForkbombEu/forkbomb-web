module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#1C39BB',
            },
            fontFamily: {
                sans: ['JetBrains Mono'],
                mono: ['JetBrains Mono'],
            },
            fontSize: {
                'base': '1.3rem'
            }
        },
    },
    plugins: [],
}