<template> 
    <div>
        <select v-style="{color:color,width:width}" :value="selectId" @change="handleChange">
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">重庆</option>
            <option value="4">武汉</option>
            <option value="5">南京</option>
        </select>
    </div>
</template>

<script>
export default{
    props:['selectId'],
    data(){
        return{
            color:'green',
            width:'500px',      
        }
    },
    directives:{
        style:{
            inserted(el,binding){
                el.style.color=binding.value.color;
                el.style.width=binding.value.width;
            },
            update(el,binding){
                el.style.color=binding.value.color;
                el.style.width=binding.value.width;
            }
        }
    },
    methods:{
        handleChange(e){
            this.$emit('update:selectId',e.target.value);
        }
    }
}
</script>

<style scoped>
div{
    position:relative;
    top:150px;
}

select{
    position:relative;
    width: 150px;
    height: 30px;
    left:50%;
    transform: translateX(-50%);
    border:2px solid #ccc;
    border-radius: 5px;
}
</style>