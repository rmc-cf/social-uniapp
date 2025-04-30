<template>
	<view class="comment-list">
		<view class="item" v-for="(item,index) in data" :key="index">
			<view class="nickname">{{item.nickname}}</view>
			<view class="content">:  {{item.content}}</view>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		data:{
			type:Array
		}
	})
</script>

<style scoped lang="scss">
	.comment-list{
		background: rgba( 223, 218, 218, 0.2 );
		backdrop-filter: blur( 10px );
		-webkit-backdrop-filter: blur( 10px );
		border-radius: 10px;
		padding: 16rpx 20rpx;
		.item{
			display: flex;
			align-items: center;
			gap: 8rpx;
			.nickname{
				color: dimgrey;
				font-weight: bold;
			}
			.content{
				color: dimgray;
				font-weight: 400;
			}
		}
	}
</style>