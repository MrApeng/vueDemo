<template id="goodslist">
    <div>
        <el-row class="el-goods">
            <el-col style="margin-bottom: 5px;margin-left: 5px" :span="11" v-for="item in goodslist" :key="item.id" >
                <router-link :to="'/index/goodslist/goodsinfo/' +item.id " tag="div"  >
                <el-card :body-style="{ padding: '0px' }" >
                    <!--<img :src="item.img_src" class="image">-->
                    <img :src="goodsImage" class="image">
                    <div class="el-goodslist">
                        <h3 class="el-goods-title">{{item.title}}</h3>
                        <div class="el-goodslist-body">
                            <div class="el-goodslist-price">
                                <i style="color: #f25244;font-size: 0.7rem">￥{{item.sell_price}}</i>
                                <i style="font-size: 0.5rem;text-decoration: line-through;">￥{{item.market_price}}</i>
                            </div>
                            <div class="el-goodslist-content">
                                <i>热卖中</i>
                                <i>剩{{item.stock_quantity}}件</i>
                            </div>
                        </div>

                    </div>
                </el-card>
                </router-link>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="danger" plain style="margin-top: 10px;;width:100%" @click="getMore">加载更多</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodsImage:require('@/assets/images/cbd.jpg'),
                pageIndex: 1, //分页页数
                goodslist:[] //存放数据的数组
            }
        },
        created(){
            this.getgoodslist()
        },
        methods:{
            getMore(){
                this.pageIndex++;
                this.getgoodslist()

            },
            getDetails(){
                alert(1)
                // this.router.push("index/gooslist/goodsinfo"+id);

            },
            getgoodslist(){
                this.$http.get('api/getgoods?pageindex'+this.pageIndex).then(result =>{
                    if (result.body.status ===0){
                        this.goodslist = this.goodslist.concat(result.body.message)

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>