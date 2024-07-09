import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function Porduct() {
  return (
    <>
      <Container className='mt-10'>
        {/* ------------top--------------- */}
        <Row>
          <Col xs={12} md={6}>
            <div className='py-20  md:border-r-2 text-left md:text-left'>
              <h1 className='font-playfair md:text-5xl text-4xl'>
                <i>Hello </i>! I'm Nicole,
              </h1>
              <div class='scrolling-text mt-4 h-24 md:h-14'>
                <div className='font-playfair text-3xl md:text-4xl text-[#646464] '>
                  <p class='line'>I value accessibility</p>
                  <p class='line'>Best designs are intuitive & enjoyable</p>
                  <p class='line'>I like psychological thrillers</p>
                  <p class='line'>I love both cats & dogs</p>
                  <p class='line'>I'm learning tennis & skiing</p>
                  <p class='line'>I have travelled to 10 countries</p>
                  <p class='line'>I miss Avicii</p>
                  <p class='line'>The Lumineers is underrated</p>
                  <p class='line'>Chocolate is my goto Ice-cream flavour</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='ml-5 py-4'>
              <h2 className='text-base font-bold'>Welcome to my portfolio</h2>
              <p className='mt-3 text-2xl'>
                I am a product designer & front-end engineer with some
                graphic design chops. Now part-time AI Product Designer @ Radical AI.
                Past UX designer & developer Intern @ ATS Corporation.
              </p>
              <p className='mt-8 font-bold'>
                It’s nice to meet you, check out my work below
              </p>
            </div>
          </Col>
        </Row>
        <div class='d-flex justify-content-between border-b-2 mt-20 py-2 '>
          <p>Work</p>
          <p>001</p>
          {/* -----------content---------------- */}
        </div>
        <Row className='mt-5'>
          <Col md={6}>
            <Link href='/product/ats'>
              <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h1 className='font-semibold text-2xl'>ATS Corporation (IMI2.0)</h1>
                <p className='mt-2'>Internship • Website Redesign • Coded Prototype</p>
                <div className='my-4'>
                  <Image
                    src='/img/men-dash.png'
                    width={550}
                    height={400}
                  ></Image>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <Link href='/product/radicalai'>
              <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h1 className='font-semibold text-2xl'>Radical AI (Sky)</h1>
                <p className='mt-2'>Part-time • Website Redesign</p>
                <div className='my-4'>
                  <Image src='/img/men-dash.png' width={550} height={400}></Image>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6}>
            <Link href='/product/movieSnackApp'>
              <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h1 className='font-semibold text-2xl'>Movie Theatre Snacks Ordering App</h1>
                <p className='mt-2'> Personal Project • Android Mobile Design</p>
                <div className='my-4'>
                  <Image src='/img/men-dash.png' width={550} height={400}></Image>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <Link href='/product/proLearner'>
              <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h1 className='font-semibold text-2xl'>ProLearner</h1>
                <p className='mt-2'>Personal Project • IOS Mobile Design</p>
                <div className='my-4'>
                  <Image src='/img/men-dash.png' width={550} height={400}></Image>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6}>
            <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
