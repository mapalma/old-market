<template>
<div class="home-text-wrapper">
    <div class="home-text">
        <h1>Enjoy the finest craft beers</h1>
        <p>We have the best local and world beers selection for you.</p>
        <router-link to="/shop" tag="button">Explore</router-link>
    </div>
</div>
</template>

<style lang="scss" scoped>

@import "../assets/css/base.scss";


p {
    color: $color-white;
    font-size: $font-size-base - 0.1rem;

    @include mq(tabletXL) {
        font-size: $font-size-base;
    }
}

.home-text-wrapper {
    min-height:270px;
    position: relative;

    @include mq(tablet) {
        height:calc(70vh - 100px);
    }
}
.home-text {
    width: calc(100%/1.4);
    margin:  $base-padding auto;
    // padding-bottom: $base-padding * 2;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    h1 {
        font-size: 1.5rem;
        color: #fff;
        line-height: 1;
        letter-spacing: 1px; 
        margin: 0 0 $base-padding/2 0;
        text-transform: unset;
    }
    p {
        margin-bottom: $base-padding;
    }

    button {
        background: transparent;
        color: $color-secondary;
        border: 1px solid $color-secondary;
        padding: $base-padding/1.5 $base-padding * 1.5;
        text-transform: uppercase;
        font-family: $font-family-title;
        letter-spacing: 1px;
        transition: $transition;

        &:hover {
            color: $color-white;
            background: $color-primary;
            border: 1px solid $color-white;
        }
    }

    @include mq(tabletXL) {

        width:100%;
        
        h1 {
            font-size: 2.8rem;
            // margin: 0
        }
    }
}

</style>
