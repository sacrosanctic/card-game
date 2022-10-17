<script>
	import {
		applySpec,
		converge,
		head,
		identity,
		inc,
		last,
		map,
		of,
		pipe,
		range,
		tail,
		xprod,
		__
	} from 'ramda';

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
			converge(xprod),
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
