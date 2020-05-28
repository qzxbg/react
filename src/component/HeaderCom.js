import React from "react";
import { Layout, Affix, Dropdown, Menu } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import headerSty from "../static/css/component/header.module.css";
function HeaderCom() {

    const menu = (
        <Menu>
            <Menu.Item>个人中心</Menu.Item>
            <Menu.Item>退出</Menu.Item>
        </Menu>
    )
    return <Affix offsetTop={0}>
        <Layout.Header className={headerSty.container}>
            <div className={headerSty.logo}>
                <h3 className={headerSty.green}>HAPPY</h3>
                <h3 className={headerSty.white}>MMALL</h3>
            </div>
            <div className={headerSty.nav}>
                <Dropdown overlay={menu}>
                    <div><TeamOutlined className={headerSty.icon} />
                    <span>你好，</span></div>
                </Dropdown>
            </div>
        </Layout.Header>
    </Affix>
}

export default HeaderCom;