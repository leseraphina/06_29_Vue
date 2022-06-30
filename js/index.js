const App = {
data(){
    return {
    products:[],
    displayLabel:true,
    max:20000
    }
},
created(){
    fetch('./js/data.json')
    .then(response => response.json())
    .then(data => this.products = data)
},
computed:{
    filterProducts(){
        return this.products.filter( item => (item.price < this.max ) )
    }
},
methods:{
    won(value){
        return value.toLocaleString('ko-KR')
    }
}
}

Vue.createApp(App).mount('#app')

//  4:03