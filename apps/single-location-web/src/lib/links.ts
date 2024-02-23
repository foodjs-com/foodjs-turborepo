export const slugify = (text: string) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')        // Remove all non-word chars
        .replace(/--+/g, '-')           // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

export const LINKS = {
    HOME: '/',
    MENU: function (data: { locationName: string, menuId: string }) {
        return `/menu/${slugify(data.locationName)}/` +
            `${slugify(data.menuId)}`;
    },
    MENU_ITEM: function (data: {
        locationName: string,
        menuId: string,
        itemName: string,
        itemId: string
    }) {
        return `/menu/${slugify(data.locationName)}/` +
            `${slugify(data.menuId)}/` +
            `${slugify(data.itemName)}/` +
            `${slugify(data.itemId)}`;
    }
}
