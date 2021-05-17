<template>
  <v-footer color="#545857" padless>
    <v-row justify="center" no-gutters>
      <v-col cols="12" sm="6" md="8" id="a" class="pa-4 py-4 text-left white--text">
        <v-icon color="white">mdi-copyright</v-icon
        >{{ new Date().getFullYear() }} <strong>GQO Analytics</strong>
        <v-row justify="left" no-gutters>
          <p id="a">GQO Analytics Application is developed to support data acquisition for Stryker</p>
        </v-row>
        <v-row justify="left" no-gutters>
          v1.0
        </v-row>
      </v-col>
      <v-col cols="6" md="4" class="pa-4 py-4 text-left white--text">
        <a id="a" href="https://www.stryker.com/us/en/legal/privacy.html">PRIVACY </a>
      </v-col>


    </v-row>
  </v-footer>
</template>

<script>
export default {

};
</script>
<style lang="scss">
#no-background-hover::before {
  background-color: black !important;
}
#a {
  text-decoration: none;
  color: white;
  font-family: HumanistRoman;
  font-size: 14px;
}
</style>
