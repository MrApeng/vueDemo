<template >
    <div class="newsinfo">
        <h3 style="position: absolute;z-index: 111111;text-align: left;width: 40px;height: 40px;" onclick="window.history.go(-1)"></h3>
        <h3 class="newsinfo_title">{{photoinfo.title}}</h3>
        <p class="newsinfo_content">
            <span>发表时间：{{photoinfo.add_time | dateTime}}</span>
            <span>点击次数：{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!--<el-carousel :interval="5000" arrow="always">-->
            <!--<el-carousel-item v-for="item in catesphoto" :key="item.id">-->
                <!--<img style="width: 100%" :src="imageTest" alt="">-->
                <!--&lt;!&ndash;<img :src="item.src" alt="">&ndash;&gt;-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <vue-preview :slides="slide1" class="vue-preview"  @close="handleClose" >  </vue-preview>


        <div class="content" v-html="photoinfo.content">  </div>
        <cmt-box :newsid="id"></cmt-box>
    </div>
</template>

<script>
    // 导入子组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data(){
            return{
                imageTest:require('@/assets/images/cbd.jpg'),
                id: this.$route.params.id,
                photoinfo:{},
                catesphoto:[],//缩略图图片
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]

            }
        },
        created(){
            this.getPhotoInfo()
            this.getlunPhotos()
        },
        methods:{
            getPhotoInfo(){
                this.$http.get('http://47.89.21.179:8080/api/getimageInfo/'+this.id).then(result =>{
                    if (result.body.status ===0){
                        this.photoinfo =result.body.message[0]

                    }
                })
            },
            handleClose () {
                console.log('close event')
            },
            getlunPhotos(){
                // 轮播图图片
                this.$http.get('http://47.89.21.179:8080/api/getthumimages/'+this.id).then(result =>{
                    if (result.body.status ===0){
                        result.body.message.forEach(item =>{
                            // 循环每个图片，补充宽高
                            item.h = 400;
                            item.w = 600

                        })
                        this.catesphoto= result.body.message;
                    }
                })
            }
        },
        components: {
            'cmt-box':comment
        }
    }
</script>

<style scoped>

</style>