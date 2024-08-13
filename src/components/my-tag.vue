<template>
    <div ref="myTag" class="myTag">
        <input v-if="isEditted"
            ref="myInput"  
            @keyup.enter="isEditted=false" 
            @change="handleChange"
            @blur="isEditted=false"
            placeholder="请输入标签"
            :value="tag"
            type="text" >
        <span v-else
            @dblclick="dblClicked" 
            ref="mySpan" >
            {{ tag }}
        </span>
    </div>
</template>

<script>
export default{
    props:{
        tag:{
            type:String,
            required:true,
        },
        width:{
            type:String,
            required:true,
            default:'50px',
        },
        height:{
            type:String,
            required:true,
            default:'30px',
        },
    },
    data(){
        return{
            isEditted:false,
        }
    },
    methods:{
        dblClicked(){
            this.isEditted = true;
            this.$nextTick(()=>{
                this.$refs.myInput.focus();
            })
        },
        handleChange(e){
            this.$emit('update:tag',e.target.value);
        }
    },
    mounted(){
        var tag=this.$refs.myTag;
        tag.style.width=this.width;
        tag.style.height=this.height;
        tag.style.lineHeight=this.height;
    }
}
</script>

<style scoped>
input,span{
    display:block;
    height:inherit;
    width:inherit;
    line-height:inherit;
    box-sizing: border-box;
}

span{
    text-align: center;
}

.myTag{
    margin:auto auto;
    cursor: pointer;
}

</style>