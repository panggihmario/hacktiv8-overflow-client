import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name :'',
    email :'',
    password : ''
  },
  mutations: {
    setName(state,payload){
      state.name = payload
    },
    setEmail(state,payload){
      state.email = payload
    },
    setPassword(state,payload){
      state.password = payload
    }
  },
  actions: {
    login(context){
      // console.log('login')
      axios.post('http://localhost:3000/users/login',{
        email : this.state.email,
        password : this.state.password
      })
      .then(function(dataUser){
        console.log("berhasil login",dataUser)
        localStorage.setItem('tokenUser',dataUser.data.token)
        router.push('/about')
      })
      .catch(err=>{
        console.log('wrong id/password')
      })
    }
  }
})
