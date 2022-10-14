<template>
	<div class="ellipse-card">{{ text }}</div>
</template>

<script>
	export default {
		name: 'EllipseCard',
		props: {
			text: {
				value: [String, Number],
				default: 'ellipse',
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.ellipse-card {
		border: 0.1rem solid $accent;
		padding: 3rem 6rem;
		border-radius: 50%;
		background-color: $gray;
	}
</style>
