<template>
	<view class="life-main">
		<!-- avatar -->
		<view class="user-info">
			<image src="/static/uni.png" mode="widthFix" class="avatar" />
			<view class="user-desc">
				<view class="username">123123</view>
				<view class="tip">我就是我</view>
			</view>
		</view>
		<view class="content">
			<view class="content-text">
				123123123312
			</view>
			<view class="content-media">
				<view class="media-item">
					
					<image  src="/static/uni.png" mode="widthFix"/>
				</view>
				<view class="media-item">
					
					<image  src="/static/uni.png" mode="widthFix"/>
				</view>
				<view class="media-item">
					<image  src="/static/uni.png" mode="widthFix"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "LifeMainItem",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.life-main {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		padding:40rpx 0 ;
		.user-info{
			display: flex;
			gap: 20rpx;
			.avatar{
				width: 65rpx;
			}
			.tip{
				color:darkgray;
				font-size: 25rpx;
			}
		}
		.content{
			padding-left: 80rpx;
			display: flex;
			flex-direction: column;
			gap: 20rpx;
			.content-media{
				display: grid;
				grid-template-columns: repeat(3,1fr);
				gap: 30rpx;
				.media-item{
					width: 100%;
					height: 100%;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>