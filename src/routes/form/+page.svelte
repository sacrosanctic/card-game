<script>
	import { applySpec, head, last, map, pipe, range } from 'rambda';
	import { xprod } from '$lib/fp';

	const fullDeck = () => {
		const suit = ['Club', 'Diamond', 'Spade', 'Heart'];
		const rank = range(1, 14);

		const deck1 = xprod(suit, rank);
		const deck2 = map(
			applySpec({
				suit: head,
				rank: last
			})
		);

		// return pipe(deck1, deck2);
		return pipe(
			xprod,
			map(
				applySpec({
					suit: head,
					rank: last
				})
			)
		)(suit, rank);
	};
</script>

{JSON.stringify(fullDeck(), null, 2)}
