import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Article from "../views/Front/Article/List.vue"
import User from "@/views/Front/User/List.vue"
import Show from "../views/Front/Article/Show.vue"
import UserShow from "@/views/Front/User/Show.vue"
import NotFound from "@/views/common/NotFound.vue"
import Navigation from "@/components/Navigation.vue"
import NavigationUser from "@/components/NavigationUser.vue"
import Front from "@/layout/Front.vue"
import Member from "@/layout/Member.vue"
import Mobile from "@/views/Member/Mobile.vue"
import Email from "@/views/Member/Email.vue"
const router = createRouter({
	linkExactActiveClass: "l-active", //设置选中时候的样式类名
	history: createWebHistory("shop"), //前缀
	routes: [
		{
			path: "/:any(.*)",
			component: NotFound,
		},
		{
			path: "/",
			component: Front,
			children: [
				{
					path: "/",
					name: "home",
					component: Home,
				},
				{
					path: "/article",
					name: "article",
					component: Article,
				},
				{
					path: "/show/:id(\\d+)",
					name: "show",
					component: Show,
					alias: "/:id(\\d+).html",
				},
				{
					path: "/user",
					name: "user",
					component: User,
				},
				{
					path: "/usershow/:id",
					name: "usershow",
					component: UserShow,
				},
			],
		},
		{
			path: "/member",

			component: Member,
			name: "member",
			redirect: { name: "mobile" },
			children: [
				{
					path: "mobile",
					name: "mobile",
					component: Mobile,
					alias: "m", //['m','hd']//别名定制
				},
				{
					path: "email",
					component: Email,
					name: "email",
				},
			],
		},
	],
})
export default router
