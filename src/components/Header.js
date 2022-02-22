import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [burgerStat, setBurgerStat] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a href='#' target='_blank' rel='noopener noreferrer'>
        <img
          src='https://www.freepnglogos.com/uploads/tesla-logo-png-20.png'
          alt=''
        />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href="#" target='_blank'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
          <a href='#' target='_blank' rel='noopener noreferrer'>Shop</a>
          <a href='#' target='_blank' rel='noopener noreferrer'>Tesla Account</a>
          <CustomMenu onClick={() => {setBurgerStat(true)}}/>
      </RightMenu>
      <BurgerNav show={burgerStat}>
        <CloseWrapper>
          <CustomClose onClick={() => {setBurgerStat(false)}}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Cybertruck</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    max-height: 20px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media (max-width: 900px){
    display: none;
  }

`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  list-style: none;
  background: white;
  font-weight: 600;
  width: 300px;
  z-index: 10;
  padding: 20px 20px;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 15px;
  }

  a {
    padding: 15px 15px;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`