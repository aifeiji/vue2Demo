import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//����debugģʽ
Vue.config.debug=true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)
//�������
const First={template:'<div><h2>first  sub page</h2></div>'};
import secondComponent from './component/secondComponent.vue'

//����һ��·��ʵ��
//��������·�ɹ���
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:First
    },
    {
      path:'/second',
      component:secondComponent
    }
  ]

})
// �������ǿ�������Ӧ���ˣ�
// ·�����ᴴ��һ�� App ʵ�������ҹ��ص�ѡ��� #app ƥ���Ԫ���ϡ�
const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')
