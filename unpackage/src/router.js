export default function routerInit(router) {
    //路由表
    router.map({
        // 首页
        '/':{
            name: 'index',
            component: require('./views/index.vue')
        },
        // 关于
        '/about':{
            name: 'about',
            component: require('./views/about.vue')
        },
        // 设置
        '/setting':{
            name: 'setting',
            component: require('./views/setting.vue')
        },
        // 404 页
        '*': {
            name: '404',
            component: require('./views/404.vue')
        }
    });

    //注册路由切换前
    router.beforeEach(function (transition) {
        transition.next();
    });

    //注册路由切换后
    router.afterEach(function (transition) {
        //console.log('成功浏览到: ' + transition.to.path)
    });
}
