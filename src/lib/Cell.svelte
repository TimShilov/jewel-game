<script lang="ts">
    export let cell = {};
    let { visible = true, hintType } = cell;
</script>

<div
    class="cell {visible ? '' : 'hidden'} {hintType === 'color'
        ? cell.jewel.color
        : ''}"
>
    <div class="content">
        {#if visible}
            <slot />
        {/if}
    </div>
</div>

<style lang="scss">
    .cell {
        border: 1px solid #565656;
        border-radius: 5%;
        padding: 10px;
        margin: -20px 15px 0 15px;
        transform: rotate(45deg);
        width: 50px;
        height: 50px;

        background-color: #e1e1e1;
    }

    .hidden {
        opacity: 0;
    }

    .content {
        transform: rotate(-45deg);
    }

    .grayScale {
        filter: grayscale(1);
    }
</style>
