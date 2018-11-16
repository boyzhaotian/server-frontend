<template>
    <div id="get-in-touch">
        <div class="narrow-content">
            <div class="row">
                <div class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <h1 class="heading-colored">联系我</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <p class="lead">小站目前内容有限，如需了解更多可点击下方按钮</p>
                    <p><a @click="$router.push({name:'contact'})" class="btn btn-primary">了解更多</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
