<script lang="ts">
  export let id: string;
  export let name: string;
  export let value = '';
  export let label = '';
  export let text = '';
  export let error = '';
  export let required = false;
</script>

<div class="textarea-container">
  {#if label}
      <label for={id}>
          {label}
          {#if !required}
              <span>- Optional</span>
          {/if}
      </label>
  {/if}

  <textarea
      {id}
      {required}
      {name}
      bind:value
      {...$$restProps}
      class="{error ? 'error' : ''} {$$restProps.class ?? ''}"
      on:change
      on:click
      on:focus
      on:blur
      on:keydown
      on:keypress
      on:keyup
  />
  
  {#if text && !error}
      <p class="text" data-testid={`${id}-text`}>{text}</p>
  {/if}

  {#if error}
      <p class="error" data-testid={`${id}-error`}>{error}</p>
  {/if}
</div>

<style>
    :global(:root) {
        --textarea-container-flex-grow: 0;
        --textarea-width: 100%;
        --textarea-height: 6rem;
    }

    .textarea-container {
        display: flex;
        flex-direction: column;
        flex-grow: var(--textarea-container-flex-grow);
        gap: 0.5rem;
        padding: var(--outline-offset);
    }

    label {
        font-weight: 500;

        & span {
            color: var(--neutral-450);
        }
    }

    p {
        margin: 0;

        &.text {
            color: var(--neutral-700);
            font-size: 0.85rem;
            line-height: 1.2rem;
            text-align: left;
        }
    }

    textarea {
        flex-grow: 1;
        width: var(--textarea-width, 100%);
        height: var(--textarea-height, 6rem);
        padding: 0.5rem;
        border: 1px solid var(--neutral-300);
        border-radius: 0.25rem;
        color: var(--neutral-700);
        background-color: var(--neutral-100);
        resize: none;

        &::placeholder {
            color: var(--neutral-400) !important;
        }

        &.error {
            border-color: var(--danger-500);
        }

        &::placeholder {
            color: var(--neutral-350);
        }
    }
</style>