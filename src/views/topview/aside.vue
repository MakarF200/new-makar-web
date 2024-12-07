<template>
   <ul class="menu bg-purple-100 rounded-box w-46">
      <RouterLink to="/">
         <ul class="bg-purple-200 rounded-box w-40">
            <li class="aside-top">
               <div class="avatar">
                  <div class="w-10 rounded-full">
                     <img src="/public/makarpic.png" />
                  </div>
               </div>
               <div class="name">
                  <h2>Makar</h2>
               </div>
            </li>
         </ul>
      </RouterLink>
      
   <li>
      <RouterLink to="home">
         <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V42H39V18L24 6L9 18Z" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 29V42H29V29H19Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M9 42H39" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>
         Home
      </RouterLink>
   </li>
   <li>
      <RouterLink to="project">
         <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 14L24 4L4 14V34L24 44L44 34V14Z" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M4 14L24 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 44V24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 14L24 24" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 9L14 19" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
         Project
      </RouterLink>
   </li>
   <li>
      <RouterLink to="blog">
         <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 37H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
         Blog
      </RouterLink>
   </li>
   <li>
      <RouterLink to="text">
         <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 37C7 29.2967 7 11 7 11C7 7.68629 9.68629 5 13 5H35V31C35 31 18.2326 31 13 31C9.7 31 7 33.6842 7 37Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M35 31C35 31 14.1537 31 13 31C9.68629 31 7 33.6863 7 37C7 40.3137 9.68629 43 13 43C15.2091 43 25.8758 43 41 43V7" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 37H34" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
         text
      </RouterLink>
   </li>
   </ul>
</template>
<script lang="ts" setup>
   import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped>
.aside-top {
   display: flex !important; 
   flex-direction: row;
}
</style>