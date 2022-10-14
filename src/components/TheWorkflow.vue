<template>
	<section class="the-workflow">
		<div class="the-workflow__container center">
			<h2 class="the-workflow__title">
				<span class="the-workflow__decorative">
					<span class="the-workflow__decorative-line"></span>
					<span class="the-workflow__decorative-circle"></span>
				</span>
				подбираю команды под Ваши бизнес-идеи.<br />
				Сам составляю и проверяю ТЗ
			</h2>
			<div class="the-workflow__row">
				<p class="the-workflow__jira">
					декомпозирую<br />
					задачи в Jira
				</p>
				<h2 class="the-workflow__title">
					Проверяю
					<span class="the-workflow__title_accent">правильность</span>
					выполнения задач.
				</h2>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'TheWorkflow',
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-workflow {
		&__container {
			border-bottom: 0.1rem solid #fff;
			padding-bottom: 5rem;
		}
		&__decorative {
			&-line,
			&-circle {
				background-color: $accent;
				height: 5rem;
				display: inline-block;
			}
			&-line {
				width: 29rem;
				border-radius: 7rem;
				margin-right: 1.2rem;
			}
			&-circle {
				width: 5rem;
				border-radius: 50%;
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
		}
		&__jira {
			margin-right: 2rem;
			transform: translateY(1rem);
		}
	}
</style>
