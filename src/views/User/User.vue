<template>
	<div>
		<p>当前有{{users.length}}条数据,总共有{{count}}条数据</p>
		<ul class="flexible">
			<li v-for="item of users">
				<div>
					<h3>姓名: {{item.name}}</h3>
					<p>性别: {{item.gender}}</p>
					<p>年龄: {{item.age}}</p>
					<p>身高: {{item.height}}</p>
					<p>体重: {{item.weight}}</p>
				</div>
			</li>
		</ul>
		<button type="button" @click="prev">前一页</button>
		<button type="button" @click="next">后一页</button>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'user',
		created(){
			// this.$store.dispatch('user/getlist');
			this.getlist();
		},
		mounted(){
			this.users = this.list({page: 1, size:4});
			console.log(this.users);
		},
		data(){
			return {
				page: 1,
				size: 4,
				users: []
			}
		},
		methods: {
			prev(){
				let pages = {
					page: --this.page,
					size: 4
				}
				this.users = this.list(pages);
			},
			next(){
				let pages = {
					page: ++this.page,
					size: 4
				}
				this.users = this.list(pages);
			},
			...mapActions({
				getlist: 'user/getlist'
			})
		},
		computed: {
			...mapGetters({
				list: 'user/list',
				count: 'user/count'
			})
		}
	}
</script>

<style scoped>
	.flexible{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.flexible>li>div{
		border: 2px solid #000;
		border-radius: 5px;
		padding: 0 15px;
	}
	li{
		list-style: none;
	}
</style>