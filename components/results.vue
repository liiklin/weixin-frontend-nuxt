<template lang="pug">
transition(name="modal")
	.modal-mask
		.modal-wrapper
			.modal-container(flex="dir:top main:center cross:center")
				.modal-header(flex-box="4" flex="dir:top main:center cross:center box:last")
					div(flex-box="4")
						span
							| 123
					div(flex-box="5")
						span
							| 321
					.modal-header-bottom(flex-box="1")
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
