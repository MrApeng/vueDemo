<template>
    <div>
        <el-input-number v-model="num1" @change="handleChange" ref="numbox" :min="1"   label="描述文字"> </el-input-number>
    </div>
</template>
<script>
    export  default {
        data(){
            return{
                num1: 1,
            }
        },
        methods:{
            handleChange(){
                this.$emit('getcount',parseInt(this.$refs.numbox.value))

            }
        }
    }
</script>