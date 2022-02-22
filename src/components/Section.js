import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section(props) {
  console.log(props)
  return (
    <Wrap bgImg={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Button>
          <Fade bottom>
        <ButtonGroup>
          {props.leftBtnText && <LeftButton>{props.leftBtnText}</LeftButton>}
          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </ButtonGroup>
        </Fade>
        {!props.last && (
          <DownArrow src='/images/down-arrow-removebg-preview.png' />
        )}
      </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  background-image: url('https://i.pinimg.com/originals/eb/c9/47/ebc9479ac2f5fafea4898bf78862c1bf.jpg');
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: not-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('${props.bgImg}')`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  border-radius: 100px;
  padding-top: 13px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  cursor: pointer;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`
const Button = styled.div``

const DownArrow = styled.img`
  margin: 20px auto 20px auto;
  height: 20px;
  width: 20px;
  animation: animateDown infinite 1.5s;
`
