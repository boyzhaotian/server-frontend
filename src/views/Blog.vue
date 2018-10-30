<template>
    <div class="blog">
        <narrow-content title="Blog博客">
            <blog-item></blog-item>
            <blog-item></blog-item>
            <blog-item></blog-item>
        </narrow-content>
        <get-in-touch></get-in-touch>
    </div>
</template>
<script>
import BlogItem from '@/components/BlogItem'
import GetInTouch from '@/components/GetInTouch'
import NarrowContent from '@/components/NarrowContent'
export default {
    components: {
        BlogItem, GetInTouch, NarrowContent
    }
}
</script>
