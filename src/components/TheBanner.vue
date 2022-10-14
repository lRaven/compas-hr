<template>
	<section class="the-banner">
		<div class="the-banner__container center">
			<!-- decorative icons -->
			<img
				src="/img/icons/exclamation-points.svg"
				alt="exclamation-points"
				class="the-banner__exclamation-points"
			/>
			<img src="/img/icons/slack.svg" alt="slack" class="the-banner__slack" />
			<img src="/img/icons/react.svg" alt="react" class="the-banner__react" />
			<img src="/img/icons/jira.svg" alt="react" class="the-banner__jira" />

			<div class="the-banner__col">
				<h1 class="the-banner__title">
					Кузнец<span class="the-banner__title_i">о</span>в Василий
				</h1>

				<div class="the-banner__row">
					<StarCard>
						<template #> HR </template>
					</StarCard>

					<p class="the-banner__description">
						это человек, который<br />
						управляет персоналом:<br />
						мотивирует, оценивает<br />
						и ищет нужных специалистов.
					</p>

					<div class="the-banner__experience">
						<EllipseCard text="11 лет опыта"></EllipseCard>
						<EllipseCard text="120+ проектов"></EllipseCard>
					</div>

					<v-button text="НАПИШИ МНЕ"></v-button>
				</div>
			</div>

			<img src="/img/photo-1.jpg" alt="photo" class="the-banner__photo" />
		</div>
	</section>
</template>

<script>
	import StarCard from '@/components/StarCard.vue';
	import EllipseCard from '@/components/EllipseCard.vue';

	export default {
		name: 'TheBanner',
		components: { StarCard, EllipseCard },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-banner {
		position: relative;
		padding-top: 24rem;
		padding-bottom: 10rem;
		&__container {
			position: relative;
			display: flex;
		}

		&__col {
		}
		&__row {
			position: relative;
			display: flex;
			align-items: flex-end;
			transform: translateY(-3rem);
			.star-card {
				position: absolute;
				left: -4rem;
				top: -1rem;
				width: 14rem;
				height: 14rem;
			}
		}

		&__title {
			transform: translateX(-2rem);
			&_i {
				color: $accent;
				font-style: italic;
				padding-right: 2rem;
				font-weight: 400;
			}
		}
		&__description {
			position: relative;
			font-size: $text-s;
		}

		&__experience {
			margin-right: 8rem;
			.ellipse-card {
				position: relative;
				&:first-child {
					transform: translateX(6rem) rotate(-3.79deg);
					z-index: 2;
				}
				&:last-child {
					transform: translate(-3rem, -2rem) rotate(3.99deg);
				}
			}
		}

		&__photo {
			transform: translate(-14rem, 21rem);
			width: 33rem;
			height: 35rem;
			object-fit: cover;
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
		}
	}
</style>
