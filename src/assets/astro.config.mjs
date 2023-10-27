export default {
    routes: [
    {
        path: '/',
        component: '@layouts/Layout.astro',
        children: [
        {
            path: '/',
            component: '@pages/index.astro',
        },
        {
            path: '/our-works',
            component: '@pages/OurWorks.astro',
        },
        {
            path: '/about',
            component: '@pages/About.astro',
        },
        {
            path: '/contact',
            component: '@pages/contact.astro',
        },
        ],
    },
    ],
};