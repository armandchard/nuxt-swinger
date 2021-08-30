<template>
  <div class="app flex flex-col w-full bg-gray-200 dark:bg-gray-800 justify-evenly">
    <Topnav></Topnav>
    <div class="container mx-auto p-10 max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <ArtistFilters @onUpdate="onUpdated"></ArtistFilters>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ArtistCard v-for="artist in artists" :key="artist.id.value" :artist="artist" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Topnav from '~/components/Topnav.vue'
import ArtistFilters from '~/components/ArtistFilters.vue'
import { ArtistFilter, Artist } from '~/declarations'

export default Vue.extend({
  components: { ArtistFilters, Topnav },
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://randomuser.me/api/?results=150&exc=login,registered')
    return { artistsData: response.results }
  },
  data() {
    return {
      artistsData: [],
      filters: { name: '', nationality: '' } as ArtistFilter,
    }
  },
  computed: {
    artists(): Array<any> {
      const filtered = this.artistsData.filter((artist: Artist) => {
        if (this.filters.nationality !== '') {
          return artist.nat === this.filters.nationality && artist.name.first.includes(this.filters.name || '')
        }
        return (
          artist.name.first.toLowerCase().includes(this.filters.name?.toLowerCase() || '') ||
          artist.name.last.toLowerCase().includes(this.filters.name?.toLowerCase() || '') ||
          artist.email.toLowerCase().includes(this.filters.name?.toLowerCase() || '') ||
          artist.location.country.toLowerCase().includes(this.filters.name?.toLowerCase() || '') ||
          artist.location.city.toLowerCase().includes(this.filters.name?.toLowerCase() || '') ||
          artist.dob.age === parseInt(this.filters.name || '')
        )
      })
      return filtered
    },
  },
  methods: {
    onUpdated(filters: ArtistFilter) {
      this.filters = filters
    },
  },
})
</script>

<style lang="postcss">
html,
body,
#__nuxt,
#__layout {
  margin: 0;
  height: 100%;
  width: 100%;
  @apply bg-gray-200;
}
</style>
