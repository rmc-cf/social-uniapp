<template>
	<view class="life-full">
		awdawd
		<LifeActions :data="actions"></LifeActions>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const actions = ref([{
		icon: 'fire',
		num: '',
		click: () => uni.navigateTo({
			url: '/pages/index/index'
		})
	}, {
		icon: 'chat',
		num: '2',
		click: () => uni.navigateTo({
			url: '/pages/index/index'
		})
	}, {
		icon: 'fire',
		activeIcon: 'fire-filled',
		num: '3',
		type:'count',
	}, ])
</script>

<style lang="scss" scoped>
	.life-full {
		background-color: #fff;
		padding: 20rpx;
	}
</style>