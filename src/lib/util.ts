import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';

export const getUrlParam = (param: string) => get(page).url.searchParams.get(param);

export const setUrlParam = (param: string, data: string) => {
	if (!browser) return;

	const url = new URL(get(page).url);
	url.searchParams.set(param, data);
	goto(url, { replaceState: true, keepfocus: true });
};
