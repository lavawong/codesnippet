/**
 * 类继承函数，需要在子类的构造函数中显示调用super.call(this);
 * 示例：<code>

 function Super(){
	this.name = 'super';
	this.display = function(){
		console.log(this.name);
		return this.name;
	}
}

 function Child(){
	this.name = '';
	this.setName = function(val){
		this.name = val;
	};
	this.super.call(this);
};

 Child = inherits(Super, Child, {
	a:1
});

 var a = new Child();
 var b = new Child();
 b.display();
 a.setName('wangqiang1');
 a.display();
 b.display();
 </code>
 * @author LavaWong<wjh_9527@163.com>
 * @date 15/6/3.
 */
function inherits(parent, child, proto) {
	var childProto = child.prototype,
			obj, p, subClass = function() {
				child.apply(this, arguments);
			},
			pnProto;

	pnProto = new parent();

	for (var pro in pnProto) {
		obj = pnProto[pro];
		subClass.prototype[pro] = obj;
	}

	for (p in childProto) {
		subClass.prototype[p] = childProto[p];
	}

	if (proto) {
		for (p in proto) {
			if (proto.hasOwnProperty(p)) {
				subClass.prototype[p] = proto[p];
			}
		}
	}

	subClass.prototype.constructor = child;
	subClass.prototype.super = parent;
	return subClass;
};


