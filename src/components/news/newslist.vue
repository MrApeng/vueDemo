<template>
    <div>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"  v-for="item in newslist" :key="item.id">
                <router-link :to="'/index/newslist/newsinfo'+item.id">
                    <img class="mui-media-object mui-pull-left" src="../../assets/images/muwu.jpg">
                    <div class="mui-media-body">
                        <h3>{{item.title}}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateTime }}</span>
                            <span>点击次数：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export  default{
    data(){
        return{
            newslist:[]
        }

    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('api/getnewslist').then(result =>{
                if(result.body.status === 0){
                    this.newslist =result.body.message

                }else{
                    this.$message.error('失败了');
                }
            })
        }
    }
}
</script>