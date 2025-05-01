<template>
	<view class="item" :style="`background:${item.bgColor}`">
		<view class="head">
			<view class="title">
				<view class="char-box" v-for="(char, index) in item.title" :key="index">
					<view class="circle-bg">
						<text class="char-text">{{ char }}</text>
					</view>
				</view>
			</view>
			<view class="desc">{{item.desc}}</view>
		</view>
		<view class="btn">{{item?.btn?.display}} -></view>
		<image class="footerBg" :src="item.footerBg" mode="aspectFit" />
	</view>
</template>

<script setup>
	defineProps({
		item: {
			type: Object
		}
	})
</script>

<style lang="scss">
	.item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 20rpx;
		padding: 14rpx;
		min-height: 90rpx;
		height: 100%;
		box-sizing: border-box;
		.head {
			.title {
				font-weight: 800;
				font-size: 33rpx;
				display: inline-flex;

				.char-box {
					position: relative;
					/* 字间距 */
				}

				.circle-bg {
					width: 48rpx;
					/* 圆圈大小 */
					height: 48rpx;
					background-color: #fff;
					/* 圆圈背景色（示例红色） */
					border-radius: 80% 60%   80% 60%;
					display: flex;
					justify-content: center;
					align-items: center;
					
				}

			}

			.desc {
				color: #fff;
				font-size: 18rpx;
			}
		}

		.btn {
			align-self: start;
			color: #fff;
			background-color: #000;
			border-radius: 230rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 20rpx;
			padding: 10rpx;
			font-size: 20rpx;
		}

		.footerBg {
			position: absolute;
			right: 12rpx;
			bottom: 12rpx;
			width:30%;
			height: 60%;
			object-fit: cover;
		}
	}
</style>