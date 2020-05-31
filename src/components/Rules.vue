<template>
  <div class="rules">
      <div class="rules__container">
        <h2 class="rules__title">Rules</h2>

        <img class="rules__img" src="@/assets/images/image-rules.svg" alt="">

        <button @click="closePopin" class="rules__close"><img src="@/assets/images/icon-close.svg" alt=""></button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Rules',
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
        closePopin: function() {
            document.querySelector('.rules').classList.remove('is-open')
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';

.rules {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: transparent;
    pointer-events: none;
    transition: background-color .3s;

    &__container {
        position: relative;
        width: 400px;
        padding: 30px;
        background: $white;
        border-radius: 10px;
        opacity: 0;
        transform: translateY(30px);
        transition: transform .3s .2s, opacity .3s .2s;
    }

    &__title {
        margin-bottom: 50px;
        color: $dark-text;
        text-transform: uppercase;
        font-weight: 9;
    }

    &__img {
        width: 100%;
    }

    &__close {
        position: absolute;
        top: 40px;
        right: 20px;
        background: none;
        border: 0;
    }

    &.is-open {
        background: rgba(0, 0, 0, .3);
        pointer-events: all;

        .rules__container {
            opacity: 1;
            transform: translateY(0px);
        }
    }
}

</style>