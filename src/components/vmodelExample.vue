<template>
    <div>
        <inputBox :selectId.sync="selectId"/>
    </div>
</template>

<script>
import inputBox from './inputBox.vue'

export default{
    components:{
        inputBox
    },
    data(){
        return{
            selectId:'1'
        }
    }
}

</script>

<style scoped>

</style>