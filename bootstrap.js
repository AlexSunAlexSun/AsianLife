// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'RiceGum and his career', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'An Asian',			// this is the AUTHOR place in the class
				'https://s-media-cache-ak0.pinimg.com/originals/1b/a6/a7/1ba6a7e51fa51bb02f6fcb9f4a2de289.jpg',	// this is the IMAGE place in the class
				'RiceGum is a youtuber famous for his outstanding...uh...I mean... garbage diss tracks and funny slideshows.' // this is the BODY place in the class
				),

			new Post(
				'His made funny slide shows to roast people',
				'https://www.youtube.com/watch?v=LZL3v9x7vpA',
				'Another Asian',
				'http://ytimg.googleusercontent.com/vi/nga1n0vhRNg/hqdefault.jpg', // this is a local image in the same folder as the js script
				'RiceGum spends most of his time roasting other famous youtubers and people on the internet, he made many funny slide shows.(the title is a link to a collection of his slideshows)'
				),

			new Post(
				'RiceGum makes diss tracks, tbh he is bad at it',
				'https://www.youtube.com/watch?v=VYScK5dlxGg',
				'Another Asian',
				'https://i.ytimg.com/vi/-LU0WZFeu0Y/0.jpg',
				'he used his distracks to...also roast(click title to see his roast video).'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://unsplash.it/200',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



