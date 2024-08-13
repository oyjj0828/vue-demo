<template>
    <div ref="myTable" class="myTable">
        <table>
            <thead>
                <tr>
                    <slot name="head"></slot>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                    <slot name="main" :item="item" :index="index"></slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>
.myTable {
    height: inherit;
    width: 100%;
}

table {
    border-collapse: collapse;
    width: 60%;
    margin: 100px auto;
    text-align: center;
}

thead td {
    background-color: #e3e3e3;
    height: 35px;
    font-weight: bold;
    border-bottom: 2px solid #044ea9;
}

tbody td {
    border-bottom: 2px solid #a6a6a6;
}
</style>