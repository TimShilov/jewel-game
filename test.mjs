import lodash from "lodash";
import rfdc from "rfdc";
const { shuffle } = lodash;

const clone = rfdc();
const colors = ["orange", "green", "blue", "yellow"];
const shapes = ["circle", "triangle", "square"];

function generateField() {
    const allCombinations = [];
    for (let color of colors) {
        for (let shape of shapes) {
            allCombinations.push({ color, shape });
        }
    }

    allCombinations.push({ color: "red", shape: "circle" });
    return shuffle(allCombinations);
}

function generateHints(rows) {
    const masks = generateMasks(rows);
    console.log(JSON.stringify(masks, null, 4));
    const result = masks.map((mask) => removeEmptyRows(applyMask(rows, mask)));

    return result;
}

function generateMasks(rows = []) {
    const columnMasks = [];
    const rowMasks = [];
    const columnSets = new Set();
    for (let row of rows) {
        columnSets.add(row.length);
    }

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        rowMasks.push(
            rows.map((row, index) => row.map(() => index === rowIndex))
        );
    }

    // for (let columnSet of columnSets) {
    //     for (let row of rows) {
    //         if (row.length !== columnSet) continue;
    //         for (
    //             let columnIndex = 0;
    //             columnIndex < rows.length;
    //             columnIndex++
    //         ) {
    //             columnMasks.push(
    //                 row.map((cell, index) => {
    //                     return index === columnIndex;
    //                 })
    //             );
    //         }
    //     }
    // }

    // const combinationMasks = [];
    // for (let rowMask of rowMasks) {
    //     for (let columnMask of columnMasks) {
    //         combinationMasks.push(
    //             rows.map((row, rowIndex) => {
    //                 return row.map((cell, cellIndex) => {
    //                     return (
    //                         rowMask[rowIndex][cellIndex] ||
    //                         columnMask[rowIndex][cellIndex]
    //                     );
    //                 });
    //             })
    //         );
    //     }
    // }

    console.log(combinationMasks);

    return [...rowMasks];
}

function applyMask(rows, mask) {
    return rows.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            return { ...cell, visible: mask[rowIndex][cellIndex] === true };
        });
    });
}

function removeEmptyRows(rows) {
    return rows.filter((row) => {
        const hideRow = row.every((cell) => !cell.visible);
        return !hideRow;
    });
}

let jewels = generateField();
const rows = [
    [{ jewel: jewels[0] }, { jewel: jewels[1] }, { jewel: jewels[2] }],
    [{ jewel: jewels[3] }, { jewel: jewels[4] }],
    [{ jewel: jewels[5] }, { jewel: jewels[6] }, { jewel: jewels[7] }],
    [{ jewel: jewels[8] }, { jewel: jewels[9] }],
    [{ jewel: jewels[10] }, { jewel: jewels[11] }, { jewel: jewels[12] }],
];
const hints = generateHints(clone(rows));
// console.log();
