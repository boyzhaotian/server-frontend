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
    </div>
</template>
<script>
import BlogItem from '../components/BlogItem.vue';
export default {
    components: {
        BlogItem
    }
}
</script>
