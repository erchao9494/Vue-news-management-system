<style scoped>
	.layout-copy {
		text-align: center;
		color: #9ea7b4;
		font-size: 20px;
	}
	
	#shouye {
		width: 100%;
		padding:20px 0;
		overflow: auto;
		background: #94C5E3;
	}
	
	.liebaio {
		overflow: hidden;
		padding-top: 20px;
	}
	
	.liebiao li {
		padding: 8px;
		background: #fff;
		margin: 10px 60px;
		position:relative;
		
	}
	
	.liebiao p {
		padding: 10px 0;
	}
	
	.liebiao li p:nth-child(5) {
		padding: 0;
		height: 28px;
	}
	
	.liebiao li p:nth-child(5) span {
		display: inline-block;
		width: 24%;
		height: 28px;
		line-height: 28px;
		border-right: 1px solid #C7C7C7;
		text-align: center;
		flex: left;
	}
	
	.liebiao .xinxi {
		padding: 5px 0;
		position: relative;
		margin-left: 10px;
	}
	.xinxi a:last-child{
	    
	}
	.liebiao .xinxi .img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: inline-block;
		flex: left;
	}
	
	.liebiao .xinxi .img img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		flex: left;
	}
	
	.liebiao .xinxi .nicheng {
		display: inline-block;
		position: absolute;
		left: 60px;
		top: 10px;
		font-size: 18px;
		color: orange;
	}
	.liebiao p{
		position:absolute;
		bottom:0px;
		right:20px;
	}
	
	.sousuo {
		width: 100%;
		background: lightgoldenrodyellow;
		padding: 15px 60px;
	}
	
	.fabiao {
		width: 88.4%;
		margin: 0 60px;
		background: lightcyan;
		padding: 10px;
		display: block;
	}
	
	.fabiao li {
		width: 850px;
		padding: 15px 5px;
	}
	
	.fabiao li:nth-child(1) span {
		float: left;
		color: cornflowerblue;
		font-size: 15px;
	}
	
	.fabiao li:nth-child(1) em {
		float: right;
	}
	
	.fabiao textarea {
		width: 850px;
		height: 80px;
		overflow: hidden;
		outline: none;
	}
	
	.fabiao li:last-child a {
		color: #000;
		font-size: 15px;
		margin-left: 15px;
	}
	
	.fabiao li:last-child a Icon {
		margin-right: 5px;
	}
	
	.fabiao li:last-child a:first-child {
		margin: 0;
	}
	
	.fabiao li:last-child Button {
		float: right;
		opacity: .6;
		background: orange;
		width: 80px;
	}
	
	.clear {
		clear: both;
	}
	
	.box {
		width: 100%;
		height: 100%;
		background: rgba(5, 205, 0, .2);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
	}
	
	.pinglun {
		width: 600px;
		height: 200px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -300px;
		margin-top: -100px;
		z-index: 66;
	}
	
	.pinglun .cuo {
		float: right;
		font-size: 15px;
		margin: 10px 15px 0 0;
	}
	
	.pinglun .cuo:hover {
		color: orange;
		transform: rotate(180deg);
		transition: 1s;
	}
	
	.pinglun .neirong {
		float: left;
		width: 100%;
	}
	
	.pinglun .neirong textarea {
		width: 90%;
		padding: 5px;
		margin: 15px;
		margin-left: 25px;
		outline: none;
	}
	
	.pinglun .neirong Button {
		width: 88px;
		opacity: .3;
		margin-left: 480px;
	}
	
	.box .shouchang {
		width: 400px;
		height: 240px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -200px;
		margin-top: -120px;
		z-index: 66;
	}
	
	.shouchang {
		list-style: none;
		padding: 10px;
		border-top: 1px solid orange;
	}
	
	.shouchang li:first-child {
		width: 100%;
		border-bottom: 1px solid #C7C7C7;
		height: 25px;
	}
	
	.shouchang li:nth-child(2) {
		width: 100%;
		text-align: center;
		color: greenyellow;
		margin-bottom: 10px;
	}
	
	.shouchang li:first-child span {
		float: left;
		margin-left: 15px;
	}
	
	.shouchang li:first-child p {
		float: right;
		margin-right: 15px;
	}
	
	.shouchang li:last-child p {
		margin-bottom: 10px;
	}
	
	.shouchang li:last-child input {
		width: 100%;
		height: 30px;
		outline: none;
		border: 1px solid orange;
	}
	
	.shouchang li:last-child Button {
		margin-top: 10px;
		outline: none;
		margin-left: 80px;
		height: 30px;
	}
	.fenye{
		width:100%;
		text-align: center;
		margin:0 auto;
		margin-top:40px;
		position:relative;
	}
	.fenye p{
		float:left;
		position:absolute;
		top:5px;
		left:250px;
		font-size:18px;
	}
	.fenye p span{
		margin:0 10px;
		color:orange;
	}
	
</style>
<template>

	<div id="shouye">
		<div class="box" v-show="box">
			
		</div>
		<div class="sousuo">
			<Input v-model="value" placeholder="热门搜索..." style="width: 300px; float:left;margin-right:20px;"></Input>
			<Button type="primary" icon="ios-search">搜索</Button>
		</div>
		
		<ul class="liebiao">
			<li v-for="i in arr">
				<div class="xinxi">
					<a href="" class="img">
						<img src="../../assets/huangren.png" alt="" />
					</a>
					<a class="nicheng">橙子</a>
					
				</div>
				<h2 style="margin-left:70px;">{{i.title}}</h2>
				
				<p style="margin-left:70px;">发布时间：{{i.name}}</p>
				
			</li>

		</ul>
		<div class="fenye">
			  <p>共<span>{{2}}</span>页</p>
		     <Page :total="52":current="5" style="margin-left:350px;"></Page>
		</div>

	</div>

</template>
<script>
	export default {
		data() {
			return {
				arr: [{
						title: '今日头条',
						content: '看见爱上公开考试来对付',
						name: '张珊'
					},
					{
						title: '今日头条',
						content: '看见爱上公开考试来对付',
						name: '里'
					},
					{
						title: '今日头条',
						content: '看见爱上公开考试来对付',
						name: '解决'
					},
					{
						title: '今日头条',
						content: '看见爱上公开考试来对付',
						name: '万万'
					},
					

				],
				value: '',
				box: false,
				pinglun: false,
				zan: 0,
				shoubox: false

			}
		},
		methods: {
			xianshi: function() {
				this.box = true
				this.pinglun = true
				this.shoubox = false
			},
			yinchang: function() {
				this.box = false
				this.pinglun = false
			},
			num: function() {
				this.zan++
			},
			shouchang: function() {
				this.box = true
				this.pinglun = false
				this.shoubox = true
			},
			cartView: function() {
				this.$http.get('http://localhost:8020/item/list').then(function(reqs) {
					console.log(reqs) 
					
				})
			}

		},
		
		mounted: function() {
			this.cartView();
		}

	}
</script>