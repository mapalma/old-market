<template>
  <div class="header">
    <div class="inner">
      <a href="/" class="logo">
        <img src="../../src/assets/img/om-logo.svg" alt="Old Market Brewery">
      </a>

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" v-bind:class="{'is-active': isOpen}">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
            <ul class="navbar-end">
                <router-link to="/" class="navbar-item is-tab" tag="li" @click.native="isOpen = false"><a >Home</a></router-link>
                <router-link to="/about" class="navbar-item is-tab" tag="li" @click.native="isOpen = false"><a>About</a></router-link>
                <router-link to="/shop" class="navbar-item is-tab" tag="li" @click.native="isOpen = false"><a>Shop</a></router-link>
                <router-link to="/events" class="navbar-item is-tab" tag="li" @click.native="isOpen = false"><a>Events</a></router-link>
                <router-link to="/checkout" class="navbar-item is-tab" tag="li" @click.native="isOpen = false"><a>Checkout (<span v-text="checkoutQuantity">0</span>)
            </a></router-link>
            </ul>
        </div>
    </nav>
      <app-intro></app-intro>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import {Slide} from 'vue-burger-menu';

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    appIntro: Intro,
    Slide
  },
  computed: {
    isMobile() {
      let getWidth = function () {
        if (self.innerWidth) {
          return self.innerWidth;
        }

        if (document.documentElement && document.documentElement.clientWidth) {
          return document.documentElement.clientWidth;
        }

        if (document.body) {
          return document.body.clientWidth;
        }
      }
      console.log(getWidth());
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || getWidth() < 1085;
    },
    checkoutQuantity() {
      return this.$store.getters.checkoutCount;
    }
  }
};
</script>

<style lang="scss" >
// @import "../assets/css/base.scss";

.header {
  background:url('../assets/img/banner05.jpg') no-repeat top center $color-primary;
  background-size: cover;
}

.logo {

  width: 240px;
  display:block;
  margin: 0 auto;
  padding: $base-padding 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  z-index: 31;

  img {
    min-width: 100%;
  }

  @include mq(tablet) {
    padding: $base-padding/2;
    float: left;
    width: 280px;
    position: static;
    transform: none
  }
}

.header {

  .inner {
    position: relative;
    z-index: 2;
  }
}

nav {
  
  //override Bulma
  &.navbar {
    background: transparent;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;

    .navbar-burger {
      color: $color-secondary;
    }

    .navbar-brand {
     &.is-active {
       background: $color-primary;
     } 
    }

    .navbar-menu {
      box-shadow: none;
      background: $color-primary;

      &.is-active {
        .navbar-end {
          height: 100vh;
        }
      }
    }

    .navbar-burger span {
      height: 2px;
    }

    .navbar-item.is-tab {
      border: 0;
      padding: 0.5rem 0;

      &:hover {
        border: 0;
      }

      a {
        &:hover {
          color: $color-secondary;
        }
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    height: 75px;
  }

  li {
    display: inline-block;
    line-height: 75px;

    a {
      text-transform: uppercase;
      display: block;
      margin: 0 $base-padding/2;
      color: $color-white;
      padding: 0 $base-padding/3;
      font-size: 0.8rem;
      letter-spacing: 1px;
      position: relative;
      font-family: $font-family-title;   
    }

    &.router-link-exact-active {
      a {
        color: $color-secondary;

        &:before {
          width: 100%;
          border-color: $color-secondary;
        }
      }
    }
  }

  @include mq(laptop) {
  
    //override mobile
    &.navbar {
      // background: rgba($color-primary, 0.8);
      .navbar-menu {
        background: transparent !important;

        &.is-active {
          .navbar-end {
            height: 75px;
          }
        }
      }
    }
  }

  @include mq(laptop) {
     li {
      a { 
        &:before {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: -1px;
          transition: width 0.2s ease-in;
        }

        &:hover {
          color: $color-white;

          &:before {
            width: 100%;
            border-bottom: 2px solid $color-secondary;
          }
        }
      }
     }
  }
}
</style>