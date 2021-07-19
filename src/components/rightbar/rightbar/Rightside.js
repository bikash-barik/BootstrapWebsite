import styled from "styled-components";
import './sidebar.css'
const Rightside = (props) => {
  return (
    <Container>
      <FollowCards>
      <Title>
          <h1>Library Books</h1>
        </Title>
      </FollowCards>

      {/* <FollowCard> */}
        {/* <FeedList> */}
        <BannerCard>
        <img
          src="https://physicsworld.com/wp-content/uploads/2018/10/PWOct18REV-book-musts_1200.jpg"
          alt=""
        />
      </BannerCard>
      <BannerCard>
        <img
          src="https://ebookfriendly.com/wp-content/uploads/2020/10/Kindle-Unlimited-eligible-books-840x441.jpg"
          alt=""
        />
      </BannerCard>
        {/* </FeedList> */}
      {/* </FollowCard> */}
    </Container>
  );
};

const Container = styled.div`
  margin-top:20px;
  grid-area: rightside;
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
`;
const FollowCards = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color:#C12179;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;


const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 0px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  background-color:#C12179;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(255, 255, 255, 0.6);
`;

const FeedList = styled.ul`
  // margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

// const Avatar = styled.div`
//   background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 48px;
//   height: 48px;
//   margin-right: 8px;
// `;

// const Recommendation = styled.a`
//   color: #0a66c2;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
// `;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;
