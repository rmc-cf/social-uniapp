<template>
	<view class="copy-btn" @click="action">
		复制
	</view>
</template>

<script setup>
	const props = defineProps({
		text:{
			type:String
		}
	})
	const action = ()=>{
	 uni.setClipboardData({
	    data: props.text,
	    success: () => {
	      uni.showToast({
	        title: '复制成功',
	        icon: 'none'
	      });
	    },
	    fail: () => {
	      uni.showToast({
	        title: '复制失败',
	        icon: 'none'
	      });
	    }
	  });
	}
</script>

<style lang="scss" scoped>
	.copy-btn{
		color: grey;
		font-size: 26rpx;
		background-color: gainsboro;
		padding: 6rpx 20rpx;
		border-radius: 50rpx;
		line-height: 40rpx;
		height: 44rpx;
	}

</style>