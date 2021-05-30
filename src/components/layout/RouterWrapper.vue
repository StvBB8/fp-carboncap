<template>
    <div>
        <app-header></app-header>
        
        <div class="main-view">
            <div class="sidebar"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Header from './Header';

export default {
    components: {
        AppHeader: Header
    }
}
</script>
