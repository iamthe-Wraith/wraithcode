<div class="lava-bricks-container">
    <section class="row row-1">
        <div class="brick brick-1">
            <div class="brick-inner">
                <i class="fa-solid fa-fire-flame-curved brick-icon"></i>
            </div>
        </div>
        <div class="brick brick-2">
            <div class="brick-inner">
                <i class="fa-solid fa-skull brick-icon"></i>
            </div>
        </div>
        <div class="brick brick-3">
            <div class="brick-inner">
                <i class="fa-solid fa-gem brick-icon"></i>
            </div>
        </div>
    </section>
    <section class="row row-2">
        <div class="brick brick-4">
            <div class="brick-inner"></div>
        </div>
        <div class="brick brick-5">
            <div class="brick-inner"></div>
        </div>
    </section>
    <section class="row row-3">
        <div class="brick brick-6">
            <div class="brick-inner"></div>
        </div>
        <div class="brick brick-7">
            <div class="brick-inner"></div>
        </div>
        <div class="brick brick-8">
            <div class="brick-inner"></div>
        </div>
        <div class="brick brick-9">
            <div class="brick-inner"></div>
        </div>
    </section>
</div>

<style>
    :global(.lava-bricks-container) {
        --lava-100: #F6BA53;
        --lava-200: #FFC731;
        --lava-300: #FFAB1A;
        --lava-400: #FF8D0B;
        --lava-500: #FC6C07;
        --lava-600: #D54208;
        --lava-700: #B43000;
        --lava-800: #831403;
        --lava-900: #5C0801;
    }

    .lava-bricks-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        height: 100vh;
        padding: 1rem;
        background-color: var(--lava-200);
        box-shadow: inset 0 0 30px 0 var(--lava-900);
    }

    .row {
        display: grid;
    }

    .row-1 {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        height: 15rem;
    }

    .row-2 {
        grid-template-columns: 4fr 1fr;
        gap: 2rem;
        height: 30rem;
    }

    .row-3 {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        height: 10rem;
    }

    .brick {
        padding: 0.1rem;
        background-color: var(--neutral-100);
        background-image: radial-gradient(circle at 30% 0%, var(--neutral-600), var(--neutral-100));
        border-radius: 0.5rem;
        box-shadow: 0 0 10px -2px var(--lava-800),
                    0 0 25px -2px var(--lava-700),
                    0 0 30px -2px var(--lava-600),
                    inset 0 0 10px -1px var(--lava-500);
        
        &:hover {
            cursor: pointer;

            & .brick-icon {
                color: var(--lava-100);
                filter: drop-shadow(0 0 4px var(--lava-700))
                        drop-shadow(0 0 9px var(--lava-600));
                opacity: 1;
            }
        }

        & .brick-inner {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: var(--neutral-100);
            background-image: radial-gradient(circle at 30% 0%, var(--neutral-150), var(--neutral-100));
            border-radius: 0.4rem;
            box-shadow: inset -4px -4px 30px -10px var(--lava-800);
        }
    }

    .brick-icon {
        font-size: 5rem;
        color: var(--lava-600);
        transition: 0.25s ease-in-out;
        opacity: 0.7;
    }
</style>