var app1 = new Vue({
	el: '#app1',
	data: {
		message: 'message',
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

app4.todos.push({ text: 'text4' })

var app5 = new Vue({
	el: '#app5',
	data: {
		message: 'Hello World',
	},
	methods: {
		reversMessage: function () {
			this.message = this.message.split('').reverse().join('')
		},
	},
})

var app6 = new Vue({
	el: '#app6',
	data: {
		message: 'Hello World',
	},
})

// APP7
// создаем компонент на подобии react и называем его todo-item
Vue.component('todo-item', {
	props: ['todo'], // объявляем пропс, в который потом будем кидать объект
	template: '<li>{{todo}}</li>', // template закладывает то, как будет отображаться компонент в html. Кладем в него объект todo из пропсов
})

var app7 = new Vue({
	el: '#app7',
	data: {
		groceryList: [
			{ id: 0, text: 'text1' },
			{ id: 1, text: 'text2' },
			{ id: 2, text: 'text3' },
		],
	},
})
