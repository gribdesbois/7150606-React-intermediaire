import React from 'react'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.webp'
import Card from '../../components/Card'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'DevOp',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developer frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jane Biche',
    jobTitle: 'Developer fullstack',
    picture: DefaultPicture,
  },
]

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => {
          const { name, jobTitle, picture } = profile
          return (
            <Card
              key={`${name}-${index}`}
              label={jobTitle}
              picture={picture}
              title={name}
            />
          )
        })}
      </CardsContainer>
    </div>
  )
}

export default Freelances
