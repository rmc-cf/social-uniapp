<template>
	<view class="actions">
		<view class="action-item" v-for="(item,index) in data" :key="index">
			<uni-icons color="gray" @click="handleClick(item)" size="24"
				:type="item.type=='count'&&item.activeIcon&&isClick?item.activeIcon:item.icon"></uni-icons>
			<view class="num">{{item.num}}</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	defineProps({
		data: {
			type: Array
		}
	})
	const isClick=ref(false)
	const handleClick = (item)=>{
		if(item.type==='count'){
			isClick.value  = !isClick.value
			isClick.value?item.num++:item.num--
		}
		item.click()
	}
	
</script>

<style lang="scss" scoped>
	.actions {
		display: flex;
		align-items: center;
		gap: 120rpx;

		.action-item {
			display: flex;
			align-items: center;
			gap: 10rpx;

			.num {
				font-size: 30rpx;
				color: gray;
				line-height: 30rpx;
				height: 40rpx;
				font-weight: 300;
			}
		}
	}
</style>