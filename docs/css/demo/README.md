# filter

## 毛玻璃特效
> -webkit-filter: blur();<br>
> &emsp;&emsp;&emsp;&ensp;&nbsp;filter: blur();

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
        background: url("/vuepress-blog/assets/images/filter-bg.jpg") no-repeat center center;
        background-size: cover;
    }
    .frosted-glass {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    .frosted-glass-main {
        margin: 163px auto;
        position: relative;
        padding: 1em;
        max-width: 22em;
        background: hsla(0,0%,100%,.5);
        overflow: hidden;
        border-radius: .3em;
        box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
                    0 .5em 1em rgba(0, 0, 0, 0.6);
    }
    .frosted-glass-main::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: -30px;
        z-index: -1;
        -webkit-filter: blur(20px);
        filter: blur(20px);
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
.frosted-glass, .frosted-glass-main::before {
	background: url("/vuepress-blog/assets/images/filter-bg.jpg") no-repeat center center;
    background-size: cover;
}
.frosted-glass {
    width: 100%;
    height: 400px;
    overflow: hidden;
}
.frosted-glass-main {
    margin: 163px auto;
    position: relative;
    padding: 1em;
    max-width: 22em;
    background: hsla(0,0%,100%,.5);
    overflow: hidden;
    border-radius: .3em;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
                0 .5em 1em rgba(0, 0, 0, 0.6);
}
.frosted-glass-main::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: -30px;
    z-index: -1;
    -webkit-filter: blur(20px);
    filter: blur(20px);
}
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