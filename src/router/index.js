import {createRouter, createWebHistory} from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import States from "../views/States.vue"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/states",
            name: "states",
            component: States
        }
    ]
})

export default router