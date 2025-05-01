<template>
		<StatusBar></StatusBar>
	<Base>
	<MessageList v-if="curKey=='messages'"></MessageList>
	</Base>
	
	<!-- <component :is="currentComponent"></component> -->
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