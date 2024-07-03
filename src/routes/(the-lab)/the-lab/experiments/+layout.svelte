<div class="experiment-header">
    <a href="/the-lab">
        <i class="fa-regular fa-chevron-left"></i>
        Back to The Lab
    </a>
</div>

<slot></slot>

<style>
    .experiment-header {
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
</style>