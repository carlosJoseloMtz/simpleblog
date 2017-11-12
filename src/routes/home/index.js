import { h, Component } from 'preact';
import style from './style';
import PostIndex from '../../components/postindex'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<br />
				<PostIndex />
			</div>
		);
	}
}
