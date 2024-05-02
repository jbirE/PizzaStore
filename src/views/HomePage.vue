<template>
   <div id="intro">
    <p>Bienvenue !</p>
    <p>PROMOTION SUR LA 4 FROMAGE</p>
    <p>NOUVEAUTE - PIZZA ROYALE</p>
    <p>JEU CONCOURS</p>
    <LikesReact />
  </div>

  <div id="product-menu">
    <ProductsPage/>
   
  </div>
  <FooterPage/>

</template>

<script>
import FooterPage from "../views/FooterPage.vue"
import LikesReact from "../components/LikesReact.vue";

export default {
  name: "HomePage",
  components: {
  
  FooterPage,
  LikesReact
},
  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>

<style scoped>
#intro {
  background-image: url(../assets/images/pizza-menu.jpg);
  background-position: bottom;
  background-size: cover;
  height: 300px;
  padding: 3%;
  width: 100%;
}
#intro p {
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
#product-menu {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>