<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="bg-gray-300 dark:bg-black h-full min-h-dvh w-full text-black dark:text-gray-400">
	{@render children()}
</main>
