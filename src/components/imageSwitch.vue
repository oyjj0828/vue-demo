<template>
    <div>
        <div>
            <button v-show="buttonUp" @click="up">上一页</button>
        </div>
        <img :src="imgList[curPage]">
        <div>
            <button v-show="buttonDown" @click="down">下一页</button>
        </div>
    </div>
</template>
  
<script>
  
  export default {
    name: 'imageSwitch',
    data() {
      return {
        imgList:[
          require("@/assets/img/1.jpg"),require('@/assets/img/2.jpg'),
          require('@/assets/img/3.jpg'),require('@/assets/img/4.jpg')
        ],
        curPage:0,
        buttonUp:false,
        buttonDown:true,
      }
    },
    mounted(){
    },
    methods:{
      up(){
        if(this.curPage>0){
          this.curPage--;
        }
        if(this.curPage==0){
          this.buttonUp=false;
        }
        else{
          this.buttonUp=true;
        }
        if(this.curPage<this.imgList.length-1){
          this.buttonDown=true;
        }
      },
      down(){
        if(this.curPage<this.imgList.length-1){
          this.curPage++;
        }
        if(this.curPage==this.imgList.length-1){
          this.buttonDown=false;
        }
        else{
          this.buttonDown=true;
        }
        if(this.curPage>0){
          this.buttonUp=true;
        }
      }
    }
  }
</script>
  
<style>
  html,body{
    height:100%;
  }
  
  img{
    height:200px;
  }
</style>
  