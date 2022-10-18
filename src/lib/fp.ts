import { curry } from 'rambda';

export const xprod = curry((a: [], b: []) => {
	let idx = 0;
	const ilen = a.length;
	let j;
	const jlen = b.length;
	const result = [];
	while (idx < ilen) {
		j = 0;
		while (j < jlen) {
			result[result.length] = [a[idx], b[j]];
			j += 1;
		}
		idx += 1;
	}
	return result;
});
