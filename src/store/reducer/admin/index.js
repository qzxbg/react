function getAdminData(adminData={
    loading:true,
    adminDatas:[]
},action){
    switch(action.type){
        case "ADMIN_LOADING":
            return {
                loading:true,
                adminDatas:[]
            }
        case "ADMIN_LOADED":
            return {
                loading:false,
                adminDatas:action.data
            }
        default:
            return adminData
    }
}

export default getAdminData;