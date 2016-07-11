<template>
    <div class="index">
        <header class="mui-bar mui-bar-nav mui-clearfix">
            <div class="mui-pull-left">
                <i class="mui-icon mui-icon-info"></i>
            </div>
            <h1 class="mui-title">花密</h1>
            <div class="mui-pull-right">
                <i class="mui-icon mui-icon-undo"></i>
                <i class="mui-icon mui-icon-settings"></i>
            </div>
        </header>
        <section class="mui-content mui-content-padded">
            <div class="fp-step">
                <h2><i>1</i>输入</h2>
                <div class="mui-input-row">
                    <input class="mui-input-clear" type="password" placeholder="记忆密码" />
                </div>
                <p class="mui-input-row"><i class="mui-icon mui-icon-plusempty"></i></p>
                <input class="awesomplete" type="text" placeholder="区分代号" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
            </div>
            <div class="fp-step">
                <h2><i>2</i>获取</h2>
                <input type="hidden" name="fp-code"/>
                <button class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">生成密码(点击复制)</button>
            </div>
            <div class="fp-help">
                <p>•记忆密码：选择一个与个人信息无关的密码，防止社会工程学破解。</p>
                <p>•区分代号：用于区别不同用途密码的简短代号，如淘宝账号可用“taobao”或“tb”等。</p>
            </div>
        </section>
    </div>
</template>

<script type="text/babel">
    // import Awesomplete from 'awesomplete';
    import {fpCode} from '../libs/flowerpassword';
    export default {
        'name': 'index',
        'components': {
            'Awesomplete': require('awesomplete')
        },
        'props': {},
        data () {
            return {};
        },
        'computed': {},
        'methods': {},
        created () {},
        beforeCompile () {},
        compiled () {},
        ready () {},
        beforeDestroy () {},
        destroyed () {},
        'watch': {}
    };
</script>

<link rel="stylesheet" href="awesomplete.css" />
<style scoped>
    header, header h1, header i {
        color: #fff;
        background-color: #168bc3;
    }
    header .mui-icon-undo {
        margin-right: 12px;
    }
    .fp-step h2 {
        font-size: 21px;
        font-weight: bold;
        line-height: 38px;
        height: 38px;
        margin-bottom: 26px;
        color: #168bc3;
    }
    .fp-step h2 i {
        font-size: 17px;
        line-height: 38px;
        display: inline-block;
        overflow: hidden;
        width: 30px;
        height: 38px;
        margin-right: 10px;
        text-align: center;
        color: #fff;
        background: #168bc3;
        font-style: normal;
    }
    p.mui-input-row {
        text-align: center;
    }
    .mui-icon-plusempty {
        font-size: 25px;
        cursor: default;
        color: #168bc3;
    }
    .awesomplete {
        width: 100%;
    }
    button {
        font-size: 15px;
        height: 40px;
        padding: 0;
        color: #168bc3;
        border: 1px solid #168bc3;
    }
    button:active {
        color: #fff;
        background: #168bc3;
    }
</style>