<template lang="pug">
transition(name="modal")
	.modal-mask
		.modal-wrapper
			.modal-container(:style="styleObject")
				.modal-header
					.modal-header-bg
						slot(name="head-bg")
					.modal-header-title
						span
							slot(name="header")
								| 选择科目
				.modal-body
					slot(name="body")
						| &nbsp;
				.modal-footer(flex="main:center cross:center")
					.btn(flex-box="1" flex="dir:top main:center cross=center" @click="handleClick")
						.btn-top(flex="main:center cross=center")
							span
								| 开始考试
					.btn(flex-box="1" flex="dir:top main:center cross=center")
						.btn-top-1(flex="main:center cross=center" @click="$emit('close')")
							span
								| 返回
</template>

<script>
export default {
    name: "modal",
    props: {
        color: {
            type: String,
            default: "#fa4d8d"
        }
    },
    data() {
        return {
            styleObject: {
                "border-color": this.color
            }
        }
    },
		methods:{
			handleClick(evt){
				this.$emit('click', evt)
			}
		}
}
</script>

<style scoped lang="stylus" src="~assets/components/modal.styl"></style>
