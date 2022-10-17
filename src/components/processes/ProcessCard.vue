<template>
	<div class="process-card">
		<slot />
	</div>
</template>

<script>
	export default { name: 'ProcessCard' };
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
		@media (max-width: 1023px) {
			width: 36rem;
			height: 36rem;
		}
		@media (max-width: 425px) {
			width: calc(100vw - 3rem);
			height: calc(100vw - 3rem);
		}
	}
</style>
