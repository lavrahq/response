<script>
    import { stores } from "@sapper/app";
    const { session, page } = stores();

    export let item;
    export let segment;

    $: path = $page.path;
    $: isHighlighted = (item) => {
        return segment === item.segment || path === item.href;
    }
</script>

<a
    rel="preload"
    class="text-header-link pb-1 px-0 block text-sm font-medium hover:text-header-link-active"
    class:text-header-link-active={isHighlighted(item)}
    href={item.href}
>
    {item.title}
</a>
