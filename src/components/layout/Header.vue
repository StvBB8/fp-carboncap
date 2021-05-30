<template>
    <header class="header">
        <img alt="logo" src="../../assets/logo.png" class="header__logo">
        <div class="header__body">
            <div class="header__body-left">
                <div class="header__body-element header__body-element--title">
                    <b-icon-list-check class="mr-3 header__body-icon--large"></b-icon-list-check>
                    <p class="h3">Emission data</p>
                </div>
                
                <div class="header__body-element">
                    <span class="mr-2">All company</span> 
                    <b-icon-caret-down class="header__body-icon--light"></b-icon-caret-down>
                </div>

                <div class="header__body-element">
                    <span class="mr-2">2020</span>
                    <b-icon-caret-down class="header__body-icon--light"></b-icon-caret-down>
                </div>

                <div class="header__body-element">
                    <b-icon-funnel-fill class="header__body-icon--light"></b-icon-funnel-fill>
                </div>
            </div>
            <div class="header__body-right">
                <b-icon-search></b-icon-search>
                <b-icon-bell class="ml-4"></b-icon-bell>
                <b-avatar variant="primary" :text="getInitials" class="ml-4"></b-avatar>
            </div>
            
        </div>
        
    </header>
</template>

<script>
import { 
    BIconListCheck, 
    BIconCaretDown, 
    BIconFunnelFill, 
    BIconBell,
    BIconSearch
} from 'bootstrap-vue';

export default {
    data() {
        return {
            user: null
        }
    },
    computed: {
        getInitials() {
            if (!this.user) return '';
            return `${this.user.first_name.substring(0,1)}${this.user.last_name.substring(0,1)}`;
        }
    },
    methods: {
        init() {
            this.getUser();
        },
        async getUser() {
            const url = 'user/details';

            try {
                const result = await this.$get(url);
                this.user = result;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.init();
    },
    components: {
        BIconListCheck,
        BIconCaretDown,
        BIconFunnelFill,
        BIconBell,
        BIconSearch
    }
}
</script>
