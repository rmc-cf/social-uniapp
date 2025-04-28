<template>
	<view class="container">
		<view class="block-container">
			<EventsBlock :item="events[0]"></EventsBlock>
			<view class="list" >
				<view v-for="(item,index) in events.slice(1,3)" :key="index">
					<EventsBlock :item="item"></EventsBlock>
				</view>
				
			</view>
		</view>
		<view class="block-container">
			<view v-for="(item,index) in events.slice(3)" :key="index">
				<EventsBlock :item="item"></EventsBlock>
			</view>

		</view>
	</view>
</template>

<script setup>
	import {ref}from 'vue'
	const events = ref([{
			title: '遇见',
			desc:'还可以遇见'
		},
		{
			title: '遇见2',
			desc:'剩余5次',
			bgColor:'linear-gradient(to right, rgb(253, 164, 175), rgb(244, 63, 94))',
			btn:{
				display:'匿名匹配',
				url:'/'
			}
		},
		{
			title: '遇见3',
		desc:'还可以遇见',
		bgColor:'radial-gradient(at center bottom, rgb(253, 204, 175), rgb(253, 224, 71))',
		footerBg:'/static/icons/planet.png'
		
		},
		{
			title: '遇见4',
			desc:'还可以遇见',
		},
		{
			title: '谁是卧底',
			desc:'还可以遇见',
			bgColor:'linear-gradient(rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))',
			footerBg:'/static/icons/reaction.png'
		},
		{
			title: '五子棋',
		},{
			title: '唱歌听歌',
			footerBg:'/static/icons/sing.png',
			bgColor:'conic-gradient(at right center, rgb(199, 210, 254), rgb(71, 85, 105), rgb(199, 210, 254))'
		},
	])
</script>

<style lang="scss">
	
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
		display: flex;
		flex-direction: column;
		gap:15rpx;
		.block-container {
			display: grid;
			grid-template-columns: repeat(2,1fr);
			gap: 16rpx;

			&>* {
				flex: 1
			}
			.list{
				display: flex;
				flex-direction: column;
				gap: 16rpx;
			}
		}
	}
</style>