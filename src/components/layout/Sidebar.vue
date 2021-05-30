<template>
    <div>
        <b-sidebar 
            id="sidebar-right" 
            :title="title" 
            width="600px" 
            right 
            shadow
            @hidden="$emit('hidden')"
        >
            <div class="px-3 py-2">
                <slot></slot>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    props: ['title'],
}
</script>