<template>
	<div id="app">
		<div>
			<router-link to="/login">login</router-link>
			<router-link to="/home">home</router-link>
			<router-link to="/user">user</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name: 'app',
	}
</script>

<style scoped>
	
</style>