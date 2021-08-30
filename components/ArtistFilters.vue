<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4">
    <div class="w-full">
      <input
        :value="name"
        type="text"
        class="
          mt-1
          text-sm
          block
          w-full
          rounded-xl
          bg-gray-100
          text-gray-800
          border-transparent
          focus:border-none
          focus:bg-white
          dark:focus:bg-gray-200
          focus:ring-0
          focus:outline-none
          p-2
        "
        placeholder="Quick search"
        required
        @input="updateInput"
      />
    </div>
    <div class="w-full">
      <select
        :value="nationality"
        class="
          mt-1
          text-sm
          block
          w-full
          rounded-xl
          bg-gray-100
          text-gray-800
          border-transparent
          focus:border-none
          focus:bg-white
          dark:focus:bg-gray-200
          focus:ring-0
          focus:outline-none
          p-2
        "
        @change="updateSelect"
      >
        <option disabled value="">Nationality</option>
        <option v-for="nat in nationalities" :key="nat.id" :value="nat.id">{{ nat.label }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ssrRef } from '@nuxtjs/composition-api'
import { ArtistFilter, Nationality } from '../declarations'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    nationality: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const filters = ssrRef((): ArtistFilter => ({ name: '', nationality: '' }))
    const updateInput = (payload: Event): void => {
      const target: HTMLInputElement = payload.target as HTMLInputElement
      filters.value.name = target?.value
      emit('onUpdate', filters.value)
    }

    const updateSelect = (payload: Event): void => {
      const target: HTMLInputElement = payload.target as HTMLInputElement
      filters.value.nationality = target?.value
      emit('onUpdate', filters.value)
    }

    const nationalities: Array<Nationality> = [
      { id: '', label: 'All' },
      { id: 'AU', label: 'Australia' },
      { id: 'BR', label: 'Brazil' },
      { id: 'CA', label: 'Canada' },
      { id: 'CH', label: 'Switzerland' },
      { id: 'DE', label: 'Germany' },
      { id: 'DK', label: 'Denmark' },
      { id: 'ES', label: 'Espagna' },
      { id: 'FI', label: 'Finland' },
      { id: 'FR', label: 'France' },
      { id: 'GB', label: 'United Kingdom' },
      { id: 'IE', label: 'Ireland' },
      { id: 'IR', label: 'Iran' },
      { id: 'NO', label: 'Norway' },
      { id: 'NL', label: 'Netherlands' },
      { id: 'NZ', label: 'New Zealand' },
      { id: 'TR', label: 'Turkey' },
      { id: 'US', label: 'United States' },
    ]

    return { updateInput, updateSelect, nationalities }
  },
})
</script>
