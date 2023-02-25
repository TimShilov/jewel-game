import { shuffle } from "lodash";

const presets = {
    original: {
        colors: ["orange", "green", "blue", "yellow"],
        shapes: ["circle", "triangle", "square"],
    },
    ruby: {
        colors: ["orange", "green", "red", "purple", "blue", "yellow"],
        shapes: ["circle", "triangle", "square"],
    },
};

export function generateField(preset = "original") {
    const allCombinations = [];
    console.log(preset, presets[preset] ?? presets["original"]);
    const { colors, shapes } = presets[preset];
    for (let color of colors) {
        for (let shape of shapes) {
            allCombinations.push({ color, shape });
        }
    }

    if (preset === "original") {
        allCombinations.push({ color: "red", shape: "circle" });
    }
    return shuffle(allCombinations);
}
