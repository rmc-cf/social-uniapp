<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import '@/styles/variables.scss';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	.common-container {
		padding: 100rpx 0;
	}
	.search{
		width: 50rpx;
		height: 50rpx;
	}
	.circle{
		width: 18rpx;
		height: 18rpx;
		border-radius: 100%;
		background-color: limegreen;
	}
	.icon{
		width: 65rpx;
		height: 65rpx;
	}
</style>
