<template>
<div id="app">

     <v-app id="inspire">
    <navbar/>
    
      <v-layout row wrap>
      
        <v-flex xs3>
          <v-container>
               <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            height="200px"
          ></v-card-media>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
          </v-container>
        </v-flex>

           <v-flex xs9>
             <v-container>

          <v-card dark color="secondary">
            <v-card-text class="px-0">8</v-card-text>
          </v-card>
             </v-container>
        </v-flex>
       
       
        
      </v-layout>
    
  </v-app>



</div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  components : {
    navbar
  }
}
</script>

