<template>
	<view class="life-main">
		<!-- avatar -->
		<view class="user-info">
			<image src="/static/uni.png" mode="aspectFit" class="avatar" />
			<view class="user-desc">
				<view class="username">123123</view>
				<view class="tip">我就是我</view>
			</view>
		</view>
		<view class="main">
			<view class="content">
				<view class="content-text">
					123123123312
				</view>
				<view class="content-media">
					<view class="media-item">

						<image src="/static/uni.png" mode="widthFix" />
					</view>
					<view class="media-item">

						<image src="/static/uni.png" mode="widthFix" />
					</view>
					<view class="media-item">
						<image src="/static/uni.png" mode="widthFix" />
					</view>
				</view>
			</view>
			<view class="actions">
				<view class="action-item" v-for="(item,index) in actions" :key="index">
					<uni-icons color="gray" @click="action(item)" size="24"
						:type="isClick&&item.activeIcon?item.activeIcon:item.icon"></uni-icons>
					<view class="num">{{item.num}}</view>
				</view>
			</view>
			<view v-if="true">
				<CommentList :data="commentData"></CommentList>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	const isClick = ref(false)
	const commentData = ref([{
		nickname: '213',
		content: '[图片]123123123'
	}])
	const actions = ref([{
		icon: 'fire',
		num: '1',
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
		num: '3'
	}, ])
	const action = (item) => {
		if (item.activeIcon) {
			isClick.value = !isClick.value
		} else {
			item.click()
		}
	}
</script>

<style lang="scss" scoped>
	.life-main {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		padding-bottom: 40rpx;

		.user-info {
			display: flex;
			gap: 20rpx;
			height: 65rpx;

			.avatar {
				width: 70rpx;
				height: 70rpx;
			}

			.user-desc {
				display: flex;
				flex-direction: column;
				gap: 8rpx;

				.username {
					line-height: 26rpx;
					font-size: 28rpx;
				}

				.tip {
					font-size: 24rpx;
					color: darkgray;
				}
			}
		}

		.main {
			padding-left: 88rpx;
			display: flex;
			flex-direction: column;
			gap: 20rpx;

			.content {
				display: flex;
				flex-direction: column;
				gap: 20rpx;

				.content-media {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 30rpx;

					.media-item {
						width: 100%;
						height: 100%;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}

			.actions {
				display: flex;
				align-items: center;
				gap: 120rpx;

				.action-item {
					display: flex;
					align-items: center;
					gap: 10rpx;

					.num {
						font-size: 30rpx;
						color: gray;
						line-height: 30rpx;
						height: 40rpx;
						font-weight: 300;
					}
				}
			}

		}
	}
</style>