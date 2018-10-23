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
                                    <input v-model="name" type="text" class="form-control" placeholder="称呼">
                                </div>
                                <div class="form-group">
                                    <input v-model="email" type="text" class="form-control" placeholder="邮箱">
                                </div>
                                <div class="form-group">
                                    <input v-model="mobile" type="text" class="form-control" placeholder="手机号">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea v-model="content" name="" id="message" cols="30" rows="7" class="form-control" placeholder="内容"></textarea>
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
let appid = '1400151932'
let appkey = '09af7b453d651363a4a93b8c2ff01327'
import QcloudSms from 'qcloudsms_js'
import weui from 'weui.js';
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            mobile: '',
            content: '',
        }
    },
    methods: {
        sendMessage() {
            event.preventDefault()
            if (!this.name&&!this.email&&!this.mobile&&!this.content) {
                weui.alert('请填写完整信息方便后期与您取得联系哦')
            }
            weui.confirm(`
                <div style='text-align:left'>请核对您要发送的信息：
                <br>称呼：${this.name}
                <br>邮箱：${this.email}
                <br>手机号：${this.mobile}
                <br>内容：${this.content}</div>`, this.sendMail)
        },
        sendMail() {
            axios.post('/api/mail',this.$data,(res)=>{
                console.log(res);
            })
        },
        sendSMS() {
            let qcloudsms = QcloudSms(appid, appkey)
            let ssender = qcloudsms.SmsSingleSender()
            let smsType = 0
            let callback = (err, res, resData) => {
                console.log(err, res, resData);
            }
            ssender.send(smsType, 86, this.phone, 
                `【个人主页-联系我】称呼：${this.name}，邮箱：${this.email}，手机号：${this.mobile}，内容：${this.content}。`, "", "",
                callback
            )
        }
    }
}
</script>
