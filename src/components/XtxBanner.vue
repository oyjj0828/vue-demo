<template>
    <div class="bannerContainer">
        <div class="banner">
            <transition name="fade">
                <img :key="currentPage" :src="img_list[currentPage].src">
            </transition>
            <nav>
                <ul>
                    <li v-for="(item, index) in nav_list" :key="item.id">
                        <a href="javascript:;">{{ item.goods }}</a>
                        <img src="@/assets/img/右箭头.svg">
                    </li>
                </ul>
            </nav>
            <div class="leftArrow" @click="moveLeft">
                <svg t="1722852679986" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3379" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                    height="22">
                    <path
                        d="M722.315636 14.126545a46.173091 46.173091 0 0 1 65.722182 0.512 47.150545 47.150545 0 0 1-0.488727 66.280728L355.118545 510.254545l432.54691 432.360728c18.222545 18.292364 18.338909 47.825455 0.279272 66.257454a46.219636 46.219636 0 0 1-65.722182 0.302546L222.859636 510.021818 722.315636 14.126545zM222.859636 510.021818"
                        p-id="3380" fill="#ffffff">
                    </path>
                </svg>
            </div>
            <div class="rightArrow" @click="moveRight">
                <svg t="1722852618107" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3085" width="22" height="22"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M801.186909 510.021818L301.824 1009.175273a46.242909 46.242909 0 0 1-65.722182-0.302546 47.127273 47.127273 0 0 1 0.279273-66.257454l432.546909-432.360728L236.474182 80.919273A47.127273 47.127273 0 0 1 235.985455 14.638545a46.219636 46.219636 0 0 1 65.745454-0.512l499.456 495.895273z m0 0"
                        p-id="3086" fill="#ffffff">
                    </path>
                </svg>
            </div>
            <div class="bottomNav">
                <div v-for="item in [0, 1, 2, 3, 4]" :key="item" @click="select(item)"
                    :class="{ bar: true, selected: item === currentPage }"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav_list: [
                { id: 1, goods: '生鲜 水果 蔬菜' },
                { id: 2, goods: '美食 面点 干果' },
                { id: 3, goods: '餐桌 数码产品' },
                { id: 4, goods: '电器 床品 四件套 被枕' },
                { id: 5, goods: '居家 奶粉 玩具 辅食' },
                { id: 6, goods: '洗护 洗发 洗护 美妆' },
                { id: 7, goods: '孕婴 奶粉 玩具' },
                { id: 8, goods: '服饰 女装 男装' },
                { id: 9, goods: '杂货 户外 图书' },
                { id: 10, goods: '品牌 品牌制造' },
            ],
            img_list: [
                { id: 1, src: require('@/assets/img/brand_goods_1.jpg') },
                { id: 2, src: require('@/assets/img/brand_goods_2.jpg') },
                { id: 3, src: require('@/assets/img/brand_goods_3.jpg') },
                { id: 4, src: require('@/assets/img/brand_goods_4.jpg') },
                { id: 5, src: require('@/assets/img/brand_goods_5.jpg') },
            ],
            currentPage: 0,
            isVisible: false,
        }
    },
    methods: {
        moveLeft() {
            this.currentPage = (this.currentPage - 1 + 5) % 5;
            this.isVisible = true;
        },
        moveRight() {
            this.currentPage = (this.currentPage + 1) % 5;
        },
        select(item) {
            this.currentPage = item;
        }
    }
}
</script>

<style lang="less" scoped>
.bannerContainer {
    width: 100%;
    height: 500px;
    display: grid;
    place-items: center;
}

.banner {
    position: absolute;
    height: inherit;
    width: 1240px;

    img {
        position: absolute;
        height: inherit;
        width: inherit;
    }

    nav {
        position: absolute;
        height: inherit;
        width: 250px;

        ul {
            height: inherit;
            width: inherit;
            margin: 0 0;
            padding: 0 0;
            list-style-type: none;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.banner>nav>ul>li {
    display: flex;
    height: 50px;
    width: inherit;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: rgba(2, 2, 2, 0.5);
}

.banner>nav>ul>li:hover {
    background-color: rgba(33, 229, 206, 0.8);
}

.banner>nav>ul>li:hover img {
    transform: rotate(-180deg);
    /* 旋转180度 */
    transition: transform 0.35s ease;
}

.banner>nav>ul>li:hover a {
    transform: translate(10px, 0);
    transition: transform 0.35s ease;
}

.banner>nav>ul>li>a {
    position: relative;
    margin-left: 30px;
    text-decoration: none;
    color: white;
}

.banner>nav>ul>li>img {
    position: relative;
    width: 16px;
    height: 16px;
    right: 15px;
}

.leftArrow {
    position: absolute;
    background-color: rgba(76, 76, 76, 0.5);
    left: 260px;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
}

.leftArrow:hover path {
    fill: rgb(33, 229, 206);
}

.rightArrow {
    position: absolute;
    background-color: rgba(76, 76, 76, 0.5);
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 45px;
    height: 45px;
    text-align: center;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
}

.rightArrow:hover path {
    fill: rgb(33, 229, 206);
}

.bottomNav {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    left: calc(50% + 110px);
    transform: translateX(-50%);
}

.bar {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: rgba(145, 143, 143, 0.5);
    cursor: pointer;
}

.selected {
    background-color: rgba(255, 255, 255, 1);
}
</style>