<template>
	<view class="status">
		<view class="circle"></view>
		<view class="label">在线</view>
		<uni-icons type="right" size="10"></uni-icons>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.status{
		display: flex;
		align-items: center;
		gap: 15rpx;
		background-color: rgba(212, 212, 212, 0.3);
		padding: 8rpx 20rpx;
		border-radius: 25rpx;
		.label{
			line-height: 42rpx;
			height: 48rpx;
		}
	}

</style>