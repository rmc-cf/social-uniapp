<template>
	<view class="relation-item">
		<view class="info left">

			<image class="avatar" src="/static/bg.jpg"></image>
			<view class="nickname">cf</view>
		</view>
		<view class="info center">
			<template v-if="item"></template>
			<template v-else>
				<div class="no-relation">
					<uni-icons type="gift-filled"></uni-icons>
				</div>
				<view class="">虚位以待</view>
			</template>
		</view>
		<view class="info right">
			<template v-if="item">

				<image class="avatar" :src="item.avatar"></image>
				<view class="nickname">{{item.nickname}}</view>
			</template>
			<template v-else>
				<view class="avatar">
					<uni-icons size="30" color="pink" type="plusempty"></uni-icons>
				</view>
				<button class="invite-btn" type="warn">邀请</button>
			</template>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const item = ref()
</script>

<style lang="scss">
	.relation-item {
		padding: 40rpx 85rpx;
		// 毛玻璃
		background: rgba(255, 105, 180, 0.25);
		backdrop-filter: blur(0px);
		border-radius: 50px;

		display: flex;
		justify-content: space-between;

		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 14rpx;

			.avatar {
				border: 3px solid #fff;
				width: 120rpx;
				height: 120rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.nickname {
				color: #fff;
			}

			.invite-btn {
				height: 66rpx;
				line-height: 66rpx;
				border-radius: 50rpx;
				font-size: 32rpx;
			}
		}

		.no-relation {
			border: 3px solid darkslategray;
			background-color: black;
			border-radius: 100%;
			width: 90rpx;
			height: 90rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>