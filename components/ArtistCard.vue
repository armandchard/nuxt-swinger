<template>
  <div class="cursor-pointer hover:shadow-lg hover:opacity-80 rounded-full">
    <div class="h-28 sm:w-60 w-3/4 absolute flex justify-center items-center">
      <img class="object-cover h-20 w-20 rounded-full" :src="artist.picture.medium" alt="profile picture" />
    </div>

    <div class="h-40 mx-4 w-full bg-opacity-80 bg-yellow-500 rounded-3xl shadow-md sm:mx-0">
      <div class="h-1/3 w-full flex justify-between items-baseline px-2 py-5"></div>

      <div class="bg-white dark:bg-gray-700 h-2/3 w-full rounded-3xl flex flex-col justify-around items-center">
        <div class="w-full h-1/2 flex justify-between items-center px-2 pt-2">
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 dark:text-white text-xs">Age</h1>
            <h1 class="text-gray-600 dark:text-white text-xs font-bold">{{ artist.dob.age }}</h1>
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="text-gray-500 dark:text-white text-xs">From</h1>
            <h1 class="text-gray-600 dark:text-white text-xs font-bold">{{ artist.location.country }}</h1>
          </div>
        </div>
        <div class="w-full h-1/2 mb-2 flex flex-col justify-center items-center">
          <h1 class="text-gray-700 dark:text-white font-bold">{{ artist.name.first }} {{ artist.name.last }}</h1>
          <h1 class="text-gray-500 dark:text-white text-sm">{{ artist.email }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    artist: {
      type: Object,
      default: null,
    },
  },
  setup() {},
})
</script>
