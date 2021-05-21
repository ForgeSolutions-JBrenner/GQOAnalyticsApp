<template>
  <v-app>
    <v-main>
      <SiteNav></SiteNav>
      <router-view />
      <Upload></Upload>
      <!--<iframe style="display: block" src="https://pollev-embeds.com/clickable_images/DWQCvfXmXaAbTBh4s35a8/respond" width="80%" height="700px"></iframe>-->
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
//import { mapState } from 'vuex'
import SiteNav from "@/components/SiteNav";
import Footer from "./components/Footer.vue";

export default {
  components: {
    SiteNav,
    Footer,
  },
};
</script>
