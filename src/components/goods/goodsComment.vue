<template>
    <div>
        <cmtbox :newsid="$route.params.id"></cmtbox>
    </div>
</template>
<script>
    import cmtbox from "../subcomponents/comment"
    export default {

        components:{
            cmtbox
        }

    }
</script>