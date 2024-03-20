<script lang="ts">
	import '$lib/app.css'
	import { slidesStore } from '$lib/stores/stores'
	import { onMount } from 'svelte'
	import { slides } from '$lib/slides'

	let audio: HTMLAudioElement
	let audioPlaying: boolean = false

	const toggle = () => {
		if (audioPlaying) {
			audio.pause()
		} else {
			audio.play()
		}
	}

	onMount(() => {
		audio.readyState >= 2 && audio.play()
	})

	const keydown = (e: KeyboardEvent) => {
		e.preventDefault()

		switch (e.key) {
			case 'ArrowLeft':
				slidesStore.back()
				break
			case 'ArrowRight':
				slidesStore.next()
				break
			case ' ':
				toggle()
				break
		}
	}

	const onPlay = () => {
		audioPlaying = true
	}
	const onPause = () => {
		audioPlaying = false
	}
</script>

<slot />

<audio loop playsinline volume="0.5" bind:this={audio} on:play={onPlay} on:pause={onPause}>
	<source src="/assets/audio/grants-opus.mp3" type="audio/mp3" />
</audio>

<svelte:document on:keydown={keydown} />

{#each slides as slide}
	<link rel="prefetch" href="/assets/clips/{slide}.mp4" />
{/each}
