<template>
  <div class="app flex fixed h-screen w-screen dark:bg-gray-800 justify-evenly">
    <div class="container mx-auto p-10 max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ArtistCard v-for="artist in artists" :key="artist.id.value" :artist="artist" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $axios }) {
    const response = await $axios.$get('https://randomuser.me/api/?results=150')
    return { artists: response.results }
  },
  data() {
    return {
      artists: [],
    }
  },
})
</script>
