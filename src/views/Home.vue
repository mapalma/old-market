<template>
  <!-- <div class="inner"> -->
  <div class="home">
     <app-beer-list-home/>
     <div class="panel-statement">
       <div class="inner">
        <h2>Community</h2>
        <div>
          <p>Don't miss out any of our latest updates! Follow us on:</p>
          <ul>
            <li>
              <a href="/" class="social instagram">
              <img src="../../src/assets/img/instagram.svg" alt="Instagram">
              </a>
            </li>
            <li>
              <a href="/" class="social twitter">
                <img src="../../src/assets/img/twitter.svg" alt="Twitter">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="inner">
      <div class="panel-events">
        <div class="panel-events-r1-cl">
          <img src="../../src/assets/img/panels/panel-intro-010.jpg" alt="tab-beer">
        </div>
        <div class="panel-events-r1-cr">
          <h2>Nulla a urna eget leo volutpat pellentesque.</h2>
          <p>Nunc eu lorem quis diam congue scelerisque. Cras lacinia tellus a nulla elementum varius.</p>
          <p>Aenean diam nunc, gravida quis mauris volutpat, cursus ullamcorper justo. Aenean nulla enim, vehicula eu mattis sed, semper a libero.</p>
          <a href="/about" class="button-link">More about us</a>
        </div>
        <div class="panel-events-r2-cl">
          <h3>Craft Beer Fest 2019.</h3>
          <p>Nunc eu lorem quis diam congue scelerisque. Cras lacinia tellus a nulla elementum varius. Nullam ut congue est. Nam nec nisi a nunc facilisis fringilla eu in enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac lectus pulvinar, interdum sapien eget, consequat sapien.</p>
          <a href="/events" class="button-link">Events</a>
        </div>
        <div class="panel-events-r2-cr">
          <img src="../../src/assets/img/panels/panel-intro-02.jpg" alt="tab-beer">
        </div>
      </div>
    </div>
   
  </div>
  <!-- </div> -->
</template>

<script>

import appBeerListHome from "@/components/BeerListHome.vue";

export default {
  name: "home",
  components: {
    appBeerListHome
  },
  mounted() {
    document.getElementsByTagName("body")[0].classList.add("home");
  },
  destroyed() {
    document.getElementsByTagName("body")[0].classList.remove("home");
  }
};
</script>

<style lang="scss">

// @import "../assets/css/base.scss";

.panel-events {
  padding: $base-padding;

  .button-link {
    display: inline-block;

    border: 1px solid $color-secondary;
    color: $color-secondary;
    background: transparent;
    font-family: $font-family-title;
    letter-spacing: 1px;
    font-size: $font-size-base - 0.1;
    padding: $base-padding/2 $base-padding;
    transition: $transition;

    &:hover {
      border-color: $color-primary;
      color: $color-primary;
    }
    
  }

  .panel-events-r1-cl {
    img {
      max-width: 50%;
    }
  }

  .panel-events-r1-cr {
    padding: $base-padding;
    position: relative;
    top: -$base-padding * 2;
    left: $base-padding * 2;
    background: $color-white;
    max-width: calc(100% - #{$base-padding} * 2);
    border-bottom: 1px solid rgba(#333, 0.2);

    h2 {
      font-size: $h3;
      margin-bottom: $base-padding/2;
    }

    p {
      font-size: $font-size-base - 0.1;

      &:first-of-type {
        line-height: 1.5;
        font-size: 1rem;
        color: $color-secondary;
        margin-bottom: $base-padding/2;
      }
    }
  }

  .panel-events-r2-cl {
    margin-bottom: $base-padding;

    h3 {
      font-size: $h4;
      margin-bottom: $base-padding/2;
    }

    p {
      font-size: $font-size-base - 0.1;
    }
  }

  .panel-events-r2-cr {
    img {
      display: block;
      max-width: 100%;
      text-align: right;
    }
  }

  @include mq(tablet) {
    width: 576px;
    margin: 0 auto;
    padding: $base-padding * 2 0 0 0;
    display: grid;
    grid-template-columns: 240px 336px;
    grid-template-rows: auto;

    .panel-events-r1-cl {
      img {
        max-width: 100%;
        transform: translateX(-$base-padding * 2);
      }
    }

    .panel-events-r1-cr {
      position: relative;
      top: 0;
      left: 0;
      background: transparent;
      max-width: 100%;
      border-bottom: 0;
    }

    .panel-events-r2-cr {
      img {
        display: block;
        max-width: 100%;
        text-align: right;
        transform: translate($base-padding * 2, $base-padding);
      }
    }
  }

  @include mq(laptop) {
    width: 768px;
    grid-template-columns: 320px 448px;

    .panel-events-r1-cr {
      top: $base-padding;
      margin: 0 auto;

      h2 {
        font-size: $h1 + 0.2;
      }
    }

    .panel-events-r2-cl {
      padding-top: $base-padding * 2;

      h3 {
        font-size: $h3;
      }
    }

    .panel-events-r2-cr {
      img {
        transform: translate($base-padding * 2, -$base-padding);
      }
    }
  }

  @include mq(basewidth) {
    width: 1060px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 400px 660px;
    grid-template-rows: auto;

    .panel-events-r1-cr {
      top: $base-padding * 2;
    }

    .panel-events-r2-cr {
      img {
        transform: translate($base-padding * 3, -$base-padding * 2);
      }
    }
  }
}

.panel-statement {
  padding: $base-padding*2 $base-padding;
  background: $color-primary-bright;
  position: relative;

  &:after,
  &:before {
    content:'';
    display: block;
    position: absolute;
    left:0;
    width: 100%;
    height: 45px;
  }

  &:before {
    top:-0.2rem; 
    background: url('../assets/img/community-top.png') top center no-repeat;
    background-size: cover;
  }

  &:after {   
    bottom:-0.2rem;
    background: url('../assets/img/community-bottom.png') top center no-repeat;
    background-size: cover;
  }

  h2 {
    color: $color-white;
    margin-bottom: $base-padding ;
  }

  div {
    color: $color-white;
    font-size: 0.85rem;
  }

  p {
    // height: 30px;
    margin-bottom: 0;
  }

  ul {
      display: flex;
      align-items: flex-end;
  }

  a {
    position: relative;

    &:after {

      content:'';
      display: block;
      margin-top: $base-padding/3;
      height: 2px;
      width: 0px;
      background: $color-secondary;
      transition: $transition
    }

     &:hover {
      color: $color-white;

      &:after {
        width: 100%;
      }
    }
  }

  .social {
    display:block;
    width: 25px;
    margin: 0 $base-padding/2 0 0 ;

    img {
      max-width: 100%;
      display: block;
    }
  }

  @include mq(tablet) {
    padding: $base-padding * 2;

    .inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

     div {
      display: flex;
      align-items: flex-end;
    }

    h2,
    p,
    div {
      margin-bottom: 0;
    }

    ul {
      margin-left: $base-padding;
    }

    .social {
      width: 30px;
      height: 30px;
    }
  }
}
</style>