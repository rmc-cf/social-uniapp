<template>
	<view class="online-container">
		<view class="head">
			<image class="head-icon" src="/static/uni.png"></image>
			<view>在线伙伴</view>
		</view>
		<view class="online-list">
			<OnlineItem v-for="(item ,index) in onlineList" :key="index" :item="item"></OnlineItem>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const onlineList  = ref([
		{
			user:{
				avatar:'/static/bg.jpg',
				nickname:'cfyyds',
				desc:'123123'
			},
			
		},
		{
			user:{
				avatar:'/static/bg.jpg',
				nickname:'cfyyds',
				desc:'123123'
			}
		},
		{
			user:{
				avatar:'/static/bg.jpg',
				nickname:'cfyyds',
				desc:'123123'
			}
		}
	])
	
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
		.online-list{
			display: flex;
			flex-direction: column;
			gap: 20rpx;
		}
	}

</style>