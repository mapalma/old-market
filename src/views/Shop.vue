<template>
  <div class="inner page-inner">
    <div class="text-intro">
      <h1>Shop</h1>
      <p>
        Cras lacinia tellus a nulla elementum varius. Nullam ut congue est. Nam nec nisi a nunc facilisis fringilla eu in enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac lectus pulvinar, interdum sapien eget, consequat sapien.
        Duis tincidunt ante ac risus accumsan, non tempus nisi porta. Aliquam vitae purus et augue mollis ullamcorper in sed elit. Duis ac mollis mauris. Nulla a urna eget leo volutpat pellentesque.
      </p>
    </div>
    <ul class="beer-list-container">
      <li v-for="beer in beerList" :key="beer.id">
        <app-beer :beer="beer"></app-beer>
      </li>
    </ul>
  </div>
</template>	
<script>
import Beer from "@/components/Beer";
export default {
  components: {
    appBeer: Beer
  },
  computed: {
    beerList() {
      return this.$store.getters.getBeers;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/base.scss";
// @import "../assets/css/main.scss";

.beer-list-container {
  //   background: #f5f5f5;
  text-align: center;
  padding: $base-padding 0;

  @include mq(tablet) {
    padding: $base-padding * 2 0;
  }

  h2 {
    border-bottom: 1px solid rgba(#333, 0.2);
    display: inline-block;
    position: relative;

    &:before {
      content: "";
      display: block;
      width: calc(100% / 4);
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%);
      height: 1px;
      border-bottom: 1px solid $color-secondary;
    }
  }
}

.beer-list-container {
  background: #f5f5f5;
  text-align: left;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    padding: 2.5rem;
    width: 100%;
    background: $color-white;

    .beer-image {
      img {
        max-height: 150px;
      }
    }
    h4,
    .pairing,
    .characteristics,
    .ingredients,
    .tip {
      display: none;
    }
  }
}

@include mq(tablet) {
  //beer-list media queries
  .beer-list-container {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, 1fr);
  }
}

@include mq(laptop) {
  //beer-list media queries
  .beer-list-container {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>