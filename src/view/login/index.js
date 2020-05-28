import React, { useState } from "react";
import { Form, Input, Button, Card} from "antd";
import loginSty from "../../static/css/login/login.module.css";
import useLogin from "../../store/action/login";
function LoginView() {
    let [username,setUsername] = useState();
    let [password,setPassword] = useState();
    let login = useLogin();
    return <Card title={"登录"} className={loginSty.container}>
        <Form layout={"vertical"} size={"middle"}>
            <Form.Item label={"用户名"} name={"username"}>
                <Input placeholder="username"
                    onChange={({target})=>{
                        setUsername(target.value);
                    }}
                ></Input>
                <span>{username}</span>
            </Form.Item>
            <Form.Item label={"密码"} name={"password"}>
                <Input placeholder="password"
                    onChange={({target})=>{
                        setPassword(target.value);
                    }}
                ></Input>
                <span>{password}</span>
            </Form.Item>
            <Form.Item>
                <Button 
                type={"primary"} 
                htmlType={"submit"}
                onClick={(e)=>{
                    e.preventDefault();
                    login(username,password)
                }}
                >登录</Button>
            </Form.Item>
        </Form>
    </Card>
}

export default LoginView;