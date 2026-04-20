<script lang="ts">
	import Button from './button.svelte';
	import MultiSelect from './multi-select.svelte';
	import type { ShuttleClass, ShuttleEngine, ShuttleFilters, ShuttleGroup } from '$lib';

	interface Props {
		className?: string;
		filters: ShuttleFilters;
		shipyardOptions: Record<ShuttleGroup, string>;
		classOptions: Record<ShuttleClass, string>;
		engineOptions: Record<ShuttleEngine, string>;
		onReset: () => void;
	}

	let {
		className = '',
		filters,
		shipyardOptions,
		classOptions,
		engineOptions,
		onReset
	}: Props = $props();
</script>

<style>
	.filter-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.filter-label {
		color: var(--text-primary-2);
		font-size: 16px;
		width: 100%;
	}
</style>

<div class="w-fit h-fit min-w-62.5 panel-primary py-2.5 px-3 flex flex-col gap-2.5 {className}">
	<span class="h1">Поиск:</span>
	<div class="filter-item">
		<span class="filter-label">Название:</span>
		<input type="text" name="name" placeholder="Название шаттла" bind:value={filters.name} />
	</div>

	<div class="filter-item">
		<span class="filter-label">Верфь:</span>
		<select name="shipyard" bind:value={filters.group}>
			<option value="">Любая</option>
			{#each Object.entries(shipyardOptions) as [value, label] (value)}
				<option value={value}>{label}</option>
			{/each}
		</select>
	</div>

	<div class="filter-item">
		<span class="filter-label">Категория:</span>
		<MultiSelect bind:selected={filters.shuttleClass} options={classOptions} />
	</div>

	<div class="filter-item">
		<span class="filter-label">Двигатель:</span>
		<select name="engine" bind:value={filters.engine}>
			<option value="">Любой</option>
			{#each Object.entries(engineOptions) as [value, label] (value)}
				<option value={value}>{label}</option>
			{/each}
		</select>
	</div>

	<Button text="Сбросить фильтры" onClick={onReset} />
</div>
