<template>

  <div class="inner page-inner">
    <!-- <ul class="beer-list-container">
      <li v-for="beer in beerList" :key="beer.id">
        <app-beer :beer="beer"></app-beer>
      </li>
    </ul> -->
    <div class="text-intro">
      <h1>Checkout</h1>
      <p>
        Nullam ut congue est. Nam nec nisi a nunc facilisis fringilla eu in enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac lectus pulvinar, interdum sapien eget, consequat sapien.
        Duis tincidunt ante ac risus accumsan, non tempus nisi porta. Aliquam vitae purus et augue mollis ullamcorper in sed elit. Duis ac mollis mauris. Nulla a urna eget leo volutpat pellentesque.
      </p>
    </div>
    <div class="product-list-container" v-if="checkout.length > 0">
      <div class="product-list-headers">
        <p>Product</p>
        <p class="quantity">Quantity</p>
        <p class="price">Price</p>
        <p>
          <span>Remove</span>
        </p>
      </div>
      <div class="product-list">
        <div v-for="item in checkout" :key="item.beer.id" class="product">
          <div class="product-details">
            <img :src="item.beer.image_url" :name="item.beer.name">
            <p class="h5">{{item.beer.name}}</p>
          </div>
          <p class="quantity">
            <span>Quantity:</span>
            {{item.quantity}}
          </p>
          <p class="price">
            <span>Price:</span>
            {{item.beer.price}}
          </p>
          <p class="remove">
            <a href="#" @click.prevent="deleteItem(item.beer.id)">remove</a>
          </p>
        </div>
      </div>
      <div class="product-list-total">
        <p>Total checkout:
          <span class="quantity-total">{{totalPrice}}</span>
        </p>
        <button>Checkout</button>
      </div>
    </div>
    <div v-else>
      <p>Your checkout list is empty.</p>
    </div>
  </div>
</template>
<script>



import Beer from "@/components/Beer";
export default {

  data() {
    return {
      // total: 0,
    };
  },
  components: {
    appBeer: Beer
  },
  computed: {
    beerList() {
      return this.$store.getters.getBeers;
    },
    checkout() {
      return this.$store.getters.getCheckout;
    },
    totalPrice() {
      return this.checkout.reduce(function(total, item) {
        //Problema: muchos numeros decimales en la operaciones
        //Si se aplica tofixed a total, devuelve una string. 
        //Por lo que tenemos que volverlo a convertir a float antes de sumar
        //Parece que pasando total por parseFloat en la suma y recortando en return se soluciona

        total = parseFloat(total) + item.quantity * item.beer.price;

        return total.toFixed(2);

      }, 0);
    }
  },
  methods: {
    deleteItem(id) {
      // console.log("delete", id);
      this.$store.dispatch("deleteProduct", id);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/base.scss";

.product-list-container {
  max-width: 820px;
  margin: 0 auto $base-padding * 2;
  border: 1px solid #ddd;
}
.product-list-headers,
.product {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr 1fr;

  p {
    margin: 0;
    padding: $base-padding/3 $base-padding;
    line-height: 50px;
    font-size: $font-size-base - 0.1;
    // border: 1px dashed #d0d;
  }
  span {
    display: none;
  }

  .quantity,
  .price {
    text-align: center;
  }
}

.product-list-headers {
  font-weight: bold;
  text-transform: uppercase;
  //   font-size: $h5 ;
  border-bottom: 1px solid #ddd;
}

.product-list {
  margin: 0;
  padding: 0;
}

.product {
  border-bottom: 1px dashed #ddd;

  .remove {
    font-size: $font-size-base - 0.3;
  }
}

.product-details {
  display: flex;
  justify-content: flex-start;

  img {
    max-height: 50px;
    display: block;
    margin: $base-padding/3 $base-padding;
  }

  p {
    // font-size: $h5;
    line-height: 50px;
    padding: $base-padding/3;
    margin: 0;
  }
}
.product-list-total {
  display: grid;
  grid-template-columns: 4fr 2fr;

  p {
    margin: 0;
    padding: $base-padding/3 $base-padding;
    line-height: 50px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .quantity-total {
    text-align: right;
    margin-left: 5px;
    font-size: $h5;
    color: $color-primary;

    &:before {
      content: "£";
      display: inline-block;
      margin-right: 3px;
    }
  }
  button {
    margin: $base-padding/2 $base-padding;
    padding: $base-padding/2 $base-padding;
    font-size: $font-size-base;
    @extend %button;
  }
}
</style>