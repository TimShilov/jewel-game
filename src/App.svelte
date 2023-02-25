<script lang="ts">
    import { generateField } from "./utils/generate";
    import Grid from "./lib/Grid.svelte";
    import { generateHints } from "./utils/generate-hint";
    import rfdc from "rfdc";
    import { shuffle, random } from "lodash";

    const clone = rfdc();

    const preset = "original";
    let showResult = false;
    let jewels = generateField(preset);
    const rows =
        preset === "ruby"
            ? [
                  [{ jewel: jewels[0] }],
                  [{ jewel: jewels[1] }, { jewel: jewels[2] }],
                  [
                      { jewel: jewels[3] },
                      { jewel: jewels[4] },
                      { jewel: jewels[5] },
                  ],
                  [
                      { jewel: jewels[6] },
                      { jewel: jewels[7] },
                      { jewel: jewels[8] },
                      { jewel: jewels[9] },
                  ],
                  [
                      { jewel: jewels[10] },
                      { jewel: jewels[11] },
                      { jewel: jewels[12] },
                  ],
                  [{ jewel: jewels[13] }, { jewel: jewels[14] }],
                  [{ jewel: jewels[15] }],
              ]
            : [
                  [
                      { jewel: jewels[0] },
                      { jewel: jewels[1] },
                      { jewel: jewels[2] },
                  ],
                  [{ jewel: jewels[3] }, { jewel: jewels[4] }],
                  [
                      { jewel: jewels[5] },
                      { jewel: jewels[6] },
                      { jewel: jewels[7] },
                  ],
                  [{ jewel: jewels[8] }, { jewel: jewels[9] }],
                  [
                      { jewel: jewels[10] },
                      { jewel: jewels[11] },
                      { jewel: jewels[12] },
                  ],
              ];
    const hints = shuffle(generateHints(clone(rows))).slice(0, random(2, 4));
</script>

<main>
    <div class="row">
        <input id="resultsCheckbox" type="checkbox" bind:checked={showResult} />
        <label for="resultsCheckbox">Показать ответ?</label>
    </div>

    {#if showResult}
        <Grid {rows} />
    {/if}

    <div class="row flex-wrap ">
        {#each hints as hint}
            <Grid rows={hint} />
        {/each}
    </div>
</main>

<style>
    body {
        background-color: white;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
</style>
