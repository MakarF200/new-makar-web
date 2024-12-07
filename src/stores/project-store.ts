import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const StoreProjectData = defineStore('projectData', () => {
  const count = ref(0);
  const data = ref([
   {
     name: 'Desk and Office',
     description: 'Work from home accessories',
     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
     imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
     href: '#',
   },
   {
     name: 'Self-Improvement',
     description: 'Journals and note-taking',
     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
     imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
     href: '#',
   },
   {
     name: 'Travel',
     description: 'Daily commute essentials',
     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
     imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
     href: '#',
   },
 ]);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++
  };

  return { count, doubleCount, increment, data }
})
