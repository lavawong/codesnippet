/**
 * @description ȫ��ģ��֪ͨ����,���ð�����
 *
 */
define('Listener',['WhiteList'], function(whiteList){
    var list = {};
    var listener = {
        on : function(name, func){
            var funcs;
            if (whiteList[name]) {
                funcs = list[name] || [];
                funcs.push(func);
                list[name] = funcs;
                return true;
            }
            return false;
        },
        off : function(name, func){
            var funcs;
            if (whiteList[name] && (funcs = list[name])){
                for (var i=0, len=funcs.length; i<len; i++ ) {
                    if (funcs[i] === func) {
                        funcs.splice(i, 1);
                        return true;
                    }
                }
            }
            return false;
        },
        trigger : function(name, data, scope){
            var funcs = list[name];
            if (!funcs) {
                return false;
            }
            for (var i=0, len=funcs.length; i<len; i++) {
                funcs[i].call(scope, data);
            }
            return true;
        },
        clear : function(name) {
            list[name] = null;
        },
        clearAll : function(){
            list = {}; 
        }
    }
    return listener;
});
