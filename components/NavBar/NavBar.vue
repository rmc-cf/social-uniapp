<template>
	<view class="navbar">
		<view class="left">
			<uni-icons size="25" type="left" @click="goBack"></uni-icons>
			<slot name="left"></slot>
		</view>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</view>
</template>

<script setup>
	import {
		fromNow,
		goBack
	} from '../../utils';
</script>

<style lang="scss" scoped>
	.navbar {
		z-index: 99;
		position: sticky;
		left: 0;
		top: 0;
		width: 100%;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 6rpx;

		.left {
			display: flex;
			align-items: center;
		}
	}
</style>