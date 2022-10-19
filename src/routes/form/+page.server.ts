import type { Actions } from './$types';
import { fromPairs, type, length } from 'ramda';
import { invalid } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const formData = await request.formData();

		console.log(fromPairs([...formData]));
		// const { email } = fromPairs([...formData]);
		const email = formData.get('email');

		if (!check(email)) return invalid(422, { email, missing: true });

		return { success: true };
	}
};
export const load = () => {
	return { a: 1 };
};

type Validate = (v: FormDataEntryValue | null) => boolean;

const check: Validate = (v) => {
	if (v === null) return false;
	if (v === null) return false;
	v = v as string;

	console.log(length(v));

	if (type(v) !== 'String') return false;
	if (length(v) > 5) return false;

	return true;
};
