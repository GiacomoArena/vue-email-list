const {createApp} = Vue;

createApp({

  data(){
    return{
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',
      emails:[]
    }
  },

  methods:{

    getApi(){
      this.emails = []
      for (let i = 0; i < 10; i++) {
      axios.get(this.apiUrl).then(result => {
        this.emails.push(`'${ result.data.response}',`);
        console.log(this.emails);
      })
    }
    }
  },
  mounted(){
    

  }



}).mount('#app')