<template>
		<StatusBar></StatusBar>
	<Base>
	<MessageList v-if="curKey=='messages'" :data="messageList"></MessageList>
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
   import { onPullDownRefresh , onReachBottom } from "@dcloudio/uni-app"

	const tabData = ref(mesageTabList)
	const curKey = ref(tabData.value[1].key || 'friends')
	const messageList = ref([
		{
			to:{
				avatar:'/static/logo.png',
				nickname:'cf'
			},
			content:'123123'
		},	{
			to:{
				avatar:'/static/logo.png',
				nickname:'cf'
			},
			content:'123123'
		}	,{
			to:{
				avatar:'/static/logo.png',
				nickname:'cf'
			},
			content:'123123'
		},	{
			to:{
				avatar:'/static/logo.png',
				nickname:'cf'
			},
			content:'123123'
		}
	])
	 onPullDownRefresh(() => {
	        console.log("下拉刷新")
	    })
	    onReachBottom(() => {
	        console.log("上拉加载更多")
	    })
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