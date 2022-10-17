<template>
	<section class="the-specialists">
		<div class="the-specialists__container center">
			<div class="the-specialists__col">
				<h4 class="the-specialists__title" v-once>
					Классифицированный список специалистов, внесенных в рассылочный сервис
				</h4>
				<p class="the-specialists__description" v-once>
					Имею собственную базу данных специалистов IT индустрии по всей России,
					с собственным сервисом рассылок срочных вакансий или проектных заданий
					для IT специалистов
				</p>

				<StarCard class="the-specialists__counter" v-show="documentWidth > 767">
					<template #>
						<h3 class="the-specialists__counter-number" v-once>90 000</h3>
						<p class="the-specialists__counter-description" v-once>
							программистов
						</p>
					</template>
				</StarCard>
			</div>

			<div class="the-specialists__col" v-once>
				<img
					src="/img/icons/user.svg"
					v-for="i in 4"
					:key="i.id"
					alt="user"
					class="the-specialists__user"
				/>
			</div>

			<StarCard class="the-specialists__counter" v-show="documentWidth <= 767">
				<template #>
					<h3 class="the-specialists__counter-number" v-once>90 000</h3>
					<p class="the-specialists__counter-description" v-once>
						программистов
					</p>
				</template>
			</StarCard>
		</div>
	</section>
</template>

<script>
	import StarCard from '@/components/StarCard.vue';

	import { inject } from 'vue';

	export default {
		name: 'TheSpecialists',
		components: { StarCard },
		setup() {
			const documentWidth = inject('documentWidth');
			return { documentWidth };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

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
				url('/public/img/icons/slack.svg') calc(100% - 20rem) 100% / 4rem
					no-repeat;
			@media (max-width: 767px) {
				background: none;
				flex-direction: column;
				align-items: flex-start;
				padding-top: 8rem;
				padding-bottom: 8rem;
				gap: 8rem;
			}
		}

		&__col {
			max-width: 60rem;
			width: 100%;
			&:nth-child(2) {
				display: flex;
				overflow: visible;
			}
		}

		&__title {
			margin-bottom: 3rem;
			@media (max-width: 767px) {
				margin-bottom: 2rem;
			}
		}
		&__description {
			margin-bottom: 8rem;
			@media (max-width: 767px) {
				margin-bottom: 0;
			}
		}

		&__counter {
			flex-direction: column;
			gap: 1rem;
			@media (max-width: 767px) {
				margin: 0 auto;
				margin-top: -8rem;
				width: 23.7rem;
				height: 23.7rem;
			}
			&-description {
				font-size: $text-m;
				@media (max-width: 767px) {
					font-size: 1.4rem;
				}
			}
		}

		&__user {
			width: 33rem;
			height: 30rem;
			@media (max-width: 767px) {
				width: 20rem;
				height: 19rem;
			}
		}
	}
</style>
