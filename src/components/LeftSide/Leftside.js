import styled from "styled-components";
const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome {props.user ? props.user.displayName:"there" }!
             </Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
      <CommunityCard>

        <Widget>
          <a>
            <div>
              <span>Top Research Articles</span>
            </div>
          </a>
        </Widget>
        <Item>
          <a>
            <div>
            <img src="https://assets.hongkiat.com/uploads/20-best-websites-to-download-free-e-books/baen-books.jpg" alt="" />
            </div>
          </a>
         
         </Item>
       
         <Widget1>
           <a>
          <span>
          Show More Articles
          </span>
          <img src="https://img.icons8.com/ios-filled/30/ffffff/double-down.png"/>
          </a>
          </Widget1>
        </CommunityCard>
      <CommunityCard>
      <Widget>
          <a>
            <div>
              <span>Write A Research Paper</span>
            </div>
            <img src="https://img.icons8.com/ios-filled/30/ffffff/paper.png"/>
          </a>
        </Widget>
        <Item>
          <span>
            <img src="https://www.wpbeginner.com/wp-content/uploads/2020/01/graphicsprings-created-logo.png" alt="" />
          </span>
        </Item>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  margin-top:20px;
  grid-area: leftside;
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  // background: url("/images/card-bg.svg");
  background-color: #C12179;
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("https://img.icons8.com/ios/50/fa314a/user-male-circle.png");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color:#C12179;
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;


    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 20px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Widget1 = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color:#fff;
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;


    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        font-size: 40px;
        text-align: center;
        line-height: 1.333;
        &:first-child {
          color: rgba(255, 255, 255, 0.6);
        }
        &:nth-child(2) {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

 
`;

const CommunityCard = styled(ArtCard)`
  // padding: 8px 0 0;
  // text-align: left;
  // display: flex;
  // flex-direction: column;
  // a {
  //   color: black;
  //   padding: 4px 12px 4px 12px;
  //   font-size: 12px;

  

  //   span {
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //   }

  //   &:last-child {
  //     color: rgba(0, 0, 0, 0.6);
  //     text-decoration: none;

  //     border-top: 1px solid #d6cec2;
  //     padding: 12px;
     
  //   }
  // }
`;



export default Leftside;
