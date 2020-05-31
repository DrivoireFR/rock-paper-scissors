<template>
  <div class="score">
      <img src="@/assets/images/logo.svg" alt="">

      <div class="score__result">
            <div class="score__result__content">
                <h2 class="score__result__title">score</h2>

                <p class="score__result__number">{{ score }}</p>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Score',
    props: {
    },
    data() {
        return {
            score: 10
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';

.score {
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 15px;
    border: solid 2px $header-outline;
    border-radius: 20px;
    justify-content: space-between;

    &__result {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 130px;
        background: $white;
        border-radius: 5px;

        &__title {
            text-align: center;
            color: $score-text;
            letter-spacing: 1px;
        }

        &__number {
            width: 60px;
            pointer-events: none;
            color: $dark-text;
            font-size: 40px;
            font-weight: 900;
            text-align: center;
        }
    }
}

</style>