<template>
    <div style="width:100%">
        <table v-if="fruitsList.length>0">
            <thead>
                <tr>
                    <th>选中</th>
                    <th>图片</th>
                    <th>单价</th>
                    <th>个数</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in fruitsList" :key="item.id">
                    <td><input style="cursor: pointer;" type="checkbox" v-model="item.isChecked"></td>
                    <td><img class="fruit" :src="item.src" :alt="item.name"></td>
                    <td>{{item.price}}</td>
                    <td>
                        <button :disabled="item.num<=0" class="btn" @click="sub(item.id)">-</button>
                        <input class="ipt" type="text" v-model="item.num">
                        <button class="btn" @click="add(item.id)">+</button>
                    </td>
                    <td>{{item.price * item.num}}</td>
                    <td><button class="delete" @click="deleteFruit(item.id)">删除</button></td>
                </tr>
                <tr>
                    <td colspan="6">
                        <div class="foot">
                            <div>
                                <input type="checkbox" style="cursor: pointer;" v-model="allSelect">
                                <span>全选</span>
                            </div>
                            <div>
                                <span style="margin-right: 20px;">总价:￥{{ totalPrice }}</span>
                                <button class="checkout">结算({{ totalNum }})</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else class="empty">
            <img src="@/assets/img/空空如也.svg"  style="width:64px; height: 64px" alt="">
            <span>空空如也</span>
        </div>
    </div>
</template>

<script>
    const defaultArr=[
        {id:1,name:'桃子',price:10,num:1,total:5,src:require('../assets/img/桃子.svg'),isChecked:false},
        {id:2,name:'梨',price:5,num:2,total:5,src:require('../assets/img/梨.svg'),isChecked:false},
        {id:3,name:'火龙果',price:3,num:3,total:5,src:require('../assets/img/火龙果.svg'),isChecked:false},
        {id:4,name:'苹果',price:4,num:4,total:5,src:require('../assets/img/苹果.svg'),isChecked:false},
        {id:5,name:'草莓',price:6,num:5,total:5,src:require('../assets/img/草莓.svg'),isChecked:false},
        {id:6,name:'菠萝',price:6,num:5,total:5,src:require('../assets/img/菠萝.svg'),isChecked:false},
        {id:7,name:'香蕉',price:6,num:5,total:5,src:require('../assets/img/香蕉.svg'),isChecked:false},
    ];
    export default {
        name: 'shoppingCart',
        data(){
            return{
                fruitsList:JSON.parse(localStorage.getItem('list'))||defaultArr,
            }
        },
        watch:{
            fruitsList:{
                deep:true,
                handler(newValue){
                    localStorage.setItem('list',JSON.stringify(newValue));
                }
            }
        },
        methods:{
            add(id){
                this.fruitsList.filter(item=>{
                    if(item.id===id){
                        item.num++
                    }
                })
            },
            sub(id){
                this.fruitsList.filter(item=>{
                    if(item.id===id){
                        item.num--
                    }
                })
            },
            deleteFruit(id){
                this.fruitsList=this.fruitsList.filter(item=>item.id!==id)
            }
        },
        computed:{
            totalNum(){
                return this.fruitsList.reduce((sum,item)=>{
                    if(item.isChecked){
                        return sum + item.num;
                    }
                    else return sum;
                },0)
            },
            totalPrice(){
                return this.fruitsList.reduce((sum,item)=>{
                    if(item.isChecked){
                        return sum + item.price * item.num;
                    }
                    else return sum;
                },0)
            },
            allSelect:{
                get(){
                    return this.fruitsList.every(item=>item.isChecked);
                },
                set(value){
                    this.fruitsList.forEach(item=>item.isChecked=value);
                }
            },
        }
    }
</script>

<style>

table{
    position:absolute;
    width:60%;
    left:20%;
    top:100px;
}

table td{
    text-align: center; /* 水平居中 */
    vertical-align: middle; /* 垂直居中 */
}

.fruit{
    width:64px;
    height:64px;
}

.delete{
    font-size:14px;
    color:white;
    background-color: rgb(224, 68, 68);
    border:none;
    border-radius: 10%;
    cursor: pointer;
}

.btn{
    width: 26.6px;
    height: 26.6px;
    text-align: center;
    cursor: pointer;
}

.ipt{
    width:35px;
    height: 25px;
    padding:0 0;
    margin:0 1px; 
    border:1px solid #ccc;
    border-radius: 5%;;
    text-align: center;
}

.checkout{
    width:80px;
    height:30px;
    background-color: rgb(83, 171, 243);
    color:white;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.foot{
    display: flex;
    justify-content: space-between;
    align-items: center;;
}

.empty{
    position:relative;
    top:100px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}


</style>