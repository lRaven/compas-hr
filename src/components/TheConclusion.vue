<template>
	<section class="the-conclusion" v-once>
		<div class="the-conclusion__container center">
			<div class="the-conclusion__row">
				<div class="the-conclusion__card">
					<img
						class="the-conclusion__exclamation-points"
						src="/img/icons/exclamation-points.svg"
						alt="exclamation-points"
					/>
					<img
						class="the-conclusion__photo"
						src="/img/photo-2.jpg"
						alt="photo"
					/>

					<StarCard class="the-conclusion__programmers">
						<template #>
							<h3 class="the-conclusion__programmers-counter">90 000</h3>
							<p class="the-conclusion__programmers-description">
								программистов
							</p>
						</template>
					</StarCard>
					<EllipseCard
						v-for="item in experience"
						:key="item.id"
						class="the-conclusion__ellipse"
						:class="`the-conclusion__ellipse-${item.name}`"
						:text="item.text"
					></EllipseCard>
				</div>

				<div class="the-conclusion__col">
					<h4 class="the-conclusion__description">
						Смело обращайтесь ко мне, если вам нужен надежный коллектив для
						IT-проекта. Соберу команду профессионалов – от программистов до
						копирайтеров – специально под ваши задачи.
					</h4>

					<VButton
						text="НАПИШИ МНЕ"
						@click="openLink('https://telegram.im/@compass_pro')"
					></VButton>

					<img
						src="/img/icons/css.svg"
						class="the-conclusion__icon the-conclusion__icon-css"
						alt="css"
					/>
				</div>
			</div>

			<div class="the-conclusion__name-wrapper">
				<img
					class="the-conclusion__icon the-conclusion__icon-slack"
					src="/img/icons/slack.svg"
					alt="icon"
				/>
				<h1 class="the-conclusion__name">
					Кузне<br />
					ц<span class="the-conclusion__name_accent">
						о
						<StarCard>
							<template #> HR </template>
						</StarCard> </span
					>в<br />
					Василий
				</h1>
			</div>
		</div>
	</section>
</template>

<script>
	import StarCard from '@/components/StarCard.vue';
	import EllipseCard from '@/components/EllipseCard.vue';

	import { openLink } from '@/js/openLink.js';

	export default {
		name: 'TheConclusion',
		components: { StarCard, EllipseCard },

		setup() {
			const experience = [
				{ id: 1, text: '11 лет опыта', name: 'years' },
				{ id: 2, text: '120+ проектов', name: 'projects' },
			];

			return { experience, openLink };
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-conclusion {
		background-color: $gray;

		&__container {
		}

		&__row {
			display: flex;
			gap: 5rem;
			margin-bottom: 2rem;
			@media (max-width: 1350px) {
				flex-direction: column-reverse;
				align-items: center;
			}
			@media (max-width: 767px) {
				align-items: flex-start;
			}
		}

		&__card {
			position: relative;
			display: flex;
			flex-direction: column;
			max-width: 80rem;
			@media (max-width: 1860px) and (min-width: 1350px) {
				margin-left: 15rem;
			}
		}

		&__exclamation-points {
			width: 13rem;
			height: 14rem;
			object-fit: contain;
			margin-bottom: 2rem;
			@media (max-width: 767px) {
				height: 6rem;
				width: 6rem;
				margin-bottom: 1rem;
				transform: translateX(-1rem) rotate(-15deg);
			}
		}
		&__photo {
			height: 96rem;
			width: 100%;
			max-width: 80rem;
			object-fit: cover;
			transition: all 0.2s ease;
			@media (max-width: 1540px) {
				height: 80rem;
			}
			@media (max-width: 540px) {
				object-position: right center;
				height: 60rem;
			}
		}

		&__programmers {
			position: absolute;
			left: -17rem;
			top: 20rem;
			display: flex;
			flex-direction: column;
			transition: all 0.2s ease;
			@media (max-width: 1023px) {
				left: -7rem;
				width: 23.7rem;
				height: 23.7rem;
			}
			@media (max-width: 767px) {
				left: inherit;
				right: -7rem;
				top: 12rem;
			}
			@media (max-width: 540px) {
				top: 5rem;
			}
			@media (max-width: 375px) {
				right: -6rem;
			}
			&-counter {
				margin-bottom: 1rem;
				@media (max-width: 1023px) {
					font-size: 2.4rem;
				}
			}
			&-description {
				font-size: $text-m;
				@media (max-width: 1023px) {
					font-size: 1.4rem;
				}
			}
		}

		&__ellipse {
			position: absolute;
			@media (max-width: 767px) {
				position: static;
				margin: auto;
			}
			&-years {
				right: 6rem;
				top: 13rem;
				transform: rotate(-3.79deg);
				z-index: 1;
				@media (max-width: 767px) {
					transform: translateY(-3rem);
					margin-bottom: 2rem;
				}
			}
			&-projects {
				right: -3rem;
				top: 20rem;
				transform: rotate(3.99deg);
				@media (max-width: 767px) {
					transform: translateY(-3rem);
				}
			}
		}

		&__description {
			margin-bottom: 7rem;
		}

		&__col {
			max-width: 56rem;
			margin-top: 3rem;
			position: relative;
			@media (max-width: 1349px) {
				margin-top: 0;
			}

			.v-button {
				padding: 2rem;
				width: 100%;
			}
		}

		&__icon {
			position: absolute;
			@media (max-width: 1349px) {
				display: none;
			}
			&-css {
				bottom: 15rem;
				left: -2rem;
			}
			&-slack {
				left: -13rem;
				top: 16rem;
			}
		}

		&__name {
			color: transparent;
			-webkit-text-stroke-width: 0.1rem;
			-webkit-text-stroke-color: $accent;
			@media (max-width: 1349px) and (min-width: 767px) {
				margin: auto;
				width: min-content;
			}
			&-wrapper {
				position: relative;
				background: url('/public/img/icons/vue.svg') 85rem 2rem no-repeat,
					url('/public/img/icons/jira.svg') 75rem 13rem / 3rem no-repeat,
					url('/public/img/icons/node.svg') 60rem 30rem no-repeat,
					url('/public/img/icons/react.svg') 65rem 35rem no-repeat;
				@media (max-width: 1860px) and (min-width: 1350px) {
					margin-left: 15rem;
				}
				@media (max-width: 1349px) {
					background: none;
				}
			}
			&_accent {
				position: relative;
				color: $accent;
				font-weight: 400;
				font-style: italic;
				display: inline-block;
			}
			.star-card {
				position: absolute;
				left: 63%;
				top: 53%;
				transform: translate(-50%, -50%);
				width: 14rem;
				height: 14rem;
				@media (max-width: 1023px) {
					width: 7rem;
					height: 7rem;
				}
				@media (max-width: 620px) {
					width: 4rem;
					height: 4rem;
					font-size: 1.4rem;
				}
			}
		}
	}
</style>
