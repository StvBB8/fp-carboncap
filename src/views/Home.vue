<template>
    <div class="home__wrapper">
        <div class="home__list">
            <ul>
                <li 
                    v-for="category in categories" 
                    :key="category.id" 
                    @click.stop="handleShowDropdown(category.id)"
                    class="home__list--light"
                >
                    <h4 v-translate>{{ category.name }}</h4>

                    <transition name="fade">
                        <ul v-show="showDropdown.includes(category.id)">
                            <li 
                                v-for="sub in category.subcategories" 
                                :key="sub.id" 
                                @click.stop="handleShowDropdown(sub.id)"
                            >
                                <h5 v-translate>{{ sub.name }}</h5>
                                <transition name="fade">
                                    <ul v-show="showDropdown.includes(sub.id)">
                                        <li 
                                            v-for="site in sites" 
                                            :key="site.id" 
                                            @click.stop="handleAddEmission(site, { 
                                                category: category.id,
                                                subcategory: sub.id
                                            })"
                                            class="home__list-input"
                                        >
                                            {{ site.name }}
                                            <transition name="fade">
                                                <div v-show="newEmission && site.id === newEmission.id">
                                                    <input 
                                                        type="text" 
                                                        v-model="newEmissionTitle" 
                                                        @keyup.enter="addNewSource" 
                                                        class="mr-4"
                                                        @click.stop
                                                    >
                                                    <b-button 
                                                        size="sm" 
                                                        v-b-toggle.sidebar-right
                                                        @click.stop
                                                    >Add</b-button>
                                                </div>
                                            </transition>
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                        </ul>
                    </transition>
                    
                </li>
            </ul>
        </div>


        <sidebar 
            :title="newEmissionTitle"
            @hidden="handleSidebarClose"
            :key="sidebarKey"
        >
            <add-emission-form @submit="handleSubmit"></add-emission-form>
        </sidebar>
    </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar';
import AddEmissionForm from '../components/forms/AddEmissionForm';

export default {
    name: 'Home',
    data() {
        return {
            categories: [],
            sites: [],
            emissions: [],
            showDropdown: [],
            newEmission: null,
            newEmissionTitle: '',
            newEmissionParams: {},
            sidebarKey: 0
        }
    },
    methods: {
        async init() {
            this.getCategories();
            this.getSites();
            this.getEmission();
        },
        async getCategories() {
            const url = 'emission_categories/getSelected';

            try {
                const result = await this.$get(url);
                this.categories = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getSites() {
            const url = 'company/listSites';

            try {
                const result = await this.$get(url);
                this.sites = result;
            } catch (error) {
                console.log(error);
            }
        },
        async getEmission() {
            const url = 'emission_categories/getSelected';

            try {
                const result = await this.$get(url);
                this.emissions = result;
            } catch (error) {
                console.log(error);
            }
        },
        handleShowDropdown(id) {
            const index = this.showDropdown.findIndex(x => x === id);
            if (index !== -1) this.showDropdown.splice(index, 1);
            else this.showDropdown.push(id);
        },
        handleAddEmission(site, params) {
            if (this.newEmission === site) {
                this.newEmission = '';
                this.newEmissionParams = {};
                return;
            }
            this.newEmission = site;
            this.newEmissionParams = params;
        },
        handleSidebarClose() {
            this.newEmission = null;
            this.newEmissionTitle = '';
            this.newEmissionParams = {};
            this.sidebarKey = this.sidebarKey + 1;
        },
        async handleSubmit(e) {
            const url = 'api/emission_data'; // Which endpoint?
            const body = {
                ...e,
                ...this.newEmissionParams,
                title: this.newEmissionTitle
            }

            console.log(body, url);
            this.handleSidebarClose();
            return;

            // try {
            //     const result = await this.$post(url, body);
            //     console.log(result);
            // } catch (error) {
            //     console.log(error);
            // }
        }
    },
    mounted() {
        this.init();
    },
    components: {
        Sidebar,
        AddEmissionForm
    }
}
</script>
