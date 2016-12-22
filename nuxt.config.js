const {
    join
} = require('path')

module.exports = {
    // router: {
    //     routes: [{
    //         path: '/',
    //         name: 'home',
    //         component: 'pages/index'
    //     }, {
    //         path: '/index',
    //         name: 'index',
    //         component: 'pages/index'
    //     }, {
    //         path: '/exam',
    //         name: 'exam',
    //         component: 'pages/exam'
    //     }]
    // },
    plugins: ['plugins/vuex-router-sync', 'plugins/filters'],
    build: {
      vendor: ['vuex-router-sync']
    },
    head: {
        title: 'ip大考堂',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        }, {
            hid: 'description',
            content: "七弦琴微信公众号前端"
        }],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'favicon.ico'
        }]
    },
    css: [
        'flex.css/dist/flex.css',
        'normalize.css/normalize.css',
        '~static/css/iconfont/iconfont.css'
    ],
    loading: false
}
