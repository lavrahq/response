<script>
  export let status;
  export let error;

  const isDev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if isDev && error.stack}
  <pre>{error.stack}</pre>
{/if}
