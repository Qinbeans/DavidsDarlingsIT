<script lang="ts">
	import ServiceItem from '$lib/components/ServiceItem.svelte';
	import { service_items } from '$lib/ts/config';

	let innerWidth: number;
	let innerHeight: number;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="h-dvh w-dvw grid place-content-center">
	<div class="w-full text-center border rounded-lg p-4 bg-black">
		<h1 class="text-4xl">🕵️ Davids Darling's IT</h1>
		<h2 class="text-2xl">DIGITAL FORENSICS YOU CAN TRUST</h2>
	</div>
</div>
<ul>
	{#each service_items as service_item, i}
		<ServiceItem
			title={service_item.title}
			content={service_item.content}
			tools={service_item.tools}
			bind:width={innerWidth}
			bind:height={innerHeight}
			position={i * 50 + innerHeight / 2 + 25}
		/>
	{/each}
</ul>
