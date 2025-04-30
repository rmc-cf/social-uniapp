<template>
	<Base>
	<view class="my-container" style="background:url('/static/bg.jpg') no-repeat ;background-size:auto;">
		<view class="head">
			<view class="left">
				<view class="my-dress">
					<image class="icon" src="/static/icons/magic.png"></image>
					<view class="title">
						我的装扮
					</view>
				</view>

			</view>
			<view class="right">
				<uni-icons type="compose" color="#fff" size="26" @click="goTo('/pages/settings/settings')"></uni-icons>
				<uni-icons type="more-filled" color="#fff" size="26"
					@click="goTo('/pages/settings/settings')"></uni-icons>
			</view>
		</view>
		<view class="info">
			<image src="/static/bg.jpg" class="avatar"></image>
			<view class="user-desc">

				<view class="nickname">尘封</view>
				<view class="keyword">
					<view class="live-day">639天</view>
					<view class="uid">ID:33232</view>
				</view>
			</view>

		</view>
		<view class="content">
			<LifeTab  paddingY="30rpx"  :data="tabData" :curKey="curKey" @change-key="(key)=>curKey=key"></LifeTab>
			<component :is="currentComponent"></component>
		</view>
	</view>
	</Base>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		goTo
	} from '../../utils';
	import {
		myTabs
	} from '../../data/my';
	const tabData = ref(myTabs)
	const curKey = ref(tabData.value[1].key || 'life')
	// 动态计算当前组件
	const currentComponent = computed(() => {
		const target = tabData.value.find(item => item.key === curKey.value);
		return target?.component || null;
	});
</script>

<style lang="scss" scoped>
	.my-container {
		min-height: 100vh;
		padding: 25rpx var(--padding-x);
		color: #fff;

		.head {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				.my-dress {
					display: flex;
					align-items: center;
					gap: 20rpx;
					background-color: rgba(255, 255, 255, 0.3);
					padding: 5rpx 20rpx;
					border-radius: 50rpx;

					.icon {
						width: 40rpx;
						height: 40rpx;
					}

					.title {
						color: #fff;
						height: 60rpx;
						line-height: 50rpx;
						font-size: 30rpx
					}
				}
			}

			.right {
				display: flex;
				align-items: center;
				gap: 26rpx;
			}
		}

		.info {
			margin-top: 100rpx;

			.avatar {
				width: 170rpx;
				height: 170rpx;
				border-radius: 100%;
				border: 2px solid #fff;
			}

			.user-desc {
				margin-top: 20rpx;
				display: flex;
				flex-direction: column;

				.nickname {
					color: white;
					font-size: 48rpx;
				}

				.keyword {

					display: flex;
					align-items: center;
					gap: 15rpx;
					font-size: 30rpx;
				}
			}
		}

		.content {
			display: flex;
			flex-direction: column;
		}
	}
</style>