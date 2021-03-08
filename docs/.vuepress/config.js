module.exports = {
    title: '落雪飘红',
    description: '个人笔记',
    base: '/vuepress-blog/',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/blog_logo.png' }]
    ],
    themeConfig: {
        logo: '/assets/images/blog_logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {   
                text: 'JavaScript',
                items: [
                    { text: 'Basics', link: '/javaScript/basics/' },
                    { text: 'LeetCode', link: '/javaScript/leetCode/' }
                ]
            },
            {   
                text: 'Css',
                items: [
                    { text: 'Demo', link: '/css/demo/' }
                ]
            },
            {
                text: '工具箱', 
                items: [
                    {
                        text: 'ES6',
                        items: [
                            { text: "api", link: 'https://es6.ruanyifeng.com/' },
                            { text: "node兼容", link: 'https://node.green/' },
                            { text: "browser兼容", link: 'http://kangax.github.io/compat-table/es6/' },
                        ]
                    },
                    {
                        text: 'CSS',
                        items: [
                            { text: "browser兼容", link: 'https://www.caniuse.com/' },
                            { text: "贝塞尔曲线", link: 'https://cubic-bezier.com/' },
                            { text: "clip-path", link: 'https://www.html.cn/tool/css-clip-path/' }
                        ]
                    },
                    {
                        text: 'Unicode',
                        items: [
                            { text: "字符百科", link: 'https://unicode-table.com/cn/' }
                        ]
                    }
                ]
            },
            { text: 'Github', link: 'https://github.com/luoxuepiaohong/vuepress-blog' }
        ],
        sidebar: {
            '/javaScript/': [
                {
                    title: 'JavaScript',
                    children: [
                        '/javaScript/basics/',
                        '/javaScript/leetCode/'
                    ]
                }
            ],
        },
        lastUpdated: '更新时间'
        // displayAllHeaders: true
    }
}