<template>
    <div>
        <div class="more-contact">
            <div class="narrow-content">
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="icon">
                                <i class="icon-globe"></i>
                            </div>
                            <div class="text">
                                <p><a href="#">13426031783@139.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="icon">
                                <i class="icon-map"></i>
                            </div>
                            <div class="text">
                                <p>地球 亚洲 中国 北京 北京市 海淀区</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature feature-sm animate-box" data-animate-effect="fadeInLeft">
                            <div class="icon">
                                <i class="icon-phone"></i>
                            </div>
                            <div class="text">
                                <p><a href="tel://">+86 134 2603 1783</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="narrow-content animate-box" data-animate-effect="fadeInLeft">
            
            <div class="row">
                <div class="col-md-4">
                    <h2>联系我</h2>
                </div>
            </div>
            <form action="">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="称呼">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="邮箱">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="手机号">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="内容"></textarea>
                                </div>
                                <div class="form-group">
                                    <input @click="sendMessage" type="submit" class="btn btn-primary btn-md" value="发送信息">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
        <div id="map"></div>	
    </div>
</template>
<script>
export default {
    methods: {
        sendMessage() {
            event.preventDefault()
        }
    }
}
</script>
