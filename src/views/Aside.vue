<template>
    <div>
        <el-menu default-active="2">
            <el-menu-item index="9" @click='navRouter("/LimitConfig")'>
                <i class="el-icon-menu"></i>
                <span slot="title">限流配置</span>
            </el-menu-item>
            <!-- 目录 -->
            <el-submenu :index="item.id" v-for="item in menuData" :key="item.id">
                <template slot="title">
                    <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item-group>
                    <!-- 子菜单 -->
                    <el-menu-item
                            v-for="childItem in item.children"
                            :key="childItem.id"
                            :index="item.id"
                            @click="navRouter(childItem.path)"
                    >{{childItem.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>


</template>
<script>
    import HttpUtil from '@/request/http-util'
    export default {
        data() {
            return {
                menuData: [
                    {
                        "id":"1",
                        "title":"菜单1"
                    },
                    {
                        "id":"2",
                        "title":"菜单2",
                        "children":[
                            {
                                "id":4,
                                "title":"菜单2-1",
                                "path":"aaa"
                            },
                            {
                                "id":5,
                                "title":"菜单2-2",
                                "path":"bbb"
                            }
                        ]
                    }
                ]
            };
        },
        props: {
            isCollapse: {
                type: Boolean
            }
        },
        created() {

        },
        methods: {
            navRouter(url) {
                this.$router.push(url);
            }
        }
    };
</script>