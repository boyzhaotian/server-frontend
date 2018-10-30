<template>
    <div class="narrow-content">
        <h2 class="heading animate-box" data-animate-effect="fadeInLeft">{{title}}</h2>
        <div class="row">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'title标题'
        }
    }
}
</script>
