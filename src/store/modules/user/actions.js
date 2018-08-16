import data from './data';

const getlist = context => {
	context.commit('get_list', data);
}

export default {
	getlist
}