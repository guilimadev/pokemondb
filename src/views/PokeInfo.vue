<template>
    <div class="mx-4">
        <v-card :color="`${pokemonSpecies.color.name} + lighten-2`">            
            <v-card-title
              dark              
              :class="`text-lg text-uppercase white--text text-center justify-center ${pokemonSpecies.color.name} + darken-1`"
              
            >
              {{ selectedPokemon.name }} #{{selectedPokemon.id}}
            </v-card-title>
            <v-spacer></v-spacer>
            <div class="d-flex flex-column align-center justify-center">
               <v-avatar
                    size="124"
               > 
                   <v-img                
                    :src="pokemonImageURL + selectedPokemon.id + '.png'"
                    :alt="selectedPokemon.name"
                    aspect-ratio="2"
                    >
                   </v-img>
                </v-avatar>
            </div>
            <div class="d-flex flex-row align-center justify-center pa-2 chip">            
                <v-chip 
                    v-for="(info, index) in selectedPokemon.types"
                    :key="index" 
                    :color="`${typesColors[info.type.name]}`"
                    class="ml-2 text-uppercase "
                    @click="$router.push({path: `/type/${info.type.name}`})"                    
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
                    class="white--text"
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
                            class="text-uppercase white--text"
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
                            class="text-uppercase text-center white--text"
                        >
                        {{info.stat.name}}: {{info.base_stat}}                       
                        </p>
                    </v-card-text>
                    </v-card>
                </v-tab-item>                     
            </v-tabs-items>
        </v-card>

        <!-- No evolutions-->
        <v-card 
            class="my-4" 
            :color="`${pokemonSpecies.color.name} + lighten-2`"
            v-if="evolutionChain.chain.evolves_to.length == 0"
        >
            <v-card-title
                :class="`justify-center white--text ${pokemonSpecies.color.name} + darken-1`" 
                :color="`${pokemonSpecies.color.name} + lighten-4`"
            >
                Evolution Chain
            </v-card-title>
            <v-row>
                <v-col                
                cols="12"
                >
                    <v-img
                    :src="pokemonImageURL + evolutionChain.chain.species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>                                                
            </v-row> 
            <v-row>
                <v-col                
                cols="12"
                >
                    <v-card-text class="text-capitalize text-caption text-center">
                    {{evolutionChain.chain.species.name}}
                </v-card-text>                                     
                </v-col>               
            </v-row>
        </v-card>

        <!-- Three evolutions-->
        <v-card 
            class="my-4 white--text justify-space-around "             
            :color="`${pokemonSpecies.color.name} + lighten-2`"
            v-else-if="evolutionChain.chain.evolves_to[0].evolves_to.length == 1"
        >
            <v-card-title 
                :class="`justify-center ${pokemonSpecies.color.name} + darken-1`"                
            >
                Evolution Chain
            </v-card-title>
            <v-row >
                <v-col                
                cols="4"
                class="d-flex justify-center px-6 pt-2"
                
                >
                    <v-img
                    max-width="100"
                    :src="pokemonImageURL + evolutionChain.chain.species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>
                <v-col                
                cols="4"                
                class="d-flex justify-center"
                >
                    <v-img
                    max-width="100"
                    :src="pokemonImageURL + evolutionChain.chain.evolves_to[0].species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>
                <v-col                
                cols="4"
                class="d-flex justify-center"
                >
                    <v-img
                    max-width="100"
                    :src="pokemonImageURL + evolutionChain.chain.evolves_to[0].evolves_to[0].species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>                
            </v-row> 
            <v-row>
                <v-col                
                cols="4"
                >
                    <v-card-text class="text-capitalize text-caption text-center">
                    {{evolutionChain.chain.species.name}}
                </v-card-text>                                     
                </v-col>
                <v-col                
                cols="4"
                >
                    <v-card-text class="text-capitalize text-caption pokeName text-center">
                    {{evolutionChain.chain.evolves_to[0].species.name}}
                </v-card-text>                  
                </v-col>
                <v-col                
                cols="4"
                >   
                    <v-card-text class="text-capitalize text-caption text-center">
                        {{evolutionChain.chain.evolves_to[0].evolves_to[0].species.name}}
                    </v-card-text>                
                </v-col>
            </v-row>
        </v-card>


        <!-- Two evolutions-->
        <v-card 
            class="my-4 white--text" 
            :color="`${pokemonSpecies.color.name} + lighten-2`"
            v-else-if="evolutionChain.chain.evolves_to[0].evolves_to.length == 0"
        >
            <v-card-title 
                :class="`justify-center ${pokemonSpecies.color.name} + darken-1`"   
            >
                Evolution Chain
            </v-card-title>
            <v-row>
                <v-col                
                cols="6"
                >
                    <v-img
                    :src="pokemonImageURL + evolutionChain.chain.species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>
                <v-col                
                cols="6"
                >
                    <v-img
                    :src="pokemonImageURL + evolutionChain.chain.evolves_to[0].species.url.slice(42, -1) + '.png'"                                        
                    >
                    </v-img>                    
                </v-col>                                
            </v-row>
            <v-row>
                <v-col                
                cols="6"
                >
                    <v-card-text class="text-capitalize text-caption text-center">
                    {{evolutionChain.chain.species.name}}
                </v-card-text>                                     
                </v-col>
                <v-col                
                cols="6"
                >
                    <v-card-text class="text-capitalize text-caption text-center">
                    {{evolutionChain.chain.evolves_to[0].species.name}}
                </v-card-text>                  
                </v-col>                
            </v-row> 
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
      typesColors:{
        'normal': 'brown lighten-3',
        'fire': 'amber',
        'water': 'light-blue',
        'electric':  'yellow',
        'grass':  'light-green',
        'ice':  'light-blue',
        'fighting':  'red',
        'poison':  'purple',
        'ground':  'green',
        'flying':  'blue',
        'psychic':  'red',
        'bug':  'light-green accent-3',
        'rock':  'lime',
        'ghost':  'deep-purple',
        'dragon':  'indigo',
        'dark':  'brown',
        'steel':  'grey',
        'fairy':  'pink'
       },      
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
    .chip{
        border: 5px black;
    }

    .pokeName{
       word-break: keep-all; 
    }
</style>