<template>
    <div>
        <newGoods v-for="(item,index) in goods" :goodsList="item.goodsList" :title="item.title" :key="item.id"/>
    </div>
</template>

<script>

import newGoods from './newGoods.vue'

export default{
    components:{
        newGoods
    },
    data(){
        return{
            goods:[
                {
                    id:1,
                    title:['新鲜好物','新鲜出炉 品质靠谱'],
                    goodsList:[
                        {id:1,src:require('@/assets/img/new_goods_1.jpg'),name:'睿米无线吸尘器F8',price:899},
                        {id:2,src:require('@/assets/img/new_goods_2.jpg'),name:'智能环绕3D空调',price:1299},
                        {id:3,src:require('@/assets/img/new_goods_3.jpg'),name:'广东软软糯米煲仔饭',price:129},
                        {id:4,src:require('@/assets/img/new_goods_4.jpg'),name:'罗西机械智能手表',price:3999}
                    ]
                },
                {
                    id:2,
                    title:['人气推荐','人气爆款 不容错过'],
                    goodsList:[
                        {id:1,src:require('@/assets/img/new_goods_1.jpg'),name:'睿米无线吸尘器F8',price:899},
                        {id:2,src:require('@/assets/img/new_goods_2.jpg'),name:'智能环绕3D空调',price:1299},
                        {id:3,src:require('@/assets/img/new_goods_3.jpg'),name:'广东软软糯米煲仔饭',price:129},
                        {id:4,src:require('@/assets/img/new_goods_4.jpg'),name:'罗西机械智能手表',price:3999}
                    ]
                },
            ]
        }
    }
}
</script>

<style>
</style>