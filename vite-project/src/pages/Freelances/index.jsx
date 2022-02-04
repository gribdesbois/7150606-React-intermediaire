import React from 'react'
import DefaultPicture from '../../assets/profile.webp'
import Card from '../../components/Card'

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
    </div>
  )
}

export default Freelances
