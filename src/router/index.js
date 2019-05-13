import Vue from 'vue'
import vueRouter from 'vue-router'
import layuiCms from '../pages/layuiCms'
import icon from '../pages/icon'
import selector from '../pages/selector'
import city from '../pages/city'
import otherDaily from "../pages/otherDaily"
import otherLogin from "../pages/otherLogin"
import otherRegister from "../pages/otherRegister"
import otherSystemSetup from "../pages/otherSystemSetup"
import myMessage from "../pages/myMessage"
import personalInformation from "../pages/personalInformation"
import salesVolume from "../pages/salesVolume"
import visitorNum from "../pages/visitorNum"
import orgin from "../pages/orgin"
import renshi from "../pages/renshi"
import layuiZX from "../pages/layuiZX"
import layuiZXone from "../pages/layuiZXone"
import layuiZXtwo from "../pages/layuiZXtwo"
import layuiZXthree from "../pages/layuiZXthree"
import curter from "../pages/curter"
import photo from "../pages/photo"
import yjfk from "../pages/yjfk"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
Vue.use(vueRouter)

export default new vueRouter({
    routes: [{
            path: '/',
            name: layuiCms,
            component: layuiCms
        },
        {
            path: '/icon',
            name: icon,
            component: icon
        },
        {
            path: '/selector',
            name: selector,
            component: selector
        },
        {
            path: '/city',
            name: city,
            component: city
        },
        {
            path: '/otherDaily',
            name: otherDaily,
            component: otherDaily
        },
        {
            path: '/otherLogin',
            name: otherLogin,
            component: otherLogin
        },
        {
            path: '/otherRegister',
            name: otherRegister,
            component: otherRegister
        },
        {
            path: '/otherSystemSetup',
            name: otherSystemSetup,
            component: otherSystemSetup
        },
        {
            path: '/myMessage',
            name: myMessage,
            component: myMessage
        },
        {
            path: '/personalInformation',
            name: personalInformation,
            component: personalInformation
        },
        {
            path: '/salesVolume',
            name: salesVolume,
            component: salesVolume
        },
        {
            path: '/visitorNum',
            name: visitorNum,
            component: visitorNum
        },
        {
            path: '/orgin',
            name: orgin,
            component: orgin
        },
        {
            path: '/renshi',
            name: renshi,
            component: renshi
        },
        {
            path: '/layuiZX',
            name: layuiZX,
            component: layuiZX
        },
        {
            path: '/layuiZXone',
            name: layuiZXone,
            component: layuiZXone
        },
        {
            path: '/layuiZXtwo',
            name: layuiZXtwo,
            component: layuiZXtwo
        },
        {
            path: '/layuiZXthree',
            name: layuiZXthree,
            component: layuiZXthree
        },
        {
            path: '/curter',
            name: curter,
            component: curter
        },
        {
            path: '/photo',
            name: photo,
            component: photo
        },
        {
            path: '/yjfk',
            name: yjfk,
            component: yjfk
        },
    ]
})