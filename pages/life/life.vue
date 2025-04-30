<template>
	<LifeTab  paddingX="30rpx"  paddingY="30rpx" position="sticky" left="0" top="0" bgColor="#fff" :data="tabData" :curKey="curKey" @change-key="(key)=>curKey=key"></LifeTab>
	<view class="common-container">
		<Base>
			<view  style="padding-top: 40rpx;">
				
		<component :is="currentComponent"></component>
			</view>
		</Base>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import LifeSquareContent from '@/components/LifeSquareContent/LifeSquareContent.vue';
	import LifeFollowContent from '@/components/LifeFollowContent/LifeFollowContent.vue';
	import LifeNewestContent from '@/components/LifeNewestContent/LifeNewestContent.vue';
	const tabData = ref([{
			name: '广场',
			key: 'square',
			component: LifeSquareContent
		},
		{
			name: '关注',
			key: 'follow',
			component: LifeFollowContent
		},
		{
			name: '最新',
			key: 'newest',
			component: LifeNewestContent
		}
	])
	const curKey = ref(tabData.value[0].key || 'square')
	// 动态计算当前组件
	const currentComponent = computed(() => {
		const target = tabData.value.find(item => item.key === curKey.value);
		return target?.component || null;
	});
</script>

<style lang="scss" scoped>
	.common-container{
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
</style>