import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
	list: [],// 用户列表
	count: 0,// 用户数量
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
