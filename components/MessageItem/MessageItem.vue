<template>
	<view class="message-item">
		<view class="left">
			<image src="/static/logo.png" class="avatar" />
			<view class="info">
				<view class="info-head">

					<view class="nickname">今天吃啥</view>
					<uni-tag style="font-size: 22rpx;" type="success" size="small" class="status" circle text="最近常聊"></uni-tag>
				</view>
				<view class="recent-msg">[表情]</view>
			</view>
		</view>
		<view class="right">
			<view class="datetime">昨天</view>
			<view class="origin">来自遇见</view>

		</view>
	</view>
</template>

<script setup>
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
					gap: 10rpx;

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