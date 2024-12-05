import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const data = [
   {
     title: 'General',
     content: [
      {
         svg : "",
         name : "Web Development",
      },
      {
         svg : "",
         name : "AI",
      },
      {
         svg : "",
         name : "figma",
      },
      {
         svg : "",
         name : "Prototyping",
      },
      {
         svg : "",
         name : "Testing",
      },
      {
         svg : "",
         name : "Flowcharts",
      },
      {
         svg : "",
         name : "Diagramming",
      },
      {
         svg : "",
         name : "Photoshop",
      },
      {
         svg : "",
         name : "Illustrator",
      },
      {
         svg : "",
         name : "XD",
      },
      {
         svg : "",
         name : "Figma",
      },
      {
         svg : "",
         name : "AI",
      },
     ],
   },
 ]
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, data }
})
