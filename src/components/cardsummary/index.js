import { h, Component } from 'preact';
import style from './style';

const postLink = post => {
  return '/posts/' + post.id
}

const CardSummary = ({ post }) => {
  return (
    <div class={style.card}>
      <div class={style.top}>
        <a href={postLink(post)}>
          <img src="https://lorempixel.com/400/200/" />
        </a>
      </div>
      <div class={style.bottom}>
        <div class={style.title}>
          <a href={postLink(post)}>
            <h3>{post.title}</h3>
          </a>
        </div>
        <div class={style.summary}>
          <a href={postLink(post)}>
            {post.summary}
          </a>
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
