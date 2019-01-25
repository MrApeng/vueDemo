<template >
    <div>
        <el-row>
            <el-carousel  :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img  class="carousel_img" src="../../assets/images/tim.jpg"/>
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <el-row :gutter="20" class="card_body">
            <router-link to="/index/newslist">
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/images/timg.jpg" class="image">
                        <div style="padding: 5px;">
                            <span class="index-list-title">新闻资讯列表</span>
                        </div>
                    </el-card>
                </el-col>
            </router-link>
            <router-link  to="/index/photolist">
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/images/timg.jpg" class="image">
                        <div style="padding: 5px;">
                            <span class="index-list-title">图片分享</span>
                        </div>
                    </el-card>
                </el-col>
            </router-link>
            <router-link to="/index/goodslist">
                <el-col :span="8">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/images/timg.jpg" class="image">
                        <div style="padding: 5px;">
                            <span class="index-list-title">商品购买</span>
                        </div>
                    </el-card>
                </el-col>
            </router-link>


        </el-row>
    </div>

</template>