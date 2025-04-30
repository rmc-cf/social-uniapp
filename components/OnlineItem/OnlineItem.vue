<template>
	<view class="online-item">
		<view class="user">
			<image class="avatar" :src="item.user.avatar"></image>
			<view class="info">
				<view class="nickname">{{item.user.nickname}}</view>
				<view class="desc">{{item.user.desc}}</view>
			</view>
		</view>
		<view class="btn">
			聊天
			<uni-icons type="right" color="#fff" size="12"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		item: {
			type: Object
		}
	})
</script>

<style lang="scss" scoped>
	.online-item {
		padding: 25rpx 20rpx;
		background: linear-gradient(to right, rgb(199, 210, 254), rgb(254, 202, 202), rgb(254, 249, 195));
		border-radius: 70rpx 20rpx 20rpx 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;

		.user {
			display: flex;
			align-items: center;
			gap: 20rpx;

			.avatar {
				width: 120rpx;
				height: 120rpx;
			}

			.info {
				.nickname {
					color: #001849;
					font-weight: 700;
				}

				.desc {
					margin-top: 10rpx;
					color: dimgray;
				}
			}
		}
		.btn{
			background-color: #000;
			color: #fff;
			border-radius: 50rpx;
			padding: 10rpx 25rpx;
		}
	}
</style>