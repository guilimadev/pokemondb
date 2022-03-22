<template>
    <div class="mx-4">
        <v-card :color="`${pokemonSpecies.color.name} + lighten-2`">
            
            <v-card-title
              dark              
              class="text-lg text-uppercase text-center justify-center"
            >
              {{ selectedPokemon.name }} #{{selectedPokemon.id}}
            </v-card-title>
            <v-spacer></v-spacer>
            <div class="d-flex flex-column align-center justify-center">
               <v-avatar
                    size="124"
               > 
                   <v-img                
                    :src="selectedPokemon.sprites.front_default"
                    :alt="selectedPokemon.name"
                    aspect-ratio="2"
                    >
                   </v-img>
                </v-avatar>
            </div>
            <div class="d-flex flex-row align-center justify-center pa-2">            
                <v-chip 
                    v-for="(info, index) in selectedPokemon.types"
                    :key="index" 
                    :color="`${typesColors[info.type.name]}`"
                    class="ml-2 text-uppercase"
                    @click="checkColor(`${typesColors[0]}`)"
                    
                >
                
                    {{ info.type.name}}
                
                </v-chip>            
            </div>
            <div class="d-flex flex-row align-center justify-center pa-2">
                <v-list dense :color="`${pokemonSpecies.color.name} + lighten-2`">
                        <v-list-item-group>
                            <v-list-item>
                               Height: {{selectedPokemon.height/10}}m | Weight: {{selectedPokemon.weight/10}}kg                            
                            </v-list-item>                            
                        </v-list-item-group>
                </v-list>
            </div>
            <v-tabs
            v-model="tab"
                background-color="transparent"
                :color="`${pokemonSpecies.color.name} + lighten-4`"
                grow
            >
                <v-tab
                    v-for="item in items"
                    :key="item"
                >
                {{item}}
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-card
                    :color="`${pokemonSpecies.color.name} + lighten-4`"
                    flat
                    >
                    <v-card-text>
                        <p 
                            v-for="(info, index) in selectedPokemon.abilities"
                            :key="index"
                            class="text-uppercase "
                        >
                        {{info.ability.name}} <span v-if="info.is_hidden" class="font-italic">(Hidden)</span>
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card
                    :color="`${pokemonSpecies.color.name} + lighten-4`"
                    flat
                    >
                    <v-card-text>
                        <p
                            v-for="(info, index) in selectedPokemon.stats"
                            :key="index"
                            class="text-uppercase text-center"
                        >
                        {{info.stat.name}}: {{info.base_stat}}                       
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>                     
            </v-tabs-items>
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
      pokemonURL: "https://pokeapi.co/api/v2/pokemon/",
      pokemons: [],
      pokemonDetailId: "",
      selectedPokemon: [],
      evolutionChain: [],
      pokemonSpecies: [],
      typesColors: 
        {'normal': '#A8A77A',
        'fire': '#EE8130',
        'water': '#6390F0',
        'electric':  '#F7D02C',
        'grass':  '#7AC74C',
        'ice':  '#96D9D6',
        'fighting':  '#C22E28',
        'poison':  '#A33EA1',
        'ground':  '#E2BF65',
        'flying':  '#A98FF3',
        'psychic':  '#F95587',
        'bug':  '#A6B91A',
        'rock':  '#B6A136',
        'ghost':  '#735797',
        'dragon':  '#6F35FC',
        'dark':  '#705746',
        'steel':  '#B7B7CE',
        'fairy':  '#D685AD'},
      
      tab: null,
      max: 255,
      items: [
          'Abilities', 'Base Stats'
      ]
    };
  },
  methods: {
    pokemonDetails() {    
      this.pokemonDetailId = this.$route.params.id; // Use selected Pokémon's ID
      fetch(this.pokemonURL + this.pokemonDetailId)
        .then(response => response.json())
        .then(response =>{
            this.selectedPokemon = response;
            console.log( this.selectedPokemon)            
            fetch('https://pokeapi.co/api/v2/pokemon-species/' + this.pokemonDetailId)
                .then(response => response.json())
                .then(response => {
                    this.pokemonSpecies = response
                    console.log(this.pokemonSpecies.color.name)
                    fetch(response.evolution_chain.url)
                        .then(response2 => response2.json())
                        .then(response2 => {
                            this.evolutionChain = response2
                            console.log(this.evolutionChain)
                        })
                })

          
            
      }) 
    }, 
    checkColor(message){
        console.log(message)
    }
    
  },
  
  created() {
      this.pokemonDetails();
      this.pokemonEvolutionChain();
      

  }
    
};
    
</script>

<style scoped>
    .btn {
         border: none;
        outline: none;
    }
</style>