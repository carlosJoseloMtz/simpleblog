import { h, Component } from 'preact';
import style from './style';
import CardSummary from '../cardsummary'

const MOCKED_POSTS = [
	{
		id: 'someid1',
		title: 'Some awesome story',
		summary: 'how I am wasting my time with this, but also loving it! :D',
		author: 'Juanito Perech',
		postedAt: 'Nov 12 2017'
	},
	{
		id: 'someid2',
		title: 'More awesome stuff here!! :D',
		summary: 'how I am wasting my time with this, but also loving it! :D',
		author: 'Caloch Matinech',
		postedAt: 'Nov 12 2017'
	},
	{
		id: 'someid3',
		title: 'Even more awesomeness',
		summary: 'how I am wasting my time with this, but also loving it! :D',
		author: 'Somebody elseee',
		postedAt: 'Nov 12 2017'
	}
]

export default class PostIndex extends Component {
	state = {
		posts: []
	}

	componentDidMount () {
		this.findPosts()
	}

	findPosts () {
		console.log('fetching the posts')
		this.setState({
			posts: MOCKED_POSTS
		})
	}

	render (_, { posts }) {

		return (
      <div>
				<div class={style.layer}>
					{
						posts.map(post => {
							return <div class={style.latest}>
									<CardSummary post={post} />
								</div>
						})
					}
				</div>
      </div>
		);
	}
}
