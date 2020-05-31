<template>
  <div class="match">
    <Coin v-for="(move, index) in moves" :key="index" :icon="move.icon"  :name="move.name" :computerMove="computerMove"/>
  </div>
</template>

<script>
import Coin from '@/components/Coin.vue'

export default {
  name: 'Match',
  components: {
    Coin
  },
  data(){
    return {
      moves : [
        {
          icon: require('@/assets/images/icon-rock.svg'),
          name: 'rock'
        },
        {
          icon: require('@/assets/images/icon-scissors.svg'),
          name: 'scissors'
        },
        {
          icon: require('@/assets/images/icon-paper.svg'),
          name: 'paper'
        }
      ],
      computerMove: {
        name: null,
        icon: null
      }
    }
  },
  created() {
    var luck = Math.floor(Math.random()*this.moves.length)
    this.computerMove.name = this.moves[luck].name
    this.computerMove.icon = this.moves[luck].icon
  }
}
</script>

<style lang="scss">
  .match {
    position: relative;
    width: 400px;
    height: 400px;
    margin: 150px auto 0;
    background: url('~@/assets/images/bg-triangle.svg') no-repeat;
    background-size: contain;

    .coin {
      &.scissors {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
      }

      &.paper {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
      }

      &.rock {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    @media screen and (max-width: 700px) {
      width: 250px;
      height: 300px;
    }
  }
</style>