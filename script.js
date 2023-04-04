var app1 = new Vue({
	el: '#app1',
	data: {
		message1: 'message1',
		message2: 'message2',
	},

	noData: {
		message: 'This is not data',
	},
})

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
	},
})

var app3 = new Vue({
	el: '#app3',
	data: {
		seen: true,
	},
})

var app4 = new Vue({
	el: '#app4',
	data: {
		todos: [{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }],
	},
})
