<template>
	<section class="the-banner">
		<div class="the-banner__container center">
			<template v-if="documentWidth > 1300">
				<!-- decorative icons -->
				<img
					v-for="icon in icons"
					:key="icon.id"
					:class="`the-banner__${icon.name}`"
					:src="icon.img"
					:alt="icon.name"
					v-once
				/>
			</template>

			<div class="the-banner__col">
				<h1 class="the-banner__title">
					Кузнец<span class="the-banner__title_i">о</span>в<br />
					Василий
				</h1>

				<div class="the-banner__row" v-if="documentWidth > 1300">
					<StarCard v-once>
						<template #> HR </template>
					</StarCard>

					<p class="the-banner__description" v-once>
						Это человек, который<br />
						управляет персоналом:<br />
						мотивирует, оценивает<br />
						и ищет нужных специалистов.
					</p>

					<div class="the-banner__experience" v-once>
						<EllipseCard
							v-for="item in experience"
							:key="item.id"
							:text="item.text"
						></EllipseCard>
					</div>

					<VButton
						text="НАПИШИ МНЕ"
						v-once
						@click="openLink('https://telegram.im/@compass_pro')"
					></VButton>
				</div>

				<div class="the-banner__row" v-else>
					<div class="the-banner__description-wrapper" v-once>
						<StarCard>
							<template #> HR </template>
						</StarCard>

						<p class="the-banner__description">
							Это человек, который<br />
							управляет персоналом:<br />
							мотивирует, оценивает<br />
							и ищет нужных специалистов.
						</p>
					</div>

					<img
						src="/img/photo-1.jpg"
						alt="photo"
						class="the-banner__photo"
						v-once
					/>
				</div>
			</div>

			<img
				src="/img/photo-1.jpg"
				alt="photo"
				class="the-banner__photo"
				v-show="documentWidth > 1300"
			/>

			<div class="the-banner__info" v-show="documentWidth <= 1300">
				<img
					src="/img/icons/exclamation-points.svg"
					alt="icon"
					class="the-banner__exclamation-points"
					v-once
				/>
				<div class="the-banner__experience" v-once>
					<EllipseCard
						v-for="item in experience"
						:key="item.id"
						:text="item.text"
					></EllipseCard>
				</div>

				<VButton
					text="НАПИШИ МНЕ"
					v-once
					@click="openLink('https://telegram.im/@compass_pro')"
				></VButton>
			</div>
		</div>
	</section>
</template>

<script>
	import StarCard from '@/components/StarCard.vue';
	import EllipseCard from '@/components/EllipseCard.vue';

	import { inject } from 'vue';
	import { openLink } from '@/js/openLink.js';

	export default {
		name: 'TheBanner',
		components: { StarCard, EllipseCard },
		setup() {
			const documentWidth = inject('documentWidth');

			const icons = [
				{
					id: 1,
					img: '/img/icons/exclamation-points.svg',
					name: 'exclamation-points',
				},
				{ id: 2, img: '/img/icons/slack.svg', name: 'slack' },
				{ id: 3, img: '/img/icons/react.svg', name: 'react' },
				{ id: 4, img: '/img/icons/jira.svg', name: 'jira' },
			];
			const experience = [
				{ id: 1, text: '11 лет опыта' },
				{ id: 2, text: '120+ проектов' },
			];

			return {
				documentWidth,
				icons,
				experience,
				openLink,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-banner {
		position: relative;
		padding-top: 24rem;
		padding-bottom: 10rem;
		@media (max-width: 1300px) {
			padding-top: 10rem;
			display: flex;
		}
		@media (max-width: 767px) {
			padding-top: 8rem;
			padding-bottom: 8rem;
		}
		&__container {
			position: relative;
			display: flex;

			@media (max-width: 1300px) {
				width: inherit;
				flex-direction: column;
			}
		}

		&__row {
			position: relative;
			display: flex;
			align-items: flex-end;
			transform: translateY(-3rem);
			@media (max-width: 1300px) {
				align-items: flex-start;
				justify-content: space-between;
				gap: 2rem;
			}
			@media (max-width: 767px) {
				transform: translateY(-2rem);
			}
			.star-card {
				position: absolute;
				left: -4rem;
				top: -1rem;
				width: 14rem;
				height: 14rem;
				@media (max-width: 1300px) {
					position: static;
					transform: translateX(-2.5rem);
					width: 8rem;
					height: 8rem;
					font-size: $text-m;
				}
			}
		}
		&__col {
			@media (max-width: 374px) {
				margin-bottom: 5rem;
			}
		}

		&__title {
			transform: translateX(-2rem);
			transition: transform 0.2s ease;
			@media (max-width: 425px) {
				transform: translateX(-0.5rem);
			}
			&_i {
				color: $accent;
				font-style: italic;
				margin-right: 2rem;
				font-weight: 400;
				@media (max-width: 1023px) {
					display: inline-block;
					margin-right: -1rem;
					transform: translateX(-1rem);
				}
			}
		}
		&__description {
			position: relative;
			font-size: $text-s;
			@media (max-width: 767px) {
				max-width: 17rem;
			}
		}

		&__experience {
			margin-right: 8rem;
			@media (max-width: 1300px) {
				margin-right: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 3rem;
			}
			.ellipse-card {
				position: relative;
				&:first-child {
					transform: translateX(6rem) rotate(-3.79deg);
					z-index: 2;
					@media (max-width: 1300px) {
						transform: none;
					}
				}
				&:last-child {
					transform: translate(-3rem, -2rem) rotate(3.99deg);
					@media (max-width: 1300px) {
						transform: none;
					}
				}
			}
		}

		&__photo {
			transform: translate(-14rem, 21rem);
			width: 33rem;
			height: 35rem;
			object-fit: cover;
			transition: transform 0.2s ease;
			@media (max-width: 1440px) {
				transform: none;
			}
			@media (max-width: 1023px) {
				width: 25rem;
				object-position: right center;
			}
			@media (max-width: 767px) {
				width: 16rem;
				height: 23rem;
			}
			@media (max-width: 374px) {
				width: 12rem;
				height: 17rem;
			}
		}

		&__exclamation-points,
		&__slack,
		&__react,
		&__jira {
			position: absolute;
		}

		&__exclamation-points {
			left: 125rem;
			top: 0;
			width: 13rem;
			height: 14rem;
			object-fit: contain;
			transition: all 0.2s ease;
			@media (max-width: 1440px) {
				left: 110rem;
				top: -15rem;
			}
			@media (max-width: 1300px) {
				left: 0;
				top: -5.5rem;
				height: 6rem;
				width: 6rem;
				transform: rotate(-22.88deg);
			}
		}
		&__slack {
			bottom: 13rem;
			left: 75rem;
			width: 5.5rem;
			height: 5.5rem;
			object-fit: contain;
		}
		&__react {
			bottom: 2rem;
			left: 95rem;
			width: 11rem;
			height: 11rem;
			object-fit: contain;
		}
		&__jira {
			width: 8rem;
			height: 8rem;
			object-fit: contain;
			left: 131rem;
			bottom: 0;
			z-index: 2;
			transition: all 0.2s ease;
			@media (max-width: 1440px) {
				left: 115rem;
				bottom: 7rem;
			}
		}

		&__info {
			position: relative;
			display: flex;
			justify-content: space-between;
			gap: 3rem;
			@media (max-width: 767px) {
				flex-direction: column;
				align-items: center;
				width: max-content;
				margin: 0 auto;
			}
		}
	}
</style>
