const get_list = (state, data) => {
	state.list = data
	state.count = data.length;
}

export default {
	get_list
}