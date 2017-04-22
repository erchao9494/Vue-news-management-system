<style scoped>
	
	
	.layout-copy {
		text-align: center;
		
		color: #9ea7b4;
		font-size:20px;
	}
	#shouye{
		width:100%;
		height:100vw;
		overflow:auto;
		background:#94C5E3;
	}
	.liebaio{
	    overflow:hidden;
		padding-top:20px;
	}
	.liebiao li{ padding:8px;
		background:#fff;
		margin:10px 60px;
		
	}
	.liebiao p{
		padding:10px 0;
		
	}
	.liebiao li p:nth-child(5){
		padding:0;
		height:28px;
	}
	.liebiao li p:nth-child(5) span{
		display:inline-block;
		width:24%;
		height:28px;
		line-height:28px;
		
		border-right:1px solid #C7C7C7;
		text-align:center;
	   flex:left;
	}
	.liebiao .xinxi{
		padding:5px 0;
		position:relative;
		margin-left:10px;
	}
	.liebiao .xinxi .img{
		width:50px;
		height:50px;
		border-radius:50%;
		display:inline-block;
		flex:left;
	}
	.liebiao .xinxi .img img{
		width:100%;
		height:100%;
		border-radius:50%;
		flex:left;
	}
	
    .liebiao .xinxi .nicheng{
    	display:inline-block;
    	position:absolute;
    	left:60px;
    	top:20px; 	
    	font-size:18px;
    	color:orange;
    }
    .sousuo{
    	
    	width:100%;
    	background:lightgoldenrodyellow;
    	padding:15px 60px;
    }
    .fabiao{
    	width:100%;
    	margin-left:60px;
    	background:lightcyan;
    	padding:15px 60px;
    	
    }
    
	
</style>
<template>
	<div id="shouye">
		<div class="sousuo">
			 <Input v-model="value" placeholder="热门搜索..." style="width: 300px; float:left;margin-right:20px;"></Input>
			    <Button type="primary" icon="ios-search">搜索</Button>
		</div>
		<div class="fabiao">
			<ul>
				<li>
				<span id="">
					把你不开心的说出来,让大家开心一下..
				</span><em></em></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<ul class="liebiao">
			<li v-for="i in arr">
				<div class="xinxi">
					<a href="" class="img">
					<img src="../../assets/huangren.png" alt="" />
					</a>
					<a class="nicheng">橙子</a>
					<a href="#">{{11}}</a>
				</div>
				<h2 style="margin-left:70px;">{{i.title}}</h2>
				<p style="margin-left:70px;">{{i.content}}</p>
				<p style="margin-left:70px;">{{i.name}}</p>
				<p>
					<span>收藏</span>
					<span style="font-size:18px;"><Icon type="share"></Icon></span>
					<span style="font-size:16px;"><Icon type="chatbox-working"></Icon></span>
					<span style="border:0;font-size:16px;"><Icon type="thumbsup"></Icon></span>
					
				</p>
			</li>
			
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				arr:[
				  {title:'今日头条',
				   content:'看见爱上公开考试来对付',
				   name:'张珊'
				  },
				  {title:'今日头条',
				   content:'看见爱上公开考试来对付',
				   name:'里'
				  },
				   {title:'今日头条',
				   content:'看见爱上公开考试来对付',
				   name:'解决'
				  },
				   {title:'今日头条',
				   content:'看见爱上公开考试来对付',
				   name:'万万'
				}
  
				
				]
				, value: ''

			}
		},
		methods: {
			fn: function() {

				this.$http.get('').then(function(reqs) {
					console.log(reqs)

				})
			}


		},
		mounted: function() {
			this.fn();
		}

	}
</script>