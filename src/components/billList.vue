<template>
    <div class="container">
        <form action="">
            <input class="ipt2" type="text" placeholder="消费名称" v-model.trim="name">
            <input class="ipt2" type="text" placeholder="消费价格" v-model.number="price">
            <button class="add" @click.prevent="addBill">添加账单</button>
        </form>
        <table class="bill_table">
            <thead>
                <tr>
                    <th>编号</th>
                    <th>消费名称</th>
                    <th>消费价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{ index+1}}</td>
                    <td>{{item.name}}</td>
                    <td :class="{red:item.price>500}">{{item.price.toFixed(2)}}</td>
                    <td><button class="delete" @click="deleteBill(item.id)">删除</button></td>
                </tr>
                <tr><td style=" text-align:left; font-weight: bold;" colspan="4">
                    <span>消费总计：{{ totalPrice.toFixed(2) }}</span>
                </td></tr>
            </tbody>
        </table>
        <div class="echartsContainer" id="main">

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import * as echarts from 'echarts';

export default{
    data(){
        return{
            list:[],
            name:'',
            price:''
        }
    },
    methods:{
        async addBill(){
            const res=await axios.post('https://applet-base-api-t.itheima.net/bill',{
                creator:'小黑',
                name:this.name,
                price:this.price
            });
            this.getList();
        },
        async deleteBill(id){
            const res=await axios.delete(`https://applet-base-api-t.itheima.net/bill/${id}`);
            this.getList();  
        },
        async getList(){
            const res=await axios.get('https://applet-base-api-t.itheima.net/bill',{
                params:{
                    creator:'小黑',
                }
            });
            console.log(res);
            this.list=res.data.data;
            this.myChart.setOption({
                series:[{
                    data:this.list.map(item=>({name:item.name,value:item.price}))
                }]
            })
            this.name='';
            this.price='';
        }
    },
    computed:{
        totalPrice(){
            return this.list.reduce((pre,item)=>{
                return pre+item.price;
            },0);
        }
    },
    created(){
        this.getList();
    },
    mounted(){
        this.myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        var option;
        option = {
        title: {
            text: '消费清单',
            left: 'center',
            top:'30px'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            y:'bottom'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [],
                center:['50%','55%'],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]};
        this.myChart.setOption(option);
    },
}
</script>

<style>
form{
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.container{
    top:100px;
    width:31%;
} 

.ipt2{
    height:22px;
    border-radius: 2.5px;
    border-color: rgb(200, 200, 200);
}

.add{
    color: white;
    border-radius: 2.5px;
    border:none;
    background-color: rgb(83, 171, 243);
    cursor: pointer;
}

.bill_table{
    position: relative;
    left:0;
    top:20px;
    width:100%;
    border-collapse: separate; /* 设置表格的边框合并 */
    border-spacing: 0 10px; /* 设置单元格之间的间隙 */
}

.bill_table td{
    border-bottom: 2px solid #d6d6d6; /* 设置行的下边框 */
}

.red{
    color:red;
}

.echartsContainer{
    margin:30px 0;
    width:100%;
    height:300px;
    border:2px solid #d6d6d6;
}

</style>