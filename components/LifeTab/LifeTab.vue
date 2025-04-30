<template>
	<view class="life-tab-container" :style="`background-color:${bgColor};position:${position};padding:${paddingY} ${paddingX};top:${top};
	left:${left};
	`">
		<view class="left">

			<text @click="()=>emit('change-key',item.key)" class="item" v-for="(item,index) in data" :key="item"
				:class="{'active':item.key==curKey}">
				{{item.name}}
			</text>
		</view>
		<view class="right">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(['change-key'])
	defineProps({
		data: {
			type: Array
		},
		curKey: String,
		bgColor:{
			type:String,
			default:'transparent'
			},
			position:{
				type:String
			},
			left:{
				type:String
			},
			top:{
				type:String
			},
			paddingX:{
				type:String,
				default:'0'
			},
			paddingY:{
				type:String,
				default:'0'
			}
	})
</script>

<style lang="scss" scoped>
	.life-tab-container {
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: transparent;
		width: 100%;
		box-sizing: border-box;
		.left {
			display: flex;
			align-items: center;
			gap: 40rpx;

			.item {
				transition: all 0.1s ease-in-out;

				&.active {
					font-size: 36rpx;
					font-weight: 800;
					position: relative;
				}
				&.active::after{
					content:'';
					z-index: -1;
					background-color:red;
					width: 42rpx;
					height: 20rpx;
					position: absolute;
					right:0;
					bottom:0;
					transform: rotate(-10deg);
				}
			}
		}
	
		.right{
		}
	}
</style>