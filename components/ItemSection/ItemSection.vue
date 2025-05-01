<template>
	<view class="section" v-for="(item,index) in data" :key="index">
		<view class="section-item" v-for="(child,i) in item.items" :key="i">
			<view class="title">{{child.title}}</view>
			<view class="right">
				<template v-if="child.replaceContent">
					<UserAvatar v-if="child.replaceContent=='avatar'" v-bind="child.props" ></UserAvatar>

					<CopyBtn  v-if="child.replaceContent=='copy'" v-bind="child.props" ></CopyBtn>
					<!-- 如果不是组件，直接显示内容 -->
					<view v-else-if="child.replaceContent==='pure'" class="simple-content">
						{{ child.replaceContent }}
					</view>
				</template>
				<template v-if="child.replaceType!==1">
					<uni-icons type="right"></uni-icons>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		data: {
			type: Array
		}
	})
	// 判断是否是 Vue 组件
	const isVueComponent = (comp) => {
		return (
			typeof comp === 'function' || // 函数式组件
			(typeof comp === 'object' && comp.template) || // 带 template 的组件
			(typeof comp === 'object' && comp.render) // 带 render 函数的组件
		);
	};
</script>

<style lang="scss" scoped>
	.section {
		padding: 30rpx 20rpx;
		background-color: white;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		gap: 55rpx;

		.section-item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.right {
				display: flex;
				align-items: center;
				gap: 20rpx;

				.simple-content {
					font-size: 28rpx;
					line-clamp: 1;
					max-width: 400rpx;
					white-space: nowrap;
					/* 禁止换行 */
					overflow: hidden;
					/* 隐藏超出部分 */
					text-overflow: ellipsis;
					/* 显示省略号 */
				}
			}
		}
	}
</style>