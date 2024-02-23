import type { PageLoad } from "../../[locationName]/[menuId]/$types";

export const load: PageLoad = ({ params }) => {
    return { params };
};