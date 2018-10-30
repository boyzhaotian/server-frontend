<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/img/logo-sky-blue.png"> -->
		<Slider/>
		<Services/>
		<narrow-content title="recent blog">
			<blog-item/>
			<blog-item/>
			<blog-item/>
			<blog-item/>
		</narrow-content>
		<Get-in-touch></Get-in-touch>
	</div>
</template>
<script>
// @ is an alias to /src
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import BlogItem from '@/components/BlogItem'
import GetInTouch from '@/components/GetInTouch'
import NarrowContent from '@/components/NarrowContent'
export default {
	name: 'home',
	components: {
		Slider, Services, GetInTouch, NarrowContent, BlogItem
	}
}
</script>
