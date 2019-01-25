<template>
    <el-tabs v-model="activeName" @tab-click="getPhotoListByCateId">
        <el-tab-pane :label="item.title" :name="item.title" v-for="item in cates" :key="item.id" >
            <el-row  class="el-row-photo" >
                <el-col :span="24" v-for ="item in list" :key="item.id">
                    <router-link :to="'/index/photoinfo/' + item.id">
                        <el-card :body-style="{ padding:'0'}">
                            <!--<img src="item.img_url" class="image" >-->
                            <img class="el-photo-img" src="../../assets/images/cbd.jpg" alt="">
                            <div  class="el-info" style="padding: 14px;">
                                <div class="el-info-title">{{item.title}}</div>
                                <div class="el-info-body">{{item.zhaiyao}}</div>
                            </div>
                        </el-card>
                    </router-link>
                </el-col>
            </el-row>
        </el-tab-pane>
    </el-tabs>

</template>

<script>
    export default {
        data(){
            return{
                activeName:'全部',
                cates:[],//所有分类的列表
                list:[]//获取列表数据
            }
        },
        created(){
            this.getAllCategory();
            // 页面进入主动请求数据
            this.getPhotoListByCateId(0);
        },
        methods:{
            getAllCategory(){
                // alert(this.title)
                this.$http.get('http://47.89.21.179:8080/api/getimgcategory').then(result =>{
                    if(result.body.status ===0){
                        result.body.message.unshift({title:'全部',id:0});
                        this.cates =result.body.message;
                    }
                })

            },
            getPhotoListByCateId(cateId){

                if(typeof cateId != 'number'){
                    // cateId = this.cates[cateId._data.index];
                    cateId = this.cates[cateId._data.index].id;

                }
                this.$http.get('http://47.89.21.179:8080/api/getimages/'+cateId).then(result =>{
                    if (result.body.status ===0){
                        this.list = result.body.message;

                    }
                });
            }

        }
    }
</script>

<style scoped>

</style>