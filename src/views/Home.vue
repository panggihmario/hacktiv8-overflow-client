<template>
	 <v-app id="inspire">
      <v-container>
          <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                  <v-card>
                    <v-container >
                        <form>
                          <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="email" box label="email" id="email" type="email" v-model="inputEmail">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                           <v-layout row>
                            <v-flex xs12>
                              <v-text-field name ="password" box label="password" id="password" v-model="inputPassword" type="password">
                              </v-text-field>
                            </v-flex>
                          </v-layout>
                                <v-layout row>
                                  <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" dark v-on:click="login">Sign In </v-btn>
                                </div>
                                  </v-flex>
                                <v-flex xs 6>
                                    <div>
                                   <v-btn round color="primary" dark >Register</v-btn>
                                </div>
                                  </v-flex>
                                </v-layout>      
                        </form>
                    </v-container>
                  </v-card>
              </v-flex>
          </v-layout>
      </v-container>
   
</v-app>
</template>

<script>
// @ is an alias to /src
import {mapActions,mapState} from 'vuex'

export default {
	name: 'home',
  components: {

  },
  methods :{
    ...mapActions([
      "login"
    ])
  },
     computed :{
        ...mapState([
            'email','password'
        ]),
            inputEmail :{
                get(){
                    return this.$store.state.email
                },
                set(value){
                    this.$store.commit('setEmail',value)
                }
            },
            inputPassword : {
                get(){
                    return this.$store.state.password
                },
                set(value){
                    this.$store.commit('setPassword',value)
                }
            }
          }
}
</script>
<style lang="scss" scoped>
.container {
    max-width: 1185px;
	 margin-top : 60px;
}

</style>
