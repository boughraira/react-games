import styled from "styled-components";
import GameItem from "./GameItem";
import PropTypes from "prop-types";


const GameList = ({ games, sliceValue = games.length }) => {
  // by default we are going to display all the games fetched from api if not any slicevalue is mentioned
  const custom_games = [
    {
      id: 1,
      name: "Rally Racing",
      rating: 4,
      released: "1992-06-13",
      updated: "2023-08-30T16:12:38",
      background_image:
        "https://res.cloudinary.com/ray-cloud/image/upload/v1693491856/rally_racing_rsf87q.jpg",
      link: "https://cdn-factory.marketjs.com/en/rally-racing/index.html",
      author: "SRayen",
    },
    {
      id: 2,
      name: "Pinball Basketball",
      rating: 3,
      released: "2021-06-13",
      updated: "2022-08-30T16:12:38",
      background_image:
        "https://res.cloudinary.com/ray-cloud/image/upload/v1693491878/pinball_basketball_srqato.jpg",
      link: "https://cdn-factory.marketjs.com/en/pinball-basketball/index.html",
      author: "SRayen",
    },
    {
      id: 3,
      name: "Surfing Hero",
      rating: 5,
      released: "2023-06-13",
      updated: "2023-08-30T16:12:38",
      background_image:
        "https://res.cloudinary.com/ray-cloud/image/upload/v1693491868/surfing_hero_pikjqt.jpg",
      link: "https://cdn-factory.marketjs.com/en/surfing-hero/index.html",
      author: "SRayen",
    },
  ];
  return (
    <GameListWrapper>
      <div className="card-list">
        {custom_games.map((item) => (
          <GameItem key={item.id} gameItem={item} />
        ))}
      </div>
    </GameListWrapper>
  );
};

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number,
};

const GameListWrapper = styled.div``;
