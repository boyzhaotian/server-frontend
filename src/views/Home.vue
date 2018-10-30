<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/img/logo-sky-blue.png"> -->
		<Slider/>
		<Services/>
		<Get-in-touch></Get-in-touch>
	</div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider'
import Services from '@/components/Services'
import GetInTouch from '@/components/GetInTouch'
export default {
	name: 'home',
	components: {
		Slider, Services, GetInTouch
	}
}
</script>
