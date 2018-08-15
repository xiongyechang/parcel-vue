<template>
	<div id="app">
		<!-- <router-view></router-view> -->
		<user/>
	</div>
</template>

<script>
	import user from './views/User/User';
	export default {
		name: 'app',
		components: {
			user
		}
	}
</script>

<style scoped>
	
</style>