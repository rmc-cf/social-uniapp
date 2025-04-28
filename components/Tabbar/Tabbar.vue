<template>
	<view class="tarbar-container">
		<view @click="goTo(item.url)" class="item"  v-for="(item,index) in list" :key="index">
			<uni-icons :size="24" :type="isCurrentPage(item.url)?item.activeIcon:item.icon" size="30"></uni-icons>
			<view class="title">{{item.title}}</view>
		</view>
		<view class="item">
			<image src="/static/logo.png" class="my-icon"/>
			<view class="title">我的</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { isCurrentPage } from '../../utils';
	const list = ref([
		{
			title:'遇见',
			icon:'fire',
			activeIcon:'fire-filled',
			url:'/pages/index/index'
		},{
			title:'动态',
			icon:'paperplane',
			activeIcon:'paperplane-filled',
			url:'/pages/life/life'
		},
		{
			title:'消息',
			icon:'chatbubble',
			activeIcon:'chatbubble-filled',
			url:'/pages/message/message'
		},
		
		
	])
	
	const goTo = (url)=>{
		if(isCurrentPage(url)) return 
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss" scoped>
	.tarbar-container{
		z-index: 99;
		background-color: white;
		position: fixed;
		bottom:20rpx;
		left: 20rpx;
		right: 20rpx;
		border-radius: 40rpx;
		padding: 16rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.item{
			flex:1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap:2rpx;
			.title{
				font-weight: 300;
				font-size: 22rpx;
			}
			.my-icon{
				width: 48rpx;
				height: 48rpx;
				border-radius: 100%;
			}
		}
	}

</style>