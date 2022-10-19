<script type="ts">
	import { applySpec, head, last, map, pipe, range } from 'rambda';
	import { xprod } from '$lib/fp';
	import type { Deck, Suit, Rank, Card } from '$lib/card';

	const fullDeck = (): Deck => {
		const suit: Suit[] = ['Club', 'Diamond', 'Spade', 'Heart'];
		const rank: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

		// const deck1 = xprod;
		// const deck2: Card = applySpec({
		// 	suit: (v: Array<any>): Suit => head(v),
		// 	rank: (v: Array<any>): Rank => last(v)
		// });
		// const deck3 = map(deck2);

		// const deck4 = pipe(deck1, deck3)(suit, rank);

		// return deck4;
	};

	let deck = fullDeck();
</script>

<pre>{JSON.stringify(deck, null, 2)}
</pre>
