<template>
    <div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">
        <div class="blog-entry">
            <a :href="link" class="blog-img"><img :src="img" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>
            <div class="desc">
                <h3><a href="#">{{title}}</a></h3>
                <span><small>by {{author}} </small> / <small> {{category}} </small> / <small> <i class="icon-comment"></i> 14</small></span>
                <p>{{brief}}</p>
                <a :href="link" class="lead">Read More <i class="icon-arrow-right3"></i></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        img: {
            type: String,
            default: '/static/img/img-5.jpg'
        },
        title: {
            type: String,
            default: 'Inspirational Website'
        },
        author: {
            type: String,
            default: 'Admin'
        },
        category: {
            type: String,
            default: 'Web Design'
        },
        brief: {
            type: String,
            default: 'Design must be functional and functionality must be translated into visual aesthetics'
        },
        link: {
            type: String,
            default: '#'
        },
    }
}
</script>
