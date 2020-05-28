import React from "react";
import AdminView from "../view/admin"
import LoginView from "../view/login"
import UserView from "..//view/user"
import CategoryView from "../view/category"
import OrderView from "../view/order"
import GoodsView from "../view/goods"

const routes = [
    {
        path:["/","/admin"],
        exact:true,
        render(props){
            return <AdminView {...props}/>
        }
    },{
        path:"/login",
        exact:true,
        render(props){
            return <LoginView {...props}/>
        }
    },{
        path:"/user",
        exact:true,
        render(props){
            return <UserView {...props}/>
        }
    },{
        path:"/category",
        exact:true,
        render(props){
            return <CategoryView {...props}/>
        }
    },{
        path:"/order",
        exact:true,
        render(props){
            return <OrderView {...props}/>
        }
    },{
        path:"/goods",
        exact:true,
        render(props){
            return <GoodsView {...props}/>
        }
    }
]

export {routes}