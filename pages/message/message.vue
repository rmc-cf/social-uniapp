<template>
	<LifeTab paddingX="30rpx" paddingY="30rpx" bgColor="#fff" position="sticky" left="0" top="0" :data="tabData"
		:curKey="curKey" @change-key="(key)=>curKey=key">
		<template #right>
			<view class="right">
				<Status></Status>
				<image @click="goTo('/pages/search/search')" class="search" src="/static/icons/search.png" />
			</view>
		</template>
	</LifeTab>
	<component :is="currentComponent"></component>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		mesageTabList
	} from '../../data/message';
	import {
		goTo
	} from '../../utils';


	const tabData = ref(mesageTabList)
	const curKey = ref(tabData.value[1].key || 'friends')
	// 动态计算当前组件
	const currentComponent = computed(() => {
		const target = tabData.value.find(item => item.key === curKey.value);
		return target?.component || null;
	});
</script>

<style lang="scss" scoped>
	.right {
		display: flex;
		align-items: center;
		gap: 40rpx;
		font-size: 30rpx;

		.online {
			display: flex;
			align-items: center;
			gap: 8rpx
		}
	}
</style>