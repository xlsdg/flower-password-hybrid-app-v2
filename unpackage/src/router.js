export default function routerInit(router) {
    //路由表
    router.map({
        // 首页
        '/': {
            'name': 'index',
            'component': function(reslove) {
                return require(['./views/index.vue'], reslove);
            }
        },
        // 关于
        '/about': {
            'name': 'about',
            'component': function(reslove) {
                return require(['./views/about.vue'], reslove);
            }
        },
        // 设置
        '/setting': {
            'name': 'setting',
            'component': function(reslove) {
                return require(['./views/setting.vue'], reslove);
            }
        },
        // 404 页
        '*': {
            'name': '404',
            'component': function(reslove) {
                return require(['./views/404.vue'], reslove);
            }
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
