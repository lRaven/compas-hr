<template>
	<section class="the-workflow">
		<div class="the-workflow__container center">
			<h2 class="the-workflow__title" v-once>
				<span class="the-workflow__decorative">
					<span class="the-workflow__decorative-line"></span>
					<span class="the-workflow__decorative-circle"></span>
				</span>
				подбираю команды под Ваши бизнес-идеи.<br />
				Сам составляю и проверяю ТЗ
			</h2>

			<div class="the-workflow__row">
				<p class="the-workflow__jira" v-show="documentWidth > 767">
					декомпозирую<br />
					задачи в Jira
				</p>
				<h2 class="the-workflow__title">
					Проверяю
					<span class="the-workflow__title_accent">правильность</span>
					выполнения задач.
					<span class="the-workflow__jira" v-show="documentWidth <= 767">
						декомпозирую<br />
						задачи в Jira
					</span>
				</h2>
			</div>
		</div>
	</section>
</template>

<script>
	import { inject } from 'vue';

	export default {
		name: 'TheWorkflow',
		setup() {
			const documentWidth = inject('documentWidth');

			return { documentWidth };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-workflow {
		&__container {
			border-bottom: 0.1rem solid $white;
			padding-bottom: 5rem;
			@media (max-width: 767px) {
				border-bottom: none;
			}
		}
		&__decorative {
			&-line,
			&-circle {
				background-color: $accent;
				height: 5rem;
				display: inline-block;
				@media (max-width: 1240px) {
					height: 3rem;
				}
			}
			&-line {
				width: 29rem;
				border-radius: 7rem;
				margin-right: 1.2rem;
				@media (max-width: 1240px) {
					width: 16rem;
				}
			}
			&-circle {
				width: 5rem;
				border-radius: 50%;
				@media (max-width: 1240px) {
					width: 3rem;
				}
			}
		}

		&__title {
			&_accent {
				color: $accent;
			}
		}

		&__row {
			display: flex;
			margin-left: 22rem;
			@media (max-width: 1023px) {
				margin-left: 0;
			}
			@media (max-width: 767px) {
				display: block;
			}
		}
		&__jira {
			display: inline-block;
			margin-right: 2rem;
			transform: translateY(1rem);
			transition: all 0.2s ease;
			@media (max-width: 767px) {
				font-size: 1.4rem;
				margin-right: 0;
				transform: none;
			}
		}
	}
</style>
