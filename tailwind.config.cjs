/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            "darkMode": "class",
            "colors": {
                "cinza": {
                    "0": "#F4FDFF",
                    "25": "#AFB6B8",
                    "50": "#637073",
                    "75": "#152D32",
                    "100": "#001C22",
                },
                "background": "#F2CECE",
                "rose": {
                    "text" : "rgb(166 51 82)",
                    "default": "rgb(166 51 82 / <alpha-value>)",
                    "strong" : "rgb(252 4 165 / <alpha-value>)",
                    "smooth" : "rgb(242 206 206 / 0.2)",
                },
                "rosao": "#F263C0",
                "rosinha": "#D9919E",
                "primary": {
                    "50": "#FFC9E5",
                    "100": "#FFB4DB",
                    "200": "#FF8BC7",
                    "300": "#FF63B3",
                    "400": "#FF3AA0",
                    "500": "#FF118C",
                    "600": "#D80070",
                    "700": "#A00053",
                    "800": "#680036",
                    "900": "#300019"
                }
            },
        },
        /*        screens: {
                    'xs': '480px',
                    'sm': '600px',
                    'md': '782px',
                    'lg': tailpress.theme('settings.layout.contentSize', theme),
                    'xl': tailpress.theme('settings.layout.wideSize', theme),
                    '2xl': '1440px'
                }*/
    },
    "darkMode": "class",
    plugins: [
        require('flowbite/plugin')
    ]
}