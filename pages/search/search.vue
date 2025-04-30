<template>
	<view class="search-container">
		<uni-search-bar @confirm="search" cancelText="取消" placeholder="搜索昵称或者迷尘id"  v-model="searchValue"
		/>
			<view class="to-search" v-if="searchValue">
				<view class="icon">
				<uni-icons size="25" color="white" type="search"></uni-icons>
				</view>
				<view class="result">
					搜索：
					<view class="keyword">
						{{searchValue}}
					</view>
				</view>
				
			</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const searchValue = ref('')
	const search = (res) => {
		uni.showToast({
			title: '搜索：' + res.value,
			icon: 'none'
		})
	}

</script>

<style lang="scss" scoped>
	.search-container{
		display: flex;
		flex-direction: column;
		.to-search{
			padding: 30rpx;
			display: flex;
			align-items: center;
			gap:16rpx;
			.icon{
				width:67rpx;
				height: 67rpx;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: limegreen;
			}
			.result{
				display: flex;
				align-items: center;
				gap: 5rpx;
				.keyword{
					color: forestgreen;
					font-weight: 300;
				}
			}
		}
	}

</style>