Vue.component('blog-post', {
	props: ['post'],
	template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
			<button v-on:click="$emit('enlarge-text')">
				Увеличить размер текста
			</button>
      <div v-html="post.content"></div>
    </div>
  `,
})

new Vue({
	el: '#app2',
	data: {
		posts: [
			{ id: 0, title: 'title1' },
			{ id: 1, title: 'title2' },
			{ id: 2, title: 'title3' },
		],
		postFontSize: 1,
	},
})
