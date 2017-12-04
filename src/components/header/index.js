import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div class={style.title}>Blog</div>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
				</nav>
			</header>
		);
	}
}
