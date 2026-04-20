<script lang="ts">
	import Button from '$lib/button.svelte';
	import ImageModal from '$lib/image-modal.svelte';
	import { formatPrice, getShuttleById, shuttleConfig, shuttleGroupColors } from '$lib';
    import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { resolve } from "$app/paths";

	let isModalOpen = $state(false);
	const id = browser ? page.url.searchParams.get('id') : '';
	let shuttle = $derived(getShuttleById(id ?? ''));
	let shipyardColor = $derived(shuttle ? shuttleGroupColors[shuttle.group] ?? '#0B9FC0' : '#0B9FC0');
</script>

<style>
.content {
    border-color: var(--shipyard);
}
</style>

{#if !shuttle}
	<div class="w-full p-8 flex flex-col gap-4">
		<span class="h1">Шаттл не найден.</span>
		<Button text="Назад" className="w-fit" onClick={() => window.history.back()} />
	</div>
{:else}
	<div class="w-full p-8 flex flex-col h-full" style="--shipyard: {shipyardColor}">
		<div class="panel-secondary content w-full flex-1 h-full px-2.5 -2.5 py-3 flex flex-col md:flex-row gap-2.5 justify-between">
			<div class="min-w-full md:min-w-[30%] max-w-full md:max-w-[50%] w-fit h-fit flex flex-col gap-2.5">
				<div class="flex flex-row items-center gap-5">
					<span class="h1 text-white!">{shuttle.name}</span>
					<span class="text-(--shipyard)">{shuttleConfig.shipyard[shuttle.group]}</span>
				</div>
				<span>Стоимость: {formatPrice(shuttle.price)}</span>
				<span>Описание: {shuttle.description}</span>
				<div class="flex flex-row gap-2.5">
					{#if shuttle.classes.length === 0}
						<span class="text-(--text-primary-2)">Нет классов</span>
					{:else}
						{#each shuttle.classes as shuttleClass (shuttleClass)}
							<span class="text-(--text-primary-2)">#{shuttleConfig.classes[shuttleClass]}</span>
						{/each}
					{/if}
				</div>
				<Button text="Назад" className="w-fit" onClick={() => window.history.back()} />
			</div>
			<div class="max-w-full md:max-w-[70%] min-w-full md:min-w-[50%] w-fit h-full flex justify-center items-center bg-[rgba(0,0,0,0.25)] p-2.5">
				<button
					class="h-full w-fit cursor-zoom-in hover:scale-[1.02] active:scale-95 transition-transform duration-200"
					onclick={() => (isModalOpen = true)}
					aria-label="View full screen"
				>
					<img src={resolve(shuttle.image)} alt={shuttle.name} class="h-full w-fit pointer-events-none" />
				</button>
			</div>
		</div>
	</div>

	{#if isModalOpen}
		<ImageModal src={resolve(shuttle.image)} alt={shuttle.name} onClose={() => (isModalOpen = false)} />
	{/if}
{/if}
