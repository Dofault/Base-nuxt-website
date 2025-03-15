// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/kinde',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    'vuetify-nuxt-module',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    baseURL: process.env.NODE_ENV === 'production' ? 'https://gardeniaa.netlify.app/' : 'http://localhost:3000',
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  },
  kinde: {
    // This is true by default and adds 'auth-logged-in' and 'auth-logged-out'
    // middleware to your Nuxt application.
    // 
    // middleware: false,
    //
    // enable the debug `/api/health` endpoint
    // debug: true,
    // 
    // Set custom endpoints in case you use any of the default routes for other purposes
    // endpoints: {
    //   callback: '/api/callback',
    //   login: '/api/login',
    //   register: '/api/register',
    //   health: '/api/health',
    //   logout: '/api/logout'
    // }
  },
    app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
})