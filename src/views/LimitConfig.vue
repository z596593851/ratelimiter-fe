<template>
    <div>

        <el-form
                ref="form"
                :inline="true"
                :model="form"
                label-width="80px"
                size="small">
            <el-form-item label="服务">
                <el-select @change="appSelect" v-model="app" placeholder="请选择服务">
                    <el-option v-for="item in form.appList" :label="item.label" :value="item.label" :key="item.label"></el-option>
                </el-select>
            </el-form-item>
            <div v-for="(item, index) in form.dynamicItem" :key="index">
                <el-form-item
                        label="接口"
                        :prop="'dynamicItem.' + index + '.api'">
                    <el-input v-model="item.api"></el-input>
                </el-form-item>
                <el-form-item
                        label="频次"
                        :prop="'dynamicItem.' + index + '.limit'">
                    <el-input v-model="item.limit"></el-input>
                </el-form-item>
                <el-form-item
                        label="返回值"
                        :prop="'dynamicItem.' + index + '.returnValue'">
                    <el-input
                            v-model="item.returnValue"
                            type="textarea"
                            :autosize="{ minRows: 1, maxRows: 4}"
                            placeholder="请输入内容">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <i class="el-icon-delete" @click="deleteItem(item, index)"></i>
                </el-form-item>
            </div>
            <el-form-item>
                <el-button type="primary" @click="addItem">增加</el-button>
                <el-button @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import HttpUtil from '@/request/http-util'
    import ApiPath from '@/request/api-path'
    export default {
        name: "LimitConfig",
        data() {
            return {
                app:"",
                form: {
                    appList:[],
                    dynamicItem: []
                }
            }

        },
        created() {
            this.getAllApps()
        },
        methods: {
            getAllApps(){
                HttpUtil.get(ApiPath.limit.getAllApps).then(
                    res=>{
                        console.log("数据:",res)
                        let data=res.data
                        for(let item of data.values()){
                            this.form.appList.push({
                                label: item,
                                value: item
                            })
                        }
                        console.log("结果:",this.form.appList)

                    },
                    error => {
                        console.log(error)
                    }
                );
            },
            save(){
                console.log(this.form.dynamicItem)
                this.$confirm('是否保存限流配置?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let param={
                        appId:this.app,
                        limits:this.form.dynamicItem
                    }
                    HttpUtil.post(ApiPath.limit.setConfig,param).then(
                        res=>{
                            this.appSelect()
                            this.$message({
                                type: 'success',
                                message: '保存成功!'
                            });
                        },
                        error => {
                            console.log(error)
                        }
                    );

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });

            },
            addItem () {
                this.form.dynamicItem.push({
                    api: '',
                    limit: '',
                    returnValue:''
                })
            },
            deleteItem (item, index) {
                this.form.dynamicItem.splice(index, 1)
            },
            appSelect(){
                let param={appName:this.app}
                HttpUtil.get(ApiPath.limit.getConfig, param).then(
                    res=>{
                        this.form.dynamicItem=res.data
                    },
                    error => {
                        console.log(error)
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>