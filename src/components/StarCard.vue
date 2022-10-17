<template>
	<div class="star-card">
		<slot />
	</div>
</template>

<script>
	export default { name: 'StarCard' };
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.star-card {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38rem;
		height: 38rem;
		font-size: $text-l;
		background: url('/public/img/icons/star.svg') center / contain no-repeat;
	}
</style>
