<template>
	<view class="settings-container">
		<view class="section" v-for="(item,index) in settings" :key="index">
			<view class="section-item" v-for="(child,i) in item.items" :key="i">
				<view class="title">{{child.title}}</view>
				<uni-icons type="right"></uni-icons>
			</view>
		</view>
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
		.section {
			padding: 30rpx 20rpx;
			background-color: white;
			border-radius: 20rpx;
			display: flex;
			flex-direction: column;
			gap: 55rpx;
			.section-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>