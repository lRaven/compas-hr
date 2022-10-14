<template>
	<section class="the-conclusion">
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
						text="11 лет опыта"
						class="the-conclusion__ellipse the-conclusion__ellipse-years"
					></EllipseCard>
					<EllipseCard
						text="120+ проектов"
						class="the-conclusion__ellipse the-conclusion__ellipse-projects"
					></EllipseCard>
				</div>

				<div class="the-conclusion__col">
					<h4 class="the-conclusion__description">
						Смело обращайтесь ко мне, если вам нужен надежный коллектив для
						IT-проекта. Соберу команду профессионалов – от программистов до
						копирайтеров – специально под ваши задачи.
					</h4>

					<VButton text="НАПИШИ МНЕ"></VButton>

					<img
						src="/img/icons/css.svg"
						class="the-conclusion__icon-css"
						alt="css"
					/>
				</div>
			</div>

			<div class="the-conclusion__name-wrapper">
				<h1 class="the-conclusion__name">
					Кузне<br />
					цов Василий
				</h1>
			</div>
		</div>
	</section>
</template>

<script>
	import StarCard from '@/components/StarCard.vue';
	import EllipseCard from '@/components/EllipseCard.vue';

	export default {
		name: 'TheConclusion',
		components: { StarCard, EllipseCard },
	};
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/variables';

	.the-conclusion {
		background-color: $gray;

		&__row {
			display: flex;
			gap: 5rem;
		}

		&__card {
			position: relative;
			display: flex;
			flex-direction: column;
			max-width: 80rem;
		}

		&__exclamation-points {
			width: 13rem;
			height: 14rem;
			object-fit: contain;
			margin-bottom: 2rem;
		}
		&__photo {
			height: 96rem;
			width: 100%;
			max-width: 80rem;
			object-fit: cover;
		}

		&__programmers {
			position: absolute;
			left: -17rem;
			top: 20rem;
			display: flex;
			flex-direction: column;
			&-counter {
				margin-bottom: 1rem;
			}
			&-description {
				font-size: $text-m;
			}
		}

		&__ellipse {
			position: absolute;
			&-years {
				right: 6rem;
				top: 13rem;
				transform: rotate(-3.79deg);
				z-index: 1;
			}
			&-projects {
				right: -3rem;
				top: 20rem;
				transform: rotate(3.99deg);
			}
		}

		&__description {
			margin-bottom: 7rem;
		}

		&__col {
			max-width: 56rem;
			margin-top: 3rem;
			position: relative;

			.v-button {
				padding: 2rem;
				width: 100%;
			}
		}

		&__icon {
			&-css {
				position: absolute;
				bottom: 15rem;
				left: -2rem;
			}
		}
	}
</style>
