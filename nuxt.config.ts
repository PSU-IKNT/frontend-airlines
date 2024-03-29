// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	css: [
		"~/assets/css/main.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],
	modules: ["@nuxt/image"],
});
