<template>
    <div class="container">
        <div style="display:flex;justify-content: space-between;">
            <input @keyup.enter="addInfo" type="text" class="input" placeholder="请输入信息" v-model="info">
            <button @click="addInfo" class="add btn_style">添加</button>
        </div>
        <ul class="list">
            <li v-for="(item,index) in list" :key="item.id">
                <span>{{ index+1 }}.<label>{{ item.name }}</label></span>
                <button @click="deleteInfo(item.id)" class="delete btn_style">删除</button>
            </li>
        </ul>
        <div v-show="list.length>0" style="display:flex; justify-content: space-between;">
            <span>总计:{{ list.length }}</span>
            <button @click="clearInfo" class="btn_style">清除</button>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'notebook',
        data(){
            return{
                list:[
                    // {id:1,name:'张三',age:18},
                    // {id:2,name:'李四',age:20},
                    // {id:3,name:'王五',age:22},
                    // {id:4,name:'赵六',age:24},
                ],
                info:'',
            }
        },
        watch:{
            info:{
                handler(){
                    console.log(this.list.length);
                },
                deep:true
            }
        },
        methods:{
            addInfo(){
                if(this.info.trim()!==''){
                    let date=new Date();
                    this.list.push({
                        id:date.getTime(),
                        name:this.info
                    });
                    this.info='';
                }
            },
            deleteInfo(id){
                console.log('删除');
                this.list=this.list.filter(item=>item.id!==id);
            },
            clearInfo(){
                this.list=[];
            }
        }
    }

</script>

<style scoped>

ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul>li{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:5px;
    font-size: 17px;
    border-bottom:0.5px solid rgb(192, 192, 192);
}

.container{
    position:relative; 
    top:200px; 
    width:300px; 
    margin:0 auto;
}

.input{
    height:25px; 
    width:80%; 
    margin-bottom: 3px;
}

.add{
    height:30px;
    width:15%;
    margin-left: 1px;
}

.delete{
    height: 30px; 
    margin-left: 2px;
}

.btn_style{
    background-color: rgb(0, 182, 214);
    border-radius: 5px;
    border:solid 1px black;
    margin-bottom: 3px;
    cursor:pointer;
}

</style>