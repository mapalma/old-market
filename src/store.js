import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  beers:[],
	  checkout:[],
	  overviewToggle: true,
  },
  getters: {
  	getBeers: state => {
		return state.beers
	},
	//Method-Style Access
	//You can also pass arguments to getters by returning a function. 
	//This is particularly useful when you want to query an array in the store:
  	getBeer: (state) => (id) => {
  		return state.beers.find(beer => beer.id === id)
	},
	getCheckout: (state) => {
		return state.checkout
	},
	checkCheckout: (state) => (id) => {
		return state.checkout.find(product => product.beer.id === id)
  	},
	checkoutCount: (state) => {
		if (state.checkout.length > 0) {
			return state.checkout.reduce((previousValue, currentItem) =>{
				return previousValue + parseInt(currentItem.quantity);
			}, 0);
		} else {
			return 0;
		}
	},
	getOverviewToggle: (state) => {
		return state.overviewToggle;
	}	  
  },
  mutations: {
  		innitBeers(state, data){

			const prices = [2.10,2.25, 2.55, 2.75]

			let modifiedBeers = data.map((beer) => {
				beer.price = prices[Math.floor(Math.random()*(3-0 +1)+ 0)];
				beer.stock = Math.floor(Math.random()*(35-12+1)+12);
				return beer;
			});

			state.beers = modifiedBeers;
			// console.log(state.beers);
		},
		addProduct(state, order) {
			state.checkout.push(order);
		},
		modifyCheckout(state, order) {
			
			let indexOfProduct = state.checkout.findIndex( product => product.beer.id === order.beer.id);
			// console.log(order.quantity);
			state.checkout[indexOfProduct].quantity += order.quantity ;
			// console.log(state.checkout);
		},
		deleteProduct(state, id) {
			state.checkout = state.checkout.filter( (el) => {
				return el.beer.id !== id;
			})
		},
		overviewToggleMutation( state) {
			return state.overviewToggle = !state.overviewToggle
		}
  },
  actions: {
  		loadBeers({commit}){
			axios.get('beers?per_page=12&abv_gt=5&ibu_gt=35&brewed_after=05-2011')
			.then(res => {
				// console.log(res.data);
				commit('innitBeers', res.data)
			})
			.catch(error => console.log(error))
		},
		addProduct({commit, getters, state}, order){
			if(!(getters.checkCheckout(order.beer.id))) {
				// console.log('no encuentra el producto');
				commit('addProduct', order);
			}else {
				// console.log('encuentra el producto')
				commit('modifyCheckout', order);
			}		
		},
		deleteProduct({commit}, id) {
			commit('deleteProduct', id);
		},
		overviewToggleAction({commit}) {
			commit('overviewToggleMutation');
			
		},
	}
})
