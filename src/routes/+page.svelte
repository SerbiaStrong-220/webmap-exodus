<script lang="ts">
	import Filter from '$lib/filter.svelte';
	import ShuttleView from '$lib/shuttle-view.svelte';
	import { defaultShuttleFilters, filterShuttles, getShuttles, shuttleConfig } from '$lib';

	const shuttles = getShuttles();
	let filters = $state({
		...defaultShuttleFilters
	});

	const filteredShuttles = $derived(filterShuttles(shuttles, filters));

	function resetFilters() {
		filters.name = defaultShuttleFilters.name;
		filters.group = defaultShuttleFilters.group;
		filters.shuttleClass = defaultShuttleFilters.shuttleClass;
		filters.engine = defaultShuttleFilters.engine;
	}
</script>

<!-- TODO: Don't forget about SEO -->

<div class="w-full p-8 flex flex-row gap-8 h-full min-h-fit">
	<Filter
		className="sticky top-20"
		{filters}
		shipyardOptions={shuttleConfig.shipyard}
		classOptions={shuttleConfig.classes}
		engineOptions={shuttleConfig.engines}
		onReset={resetFilters}
	/>
	<div class="panel-secondary w-full h-full px-2.5 py-3 flex flex-col gap-[20px]">
		<span class="text-(--text-primary-2)">Результаты поиска:</span>
		<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
			{#each filteredShuttles as shuttle (shuttle.id)}
				<ShuttleView {shuttle} />
			{:else}
				<span class="text-(--text-primary-2)">Шаттлы по текущим фильтрам не найдены.</span>
			{/each}
		</div>
	</div>
</div>
