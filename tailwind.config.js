/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        colors: {
            'transparent': '#00000000',
            'black': '#000000',
            'white': '#FFFFFF',
            'white-90': '#E4E4E7',
            'white-95': '#F1F1F3',
            'white-97': '#F7F7F8',
            'white-99': '#FCFCFD',
            'grey-08': '#141414',
            'grey-10': '#1A1A1A',
            'grey-15': '#262626',
            'grey-20': '#333333',
            'grey-30': '#4D4D4D',
            'grey-40': '#666666',
            'grey-50': '#808080',
            'grey-60': '#999999',
            'grey-blur': '#1a1a1a94',
            'purple-60': '#703BF7',
            'purple-65': '#8254F8',
            'purple-70': '#946CF9',
            'purple-75': '#A685FA',
            'purple-90': '#DBCEFD',
            'purple-95': '#EDE7FE',
            'purple-97': '#F4F0FE',
            'purple-99': '#FBFAFF',
        },
        backgroundColor: {
            'black': '#000000',
            'white': '#FFFFFF',
            'white-90': '#E4E4E7',
            'white-95': '#F1F1F3',
            'white-97': '#F7F7F8',
            'white-99': '#FCFCFD',
            'grey-08': '#141414',
            'grey-10': '#1A1A1A',
            'grey-15': '#262626',
            'grey-20': '#333333',
            'grey-30': '#4D4D4D',
            'grey-40': '#666666',
            'grey-50': '#808080',
            'grey-60': '#999999',
            'grey-blur': '#1a1a1a94',
            'purple-60': '#703BF7',
            'purple-65': '#8254F8',
            'purple-70': '#946CF9',
            'purple-75': '#A685FA',
            'purple-90': '#DBCEFD',
            'purple-95': '#EDE7FE',
            'purple-97': '#F4F0FE',
            'purple-99': '#FBFAFF',
            'purple-linear-top': 'linear-gradient(238deg, #2A213F 8.76%, rgba(25, 25, 25, 0.00) 50.09%)',
        },
        backgroundImage: {
            'vector-line': "url('/public/assets/vector/line.svg') no-repeat"
        }
    },
    plugins: [],
}
