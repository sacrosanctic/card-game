<script>
	import { getUrlParam, setUrlParam } from '$lib/util';
	import { urlStore } from './store';

	const param = 'hp';

	// will react to stores
	$: {
		setUrlParam(param, $urlStore);
	}

	let hp = getUrlParam(param) || '4';
	let anotherHp = '200';

	// will react to use input
	const change = () => {
		setUrlParam(param, hp);
	};

	// will react to variable change
	// $: {
	// 	setUrlParam(param, hp);
	// }
</script>

<!-- {@debug hp} -->
hp: {hp}

<input type="text" bind:value={$urlStore} />
<button on:click={change}>goto</button>
{anotherHp}
{$urlStore}
