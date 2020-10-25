export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mbednarczyk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: "msapplication-TileColor", content: "#ffffff"},
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png"},
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href:"//faviconandroid-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
      { rel: "manifest", href: "/favicon/manifest.json" }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './node_modules/overlayscrollbars/css/OverlayScrollbars.css',
    '~layouts/variables.scss',
    '~layouts/font-face.css',
    '~layouts/layout.scss',
  ],

  styleResources: {
    scss: ['./layouts/*.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/vue-overlayscrollbars.client.js', mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    dir: 'content' // read content from my-content/
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
