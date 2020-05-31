<template>
  <div class="coin" :class="name">
    <div class="coin__ring" :class="name"></div>

    <div class="coin__content">
      <router-link :to="{name:'Results', params: { moveName: name, moveIcon: icon, computerMove: computerMove }}">
        <img :src="icon" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Coin',
    props: [
      'name',
      'icon',
      'computerMove'
    ],
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/style.scss';

  .coin {
    position: relative;
    width: 130px;
    height: 130px;

    &__content {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: $white;
      overflow: hidden;
      box-shadow: inset 0px 8px rgba(0, 0, 0, .2);

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }

    &__ring {
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      width: 120%;
      height: 120%;
      transform: translate(-50%, -50%);
      border-radius: 50%;

      &::after {
        content: '';
        position: absolute;
        z-index: 100;
        bottom: 0;
        left: 50%;
        width: 102%;
        height: 105%;
        transform: translate(-50%, 0);
        border-radius: 50%;
        box-shadow: inset 0 -5px rgba(0, 0, 0, .3);
      }

      &.rock {
        background: $rock-gradient;
      }

      &.scissors {
        background: $scissors-gradient;
      }

      &.paper {
        background: $paper-gradient;
      }
    }
  }
</style>