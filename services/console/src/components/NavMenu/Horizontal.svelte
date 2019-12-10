<script>
  import HorizontalLink from './HorizontalLink.svelte';

  import {stores} from "@sapper/app";

  const {session, page} = stores();

  export let nav = [];
  export let segment;

  path = $page.path;

  let switcherVisible = false;

  function handleSwitcherToggle() {
    switcherVisible = true
  }
</script>

<div class="flex flex-col bg-header w-full h-auto antialiased shadow-lg">
  <div class="flex flex-row justify-between container mx-auto py-3">
    <div class="flex flex-row"></div>

    <div class="flex flex-row">
      <div class="mr-4">
        <div
          on:click
          class="cursor-pointer flex flex-row align-icon"
        >
          <a
            rel="prefetch"
            href={`/public/preferences?last=${path}`}
            class="text-header-link hover:text-header-link-active text-sm"
            class:text-header-link-active={path === '/public/preferences'}
          >
            Preferences
          </a>
        </div>
      </div>

      {#if !$session.logged_in}
        <div class="mr-4">
          <div on:click class="cursor-pointer flex flex-row align-icon">
            <a
              rel="prefetch"
              href="/auth/login"
              class="text-header-link hover:text-header-link-active text-sm"
              class:text-header-link-active={path === '/auth/login'}
            >
              Login
            </a>
          </div>
        </div>

        <div class="mr-4">
          <div class="cursor-pointer flex flex-row align-icon">
            <a
              rel="prefetch"
              href={'/auth/register'}
              class="text-header-link hover:text-header-link-active text-sm"
              class:text-header-link-active={path === '/auth/register'}
            >
              Register
            </a>
          </div>
        </div>
      {:else}
        <div class="mr-4 ml-4 md:ml-0 mt-1">
          <!-- <HeaderIcon icon={faBell} /> -->
        </div>
        <div class="mr-4 mt-1">
          <!-- <HeaderIcon icon={faTh} on:click={handleSwitcherToggle} /> -->
          <!-- <HeaderSwitcher bind:visible={switcherVisible} /> -->
        </div>
        <div class="mr-4">
          <div class="flex flex-row align-icon">
            <p class="text-header-link text-sm">
              Welcome back, {$session.user.name}!
            </p>
          </div>
        </div>

        <div class="mr-4">
          <div
            on:click
            class="cursor-pointer flex flex-row align-icon text-header-link
            hover:text-header-link-active"
          >
            <a href="/account" class="text-sm">My Account</a>
          </div>
        </div>

        <div class="mr-4">
          <div on:click class="cursor-pointer flex flex-row align-icon">
            <a
              href={`/auth/logout`}
              class="text-header-link text-sm hover:text-header-link-active"
            >
              Logout
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>

  <div
    class="flex flex-row container text-header-link-active mt-8 mb-4 lg:mb-0
    mx-4 md:mx-auto"
  >
    <slot name="middle" />
  </div>

  <div class="flex md:mt-4 container pb-2 mx-4 md:mx-auto overflow-x-scroll">
    <nav>
      <ul
        class="flex flex-row items-center justify-between text-base
        text-gray-700 pt-1 lg:pt-0"
      >
        {#each nav as item}
          <li class="first:pl-0 last:pr-0 pl-4 pr-4">
            <HorizontalLink {item} {segment} />
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>
