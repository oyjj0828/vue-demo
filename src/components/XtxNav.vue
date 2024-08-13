<template>
    <div class="navContainer">
        <div class="wid">
            <h1 class="logo">
                <a href="javascript:;"><img class="logo" src="@/assets/img/logo.png" alt=""></a>
            </h1>
            <div>
                <ul class="nav">
                    <li v-for="(item, index) in navItem" :key="item.id">
                        <a href="javascript:;">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="searchBox">
                <input type="text" placeholder="搜一搜">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XtxNav',
    data() {
        return {
            navItem: [
                { id: 1, name: '首页' },
                { id: 2, name: '生鲜' },
                { id: 3, name: '美食' },
                { id: 4, name: '餐厨' },
                { id: 5, name: '电器' },
                { id: 6, name: '居家' },
                { id: 7, name: '洗护' },
                { id: 8, name: '孕婴' },
                { id: 9, name: '服装' },
            ],

        }
    }
}
</script>

<style scoped>
.wid {
    width: 1240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navContainer {
    display: grid;
    place-content: center;
    height: 100px;
    width: 100%;
    background-color: white;
}

.logo {
    padding: 0 0;
    margin: 0 0;
    width: 160px;
    height: 70px;
}

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-left: 20px;
    list-style-type: none;
}

.nav>li {
    display: flex;
    height: 70px;
    border: none;
    padding: 0 8px;
    margin: 0 15px;
    justify-content: center;
    align-items: center;
}

.nav>li>a {
    color: rgb(84, 84, 84);
    text-decoration: none;
}

.nav>li>a:hover {
    color: rgb(33, 229, 206);
    border-bottom: 1px solid rgb(33, 229, 206);
}

.searchBox {
    width: 150px;
    position: relative;
}

.searchBox>input {
    height: 25px;
    width: 100%;
    border-radius: 25px;
    border: 2px solid rgb(103, 103, 103);
    padding-left: 25px;
    box-sizing: border-box;
}

.searchBox::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    background-image: url('@/assets/img/搜索.svg');
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateY(-50%);
}
</style>