<template>
	<view class="life-main">
		<!-- avatar -->
		<view class="user-info">
			<image :src="item.avatar" mode="aspectFit" class="avatar" />
			<view class="user-desc">
				<view class="username">{{item.nickname}}</view>
				<view class="tip">我就是我</view>
			</view>
		</view>
		<view class="main">
			<view class="content">
				<view class="content-text">
					{{item.contentText}}
				</view>
				<view class="content-media" v-if="item?.contentMedia?.length">
					<view class="media-item" v-for="(media,index) in item.contentMedia" :key="index">
							<image @click="previewImage(item.contentMedia,media.url)" :src="media.url" mode="widthFix" />
					</view>
				</view>
			</view>
			<LifeActions :data="actions"></LifeActions>
			<template v-if="true" >
				<CommentList @click="goTo('/pages/life-detail/life-detail')" :data="item.comments"></CommentList>
			</template>
		</view>
	</view>
</template>

<script setup>
	
	import {
		ref
	} from 'vue';
import { goTo, previewImage } from '../../utils';
	const isClick = ref(false)
	defineProps({
		item: {
			type: Object
		}
	})
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
			url: '/pages/life-detail/life-detail'
		})
	}, {
		icon: 'fire',
		activeIcon: 'fire-filled',
		type: 'count',
		num: '3'
	}, ])
	const action = (item) => {
		if (item?.click) {
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


		}
	}
</style>