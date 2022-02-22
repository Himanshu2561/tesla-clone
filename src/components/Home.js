import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
        backgroundImg='https://wallpaperaccess.com/full/486595.jpg'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
        backgroundImg='https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/10/25/tesla-model-s_feature.jpg'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
        backgroundImg='https://cutewallpaper.org/21/tesla-hd/Download-wallpaper-1920x1080-tesla-model-s-tesla-model-s-.jpg'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        leftBtnText='CUSTOM ORDER'
        rightBtnText='EXISTING INVENTORY'
        backgroundImg='https://images2.alphacoders.com/942/942549.jpg'
      />
      <Section
        title='Lowest Cost Solar Panels'
        description='Go Green'
        leftBtnText='ORDER now'
        rightBtnText='learn more'
        backgroundImg='https://www.aurorasolar.com/wp-content/uploads/2021/02/solar-panels-header.png'
      />
      <Section
        title='Solar for Roofs'
        description='Costs Less Than A New Roof'
        leftBtnText='ORDER now'
        rightBtnText='learn more'
        backgroundImg='https://www.dynamicslr.com/wp-content/uploads/2020/10/solar-panel-efficiency.jpg'
      />
      <Section
        title='Accessories'
        description=''
        leftBtnText='Shop Now'
        backgroundImg='https://cdnb.artstation.com/p/assets/images/images/023/457/557/large/radomir-zhuravlev-earphones-v2-black.jpg?1579263671'
        last
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
