<template>
    <div class="goodsItems">
        <img :src="item.src">
        <span class="name">{{ item.name }}</span>
        <span class="price">￥{{ item.price }}</span>
    </div>
</template>

<script>
export default {
    name: 'goods',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.goodsItems {
    display: flex;
    flex-direction: column;
}

.goodsItems>img {
    height: 300px;
}

.name {
    font-size: 21px;
    color: #333333;
    text-align: center;
    height: fit-content;
}

.price {
    font-size: 23px;
    color: #9a2e1f;
    text-align: center;
}
</style>