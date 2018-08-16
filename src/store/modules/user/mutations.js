const get_list = (state, params) => {
	state.list = params.arr;
	state.count = params.len;
}

export default {
	get_list
}