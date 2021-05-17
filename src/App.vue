<template>
  <v-app>
    <v-app-bar app color="#f5f5f5" dark  hide-on-scroll>
      <div class="align-center" style="padding: 24px 30px 24px 0px;">
        <v-img
          src="data:image/png;base64,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"
          width="110px"
        />
        <div class="app_bar_subhead">
          GQO Town Hall Interactive Map
        </div>
      </div>

      <v-spacer></v-spacer>

      <!--<v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2 pt-12"
      >
        {{ link }}
      </v-btn>-->
    </v-app-bar>

    <v-main>
      <!--<Home />-->
      <iframe style="display: block" src="https://pollev-embeds.com/clickable_images/DWQCvfXmXaAbTBh4s35a8/respond" width="80%" height="700px"></iframe>
    </v-main>
    <!--<Footer />-->
  </v-app>
</template>

<script>
//import Home from "./components/Home.vue";
//import Footer from "./components/Footer.vue";
//import idicore from "./components/idicore.vue";

export default {
  name: "App",

  components: {
    //Home,
    //Footer,
  },
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>

<style scoped>
.app_bar_subhead {
  color: black;
  font-family: FuturaBold;
  /*font-size: 1.5rem;
  padding-top: 20px;
  position: relative;
  font-weight: bold;*/
}
 iframe {
    margin: 0 auto;
    background-color: #777;
    display: block;
}
</style>
