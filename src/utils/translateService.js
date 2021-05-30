const database = {
    company_facilities: 'Company facilities',
    company_vehicles: 'Company vehicles',
    purchased_fuel: 'Purchased fuel',
    fossil_fuel: 'Fossil fuel',
    processes: 'Processes',
    refrigerants: 'Refrigerants'
}

const text = (untranslated) => {
    untranslated = untranslated.trim();
    const translation = database[untranslated];
    if (!translation) return untranslated;
    return translation;
}

const translatePlugin = {
    install: (Vue) => {
        Vue.directive('translate', {
            inserted: (el) => el.textContent = text(el.textContent)
        });
    }
}

export default translatePlugin;