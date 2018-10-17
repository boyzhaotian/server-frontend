<template>
    <div>
        <div class="narrow-content">
            <h2 class="heading animate-box" data-animate-effect="fadeInLeft">Portfolio作品集</h2>
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
            <portfolio-item></portfolio-item>
        </div>
    </div>
</template>
<script>
import PortfolioItem from '@/components/PortfolioItem'
export default {
    components: {
        PortfolioItem
    }
}
</script>
