<template>
    <aside id="hero" class="js-fullheight">
        <div class="swiper-container swiper-no-swiping js-fullheight">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg_1">
                    <div class="overlay"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                <div class="slider-text-inner">
                                    <!-- <h1>Intuitive <strong></strong> is How Give We the User New Superpowers</h1> -->
                                    <h1><strong>独立建站</strong>，力求优质高效</h1>
                                    <!-- <p><a class="btn btn-primary btn-demo popup-vimeo" href=""> <i class="icon-monitor"></i> Live Preview</a> <a class="btn btn-primary btn-learn">Learn More<i class="icon-arrow-right3"></i></a></p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg_2">
                    <div class="overlay"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                <div class="slider-text-inner">
                                    <!-- <h1>We are Happy to Create Newest Modern Websites</h1> -->
                                    <h1><strong>精雕细琢</strong>，用适合的技术，呈现最好的效果</h1>
                                    <!-- <p><a class="btn btn-primary btn-demo popup-vimeo" href="#"> <i class="icon-monitor"></i> Live Preview</a> <a class="btn btn-primary btn-learn">Learn More<i class="icon-arrow-right3"></i></a></p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg_3">
                    <div class="overlay"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                                <div class="slider-text-inner">
                                    <!-- <h1>Download our Free HTML5 Bootstrap Template</h1> -->
                                    <h1><strong>追求卓越</strong>，学无止境</h1>
                                    <!-- <p><a class="btn btn-primary btn-demo popup-vimeo" href=""> <i class="icon-monitor"></i> Live Preview</a> <a class="btn btn-primary btn-learn">Learn More<i class="icon-arrow-right3"></i></a></p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </aside>

</template>
<script>
const timeout = 500
import Swiper from 'swiper'
export default {
    data() {
        return {
            Swiper: Object
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let slide
            this.Swiper = new Swiper('.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                autoplay: true,
                delay: 5000,

                effect : 'fade',
                fadeEffect: {
                    crossFade: true
                },

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },

                on: {
                    init(){
                        slide=this.slides.eq(0).find('.slider-text');
                        slide.addClass('animated fadeInUp');
                    },
                    transitionStart(e) {
                        setTimeout(() => {
                            for(let i=0;i<this.slides.length;i++){
                                slide = this.slides.eq(i).find('.slider-text');
                                slide.removeClass('animated fadeInUp');
                            }
                        }, timeout);
                    },
                    transitionEnd(e) {
                        setTimeout(() => {
                            slide=this.slides.eq(this.activeIndex).find('.slider-text');
			                slide.addClass('animated fadeInUp');
                        }, timeout);
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.swiper-container {
    .swiper-wrapper {
        background-size: contain
    }
}
.bg_1 {
    background-image: url(../assets/img/img_bg_1.jpg);
}
.bg_2 {
    background-image: url(../assets/img/img_bg_2.jpg);
}
.bg_3 {
    background-image: url(../assets/img/img_bg_3.jpg);
}
</style>
<style lang="scss" scoped>
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    /*-webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);*/
    -webkit-transform: translate3d(0, 40px, 0);
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>
