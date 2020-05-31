<template>
  <div class="results">
        <h1>Le résultats est : </h1>

        <div class="player-sider">
            <Coin :name="player.move" :icon="player.icon"/>
        </div>

        <router-link :to="{ name: 'Match'}">play again</router-link>

        <div class="computer-side">
            <Coin :name="computer.move" :icon="computer.icon"/>
        </div>
  </div>
</template>

<script>
import Coin from '@/components/Coin.vue'

export default {
    name: 'Results',
    components: {
        Coin
    },
    data() {
        return {
            player: {
                move : this.$route.params.moveName,
                icon: this.$route.params.moveIcon
            },
            computer: {
                move : this.$route.params.computerMove.name,
                icon: this.$route.params.computerMove.icon
            }
        }
    }
}
</script>

<style lang="scss">

</style>