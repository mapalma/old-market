<template>
  <div class="inner page-inner">
    <div class="text-intro">
      <h1>Events</h1>
      <p>Nullam vel congue justo. In id velit eu enim dignissim tempor. Nulla nec dignissim tortor. Sed tincidunt iaculis bibendum.</p>
    </div>
    
    <ul>
        <li>
            <img src="../../src/assets/img/craft-beer-fest.jpg" alt="craft beer fest 2019" />
            <div class="event-content">
                <h2>Craft Beer Fest 2019</h2>
                <p>20th - 23rd June</p>
                <p>Mauris commodo ullamcorper accumsan. In sagittis libero nec mi ultrices elementum. Phasellus vel tortor et lorem tincidunt tincidunt et a lorem. Donec placerat lorem eu dictum scelerisque. Cras justo nunc, suscipit sit amet lacinia vitae, tristique in leo. Morbi sodales fringilla magna, et eleifend diam venenatis in. Vivamus posuere fringilla condimentum. Nam sagittis metus elit, a congue dui ultricies lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus metus non dui faucibus, vitae tempus ante ultrices.</p>
            </div>
        </li>
        <li>
            <img src="../../src/assets/img/tour.jpg" alt="Brewery Tour" />
            <div class="event-content">
                <h2>Brewery Tour</h2>
                <p>Second Saturday of the month. 11h - 13.15h</p>
                <p>Mauris commodo ullamcorper accumsan. In sagittis libero nec mi ultrices elementum. Phasellus vel tortor et lorem tincidunt tincidunt et a lorem. Donec placerat lorem eu dictum scelerisque. Cras justo nunc, suscipit sit amet lacinia vitae, tristique in leo. Morbi sodales fringilla magna, et eleifend diam venenatis in. Vivamus posuere fringilla condimentum. Nam sagittis metus elit, a congue dui ultricies lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus metus non dui faucibus, vitae tempus ante ultrices.</p>
            </div>
        </li>
        <li>
            <img src="../../src/assets/img/beer-tasting.jpg" alt="Beer Tasting" />
            <div class="event-content">
                <h2>Beer Tastings</h2>
                <p>Every Friday. Groups 7-15 people</p>
                <p>Mauris commodo ullamcorper accumsan. In sagittis libero nec mi ultrices elementum. Phasellus vel tortor et lorem tincidunt tincidunt et a lorem. Donec placerat lorem eu dictum scelerisque. Cras justo nunc, suscipit sit amet lacinia vitae, tristique in leo. Morbi sodales fringilla magna, et eleifend diam venenatis in. Vivamus posuere fringilla condimentum. Nam sagittis metus elit, a congue dui ultricies lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla rhoncus metus non dui faucibus, vitae tempus ante ultrices.</p>
            </div>
        </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
    @import "../assets/css/base.scss";

    ul {
        margin: 0;
        padding: 0;

        li {
            display: block;
            margin-bottom: $base-padding * 2;
            border-bottom: 1px solid #ddd;

           img {
               max-width: 100%
           }

            .event-content {

                h2 {
                    margin-bottom: 0;
                }
                p {
                    &:first-of-type {
                        font-weight: bold;
                        font-size: 0.85rem;
                        // border-bottom: 1px solid $color-primary;
                        // padding-bottom: $base-padding/2;
                    }
                }
            }

            &:last-child {
                border:0;
                padding-bottom:0;
            }

            @include mq(tablet){
                display: flex;
                align-items:start;
                border-bottom: 0;

                img {
                    margin-right: $base-padding * 2;
                    max-width: 50%;
                }
            }
        }
    }
</style>