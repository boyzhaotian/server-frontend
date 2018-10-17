<template>
    <div class="col-md-3 col-sm-6 col-padding text-center animate-box">
        <a :href="link" class="work image-popup" :style="{ backgroundImage: `url(${img})` }">
            <div class="desc">
                <h3>{{name}}</h3>
                <span>{{illus}}</span>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Project Name'
        },
        illus: {
            type: String,
            default: 'Illustration'
        },
        link: {
            type: String,
            default: '#'
        },
        img: {
            type: String,
            default: '/static/img/img-1.jpg'
        }
    },
}
</script>
