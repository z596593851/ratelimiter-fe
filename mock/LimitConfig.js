import ApiPath from "@/request/api-path"

let appList={
    code:0,
    data:["crm_pc","biz"]
}

let config={
    code:0,
    data:[
        {
            api:"/aaa/bbb/cc",
            limit:10,
            returnValue:'{"code":1,"msg":"被限流"}'
        },{
            api:"/111/222/333",
            limit:500,
            returnValue:'{"code":1,"msg":"被限流"}'
        }
    ]
}

let setConfigRe={
    code:0
}

export default {
    [ApiPath.limit.getAllApps] : option => {
        return appList
    },
    [ApiPath.limit.getConfig] : option => {
        return config
    },
    [ApiPath.limit.setConfig] : option => {
        return setConfigRe
    },

}