<template>
    <div class="portfolio">
        <div class="narrow-content">
            <h2 class="heading animate-box" data-animate-effect="fadeInLeft">Portfolio作品集</h2>
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
        </div>
        <get-in-touch></get-in-touch>
    </div>
</template>
<script>
import PortfolioItem from '@/components/PortfolioItem'
import GetInTouch from '@/components/GetInTouch'
export default {
    components: {
        PortfolioItem, GetInTouch
    }
}
</script>
