<template lang="pug">
transition(name="modal")
	.modal-mask
		.modal-wrapper
			.modal-container(flex="dir:top main:center cross:center")
				.modal-header(flex-box="1" flex="dir:top main:center cross:center box:last")
					div(flex-box="6" flex="main:center cross:center box:last" style="height:100%;")
						.header-bg-top
							img(src="http://file.popoho.com/wzfzl/20160706/43zlmuwautqco140RR12527-18.jpg")
						.header-bg-bottom
					.modal-header-center(flex-box="5" flex="dir:left main:center cross:center")
						.modal-header-center-score(flex-box="2" flex="dir:top main:center cross:center")
							.modal-header-center-score-cricle(flex="dir:top main:center cross:center")
								.modal-header-center-score-cricle-top(flex-box="1" flex="main:center cross:center")
									span
										| 80
								.modal-header-center-score-cricle-center(flex="main:center")
								.modal-header-center-score-cricle-bottom(flex-box="1" flex="main:center cross:center")
									span
										| 分数
						.modal-header-center-answer(flex-box="1" flex="dir:top")
							.modal-header-center-answer-bg
								img(src="~static/img/fraction_bg.png")
							.modal-header-center-answer-info(flex="dir:left main:center cross:center")
								.modal-header-center-answer-info-totle(flex="dir:top main:center")
									span
										| 03
									span
										|	答题
								.modal-header-center-answer-info-right(flex="dir:top main:center")
									span
										| 45
									span
										|	答对
								.modal-header-center-answer-info-wrong(flex="dir:top main:center")
									span
										|	02
									span
										|	答错
					.modal-header-bottom(flex-box="1")
				div(flex-box="1" flex="main:center cross:center" style="background:#fff;width:100%;height:auto")
					.modal-body(flex-box="3" flex="main:center cross:center")
						slot(name="body")
							| &nbsp;
					.modal-footer(flex-box="1" flex="main:center cross:center")
						slot(name="footer")
							| &nbsp;
</template>

<script>
export default {
    name: "results",
    data() {
        return {
            styleObject: {
                "border-color": this.color
            }
        }
    }
}
</script>

<style media="screen" scoped lang="stylus" src="~assets/components/results.styl"></style>
