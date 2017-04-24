<style scoped>
.lzk_login{
  width:100vx;
  height:100vh;
  overflow:hidden;
  position:relative;
}
#video{
  min-width:102%;
  min-height:102%;
  position:absolute;
  left:0;
  top:0;
  z-index:-1;
}
.lzk_logindl{
  position:absolute;
  left:50%;
  top:50%;
  width:400px;
  margin:-250px 0 0 -215px;
  opacity:.6;
  padding:20px 20px 20px 20px;
  transition:all 0.5s;
}
.lzk_logindl:hover{
  opacity:1;
}
.lzk_logp{
  font: normal normal 12px '微软雅黑';
  line-height:45px;
}
.lzk_a{
  float:right;
  margin:10px 20px 0 0;
}
</style>
<template>
    <div class="lzk_login">
        <video id="video" muted="muted" autoplay="autoplay" loop="loop">
              请升级您的浏览器版本
              <source type="video/mp4" src='http://pic.qiantucdn.com/58pic/shipin/19/95/51/19955124.mp4'>
        </video>
        <Card class="lzk_logindl">
              <div>
                  <p>用户名</p>
                  <p class="lzk_logp"><Input placeholder="" style="width:310px;"></Input></p>
                  <p>密码</p>
                  <p class="lzk_logp"><Input placeholder="" style="width:310px;"></Input></p>
                  <p>邮箱</p>
                  <p class="lzk_logp"><Input placeholder="" style="width:310px;"></Input></p>
                  <p>昵称</p>
                  <p class="lzk_logp"><Input placeholder="" style="width:310px;"></Input></p>
                  <p>电话</p>
                  <p class="lzk_logp"><Input placeholder="" style="width:310px;"></Input></p>
                  <p class="lzk_logp" style="margin-top:15px;"><router-link to="/Homepage"><Button type="info" style="margin-right:12px;">注册</Button></router-link><a class="lzk_a" href="javascript:;"><router-link to="/">以注册? 去登陆</router-link></a></p>
              </div>
        </Card>
    </div>

</template>
<script>
    export default {
        data (){
            return {

            }
        }
    }
</script>
