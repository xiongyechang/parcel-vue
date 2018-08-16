import data from './data';

const getlist = (context,pages) => {
	let page = pages.page; // 第几页
	let size = pages.size; // 每一页显示几条数据
	console.log(pages);
	if(page&&size){
		let arr = [];
		for(let i = (page-1)*size; i<=page*size-1;i++){
			arr.push(data[i]);
		}
		let params = {
			arr: arr,
			len: data.length
		}
		context.commit('get_list', params);
	}else{
		return;
	}
}

export default {
	getlist
}