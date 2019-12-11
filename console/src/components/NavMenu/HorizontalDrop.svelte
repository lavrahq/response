<script>
  import { stores } from "@sapper/app"
  const { session, page } = stores();

  export let item;
  export let segment;

  let isOpen = false;

  path = $page.path;
  isHighlighted = item => {
    return segment === item.segment || path.includes(item.href)
  };

  function handleOpen() {
     isOpen = !isOpen
  }
</script>

<div class="relative">
  <div class="group-hover:flex flex-col">
    <button
      class="text-header-link pb-1 px-0 block text-sm font-medium
      hover:text-header-link-active"
      class:text-header-link-active={isHighlighted(item)}
      on:click={handleOpen}
    >
      {item.title}
    </button>

    {#if isOpen}
      <div class="fixed flex flex-col bg-surface text-on-surface text-sm px-3 py-1 rounded min-w-1/8" style="z-index: 9999">dropdown</div>
    {/if}
  </div>
</div>
