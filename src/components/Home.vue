<template>
  <div id="center-screen">
    <!--<button v-on:click="show = !show">
      Toggle
    </button>-->
    <v-spacer style="height:100px"></v-spacer>
    <transition name="fadeOne">
      <div v-show="show" class="container">
        <p class="One">
          "Turning data into insights for more informed business and operational decisions"
        </p>
      </div>
    </transition>
    <transition name="fadeTwo">
      <div v-show="show" class="container">
        <p class="Two">GQO QA ANALYTICS</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      polling: null,
    };
  },

};
</script>

<style scoped>
html {
  background-color: #435466;
  margin: 0;
  padding: 0;
  font-family: "Cambria";
}
.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

button {
  color: #435466;
  font-size: 15px;
  font-weight: 600;
  margin: auto;
  width: 100px;
  height: 50px;
}

p {
  text-align: center;
  font-size: 50px;
  overflow: hidden;
  color: black;
  margin: 1px;
}
.One {
  font-size: 38px;
  font-family: Cambria;
  font-style: italic;
}
.Two {
  font-size: 24px;
  font-family: Cambria;
}

.fadeOne-enter-active,
.fadeOne-leave-active {
  transition: all 0.5s ease-out;
}
.fadeOne-enter,
.fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active,
.fadeTwo-leave-active {
  transition: all 0.5s ease-out;
}
.fadeTwo-enter,
.fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>
