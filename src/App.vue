<template>
  <div id="app" class="app">

    <Score/>

    <router-view/>

    <button @click="openPopin" class="rules-btn">Rules</button>

    <Rules/>
  </div>
</template>

<script>
import Score from '@/components/Score.vue'
import Rules from '@/components/Rules.vue'

export default {
  components: {
    Score,
    Rules
  },
  methods: {
    openPopin: function() {
        document.querySelector('.rules').classList.add('is-open')
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/style.scss';

  body {
    color: $white;
    background: $radial-gradient;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  a {
    color: $white;
  }

  .app {
    padding: 30px;

    .rules-btn {
      position: absolute;
      right: 30px;
      bottom: 30px;
      background: transparent;
      border: solid 2px $header-outline;
      border-radius: 6px;
      color: $white;
      text-transform: uppercase;
      padding: 10px 30px;
      letter-spacing: 2px;
    }
  }
</style>
