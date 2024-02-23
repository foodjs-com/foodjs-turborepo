import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    return {
        item: {
            itemId: params.itemId,
            itemName: params.itemName,
        }
    };
};