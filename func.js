//定义一个方法
function testFun( a, b ){
    let c = a + b;
    return c;
}

//将方法转成字符串
let funStr= testFun.toString();

//将字符串转成方法
let makeFunc = function( str ){
    let str1 = `return ${str}`;
    let funstr = Function( str1 )();
    return funstr;
};

//返回的就是一个方法
let funcRet = makeFunc( funStr );
let ret = funcRet( 1, 2 );

console.log( ret );//3

