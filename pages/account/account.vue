<template>
		<view class="help">帮助反馈</view>
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
		<view class="">
			<checkbox-group @change="isAccept=!isAccept">
				<label class="agreement">
					<checkbox :checked="isAccept" color="#000" style="transform:scale(0.7);" />
					<view>
						我已阅读并同意用户协议及隐私政策以及中国联通认证服务协议
					</view>
				</label>
			</checkbox-group>

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const isAccept = ref(false)
</script>

<style lang="scss" scoped>
	.help{
		position: absolute;
		right: 30rpx;
		top: 40rpx;
		color: #d0d0d0;
	}
	.account-container {
		min-height: 80vh;
		background-color: orangered;
		padding: 120rpx 50rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fff;

		.app-info {
			display: flex;
			flex-direction: column;
			align-items: center;

			.logo {
				background-color: #fff;
				padding: 28rpx;
				border-radius: 30rpx;
				width: 140rpx;
				height: 140rpx;
			}

			.app-name {
				margin-top: 20rpx;
				margin-bottom: 10rpx;
				font-weight: bold;
				font-size: 50rpx;
			}
		}

		.curPhone {
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
				border-radius: 40rpx;
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

		.agreement {
			margin-top: 30rpx;
			display: flex;
			gap: 5rpx;
			text-align: center;
		}
	}
</style>