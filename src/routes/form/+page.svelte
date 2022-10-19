<script type="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let data;

	console.log(data);

	export let form: ActionData;

	console.log(form);
</script>

{JSON.stringify(form, null, 2)}

<form use:enhance method="POST" action="?/login">
	<input name="email" type="text" />
	<input name="password1" type="text" />
	<button formaction="?/login">Log in</button>
</form>
