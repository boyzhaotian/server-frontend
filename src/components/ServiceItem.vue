<template>
    <div class="col-md-6">
        <div class="feature animate-box" data-animate-effect="fadeInLeft">
            <div class="icon">
                <i :class="icon"></i>
            </div>
            <div class="text">
                <h3>{{title}}</h3>
                <p>{{content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'icon-settings'
        },
        title: {
            type: String,
            default: 'Strategy'
        },
        content: {
            type: String,
            default: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. '
        },
    }
}
</script>
