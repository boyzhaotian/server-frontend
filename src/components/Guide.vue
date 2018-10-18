<template>
    <div class="guide" :class="{ hiding }" v-show="show">
        <div class="tipBox">
            <img class="arrow" src="@/assets/img/double-arrow-gray.png" alt="">
            <div class="tip">左右滑动开关菜单</div>
        </div>
        <div>
            <div class="iknewit" @click="seen">知道啦<span v-if="cd">({{cd}}s)</span></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: !localStorage.getItem('guide'),
            hiding: false,
            cd: 5
        }
    },
    mounted() {
        this.countDown()
    },
    methods: {
        seen() {
            if(this.cd)return
            localStorage.setItem('guide',true)
            this.hiding = true
            setTimeout(() => {
                this.show = false
            }, 600);
        },
        countDown() {
            this.cd&&setTimeout(() => {
                this.cd--
                this.countDown()
            }, 1000);
        }
    }
}
</script>
<style lang="scss" scoped>
.guide {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Hannotate SC';
    text-align: center;
    color: #d9d9d9;
    transition: 600ms;
    opacity: 1;
    .tipBox {
        .arrow {
            animation: shake 1.5s linear 0s infinite;
            width: 180px;
        }
        .tip {
            font-size: 20px;
            margin: auto;
            width: 80px;
        }
    }
    .iknewit {
        display: inline-block;
        border: 1px dashed #d9d9d9;
        border-radius: 5px;
        margin-top: 20px;
        padding: 5px;
    }
    &.hiding {
        opacity: 0;
    }
}
@keyframes shake {
    0% {
        transform: translateX(0%)
    }
    5% {
        transform: translateX(-5%)
    }
    10% {
        transform: translateX(5%)
    }
    15% {
        transform: translateX(-3%)
    }
    20% {
        transform: translateX(3%)
    }
    25% {
        transform: translateX(0%)
    }
    100% {
        transform: translateX(0%)
    }

}
</style>
