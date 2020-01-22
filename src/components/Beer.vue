<template>
  <div class="beer">
    <div class="beer-image">
      <img :src="beer.image_url" :alt="beer.name">
    </div>
    <div class="beer-content">
      <div class="beer-header">
        <h3>
          <router-link :to="{ name: 'beer', params: { id: beer.id } }">{{beer.name}}</router-link>
        </h3>
        <p class="tagline">{{beer.tagline}}</p>

        <div class="buy">
          <p class="price">{{beer.price}}</p>
          <div class="price-controls">
            <!-- <button id="add" class="button add">+</button> -->
            <input type="number" value="0" min="0" v-model.number="quantity">
            <button id="add" class="button" @click="addQuantity">add</button>
          </div>
        </div>
        <!-- <p class="stock">{{beer.stock}}</p> 	 -->
        <p class="description">{{beer.description}}</p>
      </div>
      <div class="characteristics">
        <h4>Characteristics</h4>
        <ul class="characteristics-list">
          <li class="abv">
            <strong>ABV</strong>
            : {{beer.abv}}
          </li>
          <li class="ibu">
            <strong>IBU</strong>
            : {{beer.ibu}}
          </li>
          <li class="srm">
            <strong>SRM</strong>
            : {{beer.srm}}
          </li>
        </ul>
      </div>

      <div class="pairing">
        <h4>Good with</h4>
        <ul class="pairing-list">
          <li v-for="(pairing, index) in beer.food_pairing" :key="index">{{pairing}}</li>
        </ul>
      </div>

      <div class="ingredients">
        <h3>Ingredients</h3>
        <div class="ingredients-grid">
          <div>
            <h4>Tips</h4>
            <p class="tip">{{beer.brewers_tips}}</p>
          </div>
          <div>
            <h4>Yeast</h4>
            <p class="yeast">{{beer.ingredients.yeast}}</p>
          </div>
          <div>
            <h4>Hops</h4>
            <ul class="hop">
              <li v-for="(hop, index) in beer.ingredients.hops" :key="index">
                <ul>
                  <li>
                    <strong>Name</strong>
                    : {{hop.name}}
                  </li>
                  <li>
                    <strong>Attribute</strong>
                    : {{hop.attribute}}
                  </li>
                  <li>
                    <strong>Add</strong>
                    : {{hop.add}}
                  </li>
                  <li>
                    <strong>Amount</strong>
                    : {{hop.amount.value}} grams
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4>Malt</h4>
            <ul class="malt">
              <li v-for="(malt, index) in beer.ingredients.malt" :key="index">
                <ul>
                  <li>
                    <strong>Name</strong>
                    : {{malt.name}}
                  </li>
                  <li>
                    <strong>Amount</strong>
                    : {{malt.amount.value}} kilograms
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["beer"],
  methods: {
    addQuantity() {
      this.$store.dispatch("addProduct", {
        quantity: this.quantity,
        beer: this.beer
      });
      this.quantity = 0;
    }
  }
};
</script>

<style lang="scss">
// @import "../assets/css/base.scss";
// @import "../assets/css/main.scss";

.beer {

  .beer-image {
    
    img {
      margin: 0 auto 1.5rem auto;
      max-height: 600px;
      display: block;
    }
  }

  .beer-content {

    font-size: 0.85rem;

    h3 {
      margin: 0 0 0.5rem 0;
      text-align: center;
      font-size: $h4;
        
        a {
          color: $color-primary-bright;

          &:hover {
            color: $color-secondary;
          }
        }
    }

    .tagline {
      border-bottom: 1px solid $color-lightgrey;
      padding-bottom: 1rem;
      margin: 0 0 1rem 0;
      line-height: 1.5;
      // font-size: 1rem;
       text-align: center;
    }

    @include mq(tablet) {

      h3,
      .tagline {
          // text-align:left;
      }
    }

    .buy {
      margin-bottom: $base-padding/2;
      display: flex;

      .price-controls {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start; 
      }

      .price {
        line-height: 30px;
        margin-right: $base-padding/2;
        font-size: $font-size-base + 0.2;
        margin-bottom: 0;

        &:before {
          content: "£";
          display: inline-block;
        }
      }

      .button,
      input {
        height: 30px;
      }

      input {
        width: 70px;
        height: 30px;
        padding: $base-padding/3;
        border: 1px solid $color-lightgrey;
        color: $color-text;
      }

      .button {
        background:  $color-secondary;
        font-family: $font-family-title;
        border-radius:0;
        border: 1px solid  $color-secondary;
        height: 30px;
        font-size: 0.9rem;
        color: $color-white;
        transition: $transition;

        &:hover {
          background: $color-primary;
          border: 1px solid $color-primary;
        }
      }
    }
    .description {
      display: block;
      margin-bottom: 0;
    }

    ul {
      @extend %layout-ul;
    }
  }
}
</style>

