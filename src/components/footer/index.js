import { h, Component } from 'preact';
import style from './style';

const Footer = _ => {
  return (
    <footer class={style.footer}>
      Thanks for visting us<br/>
      For any kind of contact, write us at <a href="mailto:xxx@some.com">xxx@some.com</a>
    </footer>
  )
}

export default Footer
