<template>
    <div>
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="goodsinfo_top">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img style="width: 100%" src="@/assets/images/cbd.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="goodsinfo_center">
            <el-row>
                <el-col :span="24">
                    <el-card :body-style="{ padding: '0px' }" >
                        <div style="padding: 5px;" >
                            <h3 style="text-align:left;margin: 5px 0 0;font-weight: normal;font-size: 18px;">{{goodsinfo.title}}</h3>
                            <hr style="border: none;border-bottom: 1px solid #ccc;">
                            <span style="display: inline-block;width: 100%;text-align: left;font-size: 15px;">市场价：
                                <i style="text-decoration: line-through;font-style: normal">￥{{goodsinfo.market_price}}</i>
                            </span>
                            <span style="display: inline-block;width: 100%;text-align: left;font-size: 15px;">销售价：
                                <i style="font-size: 18px;font-style: normal;color: #f25244">￥{{goodsinfo.sell_price}}</i>
                            </span>
                            <span  style="position:relative;display: inline-block;width: 100%;text-align: left;font-size: 15px;" >购买数量：
                                    <numbox  @getcount="getSelectedCount" ></numbox>
                                <!--<el-input-number v-model="num1"@change="handleChange" :min="1" :max="10" label="描述文字">-->

                                <!--</el-input-number>-->

                            </span>
                            <div class="bottom " style="text-align: left">
                                <el-button type="primary" style="margin-right: 10px">立即购买</el-button>
                                <el-button type="danger" @click="addToShop">加入购物车</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="goodsinfo_bottem">
            <el-row>
                <el-col :span="24">
                    <el-card :body-style="{ padding: '0px' }">
                        <div style="padding: 5px;" >
                            <h3 style="text-align:left;margin: 5px 0 0;font-weight: normal;font-size: 18px;">商品参数</h3>
                            <hr style="border: none;border-bottom: 1px solid #ccc;">
                            <span style="display: inline-block;width: 100%;text-align: left;font-size: 15px;color: #cccccc">商品货号：
                                <i style="font-style: normal">{{goodsinfo.goods_no}}</i>
                            </span>
                            <span style="display: inline-block;width: 100%;text-align: left;font-size: 15px;color: #cccccc">库存情况：
                                <i style="font-size: 18px;font-style: normal;">{{goodsinfo.stock_quantity}}件</i>
                            </span>
                            <span  style="display: inline-block;width: 100%;text-align: left;font-size: 15px;color: #cccccc" >上架时间：
                                <i style="font-size: 18px;font-style: normal;">{{goodsinfo.add_time |dateTime}}</i>
                            </span>

                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div class="goodsinfo_foot">
            <el-button type="primary" plain style="width: 100%;margin: 10px 0; " @click="goDesc(id)">图文介绍</el-button>
            <el-button type="danger" plain style="width: 100%;margin-left: 0" @click="goComment(id)">商品评论</el-button>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/goodsinfonumbox'
    export default {
        name: "goodsinfo",
        data(){
            return {
                id:this.$route.params.id,
                // num1: 1,
                goodsinfo:{},//获取到的商品的信息
                ballFlag:false,//控制小球隐藏显示
                selectedCount:1 //购物车默认购物数量 。保存用户购买数量
            }
        },
        created(){
           this.getGoodsInfo()
        },
        components:{
            numbox
        },
        methods:{
            handleChange(){

            },


            addToShop(){
              this.ballFlag =!this.ballFlag
            },

            beforeEnter(el){
                // 初始点
                el.style.transform="translate(0,0)"
            },
            enter(el,done){
                // 获取小球的位置
                // const  ballPosition =this.$refs.ball.getBoundingClientRect();
                //获取 微标 在页面中的位置
                // const badgePosition = document.getElementById('badge').getBoundingClientRect();
                // const xDist =badgePosition.left - ballPosition.left;
                // const yDist =badgePosition.top - ballPosition.top
                el.offsetWidth;
                el.style.transform="translate(180px,160px)";
                el.style.transition='all 1s cubic-bezier(.17,.67,.83,.67)';
                done()
            },
            afterEnter(){
                setTimeout(()=>{
                    this.ballFlag =!this.ballFlag
                },1000)

            },
            getGoodsInfo(){
                this.$http.get('api/goods/getinfo/'+this.id).then(result =>{
                    if (result.body.status ===0){
                        this.goodsinfo =result.body.message[0]
                    }
                })
            },
            goDesc(id){
                this.$router.push({name:'goodsDesc',params:{id}})
            },
            goComment(id){
                this.$router.push({name:'goodsComment',params:{id}})
            },
            getSelectedCount(count){
                // 当子组件吧选中的数量传递给父组件的时候，吧选中的值保存到 data 上
                this.selectedCount =count;
                console.log('父组件拿到d数量值为:'+this.selectedCount)

            }

        }
    }
</script>

<style scoped>
    .ball{
        position: absolute;
        width: 20px;
        height: 20px;
        top: 355px;
        left: 155px;
        z-index: 111;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background-color: #f25244;

    }

</style>