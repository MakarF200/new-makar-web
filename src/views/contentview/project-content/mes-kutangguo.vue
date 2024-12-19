<template>
   <div class="relative isolate overflow-hidden bg-white">
     <div class="">
      <div class="mx-auto px-6 pt-8 lg:flex w-4/6">
       <!-- 文字 -->
       <div class="mx-auto max-w-96 lg:mx-0 lg:shrink-0 lg:pt-8">
         <!-- 标题 -->
         <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Deploy to the cloud with confidence</h1>
         <!-- 介绍内容 -->
         <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
       </div>
       <!-- 图片 -->
       <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
         <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
           <div class="-m-2 rounded-xl bg-gray-900/5 p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
             <img src="https://tailwindui.starxg.com/plus/img/component-images/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" />
           </div>
         </div>
       </div>
      </div>
       <!-- 轮播图片 -->
       <div class="carousel w-2/4 m-16 rounded-box w-30">
         <div id="slide1" class="carousel-item relative w-full">
            <img
               src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
               class="w-1/2W object-cover" />
            <img
               src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
               class="w-1/2" />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
               <a href="#slide1" class="btn btn-circle">❮</a>
               <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
         </div>
         <div id="slide2" class="carousel-item relative w-full">
            <img
               src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
               class="w-1/2" />
            <img
               src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
               class="w-1/2" />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
               <a href="#slide1" class="btn btn-circle">❮</a>
               <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
         </div>
      </div>
     </div>
   </div>
 </template>
 
 <script setup>
 import { ChevronRightIcon } from '@heroicons/vue/20/solid'
 </script>