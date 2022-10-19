import type { Actions } from './$types';
import { fromPairs, converge, unapply, curry, __, lt, prop, pipe, length } from 'ramda';
import { Success, Failure, collect } from 'folktale/validation';
import { redirect } from '@sveltejs/kit';
// import curry from 'folktale/core/lambda/curry';

// const isPasswordLongEnough: Validate = (password) =>
// 	password.length > 6
// 		? Success(password)
// 		: /* otherwise */ Failure(['Password must have more than 6 characters.']);

// const isPasswordLongEnough2: Validate = curry((val, password) =>
// 	password.length > 6 ? Success(password) : /* otherwise */ Failure([val])
// );

// const isPasswordStrongEnough: Validate = curry((val, password) =>
// 	/[\W]/.test(password)
// 		? Success(password)
// 		: /* otherwise */ Failure(['Password must contain a special character.'])
// );

const longerThan8 = pipe(length, lt(__, 8));

const validate: Validate = curry((propName, check, failure, data) => {
	return check(prop(propName, data)) ? Success(data) : Failure([{ [propName]: failure }]);
});

export const actions: Actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const formData = await request.formData();
		const formDatas = fromPairs([...formData]);

		console.log(formDatas);

		const validateForm = <any>pipe(
			converge(unapply(collect), [
				validate(
					//
					'email',
					longerThan8,
					'oops'
				),
				validate(
					//
					'email',
					longerThan8,
					'oops'
				)
			])
		);

		return validateForm(formDatas).matchWith({
			Success: login,
			Failure: prop('value')
		});

		// console.log(isPasswordLongEnough2('')(email));
		// console.log(validate(lt(__, 8))('oops')(email));

		// console.log(isPasswordValid(email));
		// console.log(isPasswordValid2(email));

		// if (!check(email)) return invalid(422, { email, missing: true });

		return { success: true };
	}
};
const login = () => {
	throw redirect(300, '/');
};

type Validate = (
	prop: string,
	fn: (str: string) => boolean,
	failure: string,
	data?: object
) => typeof Success | typeof Failure;
