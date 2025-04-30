<template>
	<view class="space-timeline">
		<view class="item" v-for="(item,index) in 6" :key="index">
			<view class="content-item">
				<view class="time">
					<view class="date">{{date}}</view>
					<view class="month">{{month}}月</view>
				</view>
				<view class="content">
					<template v-if="index===0">

						<slot name="now"></slot>
					</template>
					<template v-else>
						123213
					</template>
				</view>
			</view>
			<view class="line"></view>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue';

	const props = defineProps({
		datetime: {
			type: String,
			default () {
				const now = new Date()
				return now.getMonth() + 1 + '-' + now.getDate()
			}
		},
	})
	const month = computed(() => props.datetime?.split('-')[0])
	const date = computed(() => props.datetime?.split('-')[1])
</script>

<style lang="scss" scoped>
	.space-timeline {
		display: flex;
		flex-direction: column;
		gap: 5rpx;

		.item {
			display: flex;
			flex-direction: column;
			gap: 15rpx;

			.content-item {
				display: flex;
				gap: 50rpx;

				.time {
					display: flex;
					flex-direction: column;
					align-items: center;

					.date {
						font-size: 60rpx;
					}

					.month {
						font-size: 30rpx;
					}
				}

				.content {
					flex:1;
					padding-top: 20rpx;
				}
			}
		}

		.line {
			margin-left: 30rpx;
			height: 96rpx;
			width: 4rpx;
			background-color: darkgray;
		}
	}
</style>