<template>
  <footer>
    <!-- <div class="parallax-container"> -->
    <div class="inner">
      <div class="footer-blocks">
        <div class="footer-block footer-menu">
          <h4>Menu</h4>
          <ul>
            <router-link to="/" tag="li">
              <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li">
              <a>About</a>
            </router-link>
            <router-link to="/shop" tag="li">
              <a>Shop</a>
            </router-link>
            <router-link to="/events" tag="li">
              <a>Events</a>
            </router-link>
            <router-link to="/contact" tag="li"><a>Contact</a></router-link>
          </ul>
        </div>
        <div class="footer-block footer-menu">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Shipping and Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Ways to Pay</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div class="footer-block footer-address">
          <h4>Contact</h4>
          <div itemscope itemtype="http://schema.org/LocalBusiness">
            <span itemprop="name">Old Market</span>
            <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              <span itemprop="streetAddress">21b Baker St,</span>
              <span itemprop="addressLocality">London,</span>
              <span itemprop="postalCode">NW1 6XE</span>
            </div>
            <span itemprop="email" class="email">
              <a href="mailto:info@oldmarket.com">info@oldmarket.com</a>
            </span>
          </div>
        </div>

        <div class="footer-block footer-newsletter">
          <h4>Subscribe to Newsletter</h4>
          <p>Stay updated about the latest events and news.</p>
          <form>
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Email">
            <input type="submit" value="Sign up">
          </form>
        </div>
      </div>
    </div>
    <div class="credits">
      <div class="inner">
        <p>Credits: Photographs by <a taget="blank_" href="https://unsplash.com/@elevatebeer?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Elevate</a>. Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> and <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
</script>
<style lang="scss">
// @import "../assets/css/base.scss";

footer {
  background: $color-primary;
  color: $color-white;
  // padding: $base-padding;

  @extend %clear-fix;

//   @include mq(tablet) {
//     padding: $base-padding * 2;
//   }
}

.footer-blocks {
  padding: $base-padding 0;
  @extend %clear-fix;

  @include mq(tablet) {
    padding: $base-padding * 2 0;
  }
}

.footer-block {
  margin-bottom: $base-padding;

  h4 {
    color: $color-secondary;
    font-size: $font-size-base;
    margin-bottom: $base-padding/2;
  }

  ul {
    @extend %layout-ul;
    font-size: $font-size-base - 0.2;
  }

  p,
  span {
    font-size: $font-size-base - 0.2;
  }
  span {
    display: block;
  }

  a {
    color: $color-white;

    &:hover {
      color: $color-secondary;
    }
  }

  h4 {
    border-bottom: 1px solid rgba($color-white, 0.1);
    padding-bottom: $base-padding/3;
  }

  form {
    display: flex;

    label {
      display: none;
    }

    input {
      height: 40px;
    }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      display: inline-block;
      border: 0;
    }

    input[type="submit"] {
      padding: 10px;
      display: inline-block;
      border: 0;
      background: $color-secondary;
      color: $color-white;
      font-family: $font-family-title;
      transition: $transition;

      &:hover {
        background: $color-primary-bright;
      }
    }
  }

  @include mq(tablet) {
    width: calc(100% / 2 - #{$base-padding});
    float: left;
    margin-left: $base-margin;

    &:nth-child(2n + 1) {
      margin-left: 0;
    }
  }

  @include mq(laptop) {
    width: calc(100% / 4 - (#{$base-padding} * 6) / 4);

    &:nth-child(2n + 1) {
      margin-left: $base-margin;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}

.credits {
  clear: both;
  background: $color-primary-bright;
  font-size: 0.75rem;
  padding: $base-padding 0;
  p {
    margin: 0;
  }

  a {
    color: $color-white;
    font-weight: bold;

    &:hover {
      color:$color-secondary
    }
  }
}
</style>