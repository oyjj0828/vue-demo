<template>
    <div class="shortcutContainer">
        <a class="shortcut-a" href="javascript:;"><span class="shortcut-span">请先登录</span></a>
        <a class="shortcut-a" href="javascript:;"><span class="shortcut-span">免费注册</span></a>
        <a class="shortcut-a" href="javascript:;"><span class="shortcut-span">我的订单</span></a>
        <a class="shortcut-a" href="javascript:;"><span class="shortcut-span">会员中心</span></a>
        <a class="shortcut-a" href="javascript:;"><span class="shortcut-span">帮助中心</span></a>
    </div>
</template>

<script>

</script>

<style scoped>
.shortcutContainer{
    background-color: black;
    width:100%;
    height:48px;
    display: flex;
    align-items: center;
    justify-content: right;
}

.shortcut-a{
    position:relative;
    text-decoration: none;
    width:65px;
}

.shortcut-a:nth-child(-n+4)::after{
    content:'';
    position:absolute;
    height:20px;
    right:4.5px;
    width:1px;
    background-color: white;
    top: 50%; /* 伪元素的顶部位置 */
    transform: translateY(-50%); /* 使伪元素垂直居中 */
}

.shortcut-a:nth-child(n+5){
    margin-right: 20px;
}

.shortcut-a:hover{
    text-decoration-color: rgb(33, 229, 206);
}

.shortcut-span{
    color:white;
    font-size: 14px;
}

.shortcut-span:hover{
    color: rgb(33, 229, 206);
}

</style>