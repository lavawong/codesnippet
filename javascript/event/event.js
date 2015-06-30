/**
 * 自定义事件基础类，占用this属性__eventCaches
 * @author LavaWong<wjh_9527@163.com>
 * @date 15/6/3.
 */
function Event(){
	var events = this.__eventCaches = {};
	/**
	 * 监听事件
	 * @param {String} type 事件类型
	 * @param {Function} func 事件执行函数
	 */
	this.on = function(type, func){
		var funcs = events[type] || [];
		funcs.push(func);
		events[type] = funcs;
	};
	/**
	 * 触发监听事件
	 * @param type 需要触发的事件
	 * @param {...} 触发事件传入的数据
	 * @returns {boolean}
	 */
	this.trigger = function(type){
		var _slice = [].slice,
				args = arguments;
		var funcs = events[type];
		if (!funcs) {
			return !1;
		}
		var i= 1, newArgs = [], len;
		newArgs = _slice.call(args, 1, args.length);
		for (len=funcs.length, i=0; i<len; i++) {
			funcs[i].apply(this, newArgs);
		}
		return !0;
	};
	/**
	 * 关闭事件监听
	 * @param {String} type 取消的事件类型，如果为空则取消所有监听事件
	 * @param {Function} func 取消是监听函数，如果为空则取消type下的所有事件
	 * @returns {boolean}
	 */
	this.off = function(type, func){
		var _splice = [].splice,
				onFunc,
				onArr = events[type];
		if (!type) {
			events = {};
		}
		if (!func) {
			events[type] = [];
		}
		if (!onArr) {
			return !1;
		}
		for (var len = onArr.length, i=0; i<len; i++) {
			onFunc = onArr[i];
			if (onFunc = func) {
				_splice.call(onArr, i, 1);
				break;
			}
		}
	}
};
