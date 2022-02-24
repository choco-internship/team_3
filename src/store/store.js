import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        product: null,
        cart: [],
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
                totalPrice += item.c * item.p.price
            })
            return totalPrice
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_PRODUCT(state, product) {
            state.product = product
        },
        ADD_PRODUCT_CART(state, p) {
            let productInCart = state.cart.find(item =>{
                return item.p.product_id === p.p.product_id
            })
            if(productInCart) {
                productInCart.c += 1;
                return;
            }
            state.cart.push(p);
        },
        REMOVE_PRODUCT_CART(state, p) {
            let productInCart = state.cart.find(item =>{
                return item.p.product_id === p.p.product_id
            })
            if(productInCart) {
                if(productInCart.c > 1) {
                    productInCart.c -= 1;
                    return;
                }
                else  {
                    state.cart = state.cart.filter(item=> {
                        return item.p.product_id !== p.p.product_id;
                    })
                }
            }


        }
    },
    actions: {
        getProducts({commit}) {
            axios.get("http://142.93.107.238/api/restaurants")
                .then(res => {
                    commit('SET_PRODUCTS',res.data)
                })
        },
        getProduct({commit}, productId) {
            axios.get(`http://142.93.107.238/api/menu/${productId}`)
                .then(res => {
                    commit('SET_PRODUCT',res.data)
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