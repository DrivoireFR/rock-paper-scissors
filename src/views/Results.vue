<template>
  <div class="results">
        <div class="side player-side">
            <h2 class="side__title">You picked</h2>
            <Coin :name="player.move" :icon="player.icon"/>
        </div>

        <div class="middle">
            <h2 class="middle__result"> {{ result }} </h2>
            <div class="align-center">
                <router-link class="middle__btn" :to="{ name: 'Match'}">play again</router-link>
            </div>
        </div>

        <div class="side computer-side">
            <h2 class="side__title">The house picked</h2>
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
            result: 'Draw',
            player: {
                move : this.$route.params.moveName,
                icon: this.$route.params.moveIcon
            },
            computer: {
                move : this.$route.params.computerMove.name,
                icon: this.$route.params.computerMove.icon
            }
        }
    },
    created() {
        if(this.player.move == "rock" && this.computer.move == "scissors") {
            this.result = 'You win'
            this.$store.commit('increaseScore')
        } else if ( this.player.move == "scissors" && this.computer.move == "paper" ) {
            this.result = 'You win'
            this.$store.commit('increaseScore')
        } else if ( this.player.move == "paper" && this.computer.move == "rock" ) {
            this.result = 'You win'
            this.$store.commit('increaseScore')
        } else if ( this.player.move == "paper" && this.computer.move == "scissors" ) {
            this.result = 'You lose'
            if( this.$store.state.score > 0 ) {
                this.$store.commit('decreaseScore')
            }
        } else if ( this.player.move == "rock" && this.computer.move == "paper" ) {
            this.result = 'You lose'
            if( this.$store.state.score > 0 ) {
                this.$store.commit('decreaseScore')
            }
        } else if ( this.player.move == "scissors" && this.computer.move == "rock" ) {
            this.result = 'You lose'
            if( this.$store.state.score > 0 ) {
                this.$store.commit('decreaseScore')
            }
        } else if ( this.player.move == this.computer.move ) {
            this.result = "Draw"
        }
    },
    watch: {
        result: function (val) {
         if( val == "You win" ) {
             document.querySelector('.player-side').classList.add('victory')
             document.querySelector('.computer-side').classList.remove('victory')
         } else if ( val == "You lose") {
            document.querySelector('.player-side').classList.remove('victory')
            document.querySelector('.computer-side').classList.add('victory')
         } else if ( val == "Draw" ){
         }
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';

.results {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 100%;
    max-width: 800px;
    margin: 100px auto 0;

    &__title {
        width: 100%;
    }

    .coin {
        pointer-events: none;
        width: 250px;
        height: 250px;

        img {
            width: 100px;
            height: 100px;
        }
    }

    .side {
        position: relative;

        &__title {
            margin-bottom: 100px;
            text-transform: uppercase;
            font-size: 20px;
            letter-spacing: 1px;
            text-align: center;
        }

        &.victory {
            .victory-ring {
                transition-delay: .5s;
                opacity: 1;
            }
        }
    }

    .middle {
        margin-top: 100px;

        .align-center {
            text-align: center;
        }

        &__result {
            margin-bottom: 20px;
            color: $white;
            font-size: 40px;
            font-weight: 900;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 1px;
        }

        &__btn {
            background: $white;
            color: $dark-text;
            text-transform: uppercase;
            font-size: 15px;
            padding: 10px 30px;
            border-radius: 8px;
            text-decoration: none;
        }
    }

    @media screen and (max-width: 700px) {
        position: relative;
        margin-top: 100px;

        .side {
            width: 50%;

            &__title {
                width: 100%;
                margin-bottom: 30px;
            }
        }

        .coin {
            width: 110px;
            height: 110px;
            margin: 0 auto;

            img {
                width: 50px;
                height: 50px;
            }
        }

        .middle {
            position: absolute;
            bottom: -150px;
            left: 50%;
            width: 100%;
            transform: translate(-50%, 50%);

            &__result {
                font-size: 60px;
            }

            &__btn {
                font-size: 20px;
            }
        }
    }
}
</style>