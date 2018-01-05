/**
 *Created by Jhonor on 2017/12/27.
 */
function test(){
   for(let i=0;i<3;i++){
       console.log(i);
   }
   //console.log(i);


    let a = 100;
    //let a = 200;

    const PI = 3.1415926;

    const k = {
        a:1,
    }

    delete k.a;
    k.b='b';
    console.log(k);


}
//test();


/*
* 1.let声明的变量不能重复声明;不能变量提升;
* 2.let和const声明的变量(常量)具有块作用域;
* 3.const声明的常量不能修改;(对象里的属性可以增删);不能先声明后赋值;
* */