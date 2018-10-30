<template>
	<div class="about">
		<div class="narrow-content">
			<div class="row row-bottom-padded-md">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<img class="img-responsive" src="../assets/img/img_bg_1.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co">
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<h2 class="heading">About Me 关于我</h2>
					<p>喜欢艺术，喜欢创造，喜欢柯基..科技。</p>
					<p>Everything is connected. 借用<a href="https://dandyweng.com">@dandyweng</a>的一句话『网页设计（前端工程）是编程与设计的绝佳结合点』，创造科技与艺术的结晶或许是一种信仰。</p>
					<p><span class="green" @click="$router.push({name:'resume'})">→个人简历点击这里←</span></p>
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
