<template>
	<view class="settings-container">
	<ItemSection :data="settings"></ItemSection>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const settings = ref([{
		items: [{
			title: '个人信息'
		}]
	},{
		items: [{
			title: '小黑屋'
		}]
	},{
		items: [{
			title: '通知设置'
		},{
			title: '隐私设置'
		},]
	}])
</script>

<style lang="scss" scoped>
	.settings-container {
		padding: 20rpx;
		display: flex;
		flex-direction: column;
		gap: 40rpx;
		
	}
</style>