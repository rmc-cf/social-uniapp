<template>
	<view class="online-container">
		<view class="head">
			<image class="head-icon" src="/static/uni.png"></image>
			<view>在线伙伴</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"OnlineFriends",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.online-container{
		display: flex;
		flex-direction: column;
		gap:20rpx;
		.head{
			display: flex;
			gap:6rpx;
			align-items: center;
			.head-icon{
				width: 55rpx;
				height: 55rpx;
			}
		}
	}

</style>