<template>
	<view class="life-tab-container">
		<text @click="()=>emit('change-key',item.key)" class="item" v-for="(item,index) in data" :key="item" :class="{'active':item.key==curKey}">
			{{item.name}}
		</text>
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
		z-index: 99;
		position: fixed;
		padding: 30rpx;
		display: flex;
		align-items: center;
		gap: 40rpx;
		background-color: white;
		width: 100%;
		.item {
			transition: all 0.1s ease-in-out;
			&.active {
				font-size: 35rpx;
				font-weight: 800;
			}
		}
	}
</style>