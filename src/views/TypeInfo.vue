<template>
    <div v-if="selectedType.name !== 'shadow' && selectedType.name !== 'unknown'" class="mx-4">
      
        <v-card 
          v-if="selectedType.name == 'bug' "          
          :color="`${typesColors[selectedType.name]} + accent-3`" 
          background-color="transparent"          
        >                          
          <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items> 
            </v-card> 
          <v-divider></v-divider>
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]}`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'psychic' "
          :color="`${typesColors[selectedType.name]} + lighten-3`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider><v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]} + lighten-2`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'fighting' "
          :color="`${typesColors[selectedType.name]} + darken-4`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]} + darken-2`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'ice' || selectedType.name == 'fairy'"
          :color="`${typesColors[selectedType.name]} + lighten-3`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]} + lighten-4`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'rock'"
          :color="`${typesColors[selectedType.name]} + darken-2`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]} + darken-3`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'dark' || selectedType.name == 'dragon' || selectedType.name == 'ghost'"
          :color="`${typesColors[selectedType.name]} + darken-2`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center white--text"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4 white--text"
                :color="`${typesColors[selectedType.name]} + darken-4`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else-if="selectedType.name == 'normal'"
          :color="`${typesColors[selectedType.name]} + lighten-3`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center white--text"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4 white--text"
                :color="`${typesColors[selectedType.name]} + lighten-4`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>
        <v-card 
          v-else
          :color="`${typesColors[selectedType.name]} + darken-2`" 
        >
         <v-card-title
            color="white"           
            class="text-lg text-uppercase text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-divider></v-divider>
            <v-card class="ma-4" :color="`${typesColors[selectedType.name]} + accent-2`"  >
              <v-card-title class="text-lg text-uppercase text-center justify-center">
                Damage Relations
              </v-card-title>
              <v-tabs
              v-model="tab"                  
                  :color="`${typesColors[selectedType.name]} + accent-3`"                  
                  grow
              >
                  <v-tab
                      v-for="item in damage"
                      :key="item"
                      :class="`${typesColors[selectedType.name]} + accent-2 black--text`"
                  >
                  {{item}}
                </v-tab>
              </v-tabs>
               <v-tabs-items v-model="tab">
                  <v-tab-item >
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`" class="py-2"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr>
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_to"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                   
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card :color="`${typesColors[selectedType.name]} + accent-2`"  >
                      <v-simple-table :class="`${typesColors[selectedType.name]} + accent-2 py-2`"  >
                        <template v-slot:default>                          
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Power</th>
                            
                            </tr>
                            <tr v-for="(type, index) in selectedType.damage_relations.double_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-2</v-icon>X</v-chip></td>                   
                            </tr>

                            <tr v-for="(type, index) in selectedType.damage_relations.half_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-fraction-one-half</v-icon>X</v-chip></td>                   
                            </tr> 
                            <tr                                  
                                v-for="(type, index) in selectedType.damage_relations.no_damage_from"
                                :key="index"
                            >
                              <td class="text-center text-uppercase">{{type.name}}</td>
                              <td class="text-center"><v-chip color="white"><v-icon>mdi-numeric-0</v-icon>X</v-chip></td>                   
                            </tr>                     
                        </template>
                      </v-simple-table>
                    </v-card>                      
                  </v-tab-item>                     
              </v-tabs-items>              

            </v-card> 
            <v-card 
                v-for="(pokemon, index) in pokemonsIds"
                :key="index"                
                class="text-uppercase ma-4"
                :color="`${typesColors[selectedType.name]} + darken-4`"                
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
                    
                 <v-btn  x-small 
                 class="mx-auto"
                        
                 @click="$router.push({path: `/pokemon/${pokemon.pokemon.name}`})"
                 >
                 Go to
                 </v-btn>
                 </v-card-actions>            
            </v-card>
            
            <v-spacer></v-spacer>            
        </v-card>

        
           
    </div>
    <div v-else-if="selectedType.name == 'shadow'"     
    >
      <v-card                  
          color="mx-4"   
          class="teal darken-2"        
        >                 
          <v-card-title
                     
            class="text-lg teal darken-4 text-uppercase white--text text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>
            <v-spacer></v-spacer>
            <v-card-text class="white--text">
                Shadow Pokémon (Japanese: ダークポケモン Dark Pokémon) are Pokémon that are being used for wrongful acts because they had the doors to their hearts shut artificially, a process created and carried out by Cipher in the Orre region. Collecting Shadow Pokémon through snagging and restoring them to normal by purifying them is the main goal of Pokémon Colosseum and Pokémon XD: Gale of Darkness.
            </v-card-text>
            <v-spacer></v-spacer>      
            <v-card-text class="white--text">
              Shadow Pokémon are created through an undisclosed process that removes the Pokémon's emotions, turning it into a soulless fighting machine. Ein, creator of the process and Cipher's head scientist at the time of Colosseum, refers to this process as "shutting the door to their hearts". In XD, Cipher's science division refines and upgrades the process, allowing many Shadow Pokémon to be produced simultaneously. The head of the science division, Cipher Admin Lovrina, also works on stabilizing the process to increase resistance to purification; her ultimate goal is to create a Shadow Pokémon that is completely impossible to purify.

While normal Pokémon are generally friendly and trusting creatures, Shadow Pokémon are not hesitant to attack with full force, using Shadow moves such as Shadow Rush. Likewise, they do not attack only other Pokémon, and will actually attack Trainers. Shadow Pokémon can sometimes be overwhelmed by their emotions, indicating the relative instability of their Shadow state, and will sometimes enter a state known as Hyper Mode in Colosseum and Reverse Mode in XD. This state will be triggered more often the closer the Pokémon is to purification, making them generally more difficult to battle with until they are ultimately purified. A Pokémon in this state can be cured of it by calling to it in battle or use of a scent, as well as several other methods, or can recover on its own.

An interesting quirk about Shadow Pokémon is their inability to be differentiated from normal Pokémon by all but those with certain abilities or tools. Shadow Pokémon emit a normally invisible dark aura that normal Pokémon do not, which so far has only been able to be detected by Rui through an innate ability, and Michael with his Aura Reader. The only exception is Shadow Lugia, which takes on noticeable alterations, namely having jagged silver eyefins and possessing an overall darker complexion.

Shadow Pokémon cannot level up, and any experience and effort values they gain in battle will be held until they are purified, at which point they will be awarded en masse.
            </v-card-text>      
        </v-card>
    </div>
    <div v-else-if="selectedType.name == 'unknown'"     
    >
      <v-card                  
          color="mx-4"   
          class="teal darken-2"        
        >                 
          <v-card-title
                     
            class="text-lg teal darken-4 text-uppercase white--text text-center justify-center"
          >
              {{selectedType.name}}
          </v-card-title>            
            <v-spacer></v-spacer>      
            <v-card-text class="white--text">
              The ??? type (Japanese: ？？？タイプ ??? type) is a type that exists only in Generations II, III, and IV. It was removed in the Generation V games and has not returned.
            </v-card-text>      
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
      typesColors:{
        'normal': 'brown',
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
        'bug':  'light-green',
        'rock':  'lime',
        'ghost':  'deep-purple',
        'dragon':  'indigo',
        'dark':  'brown',
        'steel':  'grey',
        'fairy':  'pink'
       },
       damage: [
          'Offensive', 'Defensive'
      ],
      tab: null  
           
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
            console.log(this.selectedType)
                     
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