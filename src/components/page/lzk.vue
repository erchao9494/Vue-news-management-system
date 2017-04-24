 <style>
  .lzk_edio{
    height:360px;
  }
  .lzk_xw{
    margin:20px 0px;
  }
 </style>
 <template>
    <div>
        <p class="lzk_xw">新闻标题：</p>
        <p class="lzk_xw"><Input type="text" v-model="biaoti" placeholder="标题" style="width:300px"></Input></p>
        <p class="lzk_xw">新闻类型：</p>
        <p class="lzk_xw">
            <Select v-model="leixing" clearable style="width:300px">
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
        </p>
        <div class="lzk_edio">
          <quill-editor
          rel="myTextEditor"
          v-model="quill"
          style="height:280px;"></quill-editor>
        </div>
        <p class="lzk_xw"><Button type="info" @click="xx()">发布新闻</Button></p>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                quill:'',
                cityList: [
                    {
                        value: '面试题',
                        label: '面试题'
                    },
                    {
                        value: '技术分享',
                        label: '技术分享'
                    }
                ],
                leixing: '',
                biaoti:''
            }
        },
        methods:{
            xx:function(){
                 if(this.quill == "" || this.leixing == "" || this.biaoti == ""){
                        alert('输入不能为空')
                 }else{
                     this.$http.post('http://192.168.43.91:8020/supermarke/list',{
                        img:'123',
                        nicheng:'123',
                        uid:'123',
                        biaoti:this.biaoti,
                        neiron:this.quill,
                        times:'2017-10-11',
                        leixing:this.leixing
                     },{emulateJSON:true}).then(function(reqs){
                        console.log(reqs)
                     })
                 }
            }

        }
    }
</script>
