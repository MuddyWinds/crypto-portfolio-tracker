import React from 'react'

function Promos() {
  return (
    <Wrapper>
        <OfferCard>
            <Title>Yield earned</Title>
        </OfferCard>

        <OfferCard>
            <Title>Learn and Earn</Title>
        </OfferCard>
    </Wrapper>
  )
}

export default Promos;

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-right: 1rem;
`

const OfferCard = styled.div`
    width: 21rem;
    height: 11rem;
    border: 1px solid #282b2f;
    margin-bottom: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`

const Description = styled.div`
    font-size: 1.1rem;
`

const Placeholder = styled.div`
    flex: 1;
`

const Additional = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        color: #8a919e;
        font-size: 1rem;
    }
`