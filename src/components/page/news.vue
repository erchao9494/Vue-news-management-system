<style scoped>
    .lzk_xianqin{
    	position:relative;
    }
    .lzk_nichen{
    	height:40px;
    	clear:both;
    	padding-left:30px;
    }
    .lzk_nichen img{
    	width:40px;
    	height:40px;
    	border-radius:50%;
    	float:left;
    	display:inline;
    	border:1px solid #ccc;
    }
    .lzk_nichen span{
    	display:inline-block;
    	height:40px;
    	line-height:40px;
    	font-size:15px;
    	color:black;
    	margin-left:20px;
    }
    .lzk_neiron{
		padding:50px 20px;
    	-background:red;
    }
    h1{
    	line-height:50px;
    }
    #lzk_append pre{
    	background:#ccc;
    }
    #lzk_append p{
    	line-height:30px;
    	text-indent:20px;
    }
</style>
<template>
        <div class="lzk_xianqin">
        	<div style="margin:20px 0 20px 0;">
        		<Breadcrumb>
			        <Breadcrumb-item href="javascript:;">新闻列表</Breadcrumb-item>
			        <Breadcrumb-item>新闻详情</Breadcrumb-item>
			    </Breadcrumb>
        	</div>
        	<div class="lzk_nichen"><img src="../../assets/001.jpg" alt="" /><span>{{lzk_list.nicheng}}</span></div>
        	<div class="lzk_neiron">
        		<h1>{{lzk_list.biaoti}}</h1>
        		<div id="lzk_append">
        			
        		</div>
        	
        	</div>
        </div>
</template>
<script>
    export default {
        data (){
            return {
				lzk_list:{},
            }
        },
        mounted:function(){
        	this.creaView();
        	
        },
        methods:{
        	creaView:function(){
        		this.$http.get('http://192.168.43.202:8005/supermarke/xiangqing?id=2').then(function(reqs){
        			console.log(reqs)
        			this.lzk_list = reqs.body;
        			var lzk_append = this.lzk_list.neirong;
        			$('#lzk_append').append(lzk_append);
        		})
        	}
        }
    }
</script>