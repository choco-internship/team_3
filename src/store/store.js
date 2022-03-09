import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";
import router from "../router";
import jwt_decode from "jwt-decode";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: null,
    cart: [],
    cartRest: [],
    user: {},
    login: false,
    loginEr: "",
    productSelectedId: 0,
  },
  getters: {
    cartItemCount(state) {
      let totalCount = 0;
      state.cart.forEach((item) => {
        totalCount += item.c;
      });
      return totalCount;
    },
    cartTotalPrice(state) {
      let totalPrice = 0;
      state.cart.forEach((item) => {
        totalPrice += item.c * item.p.price;
      });
      return totalPrice;
    },
    cartRestName(state) {
      if (state.cartRest.length > 0) return state.cartRest[0];
      else return "Mamma Mia";
    },
    cartRestAdress(state) {
      if (state.cartRest.length > 0) return state.cartRest[1];
      else return "ул. Панфилова 109";
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
      state.cartRest.push(product.data.restaurant_name);
      state.cartRest.push(product.data.location);
    },
    ADD_PRODUCT_CART(state, p) {
      let productInCart = state.cart.find((item) => {
        return item.p.product_id === p.p.product_id;
      });
      if (productInCart) {
        productInCart.c += 1;
        return;
      }
      state.cart.push(p);
    },
    REMOVE_PRODUCT_CART(state, p) {
      let productInCart = state.cart.find((item) => {
        return item.p.product_id === p.p.product_id;
      });
      if (productInCart) {
        if (productInCart.c > 1) {
          productInCart.c -= 1;
          return;
        } else {
          state.cart = state.cart.filter((item) => {
            return item.p.product_id !== p.p.product_id;
          });
        }
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
      state.cartRest = [];
    },
    LOGIN(state, resp) {
      var decoded = jwt_decode(resp.access_token);
      console.log(decoded.sub);
      localStorage.setItem("id", decoded.sub);
      localStorage.setItem("token", resp.access_token);
      state.login = true;
    },
    REGISTER(state, resp) {
      console.log(resp);
    },
    SCROLLING(state, id) {
      state.productSelectedId = id
    }
  },
  actions: {
    getProducts({ commit }) {
      api.get("/restaurants").then((res) => {
        commit("SET_PRODUCTS", res.data);
      });
    },
    getProduct({ commit }, productId) {
      api.get(`/menu/${productId}`).then((res) => {
        commit("SET_PRODUCT", res.data);
      });
    },
    addProductToCart({ commit }, p) {
      commit("ADD_PRODUCT_CART", p);
    },
    removeProductToCart({ commit }, p) {
      commit("REMOVE_PRODUCT_CART", p);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
    registerUser({ commit }, user) {
      api
        .post("register", {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          commit("REGISTER", response.data);
        });
    },
    loginUser({ commit }, user) {
      api
        .post("login", {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          commit("LOGIN", response.data.data);
          router.push("/orders");
          console.log("Log in!");
        })
        .catch((error) => {
            console.log("Password or email incorrect!\n");
            console.log("");
            console.log(error);
            this.state.loginEr = "Неправильный пароль !"
        });
    },
    goto({commit}, id) {
      commit("SCROLLING", id);
    },
  },
});
