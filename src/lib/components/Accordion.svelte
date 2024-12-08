<script lang="ts">
	import { ChevronDownIcon, ChevronUpIcon } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	let {
		title,
		content,
		open = $bindable(false)
	}: {
		title: string;
		content: Snippet;
		open: boolean;
	} = $props();

	const toggle = () => {
		open = !open;
	};
</script>

<div class="border border-gray-300 rounded-lg">
	<button class="flex justify-between items-center p-4 cursor-pointer" onclick={toggle}>
		<h3 class="text-xl">{title}</h3>
		{#if open}
			<ChevronUpIcon class="size-6" />
		{:else}
			<ChevronDownIcon class="size-6" />
		{/if}
	</button>
	{#if open}
		<div class="p-4">
			{@render content()}
		</div>
	{/if}
</div>
