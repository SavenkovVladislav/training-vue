new Vue({
	el: '#app1',
	data: {
		message: 'Hello!',
	},

	//computed это вычисляемое свойство, которое зависит от своих реактивных зависимостей, в данном случае реактивной зависимостью является свойство message. Функция reverseMessage запустится только тогда, когда изменится message. Все это можно сделать и с помощью свойства methods, но суть в том, что функция внутри methods будет вызываться при каждом обращении к нему, а функция в computed только после изменения реактивных/ого свойств/а. Все это работает так, потому что вычисляемые свойства кешируются, основываясь на своих реактивных зависимостей.
	computed: {
		reverseMessage() {
			return this.message.split('').reverse().join('')
		},
	},
})
// еще один пример
new Vue({
	el: '#app2',
	data: {
		firstName: 'Foo',
		lastName: 'Bar',
	},
	computed: {
		fullName: function () {
			return this.firstName + ' ' + this.lastName
		},
	},
})
