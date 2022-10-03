import { error } from '@sveltejs/kit';
import { api } from './api';
import type { LayoutServerLoad, Actions } from './$types';
import type { Link, Category } from "@prisma/client";

export const load: LayoutServerLoad = async ({params}) => {
	const response = await api('GET', {categoryName: params.categoryName});
	if (response.status === 404) {
		return {
			links: [],
			categories: [],
            currentCategory: params.categoryName
		};
	}
	if (response.status === 200) return {...response.body, currentCategory: params.categoryName} as {links: Link[], categories: Category[], currentCategory: string};
	throw error(response.status);
};
