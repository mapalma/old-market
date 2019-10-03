<template>
  <div class="inner page-inner">
    <div class="text-intro">
      <h1>Our Beers</h1>
      <p>
        Cras lacinia tellus a nulla elementum varius. Nullam ut congue est. Nam nec nisi a nunc facilisis fringilla eu in enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac lectus pulvinar, interdum sapien eget, consequat sapien.
        Duis tincidunt ante ac risus accumsan, non tempus nisi porta. Aliquam vitae purus et augue mollis ullamcorper in sed elit. Duis ac mollis mauris. Nulla a urna eget leo volutpat pellentesque.
      </p>
    </div>
    <div class="beer-wrapper">
      <appBeer :beer="beer"></appBeer>
    </div>
  </div>
</template>

<script>
import Beer from "@/components/Beer";

export default {
  props: ["id"],
  computed: {
    beer() {
      return this.$store.getters.getBeer(this.id);
    }
  },
  components: {
    appBeer: Beer
  }
};
</script>

<style lang="scss">
@import "../assets/css/base.scss";
// @import "../assets/css/main.scss";

.beer-wrapper {
  img {
    max-height: 600px;
    margin: 0 auto;
    display: block;
  }

  .inner {
    padding: $base-padding;
  }

  .beer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .beer-image {
    grid-row: 1/4;
  }

  .beer-content {
    grid-column: 2/4;
    grid-row-start: 2;
    grid-row-end: 3;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .beer-header {
    grid-column: 1/3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .ingredients {
    grid-column: 1/3;
    grid-row-start: 3;
    grid-row-end: 4;

    .ingredients-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .beer-image,
  .beer-header,
  .beer-content {
    background: $color-white;
  }

  .beer-image {
    img {
      padding: $base-padding;
    }
  }

  .beer-header {
    padding: $base-padding;

    h3 {
      font-size: $h2;
      text-align: left;
    }

    .description {
      margin-bottom: 0;
    }

    .tagline {
      text-align:left;
    }
  }

  .beer-content {
    .characteristics,
    .pairing {
      margin-bottom: 0;
      padding: $base-padding;
    }

    div > ul {
      list-style: disc;
      padding: 0 0 0 1.2rem;
      font-size: 0.9rem;

      li {
        margin-bottom: $base-padding/3;
      }

      ul {
        @extend %layout-ul;
      }
    }
  }

  .ingredients {
    font-size: 0.9rem;
    text-align: left;

    h3 {
      padding: $base-padding 0 0 $base-padding;
    }

    div div {
      padding: $base-padding;

      > ul {
        list-style: disc;
        padding: 0 0 0 $base-padding;

        li {
          margin-bottom: $base-padding/2;
        }
        ul {
          @extend %layout-ul;
        }
      }
    }
  }
}
</style>