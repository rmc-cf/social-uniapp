<template>
	<view class="comment-list">
		<template v-if="!data.length">
			no data...
		</template>
		<template v-else>
			<view class="item" v-for="(item,index) in data.slice(0,2)" :key="index">
				<view class="nickname">{{item.nickname}}</view>
				<view class="content">: {{item.content}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		data: {
			type: Array
		}
	})
</script>

<style scoped lang="scss">
	.comment-list {
		background: rgba(223, 218, 218, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 10px;
		padding: 16rpx 20rpx;
		display: flex;
		flex-direction: column;
		gap: 3px;

		.item {
			display: flex;
			align-items: center;
			gap: 8rpx;
			font-size: 30rpx;
			.nickname {
				color: dimgrey;
				font-weight: bold;
			}

			.content {
				color: dimgray;
				font-weight: 400;
			}
		}
	}
</style>