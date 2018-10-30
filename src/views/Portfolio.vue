<template>
    <div class="portfolio">
        <narrow-content title="Portfolio作品集">
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
        </narrow-content>
        <get-in-touch></get-in-touch>
    </div>
</template>
<script>
import PortfolioItem from '@/components/PortfolioItem'
import NarrowContent from '@/components/NarrowContent'
import GetInTouch from '@/components/GetInTouch'
export default {
    components: {
        PortfolioItem, NarrowContent, GetInTouch
    }
}
</script>
