import data from './data';

const list = state => pages => {
	let page = pages.page;
	let size = pages.size;
	let arr = [];
	if(page>=1&&size>=1){
		for(let i = (page-1)*size; i <= page*size-1; i++){
			arr.push(state.list[i]);
		}
	}else{
		alert("当前页面为第"+page+"页,每页显示"+size+"条数据!!!");
	}
	return arr;
};
const count = state => state.count;

export default {
	list,
	count
}