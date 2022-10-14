<template>
	<div class="process-card">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'ProcessCard',
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.process-card {
		width: 42rem;
		height: 42rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $gray;
		text-align: center;
	}
</style>
