<template>
    <div class="mx-10">
        <v-card color="blue lighten-2 "
            
        >
            
            <v-card-title
            color="white"           
              class="text-lg text-uppercase text-center justify-center"
            >
              {{selectedType.name}}
            </v-card-title>            
            <v-divider>//33</v-divider>
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"
                
                class="text-uppercase mb-4"
                color="blue lighten-4"                
            >
                <v-card-title class="text-center justify-center ">
                    {{ pokemon.pokemon.name }} 
                </v-card-title>
                 <v-img
                 max-width="100px"
                 class="mx-auto"
                    :src="pokemonImageURL + pokemon.pokemon.url.slice(33, -1) + '.png'"
                 >                    
                </v-img> 
                <v-card-actions>
                    <v-spacer></v-spacer>
                 <v-btn  x-small 
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
    </div>
</template>


<script>

export default {
    data() {
    return {
      pokemonImageURL:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      // other possible image urls:
      // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{ID}.png
      // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{ID}.png
      // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{ID}.png
      typeURL: "https://pokeapi.co/api/v2/type/",
      types: [],
      typeDetailId: "",
      selectedType: [],
      pokemonsIds: [],
           
    };
  },
  methods: {
    pokemonDetails() {    
      this.typeDetailId = this.$route.params.id; // Use selected Pokémon's ID
      fetch(this.typeURL + this.typeDetailId)
        .then(response => response.json())
        .then(response =>{
            
            this.selectedType = response;
            this.pokemonsIds = response.pokemon
                     
      }) 
      
    },
    
  },
  created() {
      this.pokemonDetails();     
  },   
  
};
    
</script>

<style scoped>

</style>