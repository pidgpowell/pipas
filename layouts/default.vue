<template>
  <div class="p-2 sm:p-4 h-auto">
    <div class="flex flex-col sm:flex-row sm:items-center">
      <h1 class="text-4xl font-bold tracking-tight">
        <nuxt-link to="/">Pipas</nuxt-link>
      </h1>
      <nav class="sm:text-right w-full p-0">
        <nuxt-link to="/" class="text-md hover:text-emerald-900">Home</nuxt-link>
        <nuxt-link to="/tourdates" class="text-md hover:text-emerald-900">Tour Dates</nuxt-link>
      </nav>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  background: url(https://res.cloudinary.com/pipas/image/upload/v1606135066/background-mountains_dretlx.gif) top left repeat;
}
nav a.nuxt-link-exact-active {
  color: green;
}
</style>