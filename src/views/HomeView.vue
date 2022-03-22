<template>
  <div class="mx-2">
    <v-card
      color="white lighten-2 mb-4 mx-auto"
      dark           
      elevation="24"
      width="500"
      class="justify-center mx-auto rounded-xl"
    >
      <v-card-title class="text-h5 red lighten-3 align-center justify-center pokeball"> 
        Pokedex made by @guilimadev
      </v-card-title>
      <div class="text-center">        
        <v-divider color="black"></v-divider>
        <span @click="alert()" class="dot"></span>
        <v-expand-transition>
          <div v-show="show" class="mx-auto">            
            <v-divider></v-divider>
            <v-img
              src="../assets/poke2.png" 
            >
            </v-img>
          </div>
        </v-expand-transition>      
      </div>
      <v-card-text class="black--text mt-n8">        
        Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator. Back in 1982 Satoshi started a gaming magazine together with his friends called Game Freak, but after a while he decided to start making his own video games, instead of writing about them.
      </v-card-text>
    </v-card>
    <v-card
      color="red lighten-3"
      dark
    >
      <v-card-title class="text-h5 red lighten-3 align-center justify-center">
        Search for Pokemon
      </v-card-title>
      <v-card-text> 
        Explore hundreds of Pokemons      
      </v-card-text>
      <v-card-text >
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="black"          
          hide-no-data
          hide-selected
          item-text="name"
          item-value="name"
          label="Search for a Pokemon"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          dark
          return-object
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
    
      <v-expand-transition class="black--text">        
        <v-list
          v-if="model"
          class="white"
        >
          <v-list-item
            v-for="(field, i) in fields"
            :key="i"
            v-model="selectedItem"
            
          >
          
            <v-btn v-if="i == 0" :disabled="!model"
                color="red lighten-3 black--text"
                class="mx-auto"
                @click="$router.push({path: `/pokemon/${field.value}`})"
              >
                Go to {{field.value}} Page
              </v-btn> 
          </v-list-item>
        </v-list>        
       </v-expand-transition>     
      <v-card-actions>
        <v-spacer></v-spacer>        
        <v-btn
          :disabled="!model"
          color="red lighten-3"
          @click="model = null"
        >
          Clear
          <v-icon right>
            mdi-close-circle
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({    
      results: [],
      isLoading: false,
      model: null,
      search: '',
      abilities: [],
      forms: [],
      show: false
    }),
    methods: {
      alert(){
        this.show = !this.show
        console.log(this.show)
      }
    },
    computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          //const key2 = key.charAt(0).toUpperCase() + key.substr(1);
          return {
            value: this.model[key] || 'n/a',
            key            
          }
        })
      },
      items () {
        return this.results.map(result => {         
            
            
          return Object.assign({}, result)
        })          
      },
    },

    watch: {
      search () {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1126")
          .then(res => res.json())
          .then(res => {
            const {counts, results} = res
            this.counts = counts
            this.results = results
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
  }
</script>

<style scoped>
  .uppercase {
    text-transform: uppercase;
  }

  .dot {
  height: 25px;
  width: 25px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: -10px;
  animation: blinker 1s linear infinite;
}
  
@keyframes blinker {
  50% {    
    background-color: red;
  }
} 

.rounded-card {
  border-radius: 50%; 
}
</style>