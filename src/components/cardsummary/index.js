import { h, Component } from 'preact';
import style from './style';

const CardSummary = ({ post }) => {
  return (
    <div class={style.card}>
      <div class={style.top}>
        <img src="https://lorempixel.com/400/200/" />
      </div>
      <div class={style.bottom}>
        <div class={style.title}>
          <h3>{post.title}</h3>
        </div>
        <div class={style.summary}>
          {post.summary}
        </div>
        <div class={style.profile}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wooman_ballonicon2.svg.png" />
          <div class={style.description}>
            <div class={style.author}>
              {post.author}
            </div>
            <div class={style.date}>
              {post.postedAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSummary
