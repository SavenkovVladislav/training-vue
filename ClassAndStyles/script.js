new Vue({
	el: '#app1',
	data: {
		triggerColorRed: true,
	},
})

new Vue({
	el: '#app2',
	data: {
		classObject: {
			colorRed: true,
			fs20: true,
		},
	},
})

new Vue({
	el: '#app3',
	data: {
		colorRed: true,
		error: false,
	},
	computed: {
		classObject: function () {
			return {
				colorRed: this.colorRed && !this.error,
			}
		},
	},
})

new Vue({
	el: '#app4',
	data: {
		colorClass: 'colorRed',
		fsClass: 'fs20',
	},
})
