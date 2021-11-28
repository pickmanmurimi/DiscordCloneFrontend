module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "discord-black": {
                    "50": "#525457",
                    "100": "#484a4d",
                    "200": "#393c43",
                    "300": "#36393f",
                    "400": "#2f3136",
                    "500": "#202225",
                    "600": "#16181b",
                    "700": "#0c0e11",
                    "800": "#020407",
                    "900": "#000000"
                }
            }
        },
    },
    variants: {
        extend: {
            borderRadius: ['group-hover']
        },
    },
    plugins: [],
}
