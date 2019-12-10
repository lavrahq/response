<script>
  import HorizontalNav from "@/components/NavMenu/Horizontal";
  import { stores } from "@sapper/app";
  const { page } = stores();

  $: path = $page.path
</script>

<HorizontalNav {path} />
