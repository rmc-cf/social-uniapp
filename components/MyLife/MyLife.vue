<template>
	<view>
			<LifeTimeline>
				<template #now>
					<view class="share-card">
						<view class="left">
							<image class="icon" src="/static/icons/share.png"></image>
							<view class="label">#今日心情预报</view>
						</view>
						<view class="btn">分享心情</view>
					</view>
				</template>
			</LifeTimeline>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const list2 = ref([{
		title: '买家下单',
		desc: '2018-11-11'
	}, {
		title: '卖家发货',
		desc: '2018-11-12'
	}])
</script>

<style lang="scss" scoped>
	.share-card{
		display: flex;
		align-items: center;
		justify-content: space-between;
		// 毛玻璃
		background: rgba( 255, 255, 255, 0.25 );
		backdrop-filter: blur( 0px );
		border-radius: 10px;
		border: 1px solid rgba( 255, 255, 255, 0.18 );

		border-radius: 25rpx;
		padding:  18rpx;
		.left{
			display: flex;
			align-items: center;
			gap: 20rpx;
			.icon{
				width:100rpx;
				height:100rpx;
			}
			.label{
					font-size: 30rpx;
					font-weight: 500;
			}
			
		}
		.btn{
			border-radius: 40rpx;
			color: #000;
			background-color: #fff;
			padding: 14rpx;
			font-size: 24rpx;
			font-weight: 800;
		}
	}

</style>