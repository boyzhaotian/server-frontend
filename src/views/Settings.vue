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
            <div class="weui-cells__tips">*开启后需刷新页面查看引导</div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            guide: !localStorage.getItem('guide')
        }
    },
    watch: {
        guide(val) {
            localStorage.setItem('guide',val)
        }
    }
}
</script>
