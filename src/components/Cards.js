import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/minecraft-1.jpg'
              text='Explore a lively and unpredictable Overworld, with fun mobs, blocks, and  items. Make friends, craft tools, and build structures that age over time.
               Click on watch now to know how to get it for free for Windows(10+) and for Android'
              label='Sandbox'
              path='/games'
            />
            <CardItem
              src='images/genshin-2.jpg'
              text='Genshin Impact is an open-world action RPG. In the game, set forth on a journey across a fantasy world called Teyvat.'
              label='Action | Open World | Role Playing'
              path='/games'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/coc-1.jpg'
              text='Clash of Clans is an online strategy game in which players must build a community, fill up the storages, train troops, and raid other players’ villages to gather more elixir and gold.'
              label='Strategy'
              path='/games'
            />
            <CardItem
              src='images/brawl-1.jpg'
              text='Brawl Stars is a multiplayer online battle arena and third-person hero shooter video game developed and published by the Finnish video game company Supercell.'
              label='Battle-Arena'
              path='/about'
            />
            <CardItem
              src='images/bgmi-1.jpg'
              text=' Battlegrounds Mobile India (BGMI) is a version of PUBG Mobile, exclusively for players in India.'
              label='Battle-Royale'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;