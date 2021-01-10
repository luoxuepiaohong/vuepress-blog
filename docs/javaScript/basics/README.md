# 基础

## typeof
```javascript
// 未定义的变量在 typeof 方法中使用不会报错
console.log(a);     // Uncaught ReferenceError: a is not defined
typeof(a);          // undefined

// typeof 方法返回值为 string 类型
typeof(typeof(a));  // string

// NaN 是数字类型
typeof(NaN);        // number
```

## let
```javascript
// 在for()循环中，
for(let i=0; i<10; i++){
    let i='a';
    console.log(i);
}
// 两个let等价于
{
    let i;
    {
        let i = 'a';
    }
}
// 故循环会输出10个'a';
```

## const
> 一旦定义必须复制，且值（基本类型）不能被更改；<br>
> 引用类型（对象和数组）里面的属性值、元素值可以更改，但本身不能重新赋值；<br>
> 使引用类型的值不可更改的方法： **`Object.freeze(value);`**  <br>
> 冻结一个对象后该对象的原型也不能被修改<br>
> 若引用类型的值是引用类型，则该值依然可被更改，冻结引用类型所有值的方法：
```javascript
function deepFreeze(obj) {

  // 取回定义在obj上的属性名
  var propNames = Object.getOwnPropertyNames(obj);

  // 在冻结自身之前冻结属性
  propNames.forEach(function(name) {
    var prop = obj[name];

    // 如果prop是个对象，冻结它
    if (typeof prop == 'object' && prop !== null)
      deepFreeze(prop);
  });

  // 冻结自身
  return Object.freeze(obj);
}
```

## function
> 函数(AO)执行步骤（函数执行期上下文）: <br>
> &emsp;&emsp;1、寻找形参和变量声明(var 声明会提升至作用域最顶部)<br>
> &emsp;&emsp;2、实参赋值给形参<br>
> &emsp;&emsp;3、找函数声明，赋值(函数声明会整体提升至作用域顶部)<br>
> &emsp;&emsp;4、执行函数
```javascript
function test(a){
    return a;
    a = 1;
    function a(){}
    var a = 2;
}
test(3);                   // function a(){}
```

> 给函数参数赋默认值时，若传入的实参为undefined，则该参数取值为形参默认值<br>
> 即：实参和形参之一存在undefined，则参数值不为undefined，若都不是undefined，则参数值为实参
```javascript
function test(a = 1, b){
    console.log(a, b);
}
test(undefined, 2);         //a=1, b=2
```

> 函数的 **`length`** 属性，即函数的形参数量
> 形参的数量不统计剩余参数（即...rest参数），仅包括第一个具有默认值之前的参数个数
```javascript
function test(a, b){}
test.length;                //2

function test1(a, b=1){}
test1.length;               //1

function test2(a=1, b){}
test2.length;               //0

function test3(...args){}
test3.length;               //0
```

> 立即执行函数（初始化函数）
> 自动执行，执行完毕之后立即销毁、释放内存，同时可 **`return`**；
```javascript
(function test(){}());     //console.log(test) -> 报错，此时test不在 GO(全局执行期上下文) 中
	
let num = (function (a, b){
    return a + b;
}(1, 2));                   //num = 3;

if(function c(){}){
    typeof(c);              //undefined，此时 c() 已销毁，typeof 未定义变量输出 undefined
}
```

> 函数的执行：表达式可执行，声明不能执行；
```javascript
function test1(){};
test1();                    //执行成功

(function (){}());          //执行成功

let test3 = function(){}(); //执行成功

function test4(){}();       //报错

function test5(){}(1);      //不报错也不执行，此处编译器把 (1) 理解为表达式

//把函数变为表达式的方法，函数前加 + - ! || &&
+ function test6(){}();     //执行成功
```

## 构造函数
> 在语法和用法上，构造函数与普通函数没有任何区别；一般构造函数的名称首字母大写，以便与普通函数进行区分。
> 构造函数有两个显著特点：<br>
> &emsp;&emsp;函数体内使用 this，引用将要生成的实例对象。<br>
> &emsp;&emsp;必须使用 new 命令调用函数，生成实例对象。

> 如果不使用 new 命令，直接使用小括号调用构造函数，这时构造函数就是普通函数，不会生成实例对象，
> this 就代表调用函数的对象，在客户端指代全局对象 window。

> 构造函数运行使用 return 语句。如果返回值为原始值，则将被忽略，直接返回 this 指代的实例对象；
> 如果返回值为引用值，则将覆盖 this 指代的实例，返回 return 后面跟随的引用值。

> 之所以会出现这种情况，与 new 命令解析过程有关系，使用 new 命令调用函数的解析过程如下：<br>
> &emsp;&emsp;当使用 new 命令调用函数时，先创建一个空对象，作为实例返回。<br>
> &emsp;&emsp;设置实例的原型，指向构造函数的 prototype 属性。<br>
> &emsp;&emsp;设置构造函数体内的 this 值，让它指向实例。<br>
> &emsp;&emsp;开始执行构造函数内部的代码。<br>
> &emsp;&emsp;如果构造函数内部有 return 语句，而且 return 后面跟着一个引用值，会返回 return 语句指定的引用值；
> 否则会忽略 return 返回值，直接返回 this 对象。
```javascript
function Car(color){
    <!--强制使用构造函数的方法-->
    <!--
        if(!(this instanceof Car)){
            return new Car(color);
        }
    -->
    
    this.color = color;
}

let car = new Car('red');       //car => {color: 'red'}
```

## 闭包
> **定义**：内部函数总是可以访问其所在的外部函数中声明的参数和变量<br>
> **结论**：闭包找到的是同一地址中父级函数中对应变量的最终值<br>
> **缺点**：闭包会使得父级函数的作用域链不释放，过渡的闭包可能会导致内存泄露<br>
```javascript
function test(){
    var num = 0;
    function add() {
        num++;
        console.log(num);
    }
    return add;
}
var a = test();
a();                        //1
a();                        //2
var b = test();
b();                        //1
b();                        //2
```

> 使用普通函数实现类闭包功能：可以访问其所在的外部函数中声明的参数和变量<br>
> 差异：<br>
> &emsp;&emsp;&emsp;闭包：每次外部函数执行的时候，外部函数的引用地址不同，都会重新创建一个新的地址<br>
> &emsp;普通函数：每次调用都是指向同一地址(对比上一个例子)
```javascript
function test(){
    var num = 0;
    function add() {
        num++;
        console.log(num);
    }
    window.add = add;
}
test();
add();                       //1
add();                       //2

var add2 = add;
add2();                      //3
add2();                      //4
```

> 使用`立即函数+构造函数`进步一封装成`插件`
```javascript
;(function(){
    var num = 0;
    function Add(val) {
        this.num = num + val;
    }
    window.Add = Add;
})();

let a = new Add(1);
console.log(a.num);         //1

let b = new Add(5);
console.log(b.num);         //5
```

> 使用闭包实现`函数柯里化`
>> 函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
```javascript
var add = function(x) { 
  var sum = 1; 
  var tmp = function(x) { 
      sum = sum + x; 
      return tmp;    
  } 
  tmp.toString = function() { 
      return sum; 
  }
  return tmp; 
}
console.log(add(1)(2)(3));  //6
```

## prototype