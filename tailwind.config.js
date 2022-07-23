/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'blue'
            }
        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}
