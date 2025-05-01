<template>
	<view class="base">
		<slot></slot>
		<Tabbar></Tabbar>
	</view>
</template>

<script>
	export default {
		name: "Base",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.base {
		padding-bottom: var(--tab-height)+var(--padding-x);
	}
</style>