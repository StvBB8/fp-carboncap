// HELPERS
const generateUrl = (url) => {
    const api = process.env.VUE_APP_API;
    return `${api}${url}?user_id=${process.env.VUE_APP_UID}`;
}

// DEFAULT CALLS
const get = async (url) => {
    url = generateUrl(url);

    const result = await fetch(url, {
        method: 'GET'
    });

    return await result.json();
}

const post = async (url, data) => {
    url = generateUrl(url);

    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });

    return await result.json();
}

const dataManager = {
    install: (Vue) => {
        Vue.prototype.$get = (url) => get(url);
        Vue.prototype.$post = (url, data) => post(url, data);
    }
}

export default dataManager;