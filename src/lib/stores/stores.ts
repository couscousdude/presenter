import { get, writable } from 'svelte/store'
import { slides } from '$lib/slides'

export const createSlidesStore = () => {
	const { subscribe, update } = writable(0)

	return {
		subscribe,
		next: () => {
			if (slides.length - 1 >= get({ subscribe })) {
				update(() => slides.length - 1)
				return
			}
			update((v) => v + 1)
		},
		back: () => {
			if (get({ subscribe }) <= 0) {
				update(() => 0)
				return
			}
			update((v) => v - 1)
		},
		reset: () => update(() => 0)
	}
}

export const slidesStore = createSlidesStore()
