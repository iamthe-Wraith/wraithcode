<div class="experiment-header">
    <div class="left-group">
        <a href="/">
            <i class="fa-regular fa-chevron-left"></i>
            Back to The Lab
        </a>

        <slot name="left-group"></slot>
    </div>

    <div class="right-group">
        <slot name="right-group"></slot>
    </div>
</div>

<style>
    .experiment-header {
		display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        padding: 0 1rem;

        & a {
            font-size: 1rem;
            color: var(--neutral-600);
            text-decoration: none;

            &:hover,
            &:focus-visible {
                color: var(--accent2-500);
            }
        }
    }

    .left-group {
        display: flex;
        gap: 1rem;
    }

    .right-group {
        display: flex;
        gap: 1rem;
    }
</style>