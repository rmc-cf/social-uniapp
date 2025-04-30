<template>
	<view class="square-container">
		<LifeMainItem v-for="(item,index) in data" :key="index" :item="item"></LifeMainItem>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const data = ref([{
		avatar: '/static/uni.png',
		nickname: 'cfyyds',
		contentText:'123',
		contentMedia:[
			{url:'/static/uni.png'},
			{url:'/static/uni.png'},
			{url:'/static/uni.png'},
		],
		comments: [{
			nickname: '213',
			content: '[图片]123123123',
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}]

	},{
		avatar: '/static/uni.png',
		nickname: 'cfyyds',
		contentMedia:[],
		comments: [{
			nickname: '213',
			content: '[图片]123123123',
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}]

	},{
		avatar: '/static/uni.png',
		nickname: 'cfyyds',
		contentMedia:[],
		comments: [{
			nickname: '213',
			content: '[图片]123123123',
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}, {
			nickname: '213',
			content: '[图片]123123123'
		}]

	}])
</script>

<style lang="scss" scoped>
	.square-container {
		display: flex;
		flex-direction: column;
	}
</style>