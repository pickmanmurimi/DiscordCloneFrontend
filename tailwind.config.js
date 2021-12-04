module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "discord-black": {
                    "50": "#525457",
                    "100": "#4f545c",
                    "200": "#393c43",
                    "300": "#36393f",
                    "400": "#2f3136",
                    "500": "#292b2f",
                    "600": "#202225",
                    "700": "#16181b",
                    "800": "#0c0e11",
                    "900": "#020407"
                }
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['group-hover', 'dark'],
            display: ['group-hover'],
            borderWidth: ['hover', 'group-hover']
        },
    },
    plugins: [],
}
