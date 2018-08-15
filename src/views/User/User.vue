<template>
	<div>
		<p>当前有{{list.length}}条数据,总共有{{count}}条数据</p>
		<ul class="flexible">
			<li v-for="item of list">
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
			let pages = {
				page: this.page,
				size: this.size
			}
			// this.$store.dispatch('user/getlist', pages);
			this.getlist(pages);
		},
		mounted(){

		},
		data(){
			return {
				page: 1,
				size: 3
			}
		},
		methods: {
			prev(){
				let pages = {
					page: --this.page,
					size: this.size
				}
				this.getlist(pages);
			},
			next(){
				let pages = {
					page: ++this.page,
					size: this.size
				}
				this.getlist(pages);
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
	}
</style>