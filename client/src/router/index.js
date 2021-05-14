import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'

export default createRouter({
    history: createWebHashHistory(),
    routes: [ //array of object that sets path
        {
            //base URL path / with the StateList component, sets home page of app
            path: '/',//navigate path
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite

        },
        {
            path: '/map/:state', // router will find :state paramater and StateMap will load details for specified state
            name: 'StateMap',
            component: StateMap

        }
    ]
})