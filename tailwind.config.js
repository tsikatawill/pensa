/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(30 64 175)'
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}
