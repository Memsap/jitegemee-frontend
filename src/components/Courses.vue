<script setup>
import {ref} from 'vue'
  import { useCoursesStore } from '../stores/course'
  const courseStore = useCoursesStore() //making the courses accesible
  const courses= courseStore.courses 
   

</script>

<template>
<v-container>
    <v-row>
      <v-col md ="4" v-for="course in courses"> 
      <v-card color = "cyan-darken-4"> 
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          {{course.description}}
        </v-card-text>
    <v-card-text>
            {{ course.intake }}
        </v-card-text>
      </v-card>
    </v-col> 
 </v-row>
</v-container>
</template>