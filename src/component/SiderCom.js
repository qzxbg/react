import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
function SliderCom() {
    return <Layout.Sider className="layoutItem">
        <Menu theme={"dark"}
            mode={"inline"}
        >
            <Menu.Item>
                <Link to="/admin">首页</Link>
            </Menu.Item>
            <Menu.SubMenu title={"产品"}>
                <Menu.Item>
                    <Link to="/goods">商品管理</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/category">品类管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={"订单"}>
                <Menu.Item>
                    <Link to="/order">订单管理</Link>
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={"用户"}>
                <Menu.Item>
                    <Link to="/user">用户列表</Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    </Layout.Sider>
}
export default SliderCom;