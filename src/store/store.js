import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters: {
        cartItemCount(state) {
            let totalCount = 0;
            state.cart.forEach(item => {
                totalCount += item.c
            })
            return totalCount
        },
        cartTotalPrice(state) {
            let totalPrice = 0;
            state.cart.forEach(item => {
                totalPrice += item.c * item.p.p_price
            })
            return totalPrice
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        ADD_PRODUCT_CART(state, p) {
            let productInCart = state.cart.find(item =>{
                return item.p.p_id === p.p.p_id
            })
            if(productInCart) {
                productInCart.c += 1;
                return;
            }
            state.cart.push(p);
        },
        REMOVE_PRODUCT_CART(state, p) {
            let productInCart = state.cart.find(item =>{
                return item.p.p_id === p.p.p_id
            })
            if(productInCart) {
                productInCart.c -= 1;
                return;
            }
            state.cart.push(p);
        }
    },
    actions: {
        getProducts({commit}) {
            axios.get("https://run.mocky.io/v3/e0fb0b82-9447-455a-8fed-22e31bfc1381")
                .then(res => {
                    commit('SET_PRODUCTS',res.data)
                })
        },
        addProductToCart({commit}, p) {
            commit('ADD_PRODUCT_CART', p)
        },
        removeProductToCart({commit}, p) {
            commit('REMOVE_PRODUCT_CART', p)
        }
    }
});