<template>
	<view class="chat-detail" >
		<view style="z-index:2;position: fixed;left: 0;top:0;width:100%;height:100%;background: url(/static/bg.jpg) no-repeat;background-size: cover;"></view>
		<NavBar class="navbar">
			<template #center>
				活活
			</template>
			<template #right>
				<uni-icons type="more-filled"  color="#fff"></uni-icons>
			</template>
		</NavBar>
		<view class="chat-container" style="z-index:99;">
			123123sefsef
			123123sefsef
			123123sefsef
			123123sefsef
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.chat-detail {
		position: relative;
		background-color: antiquewhite;
		min-height: 110vh;

		.navbar {
			background-color: transparent;
			padding: 30rpx 10rpx;
			box-sizing: border-box;
		}

		.chat-container {
		}
	}
</style>