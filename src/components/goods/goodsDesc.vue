<template>
    <div>

        <h3>
           {{info.title}}
        </h3>
        <hr>
        <div class="content" v-html="info.content">

        </div>

    </div>
</template>
<script>
    export  default{
     data(){
         return{
             id:this.$route.params.id,
             info:{}//图文数据
         }
     },
        created(){
         this.goodsDesc()
        },

     methods:{
         goodsDesc(){
             this.$http.get('api/goods/getdesc/' +this.id).then(result =>{
                 if (result.body.status ===0){
                     this.info =result.body.message[0]
                 }
             })
         }
     }
    }
</script>