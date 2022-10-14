<template>
	<button type="button" class="v-button">{{ text }}</button>
</template>

<script>
	export default {
		name: 'VButton',
		props: {
			text: String,
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.v-button {
		font-size: $text-xl;
		background-color: transparent;
		color: $accent;
		border: 0.1rem solid $accent;
		border-radius: 7.7rem;
		padding: 1rem 3rem;
		transition: all 0.2s ease;
		height: max-content;
		&:hover {
			background-color: $accent;
			color: $black;
		}
		&:active {
			transform: translateY(0.2rem);
		}
	}
</style>
