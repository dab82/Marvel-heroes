<template>
	<nav class="navbar sticky-top navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand logo" href="/index.html">MARVEL</a>
			<form class="d-flex">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Поиск ..."
					aria-label="Search"
				/>
				<button class="btn btn-outline-danger" type="submit">GO</button>
			</form>
		</div>
	</nav>
</template>

<script>
export default {
	name: "AppHeader",
	data() {
		return {};
	},
};
</script>

<style scoped></style>
