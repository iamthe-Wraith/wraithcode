<script lang="ts">
    import { browser } from "$app/environment";
    import { assets } from "$app/paths";
    import Button from "$lib/components/Button.svelte";
    import ExperimentHeader from "$lib/components/ExperimentHeader.svelte";

    const notify = () => {
        new Notification('Well hello there!', {
            body: 'This is a notification from the Notifications API',
            icon: `${assets}/favicon.png`,
            requireInteraction: true, // https://developer.mozilla.org/en-US/docs/Web/API/Notification/requireInteraction
        });
    };

    const requestPermission = () => {
        Notification.requestPermission()
            .then((permission) => {
                if (permission === 'granted') {
                    new Notification('Permission Granted', {
                        body: 'You can now receive notifications from this site',
                    });
                }
            });
    };
</script>

<ExperimentHeader>
    <svelte:fragment slot="right-group">
        <a href="https://github.com/iamthe-Wraith/wraithcode/blob/transformerjs/src/routes/(the-lab)/the-lab/experiments/notifications-api/%2Bpage.svelte">
            View on Github
        </a>
    </svelte:fragment>
</ExperimentHeader>

<div class="experiment-container">
    <h1>Notifications Api</h1>

    <div class="main-container">
        {#if browser && 'Notification' in window}
            {#if Notification.permission === 'denied'}
                <p>Okay, we will not notify you</p>
            {:else if Notification.permission === 'granted'}
                <Button on:click={notify}>Notify Me</Button>
            {:else}
                <Button on:click={requestPermission}>Request Permission</Button>
            {/if}
        {:else}
            <p>Notifications are not supported in this browser</p>
        {/if}
    </div>
</div>

<style>
    .experiment-container {
        width: 80%;
        max-width: 50rem;
        margin: 2rem auto;
    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem;
    }
</style>