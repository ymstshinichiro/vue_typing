import Vue from 'vue'
import Router from 'vue-router'
import TypeMain from '@/components/TypeMain'
import TypePost from '@/components/TypePost'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TypeMain',
            component: TypeMain
        },
        {
            path: '/post',
            name: 'TypePost',
            component: TypePost
        }

    ]
})
