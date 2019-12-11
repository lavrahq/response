<script>
    import HorizontalNav from "@/components/NavMenu/Horizontal";

    export let segment;

    let nav = [
        {
            title: 'Login',
            href: '/auth/login',
            segment: 'login'
        },
        {
            title: 'Register',
            href: '/auth/register',
            segment: 'register'
        }
    ];
</script>

<HorizontalNav {nav} {segment} />

<main class="flex flex-col justify-between">
    <div>top</div>
    <div>
        <slot />
    </div>
</main>
