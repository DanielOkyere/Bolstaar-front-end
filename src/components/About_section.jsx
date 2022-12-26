import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { aboutHighlights } from './About_section.data'

function AboutSection () {
  return (
    <>
      <div className='about-section'>
        <Container>
          <div className='row gt-4 about-content'>
            <div className='col-sm-12 col-md-5 text-white'>
              <h2 className='about-h1'>About Bolstaar</h2>
              <p className='about-p m-1 mb-3'>
                Bolstaar is an agricultural technology integration platform that
                enables smallholder farmers to access workable technologies and
                techniques to scale-up and make substantial profit.
              </p>
              <p className='about-p m-1'>
                The platform also provides supply chain information and links
                farmers to superior markets. Our platform is created with the
                desire to solve smallholder farmers’ three biggest problems:
                Lack of access to quality farm resources, goods low in quality
                and quantity, and market access.
              </p>
              <Link className='btn btn-white about-btn' to='/about'>
                Read More
              </Link>
            </div>
            <div className='row col about_highlights'>
              {/* <div className=""> */}
              {aboutHighlights.map((highlight) => (
                <HighlightCard {...highlight} key={highlight.title} />
              ))}
              {/* </div> */}
            </div>
          </div>
        </Container>
      </div>
      <div className='banner'>
        <Container>
          <h1>Bolstaar is providing better agricultural solutions</h1>
          <div className='buttons'>
            <Link className='btn btn-white' to='/about'>
              Read More
            </Link>
            <Link className='btn btn-primary' to='/signup/main'>
              Sign up
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

const HighlightCardRoot = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: 40px;
  border-radius: 8px;

  background: white;

  .icon {
    --side: 104px;
    width: var(--side);
    height: var(--side);

    display: grid;
    place-content: center;
    padding: 24px;
    margin-bottom: 16px;
    border-radius: 50%;

    background: #409c3e;
  }

  .title {
    color: #409c3e;
    font-weight: 600;
    text-align: center;
  }
`

function HighlightCard ({ src: Img, title }) {
  return (
    <HighlightCardRoot className='highlight-card'>
      <div className='icon'>{Img}</div>
      <p className='title'>{title}</p>
    </HighlightCardRoot>
  )
}

export default AboutSection
