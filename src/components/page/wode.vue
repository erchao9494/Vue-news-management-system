<style scoped>
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
	
	.xiugai {
		width: 100%;
		background: #77B1D7;
		opacity: .6;
	}
	
	.xinxi {
		width: 80%;	
		margin: 0 auto;
		background: url(../../assets/7065230ad9fe0e846f902db49278f057.jpg) 100% 100%;
		overflow: hidden;
		padding:10px 0;
	}
	
	.touxiang {
		width: 100px;
		height: 100px;
		margin: 0 auto;
		margin-top: 10px;
	}
	
	.touxiang img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 2px solid #ccc;
	}
	
	.juti {
		width: 100%;
		
	}
	
	
	.juti li:nth-child(2),.juti li:nth-child(3),.juti li:nth-child(4),.juti li:nth-child(5) {
		list-style: none;
		text-align: center;
		margin-top: 50px;
		color: orange;
		font-size:16px;
	}
	.juti li:nth-child(1){
		margin-top: 50px;
		color: orange;
		font-size:16px;
		list-style: none;
		margin-left:235px;	   
	}
	.juti li:nth-child(1) a{
		margin-left:100px;
		color:#C6C6C6;
	}
	.touxiang li{
		list-style: none;
		width:100%;
		height:30px;
		
		position:relative;
	}
	.touxiang li input{
		display:inline-block;
		color:orange;
		margin-left:20px;
		margin-top:5px;
	}
	.touxiang li button{
		display:inline-block;
		position:absolute;
		bottom:0;
		right:-160px;
	}
	
	
</style>
<template>
	<div class="xiugai">
		<div class="xinxi">
			<div class="touxiang">
				<img src="../../assets/huangren.png" alt="" />
				<li>
				<input type="file" /><Button type="success">上传</Button>
				</li>
			</div>
			
			<div class="juti">
				<li>用户名:
					<a href="javascript:;">黄瓜</a>
				</li>
				<li>昵称:
					<Input v-model="value" placeholder="请输入..." style="width: 300px;margin-left:10px;"></Input>
				</li>
				
				<li>密码:
					<Input v-model="value" placeholder="请输入..." style="width: 300px;margin-left:10px;"></Input>
				</li>
				<li>邮箱:
					<Input v-model="value" placeholder="请输入..." style="width: 300px;margin-left:10px;"></Input>
				</li>
				
				 <li><Button type="primary" @click="info" style="width:100px;">确定</Button></li>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			info() {
				this.$Message.info('修改成功！！');
			}
		}
	}
</script>