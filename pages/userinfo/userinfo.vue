<template>
	<view class="userinfo-container">
		<ItemSection :data="infoItems"></ItemSection>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import UserAvatarVue from '../../components/UserAvatar/UserAvatar.vue';
	import CopyBtnVue from '../../components/CopyBtn/CopyBtn.vue';
	const id = ref('123132')
	const infoItems = ref([{
		items: [{
			title: '头像',
			replaceType: 0,
			replaceContent: UserAvatarVue
		}, {
			title: `迷尘ID：${id.value}`,
			replaceType: 1,
			replaceContent: CopyBtnVue,
			props: {
				text: id.value,
			}
		}, {
			title: '自我介绍',
			replaceContent: '我就是我，是颜色不一样的烟火',
			props: {
				text: id.value,
			}
		}, {
			title: '修改遇见登记卡',
		}, {
			title: '主页背景卡',
			replaceContent: 123,
			props: {
				text: id.value,
			}
		}, {
			title: '昵称',
			replaceContent: 'CFYYDS',
		}, {
			title: '生日',
			replaceContent: '2024-04-11',
		}, {
			title: '星座',
			replaceContent: '金牛做',
		}, {
			title: '不显示我的星座',
			replaceType: 1,
			replaceContent: CopyBtnVue,
			props: {
				text: id.value,
			}
		}]
	}])
</script>

<style lang="scss" scoped>
	.userinfo-container {
		padding: 30rpx;
	}
</style>