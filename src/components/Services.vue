<template>
    <narrow-content title="">
        <service-item icon='icon-settings' title="Strategy策略"></service-item>
        <service-item icon='icon-search4' title="Explore探索"></service-item>
        <service-item icon='icon-paperplane' title="Direction方向"></service-item>
        <service-item icon='icon-params' title="Expertise专业"></service-item>
    </narrow-content>
</template>
<script>
import NarrowContent from '@/components/NarrowContent'
import ServiceItem from '@/components/ServiceItem'
export default {
    components: {
        NarrowContent, ServiceItem
    }
}
</script>
