<script lang="ts">
	import type { ServiceTool } from '$lib/ts/types';
	import Accordion from './Accordion.svelte';

	const {
		position,
		title,
		content,
		tools,
		width = $bindable(),
		height = $bindable()
	}: {
		position: number;
		title: string;
		content: string;
		tools: ServiceTool[];
		width: number;
		height: number;
	} = $props();

	const modifier = 2;

	let delta_x = (Math.random() * 2 - 1) * modifier;
	let delta_y = (Math.random() * 2 - 1) * modifier;

	let service_item: HTMLLIElement;

	// move service item around randomly on the screen
	const moveServiceItem = () => {
		if (!service_item) return;

		if (
			!(
				service_item.offsetLeft + delta_x > 0 &&
				service_item.offsetLeft + delta_x < width - service_item.offsetWidth &&
				service_item.offsetTop + delta_y > 0 &&
				service_item.offsetTop + delta_y < height - service_item.offsetHeight
			)
		) {
			delta_x = -delta_x;
			delta_y = -delta_y;
		}
		// if the service is found out of bounds for some reason such as resizing the window, reset the position
		if (service_item.offsetLeft + delta_x < 0) {
			service_item.style.left = '0px';
		}
		if (service_item.offsetLeft + delta_x > width - service_item.offsetWidth) {
			service_item.style.left = `${width - service_item.offsetWidth}px`;
		}
		if (service_item.offsetTop + delta_y < 0) {
			service_item.style.top = '0px';
		}
		if (service_item.offsetTop + delta_y > height - service_item.offsetHeight) {
			service_item.style.top = `${height - service_item.offsetHeight}px`;
		}
		service_item.style.left = `${service_item.offsetLeft + delta_x}px`;
		service_item.style.top = `${service_item.offsetTop + delta_y}px`;
	};

	setInterval(moveServiceItem, 100);
</script>

{#snippet content_snippet()}
	{content}
	<ul class="list-disc list-inside">
		{#each tools as tool}
			<li>
				<a class="text-blue-500" href={tool.url} target="_blank" rel="noopener noreferrer"
					>{tool.name}</a
				>
			</li>
		{/each}
	</ul>
{/snippet}

<li
	bind:this={service_item}
	class="fixed left-1/2 -translate-x-1/2 bg-gray-700 dark:bg-black"
	style="top: {position}px"
>
	<Accordion {title} content={content_snippet} open={false} />
</li>
