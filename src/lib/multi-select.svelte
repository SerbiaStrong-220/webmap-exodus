<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		options: Record<string, string>;
		selected: string[];
	}

	let { options, selected = $bindable([]) }: Props = $props();

	let isOpen = $state(false);
	let container: HTMLElement;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function handleOptionClick(value: string) {
		if (selected.includes(value)) {
			selected = selected.filter((v) => v !== value);
		} else {
			selected = [...selected, value];
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (container && !container.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	const displayText = $derived.by(() => {
		if (selected.length === 0) return 'Любая';
		if (selected.length <= 2) {
			return selected.map((v) => options[v]).join(', ');
		}
		return `Выбрано: ${selected.length}`;
	});
</script>

<div class="relative w-full" bind:this={container}>
	<button
		type="button"
		class="flex h-[34px] w-full cursor-pointer items-center justify-between border border-(--secondary) bg-[#04050a] px-2.5 py-[5px] text-left outline-none transition-colors hover:border-(--primary)"
		onclick={toggleDropdown}
	>
		<span class="truncate text-sm">{displayText}</span>
		<svg
			class="h-4 w-4 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if isOpen}
		<div
			class="panel-secondary absolute z-50 mt-1 max-h-60 w-full overflow-y-auto border-t-0 bg-(--background-panel) shadow-xl"
		>
			<div class="flex flex-col">
				{#each Object.entries(options) as [value, label] (value)}
					<button
						type="button"
						class="flex w-full cursor-pointer items-center gap-2 px-2.5 py-2 text-left transition-colors hover:bg-(--secondary)"
						onclick={() => handleOptionClick(value)}
					>
						<div
							class="flex h-4 w-4 shrink-0 items-center justify-center border border-(--secondary) {selected.includes(
								value
							)
								? 'bg-(--primary) border-(--primary)'
								: 'bg-transparent'}"
						>
							{#if selected.includes(value)}
								<svg class="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
						</div>
						<span class="truncate text-sm">{label}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	::-webkit-scrollbar {
		width: 6px;
	}
	::-webkit-scrollbar-track {
		background: var(--background);
	}
	::-webkit-scrollbar-thumb {
		background: var(--secondary);
	}
	::-webkit-scrollbar-thumb:hover {
		background: var(--primary);
	}
</style>
