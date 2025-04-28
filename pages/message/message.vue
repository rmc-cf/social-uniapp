<template>
	<LifeTab :data="tabData" :curKey="curKey" @change-key="(key)=>curKey=key"></LifeTab>
	<view>
		<Base>
		message
		</Base>
	</view>
</template>

<script setup>
import { ref ,computed} from 'vue';

	
	const tabData = ref([{
			name: '好友',
			key: 'friends'
		},
		{
			name: '消息',
			key: 'messages'
		},
	])
	const curKey = ref(tabData.value[0].key || 'friends')
	// 动态计算当前组件
	const currentComponent = computed(() => {
		const target = tabData.value.find(item => item.key === curKey.value);
		return target?.component || null;
	});
</script>

<style>

</style>
