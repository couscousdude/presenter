<script lang="ts">
	import { onMount } from 'svelte'
	import { slidesStore } from '$lib/stores/stores'
	import slides from '$lib/slides'

	let video: HTMLVideoElement

	onMount(() => {
		// if (video.requestFullscreen) video.requestFullscreen()
	})
</script>

{#if $slidesStore === 0}
	<h1>Test</h1>
{:else if $slidesStore === slides.length - 1}
	<h1>Test 2</h1>
{:else}
	<div class="fixed inset-0 w-full h-full z-50">
		<video
			class="object-cover w-full h-full"
			autoplay
			playsinline
			src={`/assets/clips/${slides[$slidesStore]}.mp4`}
			bind:this={video}
		>
			<slot />
		</video>
	</div>
{/if}

<style>
	div {
		@apply bg-black;
	}
	video {
		@apply bg-black;
	}
</style>
