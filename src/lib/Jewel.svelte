<script lang="ts">
    export let color;
    export let shape;
</script>

<div class="jewel {color} {shape}" />

<style lang="scss">
    .jewel {
        width: 50px;
        height: 50px;
    }

    .circle {
        border-radius: 50%;
    }
    .square {
        border-radius: 10%;
        transform: scale(0.9);
    }
    .triangle {
        clip-path: polygon(50% 0%, 0% 90%, 100% 90%);
        transform: translateY(-3px);
    }
</style>
