<template>
  <div id="app">
   
    <div class="wrapper" :class="{mobile: overviewToggleComputed}">
      <div class="mobile-overview" ></div>
      <header>
        <!-- <div class="inner"> -->
          <app-header></app-header>
          <!-- <transition name="fade" appear mode="out-in">
            <router-view name="intro"/>
          </transition> -->
        <!-- </div> -->
      </header>

      <main>
        <transition name="fade" appear mode="out-in">
            <router-view/>
        </transition>
      </main>

      <app-footer></app-footer>
    </div>
  </div>
</template>


<script>
  import appHeader from '@/components/Header.vue';
  import appFooter from '@/components/Footer.vue';

  export default {
    // data() {
    //   return {
    //     overviewToggle: false
    //   }
    // },
    computed:{
       overviewToggleComputed() {
         return this.$store.getters.getOverviewToggle;
       }
    },
    created() {
      this.$store.dispatch('loadBeers');
    },
    mounted(){

      // let navBar = document.getElementById('nav');
      // let mobileToggle = document.getElementById('mobile-toggle');
      // mobileToggle.addEventListener('click', () => {
        // if(navBar.classList.contains('visible')) {
        //   console.log('quita');
        //   navBar.classList.remove('visible');
        // }else {
        //   console.log('pon');
        //   setTimeout (
        //     function() {
        //        navBar.classList.add('visible');   
        //     }, 500
        //   ) 
        // }
      //   this.$store.dispatch('overviewToggleAction');
      // });
    },
    components: {
      appHeader,
      appFooter
    }
  }

</script>

<style lang="scss">

@import "/assets/css/base.scss";
@import "/assets/css/main.scss";


</style>
