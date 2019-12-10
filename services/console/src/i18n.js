import { register, init } from 'svelte-i18n'

register('en-US', () => import('./locales/en-US.json'));

init({
    fallbackLocale: 'en-US',
    initialLocale: { navigator: true },
});
