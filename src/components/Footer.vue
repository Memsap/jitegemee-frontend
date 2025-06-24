<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-darken-3">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">© 2025 [Jitegemee School]. All rights reserved.  
This platform was created to inform, inspire, and empower individuals through innovation, creativity, and a commitment to excellence.  
We believe in building meaningful connections, delivering reliable solutions, and maintaining the highest standards of professionalism in every interaction.  
Your journey matters to us — and we're here to support it, every step of the way.

    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Jitegemee</strong>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>