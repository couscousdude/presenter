<script lang="ts">
	import { onMount } from 'svelte'
	import { slidesStore } from '$lib/stores/stores'
	import slides from '$lib/slides'

	let video: HTMLVideoElement

	onMount(() => {
		// if (video.requestFullscreen) video.requestFullscreen()
	})

	const keydown = (e: KeyboardEvent) => {
		e.preventDefault()

		if (e.key === 'k') {
			video.paused ? video.play() : video.pause()
		}
	}
</script>

<svelte:document on:keydown={keydown} />

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

<style>
	div {
		@apply bg-black;
	}
	video {
		@apply bg-black;
	}
</style>
