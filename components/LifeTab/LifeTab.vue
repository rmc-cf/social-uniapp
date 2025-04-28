<template>
	<view class="life-tab-container">
		<view @click="()=>emit('change-key',item.key)" class="item" v-for="(item,index) in data" :key="item" :class="{'active':item.key==curKey}">
			{{item.name}}
		</view>
	</view>
</template>

<script setup>
	const emit = defineEmits(['change-key'])
	defineProps({
		data:{
			type:Array
		},
		curKey:String
	})
</script>

<style lang="scss" scoped>
	.life-tab-container {
		position: fixed;
		padding: 30rpx;
		display: flex;
		align-items: center;
		gap: 40rpx;
		.item {
			transition: all 0.1s ease-in-out;
			&.active {
				font-size: 35rpx;
				font-weight: 800;
			}
		}
	}
</style>