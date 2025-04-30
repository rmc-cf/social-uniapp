<template>
	<view class="common-container">
		<Base>
		<uni-group title="时间排序" margin-top="0">
			<view  class="group">
				
			<MessageItem v-for="(item,index) in 10" :key="index"></MessageItem>
			</view>
		</uni-group>
		</Base>
	</view>
</template>

<script>
	export default {
		name:"MessageList",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.group{
		display: flex;
		flex-direction: column;
		gap:40rpx;
	}

</style>