<template >
    <div>
        <h3 style="text-align: left">发表评论</h3>
        <hr>
        <el-input  v-model="msg" style="width: 100%;" resize="none" type="textarea"  maxlength="120" :autosize="{ minRows: 4, maxRows: 4}" placeholder="请输入要评论的内容（最多吐槽120字）" > </el-input>
        <el-row>
            <el-button type="primary" style="margin-top: 10px;width:100%;margin-bottom:0.8rem" @click="postcomment">发表评论</el-button>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="el-cmt-list" style="width: 100%;background-color:#fff">
                    <div class="el-cmt-item" v-for="(item ,i) in comments " :key ="item.add_time">
                        <div class="el-cmt-title">
                            第{{ i+1 }}楼 用户：{{item.user_name }}发表时间：{{item.add_time | dateTime}}
                        </div>
                        <div class="el-cmt-body ">
                            {{item.content === 'undefined'?'此用户很懒，什么都没有留下':item.content }}
                        </div>
                    </div>
                </div>
            </el-col>

        </el-row>

        <el-row>
            <el-button type="danger" plain style="margin-top: 10px;;width:100%" @click="getMore">加载更多</el-button>
        </el-row>
    </div>
</template>
<script>
    export  default {
        data(){
            return{
                pageIndex:1,//默认展示第一页数据
                comments:[],//所有的评论数据
                msg:''//评论输入的内容
            }

        },
        created(){
            this.getComments()
        },

        methods:{
            getComments(){
                this.$http.get('api/getcomments/'+this.newsid+'?pageindex='+this.pageIndex).then(result =>{
                    if (result.body.status === 0){
                        // this.comments =result.body.message
                        this.comments =this.comments.concat(result.body.message)
                    }else {
                        this.$message.error('失败了');
                    }
                })

            },
            getMore(){
                this.pageIndex++;
                this.getComments();
            },
            postcomment(){
                if (this.msg.trim().length ===0){
                    this.$message('评论内容为空');
                }else {
                    this.$http.post('api/postcomment/' + this.$route.params.id,{
                        content:this.msg.trim()
                    }).then(function (result) {
                        if (result.body.status ===0){
                            var cmt ={
                                user_name:'匿名用户',
                                add_time:Date.now(),
                                content:this.msg.trim()
                            }
                            this.comments.unshift(cmt)
                            this.msg = "";

                        }else {
                            this.$message.error('失败了');
                        }
                    })

                }
            }

        },
        props:["newsid"],
    }
</script>