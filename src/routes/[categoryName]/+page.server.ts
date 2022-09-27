import { error, type Actions } from '@sveltejs/kit';
import { api } from '../api';
import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';
import type { Link, Category } from "@prisma/client";

export const load: PageServerLoad = async ({params}) => {
	const response = await api('GET', {categoryName: params.categoryName});
	if (response.status === 404) {
		return {
			links: [],
			categories: [],
		};
	}
	if (response.status === 200) return response.body as {links: Link[], categories: Category[]};
	throw error(response.status);
};

export const actions: Actions = {
	add: async ({ request }) => {
		const form = await request.formData();
		const formAsObj = Object.fromEntries(form as any); // doing that because dom.iterable does not work in tsconfig.
		formAsObj.categoryId = parseInt(formAsObj.categoryId, 10);
        const data = formAsObj as Link
		await api('POST', {data});
	},
};
