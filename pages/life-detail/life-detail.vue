<template>
	<NavBar>
		<template #left>
			<image class="avatar" src="/static/bg.jpg"></image>
			<view class="user-desc">
				<view class="nickname">cfyyds</view>
				<view class="date">{{fromNow('2025-4-28')}}</view>
			</view>
		</template>
	</NavBar>

	<view class="life-detail">
		<LifeFull></LifeFull>
		<view class="comment-full">
			<view class="head">
				评论 32
			</view>
			<view class="comment-item" v-for="(item,index) in 5" :key="index">
				123
			</view>
		</view>
	</view>
</template>

<script setup>

import { fromNow } from '../../utils';
</script>

<style lang="scss" scoped>
	.avatar {
		margin-left: 20rpx;
		width: 90rpx;
		height: 90rpx;
	}

	.user-desc {
		margin-left: 18rpx;
		display: flex;
		flex-direction: column;
		gap: 10rpx;

		.nickname {
			font-size: 36rpx;
			font-weight: 500;
		}

		.date {
			font-size: 26rpx;
			color: darkgray;
		}
	}

	.life-detail {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
	}

	.comment-full {
		padding: 20rpx;
		background-color: #fff;
	}
</style>