import { shuffle } from "lodash";

export function generateHints(rows) {
    const masks = generateMasks(rows);

    return masks.map((mask) => addHintTypes(applyMask(rows, mask)));
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
    for (let columnSet of columnSets) {
        for (let column = 0; column < columnSet; column++) {
            columnMasks.push(
                rows.map((row) => {
                    const hideRow = row.length !== columnSet;
                    return row.map(
                        (cell, index) => !hideRow && index === column
                    );
                })
            );
        }
    }

    const combinationMasks = [];
    for (let rowMask of rowMasks) {
        for (let columnMask of columnMasks) {
            combinationMasks.push(
                rows.map((row, rowIndex) => {
                    return row.map((cell, cellIndex) => {
                        return (
                            rowMask[rowIndex][cellIndex] ||
                            columnMask[rowIndex][cellIndex]
                        );
                    });
                })
            );
        }
    }

    return [...combinationMasks, ...rowMasks, ...columnMasks];
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

function addHintTypes(rows) {
    return rows.map((row) => {
        return row.map((cell) => {
            console.log("cell", cell);
            if (!cell.visible) return cell;
            return { ...cell, hintType: shuffle(["color", "shape"])[0] };
        });
    });
}
