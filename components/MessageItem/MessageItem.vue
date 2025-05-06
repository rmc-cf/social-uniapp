<template>
	<view class="message-item" @click="goTo('/pages/chat-detail/chat-detail')">
		<view class="left">
			<image :src="item.to.avatar" class="avatar" />
			<view class="info">
				<view class="info-head">

					<view class="nickname">{{item.to.nickname}}</view>
					<uni-tag  type="success" size="small" class="status" circle text="最近常聊"></uni-tag>
				</view>
				<view class="recent-msg">{{item.content}}</view>
			</view>
		</view>
		<view class="right">
			<view class="datetime">昨天</view>
			<view class="origin">来自遇见</view>

		</view>
	</view>
</template>

<script setup>
import { goTo } from '../../utils';
defineProps({
	item:{
		type:Object
	}
})
</script>

<style lang="scss" scoped>
	.message-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			display: flex;
			gap: 20rpx;

			.avatar {
				width: 85rpx;
				height: 85rpx;
				border-radius: 100%;
			}

			.info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			gap: 12rpx;
				.info-head {
					display: flex;
					align-items: center;
					gap: 18rpx;

					.nickname {
						font-weight: 500;
						font-size: 30rpx;
					}

					.status {}
				}

				.recent-msg {
					color: darkgray;
					font-size: 25rpx;
				}
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: end;
			gap: 12rpx;
			font-size: 26rpx;
			.datetime{
				color: darkgray;
			}
			.origin{
				color: darkgray;
			}
		}
	}
</style>