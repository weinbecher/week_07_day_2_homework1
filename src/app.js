import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      selectedCurrency:"hi",
      rates:[]
    },
    computed:{

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
