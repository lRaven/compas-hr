<template>
	<router-view v-slot="{ Component }">
		<transition mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
	export default {
		watch: {
			$route(to) {
				document.title = to.meta.title || 'Default Title';
			},
		},
	};
</script>

<style lang="scss">
	@import '@/assets/scss/variables';
	@import '@/assets/scss/fonts';
	@import '@/assets/scss/center';

	body {
		font-family: 'Verdana', sans-serif;
		font-size: $text-m;
		color: $white;
		background-color: $black;
		text-transform: uppercase;
		@media (max-width: 540px) {
			font-size: 2rem;
		}

		&.locked {
			overflow: hidden;
		}
	}
	* {
		scroll-behavior: smooth;
		transition: padding 0.3s ease, margin 0.3s ease;

		//* chrome/safari
		&::-webkit-scrollbar {
			width: $scrollbarWidth; /* ширина scrollbar */
		}
		&::-webkit-scrollbar-track {
			background: $scrollbarBg; /* цвет дорожки */
		}
		&::-webkit-scrollbar-thumb {
			background-color: $scrollbarThumb; /* цвет плашки */
			border-radius: $scrollbarBorderRadius; /* закругления плашки */
			border: $scrollbarBorder; /* padding вокруг плашки */
		}
		//* firefox
		scrollbar-width: thin; /* "auto" или "thin"  */
		scrollbar-color: $scrollbarThumb $scrollbarBg;
	}

	#app,
	.page {
		display: flex;
		flex-direction: column;
		height: max-content;
		min-height: 100vh;
	}

	.main {
		display: flex;
		flex-direction: column;
		flex: 1 0 auto;
	}

	section {
		overflow: hidden;
		padding: 2rem;
		@media (max-width: 767px) {
			// padding: 7rem 1.5rem;
		}
	}

	input {
		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			/* display: none; <- Crashes Chrome on hover */
			-webkit-appearance: none;
			margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
		}
		-moz-appearance: textfield;
		&:hover {
			-moz-appearance: number-input;
		}
		&[type='text'] {
			::-ms-clear {
				display: none;
				width: 0;
				height: 0;
			}
			::-ms-reveal {
				display: none;
				width: 0;
				height: 0;
			}
		}
		&[type='search'] {
			&::-webkit-search-decoration,
			&::-webkit-search-cancel-button,
			&::-webkit-search-results-button,
			&::-webkit-search-results-decoration {
				display: none;
			}
		}
	}

	img,
	svg,
	button,
	header,
	footer {
		user-select: none;
	}

	h1 {
		font-size: $text-3xl;
		font-weight: 700;
		@media (max-width: 767px) {
			font-size: $text-2xl;
		}
	}
	h2 {
		font-size: $text-2xl;
		line-height: 1.2;
		@media (max-width: 767px) {
			font-size: 4rem;
		}
		@media (max-width: 425px) {
			// font-size: $text-xl;
		}
	}
	h3 {
		font-size: $text-xl;
		@media (max-width: 767px) {
			font-size: 2.4rem;
		}
	}
	h4 {
		font-size: $text-l;
		line-height: 1.3;
		@media (max-width: 767px) {
			font-size: 2.4rem;
		}
	}

	p {
		line-height: 1.2;
	}
</style>
