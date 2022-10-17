<template>
	<div class="page-home">
		<TheBanner />
		<TheSpecialists />
		<TheWorkflow />
		<TheProcesses />
		<TheConclusion />
	</div>
</template>

<script>
	import TheBanner from '@/components/TheBanner.vue';
	import TheSpecialists from '@/components/TheSpecialists.vue';
	import TheWorkflow from '@/components/TheWorkflow.vue';
	import TheProcesses from '@/components/TheProcesses.vue';
	import TheConclusion from '@/components/TheConclusion.vue';

	export default {
		name: 'PageHome',
		components: {
			TheBanner,
			TheSpecialists,
			TheWorkflow,
			TheProcesses,
			TheConclusion,
		},
	};
</script>
