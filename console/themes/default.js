const { ThemeBuilder, Theme } = require('tailwindcss-theming');

const lightTheme = new Theme()
    .name('light')
    .assignable()
    .colors({
        transparent: 'transparent',

        'header': '#1A202C',
        'header-link': '#A0AEC0',
        'header-link-active': '#F7FAFC',
        'header-divider': '#718096',

        'body': '#edf2f7',
        'on-body': '#2d3748',
        'on-body-alt': '#4A5568',

        'surface': '#FFFFFF',
        'on-surface': '#2D3748',
        'on-surface-alt': '#718096',
        'divides-surface': '#E2E8F0',
        'surrounds-surface': '#CBD5E0',

        'modal': '#FFFFFF',
        'on-modal': '#1A202C',
        'modal-overlay': 'black',

        'grid': '#FFFFFF',
        'grid-row-even': '#FFFFFF',
        'grid-row-odd': '#FFFFFF',
        'grid-alt': '#FFFFFF',
        'on-grid': '#2D3748',
        'on-grid-header': '#2D3748',
        'divides-grid': '#E2E8F0',

        'field': '#FFFFFF',
        'field-alt': '#F7FAFC',
        'on-field': '#2D3748',
        'on-field-alt': '#718096',
        'surrounds-field': '#CBD5E0',

        'primary': '#4c51bf',
        'on-primary': '#ebf4ff',

        'success': '#48BB78',
        'on-success': '#F0FFF4',

        'destructive': '#E53E3E',
        'on-destructive': '#FFF5F5',
    });

const darkTheme = new Theme()
    .name('dark')
    .assignable()
    .colors({
        transparent: 'transparent',

        'header': '#1A202C',
        'header-link': '#A0AEC0',
        'header-link-active': '#F7FAFC',
        'header-divider': '#7B8794',

        'body': '#4A5568',
        'on-body': '#EDF2F7',
        'on-body-alt': '#CBD5E0',

        'surface': '#2D3748',
        'on-surface': '#E2E8F0',
        'on-surface-alt': '#A0AEC0',
        'divides-surface': '#718096',
        'surrounds-surface': '#1A202C',

        'modal': '#2D3748',
        'on-modal': '#E2E8F0',
        'modal-overlay': 'black',

        'grid': '#2D3748',
        'grid-row-even': '#2D3748',
        'grid-row-odd': '#2D3748',
        'grid-alt': '#FFFFFF',
        'on-grid': '#E2E8F0',
        'on-grid-header': '#E2E8F0',
        'divides-grid': '#718096',

        'field': '#1A202C',
        'field-alt': '#000000',
        'on-field': '#CBD5E0',
        'on-field-alt': '#A0AEC0',
        'surrounds-field': '#2D3748',

        'primary': '#A3BFFA',
        'on-primary': '#3C366B',

        'inverse': 'transprent',
        'on-inverse': '#A3BFFA',

        'success': '#48BB78',
        'on-success': '#F0FFF4',

        'destructive': '#F56565',
        'on-destructive': '#742A2A',
    });

module.exports = new ThemeBuilder()
    .asDataThemeAttribute()
    .colorVariablePrefix('color')
    .default(lightTheme)
    .dark(darkTheme);