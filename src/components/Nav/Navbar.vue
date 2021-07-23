<template>
  <div class="nav">
    <div class="nav__logo">
      <a href="">Самогония</a>
      <div class="menu__btn" :class="{ 'active' : this.isOpen  }" @click="this.isOpen = !this.isOpen">
        <div class="menu__btn-block">
          <span></span>
        </div>
      </div>
    </div>
    <div class="nav__links" :class="{ 'open' : this.isOpen }">
      <ul>
        <!-- <li><a href="">Домой</a></li> -->
        <li><router-link to="/">Перейти к home</router-link></li>
        <li><router-link to="/accounting">Новая запись</router-link></li>
        <li><a href="">Новая запись</a></li>
        <li><a href="">История</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/__mixin.scss';
a {
  padding: 30px 0px;
}
.nav {
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 60px;
  @include md {
    flex-direction: column;
  }
  &__logo {
    height: 100%;
    display: flex;
    align-items: center;
    @include md {
      width: 100%;
      justify-content: space-evenly;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    .menu__btn {
      cursor: pointer;
      height: 100%;
      padding: 5px;
      transition: .5s, background-color 0s linear;
      display: none;
      @include md {
        display: flex;
        align-items: center;
      }
      &.active {
        span {
          transform: rotate(90deg);
          // background-color: $mainColor;
          &::before {
            top: 0px;
            transform: rotate(45deg);
          }
          &::after {
            top: 0px;
            transform: rotate(-45deg);
          }
        }
      }
      &-block {
        width: 30px;
        height: 18px;
        display: flex;
        align-items: center;
        position: relative;
        span {
          &, &::before, &::after {
            display: block;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #616161;
            transition: .5s;
          }
          &::before {
            content: '';
            top: -8px;
          }
          &::after {
            content: '';
            top: 8px;
          }
        }
      }
    }
  }
  &__links {
    height: 100%;
    display: flex;
    overflow-y: hidden;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    @include md {
      min-width: 100%;
      width: 100%;
      max-height: 0px;
      background-color: #ccc;
    }
    &.open {
      @include md {
        max-height: 114px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      list-style: none;
      padding: 0px;
      margin: 0px;
      height: 100%;
      justify-content: space-between;
      width: 300px;
      @include md {
        flex-direction: column;
        width: 100%;
      }
      li {
        a {
          padding: 40px 0px;
          text-decoration: none;
          color: #000;
          @include md {
            padding: 10px 0px;
          }
        }
        @include md {
          padding: 10px 0px;
        }
      }
    }
  }
}
</style>
