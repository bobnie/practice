if(!Function.prototype.apply){
  Function.prototype.apply = function(object, parameters){
    var f =this;
    var o = object || windows;
    var args = parameters || [];
    o._$_apply_$_ = f;
    var stringArgs = [];
    for(var i = 0;i<args.length;i++)
    stringArgs[i] = "args[" + i + "]";
    var arglist = stringArgs.join(",");
    var methodcall = "o._$_apply_$_(" + arglist + ");";
    var result = eval(methodcall);
    delete o._$_apply_$_;
    return result;
    console.log(result);
  };
}
