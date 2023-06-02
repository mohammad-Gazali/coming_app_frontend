import { Navlink } from "../types/app";


export default [
    {
        name: "الصفحة الرئيسية",
        href: "/",
        permission: null,
    },
    {
        name: "إضافة حضور",
        href: "/coming/add",
        permission: null,
    },
    {
        name: "تفاصيل حضوري",
        href: "/coming/details",
        permission: null,
    },
] satisfies Navlink[];