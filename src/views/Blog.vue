<template>
    <div class="blog">
        <div class="narrow-content">
            <h2 class="heading animate-box" data-animate-effect="fadeInLeft">Blog博客
            </h2>
				<div class="row row-bottom-padded-md">
                    <blog-item></blog-item>
                    <blog-item></blog-item>
                    <blog-item></blog-item>
				</div>
        </div>
        <get-in-touch></get-in-touch>
    </div>
</template>
<script>
import BlogItem from '../components/BlogItem.vue';
import GetInTouch from '@/components/GetInTouch'
export default {
    components: {
        BlogItem, GetInTouch
    }
}
</script>
