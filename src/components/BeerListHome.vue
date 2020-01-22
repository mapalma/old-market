<template>
    <div class="inner">
      <div class="text-intro">
        <h2>Our Monthly Suggestions</h2>
        <p>
          Nunc eu lorem quis diam congue scelerisque. Cras lacinia tellus <a href="#">a nulla elementum varius</a>. Nullam ut congue est. Nam nec nisi a nunc facilisis fringilla eu in enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac lectus pulvinar, interdum sapien eget, consequat sapien.
          Duis tincidunt ante ac risus accumsan, non tempus nisi porta.
        </p>
      </div>
      <div class="monthly-list-wrapper">
        <ul>
          <li v-for="beer in beerList" :key="beer.id">
            <app-beer :beer="beer"></app-beer>
          </li>
        </ul>
      </div>
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
      console.log(this.$store.getters.getBeers);
      return this.$store.getters.getBeers.slice(0, 5);
    }
  }
};
</script>

<style lang="scss">
// @import "../assets/css/base.scss";
// @import "../assets/css/main.scss";

.monthly-list-wrapper {
  padding: $base-padding * 2 0 $base-padding;


  > div > p {
    margin-bottom: 3rem;
  }

  > ul {
    background: #f5f5f5;
    text-align: left;
    list-style: none;
    margin: 0;
    padding: 0;

    > li {
      padding: 0 0 $base-padding * 2 0;
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
    > ul {
      display: grid;
      grid-gap: 1px;
      grid-template-columns: 33.33% 33.33% 33.33%;

      >li {
         padding: $base-padding $base-padding $base-padding * 2 $base-padding;
      }
    }
  }

  @include mq(tabletXL) {
      //beer-list media queries
    > ul {
      display: grid;
      grid-gap: 1px;
      grid-template-columns: repeat(4, 25%);

      > li {
         padding: $base-padding $base-padding $base-padding * 2 $base-padding;
      }

      li {
        &:first-child {
          grid-column: 1/3;
          grid-row: 1/3;

          img {
            max-height: 450px;
          }

          .beer-content {
            > *:not(.buy) {
              display: block;
            }
            .ingredients {
                display: none
            }
          }

          .description {
            font-size: 1rem;
          }

          .description,
          .characteristics,
          .pairing {
            margin-bottom: $base-padding;
          }

          h4 {
            color: $color-secondary;
          }

          ul {
            list-style: disc;
            padding: 0 0 0 $base-padding;
          }
        }
      }
    }
  }
}
</style>