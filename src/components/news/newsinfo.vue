<template>
    <div class="newsinfo">
        <h3 style="position: absolute;z-index: 111111;text-align: left;width: 40px;height: 40px;" onclick="window.history.go(-1)"></h3>
        <h3 class="newsinfo_title">{{newsinfo.title}}</h3>
        <p class="newsinfo_content">
            <span>发表时间：{{newsinfo.add_time | dateTime}}</span>
            <span>点击次数：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content">  </div>
        <comment-box :newsid="this.id"></comment-box>
    </div>

</template>
<script>
    // 导入子组件
    import  comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return{
                id:this.$route.params.id,
                newsinfo:{},
            };
        },
        created(){
            this.getNewsInfo()
        },

        components:{
            "comment-box":comment
        },
        methods: {
            getNewsInfo(){
                this.$http.get('api/getnew/' + this.id).then(result =>{
                    if (result.body.status ===0){
                        this.newsinfo =result.body.message[0];

                    } else{
                        this.$message.error('失败了');
                    }
                })
            },


        },


    }
</script>