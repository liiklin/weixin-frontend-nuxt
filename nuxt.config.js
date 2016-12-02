const {
    join
} = require('path')

module.exports = {
    head: {
        title: 'ip大考堂',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
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
    ]
}
