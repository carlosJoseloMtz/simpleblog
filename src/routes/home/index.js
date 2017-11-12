import { h, Component } from 'preact';
import style from './style';
import PostIndex from '../../components/postindex'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>simpleblog</h1>
				<p>This is your brand new blog!</p>
				<br />
				<PostIndex />
			</div>
		);
	}
}
