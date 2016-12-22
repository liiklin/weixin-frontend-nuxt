<template lang="pug">
.content
	.bg
		img(src="~static/img/exma_top.png")
	.top_header(flex="main:center cross:center box:mean")
		.top_left(flex-box="3" flex="dir:top main:center cross:center")
			span
				| 考试倒计时
			.time
				.time_bg
					img(src="~static/img/countdown_bg.png")
				.time_hour
					| 03
				.time_moment
					| 45
		.top_right(flex-box="2" flex="main:center cross:center")
			.cricle(flex="dir:top main:center cross:center")
				.cricle_top(flex-box="1" flex="main:center cross:center")
					span
						| 80
				.cricle_center(flex="main:center")
				.cricle_bottom(flex-box="1" flex="main:center cross:center")
					span
						| 分数
	.top_img
		img(src="~static/img/titlebg.png")
	.top_title
		span
			| 开始答题
	.content_center(flex="dir:top main:center cross:center")
		div
			span
				| 答题进度:
			span
				| &nbsp;&nbsp;5
			span
				| &nbsp;/&nbsp;20&nbsp;
	.subject
		div
			span
				| 题目五
		div
			span
				| 题目...
	.answer
		.answer_list
			i(class="iconfont icon-weibiaoti2")
			span
				| 答案1
		.answer_list.answer_list_active
			i(class="iconfont icon-yuanquangou")
			span
				| 答案2
		.answer_list
			i(class="iconfont icon-weibiaoti2")
			span
				| 答案3
		.answer_list
			i(class="iconfont icon-weibiaoti2")
			span
				| 答案4
	.bottom_group(flex="dir:top")
		div(flex="main:center cross:center")
			.btn(flex-box="1" flex="dir:top main:center cross=center" @click="finishedExam = true")
				.btn-top(flex="main:center cross=center")
					span
						| 下一题
			.btn(flex-box="1" flex="dir:top main:center cross=center")
				.btn-top-1(flex="main:center cross=center")
					span
						| 跳过
	.chance
		span
			| 还有三次跳过机会
	results(v-if="finishedExam" @close="finishedExam = false")
</template>

<script>
import Results from '../components/results.vue'

export default {
    components: {
        Results,
    },
    data() {
        return {
            finishedExam: false,
        }
    }
}
</script>

<style lang="stylus" src="~assets/pages/exam.styl"></style>
