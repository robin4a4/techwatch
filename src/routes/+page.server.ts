import { error } from '@sveltejs/kit';
import { api } from './api';
import type { PageServerLoad } from './$types';
import type { Link, Category } from "@prisma/client";

export const load: PageServerLoad = async () => {
	const response = await api('GET');
	if (response.status === 404) {
		return {
			links: [],
			categories: [],
		};
	}
	if (response.status === 200) return response.body as {links: Link[], categories: Category[]};
	throw error(response.status);
};