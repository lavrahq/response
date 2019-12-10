<script>
  import HorizontalNav from "@/components/NavMenu/Horizontal";

  export let segment;

  let nav = [
    {
      title: 'Dashboard',
      href: '/public'
    }
  ]
</script>

<HorizontalNav {segment} {nav} />

<main class="flex flex-col justify-between">
  <div>top</div>
  <div>
    <slot />
  </div>
</main>
