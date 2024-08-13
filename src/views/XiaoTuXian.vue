<template>
    <div class="container">
        <XtxShortcut />
        <XtxNav />
        <XtxBanner />
        <XtxNewGoods />
    </div>
</template>

<script>
import XtxShortcut from '@/components/XtxShortcut.vue'
import XtxNav from '@/components/XtxNav.vue'
import XtxBanner from '@/components/XtxBanner.vue'
import XtxNewGoods from '@/components/XtxNewGoods.vue'

export default {
    name: 'XiaoTuXian',
    components: {
        XtxShortcut,
        XtxNav,
        XtxBanner,
        XtxNewGoods
    },
    activated() {
        console.log('激活');
    },
    deactivated() {
        console.log('失活');
    },
}

</script>

<style scoped>
.container {
    width: 100%;
    top: 0;
}
</style>