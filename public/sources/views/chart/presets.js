const Presets = {
    presets: {
        "simple": {
            item: {
                borderColor: "#ffffff",
                color: "#2b7100",
                shadow: false,
                borderWidth: 2
            },
            line: {
                color: "#8ecf03",
                width: 2
            }
        },
        "plot": {
            color: "#8664C6",
            item: {
                borderColor: "#8664C6",
                borderWidth: 1,
                color: "#ffffff",
                type: "r",
                shadow: false
            },
            line: {
                color: "#8664C6",
                width: 2
            }
        },
        "diamond": {
            color: "#FF5C4C",
            item: {
                borderColor: "#FF5C4C",
                color: "#FF5C4C",
                type: "d",
                radius: 3,
                shadow: true
            },
            line: {
                color: "#FF5C4C",
                width: 2
            }
        },
        "point": {
            color: "#1ca1c1",
            disableLines: true,
            fill: false,
            disableItems: false,
            item: {
                color: "#1ca1c1",
                borderColor: "#1ca1c1",
                radius: 2,
                borderWidth: 2,
                type: "r"
            },
            alpha: 1
        },
        "line": {
            line: {
                color: "#1ca1c1",
                width: 2
            },
            item: {
                color: "#ffffff",
                borderColor: "#1ca1c1",
                radius: 2,
                borderWidth: 2,
                type: "d"
            },
            fill: false,
            disableItems: false,
            disableLines: false,
            alpha: 1
        },
        "area": {
            fill: "#1ca1c1",
            line: {
                color: "#1ca1c1",
                width: 1
            },
            disableItems: true,
            alpha: 0.2,
            disableLines: false
        },
        "round": {
            item: {
                radius: 3,
                borderColor: "#1ca1c1",
                borderWidth: 1,
                color: "#1ca1c1",
                type: "r",
                shadow: false,
                alpha: 0.6
            }
        },
        "square": {
            item: {
                radius: 3,
                borderColor: "#00a497",
                borderWidth: 2,
                color: "#ffffff",
                type: "s",
                shadow: false,
                alpha: 1
            },
            line: {
                color: "#00a497"
            }
        },
        /*bar*/
        "column": {
            color: "RAINBOW",
            gradient: false,
            barWidth: 45,
            radius: 0,
            alpha: 1,
            border: true
        },
        "stick": {
            barWidth: 5,
            gradient: false,
            color: "#1ca1c1",
            radius: 2,
            alpha: 1,
            border: false
        },
        "alpha": {
            color: "#b9a8f9",
            barWidth: 70,
            gradient: "falling",
            radius: 0,
            alpha: 0.5,
            border: true
        }
    }
};

export default Presets;