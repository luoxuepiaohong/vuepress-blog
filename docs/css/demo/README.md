# filter

## 毛玻璃特效
> 方案一：
> -webkit-filter: blur();<br>
> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;filter: blur();<br>
> 方案二：
> backdrop-filter: blur();

<template>
    <div class="frosted-glass">
        <section class="frosted-glass-main">
            代码参考：
                -<cite>《CSS揭秘》</cite>
                <br>
            图片来源：
                -<cite>https://unsplash.com/@chshashi30</cite>
        </section>
    </div>
</template>
<style>
    .frosted-glass, .frosted-glass-main::before {
       background: url("/vuepress-blog/assets/images/filter-bg.jpg") 0 / cover fixed; 
    }
    .frosted-glass {
        width: 100%;
        height: 400px;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .frosted-glass-main {
        padding: 1em;
        max-width: 22em;
        border-radius: .3em;
        box-shadow: 0 0 0 1px hsla(0,0%,100%,.1) inset,
                    0 .5em 1em rgba(0, 0, 0, 0.6);
        background: hsla(0,0%,100%,.2);
        overflow: hidden;
        position: relative;
    }
    .frosted-glass-main::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        margin: -30px;
    }
</style>

```html
<div class="frosted-glass">
    <section class="frosted-glass-main">
        代码参考：
            -<cite>《CSS揭秘》</cite>
            <br>
        图片来源：
            -<cite>https://unsplash.com/@chshashi30</cite>
    </section>
</div>
```
```css
/** 方案一 filter: blur();
 *  优点：兼容性好，大部分浏览器均支持
 *  缺点：需要JS才能动态渲染背景；非固定背景会滚动，适合全屏背景页面（如登录页等）
 */
.frosted-glass, .frosted-glass-main::before {
    background: url("/vuepress-blog/assets/images/filter-bg.jpg") 0 / cover fixed; 
}
.frosted-glass {
    width: 100%;
    height: 400px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.frosted-glass-main {
    padding: 1em;
    max-width: 22em;
    border-radius: .3em;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.1) inset,
                0 .5em 1em rgba(0, 0, 0, 0.6);
    background: hsla(0,0%,100%,.2);
    overflow: hidden;
    position: relative;
}
.frosted-glass-main::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    -webkit-filter: blur(20px);
    filter: blur(20px);
    margin: -30px;
}
/** 方案二 backdrop-filter: blur();
 * 优点：任何代码块均可使用，不依赖背景图
 * 缺点：兼容性好，火狐浏览器不支持
 */
/*
.frosted-glass{
    background: url("/vuepress-blog/assets/images/filter-bg.jpg") 0 / cover; 
}
.frosted-glass {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.frosted-glass-main {
    padding: 1em;
    max-width: 22em;
    border-radius: .3em;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.1) inset,
                0 .5em 1em rgba(0, 0, 0, 0.6);
    background: hsla(0,0%,100%,.2);
    backdrop-filter: blur(20px);
}
*/
```

## 灰度
> -webkit-filter: grayscale(100%);<br>
> &emsp;&emsp;&emsp;&ensp;&nbsp;filter: grayscale(100%);
>> 可应用于body上，实现全屏灰色效果

<template>
    <div>
        <img src="/vuepress-blog/assets/images/filter-bg.jpg" alt="图片来源：https://unsplash.com/@chshashi30" class="grayscale-class-img">
    </div>
</template>
<style>
    .grayscale-class-img {
        width: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
    }
</style>

```html
<img src="/vuepress-blog/assets/images/filter-bg.jpg" class="grayscale-class-img" />
```
```css
.grayscale-class-img {
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
```