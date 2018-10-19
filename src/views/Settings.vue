<template>
    <div class="settings">
        <div class="narrow-content">
            <h2 class="heading animate-box" data-animate-effect="fadeInLeft">Settings网站设置</h2>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">开启网站引导</div>
                    <div class="weui-cell__ft">
                        <input v-model="guide" class="weui-switch" type="checkbox"/>
                    </div>
                </div>
            </div>
            <div class="weui-cells__tips">*开启后需刷新页面查看引导<a href="">点击刷新</a></div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            guide: this.$store.state.guide
        }
    },
    watch: {
        '$store.state.guide'(val) {
            this.guide = val
        },
        guide(val) {
            this.$store.commit('guide', val)
        }
    }
}
</script>
