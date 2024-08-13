<template>
    <div class="goodsContainer">
        <div class="newGoods w">
            <div class="title">
                <h3>{{ title[0] }}</h3>
                <p>{{ title[1] }}</p>
                <p>查看全部 ></p>
            </div>
            <div class="goods">
                <div v-for="(item, index) in goodsList" :key="item.id">
                    <goods :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import goods from './goods.vue'
export default {
    names: 'newGoods',
    props: {
        goodsList: {
            type: Array,
            required: true
        },
        title: {
            type: Array,
            required: true
        },
    },
    components: {
        goods,
    },
}

</script>

<style>
.goodsContainer {
    width: 100%;
    height: 440px;
    margin-top: 40px;
    display: grid;
    place-content: center;
}

.title {
    position: relative;
    display: flex;
    align-items: flex-end;
}

.newGoods {
    height: inherit;
    display: flex;
    flex-direction: column;
}

.goods {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.goods>div {
    background-color: #f0f9f4;
    cursor: pointer;
}

.goods>div:hover {
    transform: translate(0px, -5px);
    transition: transform 1s ease;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
}

.w {
    width: 1240px;
}

h3 {
    font-size: 29px;
    color: #333333;
    font-weight: normal;
    margin: 0 0;
}

p {
    font-size: 16px;
    color: #999;
    margin: 0 0;
    margin-left: 35px;
}

p:last-child {
    position: absolute;
    right: 0px;
    cursor: pointer;
}

p:last-child:hover {
    color: rgb(33, 229, 206);
}
</style>