<template>
  <div class="mx-2">
    <v-card
      color="red lighten-3"
      dark
    >
      <v-card-title class="text-h5 red lighten-3 align-center justify-center">
        Search for a Type
      </v-card-title>
      <v-card-text>
        Explore all of pokemons Types   
      </v-card-text>
      <v-card-text>
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
          label="Search for a Type"
          placeholder="Start typing to Search"
          prepend-icon="mdi-database-search"
          return-object
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
    
      <v-expand-transition class="black--text">        
        <v-list
          v-if="model"
          class="white "
        >
          <v-list-item
            v-for="(field, i) in fields"
            :key="i"
            v-model="selectedItem"
          >
          
            <v-btn v-if="i == 0" :disabled="!model"
                color="red lighten-3 black--text"
                class="mx-auto"
                @click="$router.push({path: `/type/${field.value}`})"
              >
                Go to Type Page
              </v-btn> 
          </v-list-item>
        </v-list>        
       </v-expand-transition>     
      <v-card-actions>
        <v-spacer></v-spacer>        
        <v-btn
          :disabled="!model"
          color="red lighten-3 black--text"
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
      forms: []
    }),

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
        fetch("https://pokeapi.co/api/v2/type/")
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
</style>