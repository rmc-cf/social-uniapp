<template>
	<LifeTab  paddingX="30rpx"  paddingY="30rpx" bgColor="#fff" position="fixed" :data="tabData" :curKey="curKey" @change-key="(key)=>curKey=key">
		<template #right>
			<view class="right">
				<Status></Status>
			<image class="search" src="/static/icons/search.png"/>
			</view>
		</template>
	</LifeTab>
	<view>
		<view class="common-container">
			<Base>
			<uni-group title="时间排序" margin-top="2">
				<view  class="group">
					
				<MessageItem v-for="(item,index) in 10" :key="index"></MessageItem>
				</view>
			</uni-group>
			</Base>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
import { mesageTabList } from '../../data/message';


	const tabData = ref(mesageTabList)
	const curKey = ref(tabData.value[1].key || 'friends')
	// 动态计算当前组件
	const currentComponent = computed(() => {
		const target = tabData.value.find(item => item.key === curKey.value);
		return target?.component || null;
	});
</script>

<style lang="scss" scoped>
	.right{
		display: flex;
		align-items: center;
		gap: 40rpx;
		font-size: 30rpx;
		.online{
			display: flex;
			align-items: center;
			gap:8rpx
		}
	}
	.group{
		display: flex;
		flex-direction: column;
		gap:40rpx;
	}

</style>