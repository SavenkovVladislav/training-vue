new Vue({
	el: '#app1',
	data: {
		items: [
			{ id: 0, message: 'message1' },
			{ id: 1, message: 'message2' },
		],
	},
})

new Vue({
	el: '#app2',
	data: {
		parentMessage: 'Parent',
		items: [
			{ id: 0, message: 'message1' },
			{ id: 0, message: 'message2' },
			{ id: 0, message: 'message3' },
		],
	},
})

new Vue({
	el: '#app3',
	data: {
		object: {
			title: 'How to do lists in Vue',
			author: 'Jane Doe',
			publishedAt: '2016-04-10',
		},
	},
})
