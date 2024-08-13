<template>
    <div id="app">
        <my-table class="my-table" :list="list">
            <template #head>
                <td v-for="(item, index) in title" :key="index">
                    {{ item }}
                </td>
            </template>
            <template #main="obj">
                <td>{{ obj.index + 1 }}</td>
                <td><img :src="obj.item.picture" alt=""></td>
                <td>{{ obj.item.name }}</td>
                <td>
                    <my-tag :tag.sync="obj.item.tag" width="50px" height="25px">
                    </my-tag>
                </td>
            </template>
        </my-table>
    </div>
</template>

<script>
import myTag from '@/components/my-tag.vue'
import myTable from '@/components/my-table.vue'

export default {
    name: 'MyTable',
    data() {
        return {
            title: ['编号', '图片', '名称', '标签'],
            list: [
                { id: 1, picture: require('@/assets/img/brand_goods_1.jpg'), name: '品牌一', tag: '1' },
                { id: 2, picture: require('@/assets/img/brand_goods_2.jpg'), name: '品牌二', tag: '2' },
                { id: 3, picture: require('@/assets/img/brand_goods_3.jpg'), name: '品牌三', tag: '3' },
                { id: 4, picture: require('@/assets/img/brand_goods_4.jpg'), name: '品牌四', tag: '4' },
            ],
        }
    },
    components: {
        'my-tag': myTag,
        'my-table': myTable,
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: fit-content;
    color: #2c3e50;
}

img {
    display: block;
    position: relative;
    height: 120px;
    margin: 3px auto;
}
</style>