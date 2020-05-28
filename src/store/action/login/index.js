import http from "../index";

function useLogin(){
    return function(username,password){
        http.post("/user/login.do",{
            data:{
                username,
                password
            }
        }).then((res)=>{
            console.log(res);
        })
    }
}

export default useLogin;