<template>
	<section class="the-specialists">
		<div class="the-specialists__container center">
			<div class="the-specialists__col">
				<h4 class="the-specialists__title">
					Классифицированный список специалистов, внесенных в рассылочный сервис
				</h4>
				<p class="the-specialists__description">
					Имею собственную базу данных специалистов IT индустрии по все России,
					с собственным сервисом рассылок срочных вакансий или проектных заданий
					для IT специалистов
				</p>

				<div class="the-specialists__counter">
					<h3 class="the-specialists__counter-number">90 000</h3>
					<p class="the-specialists__counter-description">программистов</p>
				</div>
			</div>

			<div class="the-specialists__col">
				<img src="/img/icons/user.svg" v-for="i in 3" :key="i.id" alt="user" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'TheSpecialists',
	};
</script>

<style lang="scss" scoped>
	.the-specialists {
		padding-top: 0;

		&__container {
			display: flex;
			align-items: center;
			gap: 10rem;
			padding-top: 10rem;
			padding-bottom: 15rem;
			background: url('/public/img/icons/node.svg') 50% 27% no-repeat,
				url('/public/img/icons/vue.svg') 60% 0 no-repeat,
				url('/public/img/icons/css.svg') 80% 10% no-repeat,
				url('/public/img/icons/react.svg') 60% calc(100% - 15rem) no-repeat,
				url('/public/img/icons/slack.svg') calc(100% - 20rem) 100% no-repeat;
		}

		&__col {
			max-width: 60rem;
			width: 100%;
			&:last-child {
				display: flex;
				overflow: visible;
			}
		}

		&__title {
			margin-bottom: 3rem;
		}
		&__description {
			margin-bottom: 8rem;
		}

		&__counter {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 38rem;
			height: 38rem;
			background: url('/public/img/icons/star.svg') center / contain no-repeat;
		}
	}
</style>
