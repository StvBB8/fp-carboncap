<template>
    <div>
        <router-wrapper>
            <router-view/>
        </router-wrapper>
    </div>
</template>

<script>
import RouterWrapper from './components/layout/RouterWrapper';

export default {
    components: {
        RouterWrapper
    }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease, transform .2s ease;

}
.fade-enter, .fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>