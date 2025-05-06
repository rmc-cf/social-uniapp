<template>
	<Base>
	<view class="container">
		<StatusBar></StatusBar>
		<view class="container-box">

			<view class="main-container">
				<view class="block-container">
					<view class="block-item">

						<EventsBlock :item="events[0]"></EventsBlock>
					</view>
					<view class="block-item list">
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
			<OnlineFriends></OnlineFriends>
			<NotDevelop></NotDevelop>
		</view>
	</view>
	</Base>

</template>

<script setup>
	import {
		ref
	} from 'vue'
	const content = ref([{
			iconPath: '/static/image.png',
			selectedIconPath: '/static/image-active.png',
			text: '相册',
			active: false
		},
		{
			iconPath: '/static/home.png',
			selectedIconPath: '/static/home-active.png',
			text: '首页',
			active: false
		},
		{
			iconPath: '/static/star.png',
			selectedIconPath: '/static/star-active.png',
			text: '收藏',
			active: false
		}
	])
	const events = ref([{
			title: '遇见',
			desc: '还可以遇见',
			bgColor: 'linear-gradient(to right, rgb(251, 146, 60), rgb(251, 113, 133))',
			footerBg: '/static/icons/chat-bg.png',
			btn: {
				display: '去匹配',
				url: '/'
			}
		},
		{
			title: '遇见2',
			desc: '剩余5次',
			bgColor: 'linear-gradient(to right, rgb(253, 164, 175), rgb(244, 63, 94))',
			btn: {
				display: '匿名匹配',
				url: '/'
			}
		},
		{
			title: '遇见3',
			desc: '还可以遇见',
			bgColor: 'radial-gradient(at center bottom, rgb(253, 204, 175), rgb(253, 224, 71))',
			footerBg: '/static/icons/planet.png',
			btn: {
				display: '匿名匹配',
				url: '/'
			}

		},
		{
			title: '蒙面语音',
			desc: '剩余x次',
			bgColor: 'conic-gradient(at left center, rgb(56, 189, 248), rgb(30, 64, 175))',

		},
		{
			title: '谁是卧底',
			desc: '还可以遇见',
			bgColor: 'linear-gradient(rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))',
			footerBg: '/static/icons/reaction.png'
		},
		{
			title: '五子棋',
			footerBg: '/static/icons/gobang.png',
			bgColor: 'linear-gradient(to right, rgb(142, 212, 206), rgb(94, 234, 212))'
		}, {
			title: '唱歌听歌',
			footerBg: '/static/icons/sing.png',
			bgColor: 'conic-gradient(at right center, rgb(199, 210, 254), rgb(71, 85, 105), rgb(199, 210, 254))'
		},
	])
</script>

<style lang="scss" scoped>
	.container {
	
		padding: 20rpx;
		font-size: 14px;
		line-height: 24px;
		background: linear-gradient(to right, rgb(24, 167, 94), rgb(24, 177, 54));
		.container-box{
			display: flex;
			flex-direction: column;
			gap: 85rpx;
			.main-container {
				gap: 16rpx;
				display: flex;
				flex-direction: column;
			}
			
			.block-container {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 16rpx;
			
				.block-item {
					flex: 1
				}
			
				.list {
					display: flex;
					flex-direction: column;
					gap: 16rpx;
				}
			}
		}
	}
	

	
</style>