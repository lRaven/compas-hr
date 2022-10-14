<template>
	<section class="the-processes">
		<div class="the-processes__container center">
			<img
				class="the-processes__icon"
				src="/img/icons/exclamation-points.svg"
				alt="icon"
			/>
			<h4 class="the-processes__title">
				Со мной вы можете забыть о бумажной волоките<br />
				все важные процессы беру в свои руки
			</h4>

			<div class="the-processes__list">
				<ProcessCard v-for="process in processes" :key="process.id">
					<template #>
						<p class="the-processes__card-text">{{ process.text }}</p>
					</template>
				</ProcessCard>
			</div>
		</div>
	</section>
</template>

<script>
	import ProcessCard from '@/components/processes/ProcessCard.vue';

	export default {
		name: 'TheProcesses',
		components: { ProcessCard },
		data: () => ({
			processes: [
				{ id: 1, text: 'Трудовые' },
				{ id: 2, text: 'Гражданско -\nправовые' },
				{ id: 3, text: 'Увольнение и\nпринятие на работу' },
				{ id: 4, text: 'Претензионная\nработа' },
			],
		}),
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-processes {
		padding-top: 14.6rem;
		padding-bottom: 21rem;
		background: linear-gradient(180deg, $black 0%, $gray 100%);
		&__container {
			max-width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&__icon {
			width: 7.7rem;
			transform: scale(-1, 1);
		}

		&__title {
			text-align: center;
			line-height: 1.8;
			margin-bottom: 10rem;
		}

		&__list {
			display: flex;
			gap: 2rem;
		}

		&__card-text {
			white-space: pre-wrap;
			line-height: 1.5;
		}
	}
</style>
