<template>
	<StatusBar type="status"></StatusBar>
	<LifeTab paddingX="30rpx" paddingY="30rpx" position="sticky" left="0" top="0" bgColor="#fff" :data="tabData"
		:curKey="curKey" @change-key="(key)=>curKey=key"></LifeTab>
	<view class="common-container">
		<Base>
		<view style="padding-top: 40rpx;">

			<LifeSquareContent v-if="curKey=='square'"></LifeSquareContent>
			<LifeFollowContent v-else-if="curKey=='follow'"></LifeFollowContent>
			<LifeNewestContent v-else-if="curKey=='newest'"></LifeNewestContent>
		</view>
		</Base>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	const tabData = ref([{
			name: '广场',
			key: 'square',
		},
		{
			name: '关注',
			key: 'follow',
		},
		{
			name: '最新',
			key: 'newest',
		}
	])
	const curKey = ref(tabData.value[0].key || 'square')
</script>

<style lang="scss" scoped>
	.common-container {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
</style>