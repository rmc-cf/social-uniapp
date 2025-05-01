<template>
	<view class="status-bar" :style="`height:${type=='status'?statusHeight:stickyHeight}px;`">
		
	</view>
</template>

<script setup>
import { stickyHeight,statusHeight } from '../../utils';
defineProps({
	type:{
		type:String
	}
})
</script>

<style lang="scss" scoped>
</style>