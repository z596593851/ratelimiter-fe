let server = process.env.VUE_APP_BASE_API;

module.exports = {

    limit: {
        getAllApps:server+"/limit/getAllApps",
        getConfig:server+"/limit/getConfig",
        setConfig:server+"/limit/setConfig",

    }
}