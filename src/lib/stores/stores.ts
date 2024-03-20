import { get, writable } from 'svelte/store'
import slides from '$lib/slides'

export const slidesStore = writable(0)

export const nextSlide = () => {
	slidesStore.update((slide) => {
		if (slide < slides.length - 1) {
			return slide + 1
		}
		return slide
	})
}
export const backSlide = () => {
	slidesStore.update((slide) => {
		if (slide > 0) {
			return slide - 1
		}
		return slide
	})
}
export const resetSlides = () => {
	slidesStore.set(0)
}
