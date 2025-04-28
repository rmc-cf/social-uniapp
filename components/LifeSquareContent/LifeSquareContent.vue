<template>
	<view class="square-container">
		<LifeMainItem v-for="(item,index) in 6" :key="index"></LifeMainItem>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const data = ref([
	])

</script>

<style lang="scss" scoped>
	.square-container{
		display: flex;
		flex-direction: column;
	}

</style>