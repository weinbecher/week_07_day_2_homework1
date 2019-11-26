import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      euro:"",
      selectedCurrency:"",
      rates:[]
    },
    computed:{
      convertedResult:function(){

      const exrate = this.selectedCurrency.slice(5)
      const xrate = Number(exrate);
      const result = this.euro * xrate;
      return result;
      }

    },
    mounted(){
      this.getRates()

    },
    methods:{
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => data.rates)
        .then(rates => this.rates = rates)
        // .then(rates => rates.CAD)
        // .then(result => this.rates = result)
      }



        // .then(countries => this.countries = countries)

    }



  })
})
