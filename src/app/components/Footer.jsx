import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className='bg-[#000] text-white py-24 mt-20'>
        <Container>
          <Row>
            <Col>
              <div className='text-4xl md:text-5xl'>Thanks for visiting</div>
              <div className='text-4xl md:text-5xl mt-3'>my portfolio</div>
            </Col>
          </Row>
          <Row className='mt-20'>
            <Col md={6} xs={6}>
              <div>
                <p>Made with by me</p>
              </div>
            </Col>
            <Col md={6} xs={6}>
              <div className='text-right'>
                <a href='' className='inline-block'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-mail icon'
                  >
                    <g>
                      <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                      <polyline points='22,6 12,13 2,6'></polyline>
                    </g>
                  </svg>
                </a>
                <a href='' className='inline-block ml-4'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-linkedin icon'
                  >
                    <g>
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                      <rect x='2' y='9' width='4' height='12'></rect>
                      <circle cx='4' cy='4' r='2'></circle>
                    </g>
                  </svg>
                </a>
                <a href='' className='inline-block ml-3'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-github icon'
                  >
                    <g>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </g>
                  </svg>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
