<script lang="ts">
    import Cell from "./Cell.svelte";
    import Jewel from "./Jewel.svelte";

    export let rows;
</script>

<div class="column grid flex-0">
    {#each rows as row}
        <div class="row">
            {#each row as cell}
                <Cell {cell}>
                    <Jewel
                        color={cell.hintType === "shape"
                            ? "gray"
                            : cell.jewel.color}
                        shape={cell.jewel.shape}
                    />
                </Cell>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    .cell {
        border: 1px solid #565656;
        background-color: #e1e1e1;
        border-radius: 5%;
        padding: 10px;
        margin: -20px 15px 0 15px;
        transform: rotate(45deg);
    }

    .content {
        transform: rotate(-45deg);
    }

    .grid {
        align-items: center;
        justify-content: center;
        border: 2px solid grey;
        padding: 50px 20px;
        border-radius: 15%;
        margin: 10px;
    }
</style>
