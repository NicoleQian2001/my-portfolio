'use client';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import styles from '../Product.module.css';
import { FaArrowUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const ProductPage = (props) => {
  // const [productId, setProductId] = useState(null);

  useEffect(() => {
    // console.log(props.params.productid);
    // const id = props.params.productid;
    // setProductId(id);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.params.productid]);

  // 定义scrollToTop函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container-fluid product-wrap'>
      <Container>
        <Row>
          <nav className={`d-none d-md-block sidebar ${styles.sidebar}`}>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link' href='#overview'>
                    Overview
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#research'>
                    Research
                  </a>
                </li>
                {/* <li className='nav-item'>
                  <a className='nav-link' href='#findings'>
                    User Research
                  </a>
                </li> */}
                <li className='nav-item'>
                  <a className='nav-link' href='#proposal'>
                    Solution Part 1
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#code'>
                    Code
                  </a>
                </li>
                {/* <li className='nav-item'>
                  <a className='nav-link' href='#story-two-a'>
                    Story Two - A
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-two-b'>
                    Story Two - B
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-three'>
                    Story Three
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#evaluation'>
                    Evaluation
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#details'>
                    Details
                  </a>
                </li> */}
                <li className='nav-item'>
                  <a className='nav-link' href='#reflection'>
                    Reflection
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role='main' className={`ml-sm-auto px-4 ${styles.content}`}>
            <div className='wrap'>
              <Image
                src='/img/men-dash.png'
                width={1000}
                height={400}
              ></Image>
            </div>
            <section id='overview' className={styles.section}>
              <div className='wrap'>
                <h1 className='font-lato text-4xl font-bold text-left mt-5'>Illuminate Manufacturing Intelligence (IMI2.0)
                </h1>
                <p className='font-playfair text-left text-2xl mt-3'>
                  ATS Corporation's Software Platform for Monitoring Machinary Productivity
                </p>
                <p className='text-left text-xl mt-4 font-light'>
                  For my last internship during undergrad school, I worked as a UX Software Developer
                  (UI/UX Designer & Developer) at ATS Corporation. My team’s objective is to renovate
                  the existing Illuminate Manufacturing Intelligence (IMI1.0). One of my assigned tasks
                  is upgrading the State Timeline page. <b>I was told to increase brand identity and uphold it across all web pages.</b>
                </p>
                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                  Outcomes
                </h3>
                <p className='text-left text-xl mt-4 font-light'>
                  I designed and coded over 5 webpages and fixed over 30 frontend bugs using <b>Figma, React.js & Kendo UI</b>.
                </p>
                {/* <div className='flex'>
                  <div className='flex-1 mr-12'>
                    <p className='mt-4 text-left text-xl font-light'>
                      How might support designers who want to practice
                      whiteboarding, app critques and portfolio presentations?
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      We designed and coded a prototype for supporting designers
                      with design interviews in 2 weeks. You can view the site
                      here:
                    </p>
                  </div>
                </div> */}
                <Image
                  src='/img/menti-bg.jpg'
                  width={1000}
                  height={400}
                ></Image>
              </div>
            </section>
            <section id='research' className={styles.section}>
              <div className='wrap'>
                <h2 className='text-5xl py-9'>Understanding the Problem</h2>
                <div className='md:flex xs:flex-col'>
                  <p className='font-playfair text-leftfont-light text-xl mx-16 mb-9'>
                    Keeping the goals in mind, I looked at the current product to discover improvement opportunities.
                  </p>
                </div>
                <div className='mx-9'><Image
                  src='/img/understanding-the-problem.png'
                  width={1000}
                  height={400}
                ></Image></div>

                <div className='md:flex xs:flex-col mt-16 mx-9'>
                  <div className='flex-1 mr-12'>
                    <h1 className='text-left text-4xl'>01</h1>
                    <p className='mt-4 text-left text-xl'>
                      <b>Overwhelming Amount of Data</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>The large amount of
                      data displayed on the chart might overwhelm some users,
                      making it hard to focus on specific details.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>02</h1>
                    <p className='mt-4 text-left text-xl'>
                      <b>Style Inconsistency</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>Inconsistent spacing and typography can lower the level of professionalism.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16 mx-9'>
                  <div className='flex-1 mr-12'>
                    <h1 className='text-left text-4xl'>03</h1>
                    <p className='mt-4 text-left text-xl'>
                      <b>Missing branding</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>
                      Lack of branding identity make it impossible to recognize the product creator.
                    </p>
                  </div>
                  <div className='flex-1'></div>
                </div>
              </div>
            </section>
            {/* <section id='findings' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                  User Research
                </h3>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1 mr-14'>
                    <p className='font-playfair mt-4 text-left text-3xl'>
                      User research results & findings
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      When practicing interviews, junior designers go to their
                      friends to practice with. They feel that friends are more
                      easy going and approaching them is easier. However,
                      friends don't always provide the best advice.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16'>
                  <div className='flex-1 mr-14'>
                    <h1 className='text-left text-4xl'>87%</h1>
                    <p className='mt-4 text-left font-light'>
                      <span className='font-bold'>
                        of the survey takers ask for help from friends but the
                        advice isn't always great
                      </span>{' '}
                      <br />
                      When practicing interviews, junior designers go to their
                      friends to practice with. They feel that friends are more
                      easy going and approaching them is easier. However,
                      friends don't always provide the best advice.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>85%</h1>
                    <p className='mt-4 text-left font-light'>
                      <span className='font-bold'>
                        of survey takers believe that they'd trust designers
                        based on their years of experience
                      </span>{' '}
                      <br />
                      Followed closely by "senior" rank and if the designer
                      works for a FAANG company. Some survey takers trust help
                      from others only if they work for the specific company
                      they are applying for.
                    </p>
                  </div>
                </div>
              </div>
            </section> */}
            <section id='proposal' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                  Solutions
                </h3>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1'>
                    <div className='flex-3 mr-14'>
                      <p className='mt-4 text-left font-light font-mono text-3xl'>
                        01
                      </p>
                    </div>
                    <div className='flex-7'>
                      <p className='mt-4 text-left text-xl font-light mr-7'>
                        Decreasing the amount of data on the chart and
                        adding a horizontal scrollbar solved the issue of
                        excessive data on display.
                      </p>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src='/img/solution-1.png'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1 mr-12'>
                    <Image
                      src='/img/solution-2.png'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                  <div className='flex-1'>
                    <div className='flex-3 mr-14'>
                      <p className='mt-4 text-left font-light font-mono text-3xl'>
                        02
                      </p>
                    </div>
                    <div className='flex-7'>
                      <p className='mt-4 text-left text-xl font-light'>
                        Previously, there was a sub-equipment button with a less-known icon and a calendar button. I used a highly recognizable filter button to replace these two buttons. Their functions were combined into the new filter. In addition, I added a bookmark button as instructed by my mentor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1'>
                    <div className='flex-3 mr-14'>
                      <p className='mt-4 text-left font-light font-mono text-3xl'>
                        03
                      </p>
                    </div>
                    <div className='flex-7'>
                      <p className='mt-4 text-left text-xl font-light mr-7'>
                        The narrow and inconspicuous tabs were relocated to the left navigation bar and are now accompanied by icons to make them stand out. Their text is now in a consistent style. The areas encircled with blue are present on every web page of IMI2.0 for uniform branding.
                      </p>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src='/img/solution-3.png'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                </div>
              </div>
            </section>
            {/* <section id='story-one' className={styles.section}>
              <div className='wrap'>
                <h2>Story One</h2>
                <p>Content for Story One</p>
              </div>
            </section>
            <section id='story-two-a' className={styles.section}>
              <div className='wrap'>
                <h2>Story Two - A</h2>
                <p>Content for Story Two - A</p>
              </div>
            </section>
            <section id='story-two-b' className={styles.section}>
              <div className='wrap'>
                <h2>Story Two - B</h2>
                <p>Content for Story Two - B</p>
              </div>
            </section>
            <section id='story-three' className={styles.section}>
              <div className='wrap'>
                <h2>Story Three</h2>
                <p>Content for Story Three</p>
              </div>
            </section>
            <section id='evaluation' className={styles.section}>
              <div className='wrap'>
                <h2>Evaluation</h2>
                <p>Content for Evaluation</p>
              </div>
            </section> */}
            <section id='code' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-2xl'>
                  Code
                </h3>
                <div className='md:flex xs:flex-col'>
                  <p className='text-left text-xl my-4 mr-10 font-light'>
                    After my prototypes were finished, I translated them into functional codes.
                  </p>
                  <div className='my-4'>
                    <Button variant="dark" href="https://codesandbox.io/p/sandbox/state-timeline-forked-27hp2f?file=%2Fapp%2FStateTimelineChart.tsx%3A46%2C11">Codes</Button>
                  </div>
                </div>
                <div className='md:flex xs:flex-col'><Image
                  src='/img/code.png'
                  width={950}
                  height={900}
                ></Image></div>
              </div>
            </section>
            <section id='more-coded-uis' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-2xl'>
                  More Coded UIs
                </h3>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1'>
                    <Image
                      src='/img/solution-2.png'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src='/img/solution-2.png'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                </div>
              </div>
            </section>
            <section id='reflection' className={styles.section}>
              <div className='wrap'>
                <h2 className='text-5xl py-9'>Reflection</h2>
                {/* <div className='md:flex xs:flex-col'>
                  <p className='font-playfair text-leftfont-light text-xl mx-16 mb-9'>
                  </p>
                </div> */}
                {/* <div className='mx-9'><Image
                  src='/img/understanding-the-problem.png'
                  width={1000}
                  height={400}
                ></Image></div> */}
                <div className='md:flex xs:flex-col mt-16 mx-9'>
                  <div className='flex-1 mr-12'>
                    <h1 className='text-left text-4xl'>01</h1>
                    <p className='font-playfair mt-4 text-left text-xl'>
                      <b>Brand Identity Is Much Beyond A Logo</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>When I was first asked to add more branding, my initial thought was to add ATS Corporation's logo to every web page design. However, I soon asked myself: "Is this enough?". Then I proceeded to redesign the color spacing, typography, and colour scheme, etc., until I feel strongly about my design. <b className='font-bold'>I realized branding should be much more than a logo. It should include consistent typography, interaction, look and feel.</b>
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>02</h1>
                    <p className='font-playfair mt-4 text-left text-xl'>
                      <b>Be Picky & Be Critical</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>
                      I learned not to settle for the initial design even if it passed usability testings. Instead, I should ponder whether a design that aligns more with the requirements exists. <b className='font-bold'>If I were easily satisfied with the first good thing I made, a better design would not born.</b>
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16 mx-9'>
                  {/* <div className='flex-1 mr-12'>
                    <h1 className='text-left text-4xl'>03</h1>
                    <p className='mt-4 text-left text-xl'>
                      <b>Missing branding</b>
                    </p>
                    <p className='mt-2 text-left text-xl font-light'>
                      Lack of branding identity make it impossible to recognize the product creator.
                    </p>
                  </div> */}
                  <div className='flex-1'></div>
                </div>
              </div>
            </section>
          </main>
        </Row>
      </Container>
      {/* Back to Top Button */}
      <div className='fixed bottom-1/4 right-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 z-[100000] cursor-pointer'>
        <FaArrowUp onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default ProductPage;
