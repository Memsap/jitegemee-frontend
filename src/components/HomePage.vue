<script setup>

</script>

<template>
  <!-- Rotating Images  -->
 <v-carousel>
  <v-carousel-item
    src="../../public/Images/dom-fou-YRMWVcdyhmI-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/matthew-cheng--_mpT0Vojpg-unsplash (1).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/mimi-thian-vdXMSiX-n6M-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/Images/zoshua-colah-iFQpxp5BIck-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

  <!--Latest from Jitegemee -->
  <v-container>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Patnering for a better tomorrow"
        text="Join the mission of the United Nations to create a more just, sustainable, and peaceful world. From climate action to human rights, your voice and actions matter more than eve"
        title="Behind Borders:UN Moments"
        color = "green"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "green">
   
        <template v-slot:title>
        Dream Big. Act Bold  
        </template>

        <template v-slot:subtitle>
          Where Ideas Meet Action
        </template>

        <template v-slot:text>
        
We believe every breakthrough starts with a bold idea. Whether you're building, creating, or leading, we're here to help you make it happen—with tools, insights, and support that move you forward
        </template>
      </v-card>

    
    </v-col>

    <v-col cols="12" md="4">
      <v-card color = "green"> 
        <v-card-item>
          <v-card-title> Innovation in Every Pixel</v-card-title>

          <v-card-subtitle>Designs That Speak Loudly</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          
From sleek interfaces to powerful user experiences, our creative team crafts digital solutions that don’t just look good—they work hard to engage, convert, and inspire.
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</v-container>

  <!-- Patners -->
<v-container>
<v-row>
     <v-col cols="12" md="2">
      <v-img src ="../../public/images/SAF-MAIN-LOGO-400x280.png"></v-img>
  
     </v-col>

     <v-col cols="12" md="2">
      <v-img src ="../../public/images/samsung-01-1-400x280.png"></v-img>
     </v-col>

     <v-col cols="12" md="2">
      <v-img src ="../../public/images/Google-02-01-400x280.png"></v-img>
     </v-col>

     <v-col cols="12" md="2">
      <v-img src ="../../public/images/iBiz-vertical-Logo-01-400x280.png"></v-img>
     </v-col>

     <v-col cols="12" md="2">
      <v-img src ="../../public/images/Oracle-Logo-1995-Present-e1692419896204-400x280.png"></v-img>
     </v-col>

     <v-col cols="12" md="2">
      <v-img src ="../../public/images/SAF-MAIN-LOGO-400x280.png"></v-img>
     </v-col>
    
</v-row>
</v-container>
</template>