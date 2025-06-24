<script setup>
import {ref} from 'vue'

import { useEventsStore } from '../stores/events'
  const eventStore = useEventsStore() //making the events accesible
  const events= eventStore.events  //linking to te event
</script>

<template>
 <v-container>
    <v-row>
        <v-col md="14" v-for ="event in events" :key="event">
             <v-card
    class="mx-auto"
    max-width="400"
    color="teal-darken-4"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{ event.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
     10
    </v-card-subtitle>

    <v-card-text>
      <div>KENYA</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :text="event.category"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>

        </v-col>
    </v-row>
 </v-container>
</template>