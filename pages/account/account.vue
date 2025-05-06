<template>
	<view class="account-container">
		<view class="app-info">
			<image class="logo" src="/static/logo.png"></image>
			<view class="app-name">火花Chat</view>
			<view>擦出不一样的火花</view>
		</view>
		<view class="curPhone">
			18877*****123
		</view>
		<view class="btns">
			<button class="one-btn">本机号码一键登录</button>
			<button class="other-number-btn">其他手机号码登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.account-container {
		min-height: 90vh;
		background-color: orangered;
		padding: 120rpx 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;
		.app-info{
			display: flex ;
			flex-direction: column;
			align-items: center;
			.logo{
				background-color: #fff;
				padding: 28rpx;
				border-radius: 30rpx;
				width: 140rpx;
				height: 140rpx;
			}
			.app-name{
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				font-weight: bold;
				font-size: 50rpx;
			}
		}
		.curPhone{
			margin-top: 120rpx;
			margin-bottom: 40rpx;
			font-weight: 500;
			font-size: 36rpx;
		}
		.btns {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 20rpx;

			.other-number-btn,
			.one-btn {
				width: 100%;
				color: #fff;
				border-radius: 20rpx;
			}

			.one-btn {
				border: 4rpx solid transparent;
				background-color: #000;
			}

			.other-number-btn {
				border: 4rpx solid #fff;
				background: transparent;
			}
		}
	}
</style>