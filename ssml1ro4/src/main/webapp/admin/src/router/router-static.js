import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import zanzhuqiye from '@/views/modules/zanzhuqiye/list'
    import changdi from '@/views/modules/changdi/list'
    import huodongcanyurenyuan from '@/views/modules/huodongcanyurenyuan/list'
    import xinwengao from '@/views/modules/xinwengao/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import messages from '@/views/modules/messages/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import huodongjingfei from '@/views/modules/huodongjingfei/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/zanzhuqiye',
        name: '赞助企业',
        component: zanzhuqiye
      }
      ,{
	path: '/changdi',
        name: '场地',
        component: changdi
      }
      ,{
	path: '/huodongcanyurenyuan',
        name: '活动参与人员',
        component: huodongcanyurenyuan
      }
      ,{
	path: '/xinwengao',
        name: '新闻稿',
        component: xinwengao
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/huodongjingfei',
        name: '活动经费',
        component: huodongjingfei
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
