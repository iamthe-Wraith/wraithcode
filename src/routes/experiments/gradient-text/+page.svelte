<div class="container">
    <h1>Look at this pretty text!</h1>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
        padding: 4rem 1rem 1rem;
    }

    h1 {
        /* https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip */
        -webkit-background-clip: text;
        background-clip: text;
        /* https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color */
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to right, #10afe4, #d311b9);
    }
</style>