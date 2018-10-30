<template>
	<div class="about">
		<div class="narrow-content">
			<div class="row row-bottom-padded-md">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<img class="img-responsive" src="../assets/img/img_bg_1.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co">
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<h2 class="heading">About Me 关于我</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>
					<p>Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>
				</div>
			</div>
		</div>

		<services></services>
		<get-in-touch></get-in-touch>
	</div>
</template>
<script>
import Services from '@/components/Services'
import GetInTouch from '@/components/GetInTouch'
export default {
	components: {
		Services, GetInTouch
	}
}
</script>
