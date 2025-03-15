<template>
<MyCarousel></MyCarousel>
<div v-if="data">
    Bonjour {{ data.user.name }}!
  </div>
  <div v-else>
    Tu n'es pas connecté
  </div>


</template>

<script setup lang="ts">
const { signOut } = useAuth()
</script>