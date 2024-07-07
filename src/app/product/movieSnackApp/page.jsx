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

    // define scrollToTop function
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
                                    <a className='nav-link' href='#final'>
                                        Demo
                                    </a>
                                </li>
                                {/* <li className='nav-item'>
                  <a className='nav-link' href='#findings'>
                    User Research
                  </a>
                </li> */}
                                <li className='nav-item'>
                                    <a className='nav-link' href='#research-light-bg'>
                                        User Research
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#design'>
                                        Design 1.0
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#usability'>
                                        Iterative Testing
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#design-2'>
                                        Design 2.0
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#prototype'>
                                        Final Prototype
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
                                <h1 className='font-lato text-4xl font-bold text-left mt-5'>Movie Theatre Snacks Ordering App
                                </h1>
                                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                                    Problem Statement
                                </h3>
                                <p className='text-left text-xl mt-4 font-light'>
                                    Moviegoers arrive at the movie theatre late but still want snacks without
                                    waiting in lines. Additionally, many people wish to have theatre’s food delivered elsewhere.
                                </p>
                                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                                    Outcomes
                                </h3>
                                <p className='text-left text-xl mt-4 font-light'>
                                    Within two weeks, I independently designed a <b className='font-playfair'>Android Small</b> mobile app for a convenient and efficient solution for ordering and
                                    delivering movie theater snacks in <b className='font-playfair'>Figma</b>.
                                </p>
                            </div>
                        </section>
                        <section id='final' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Demo
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mx-4'>
                                        <Image
                                            src='/img/snack-homepage.png'
                                            width={350}
                                            height={300}
                                        ></Image>
                                    </div>
                                    <div className='flex-1 mx-4'>
                                        <Image
                                            src='/img/snack-details.png'
                                            width={350}
                                            height={300}
                                        ></Image>
                                    </div>
                                    <div className='flex-1 mx-4'>
                                        <Image
                                            src='/img/snack-shopping-cart.png'
                                            width={350}
                                            height={300}
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id='research-light-bg' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    User Research
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-14'>
                                        <p className='font-playfair mt-4 text-left text-3xl'>
                                            Survey results & findings
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            To investigate about accessibility concerns, I found <span className='font-bold'>52</span> people to complete my survey. <span className='font-bold'>11</span> of them
                                            indicated that they have a visual impairment.
                                            The findings highlight the <span className='font-bold'>necessity of incoporating a screen reader & a translator</span> in my app.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-16'>
                                    <div className='flex-1 mr-14'>
                                        <h1 className='text-left text-4xl'>82%</h1>
                                        <p className='text-left text-xl mt-4'>
                                            Of visually impaired survey takers indicated they are <span className='font-bold'>highly likely</span> to order snacks through mobile app with a <span className='font-bold'>screen reader</span>.
                                            {' '}
                                            <br />
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <h1 className='text-left text-4xl'>94%</h1>
                                        <p className='text-left text-xl mt-4'>
                                            Of all survey takers stated that they are <span className='font-bold'>highly likely</span> to order snacks through mobile app with a <span className='font-bold'>translator</span> when
                                            they <span className='font-bold'>don't speak the local language</span>.
                                            {' '}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-16'>
                                    <div className='flex-1 mr-14'>
                                        <h1 className='text-left text-4xl'>93%</h1>
                                        <p className='text-left text-xl mt-4'>
                                            Of all survey takers indicated they are <span className='font-bold'>highly likely</span> to order through mobiles than in person
                                            if there is no extra fees.
                                            {' '}
                                            <br />
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        {/* <h1 className='text-left text-4xl'>92%</h1> */}
                                        {/* <p className='text-left text-xl mt-4'>
                                            Of all survey takers indicated they are <span className='font-bold'>highly likely</span> to order through mobiles than in person 
                                            if there is no extra fees
                                            <br />
                                        </p> */}
                                    </div>
                                </div>
                                {/* <div className='md:flex xs:flex-col mt-10 ml-4'>
                                    <div className='flex-1 mr-1'>
                                        <Image
                                            src='/img/snack-persona-1.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <Image
                                            src='/img/snack-persona-2.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>
                                </div> */}
                            </div>
                        </section>

                        <section id='findings' className={styles.section}>
                            <div className='wrap'>
                                {/* <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
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
                                </div> */}
                            </div>
                        </section>


                        <section id='design' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Design 1.0
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-14'>
                                        <p className='font-playfair mt-4 text-left text-3xl'>
                                            Low Fidelity Sketches & Wireframes
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            Keeping in mind the insights & findings I gathered so far, I
                                            started to create digital wireframes for usability studies.

                                            My wireframes <span className='font-bold'>before & after</span> the 1st round usability testing are below.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'><div className='flex-1'><Image
                                    src='/img/snack-digital-wireframe.png'
                                    width={450}
                                    height={400}
                                ></Image></div>
                                    <div className='flex-1'><Image
                                        src='/img/snack-digital-wireframe2.png'
                                        width={600}
                                        height={400}
                                    ></Image></div></div>

                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1'>
                                        <div className='flex-7'>
                                            <p className='mt-4 text-left text-xl font-light mr-7'>
                                                Based on the insight I concluded that "interview participants want to see the available snack sizes", I updated the <span className='font-bold'>Size</span> section.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <Image
                                            src='/img/snack-lofi-bef-aft.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>
                                </div>
                                {/* <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-12'>
                                        <Image
                                            src='/img/solution-2.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>

                                    <div className='flex-1'>
                                        <Image
                                            src='/img/solution-3.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>
                                </div> */}
                            </div>
                        </section>

                        <section id='usability' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Iterative Testing
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-14'>
                                        <p className='font-playfair mt-4 text-left text-3xl'>
                                            Remote Unmoderated Usability Testing Research Plan & Reports
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            I've conducted 2 rounds of usability testings, each round with 5 participants.
                                            The following button & image are linked to the documents.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-3'>
                                        <div className='flex-3 mr-10'>
                                            <div className='my-4'>
                                                <Button variant="dark" href="https://docs.google.com/document/d/1x6pt8l7tDBYBgFwCTb-IzOWWeyiqSakyxarWjSSEJ6k/edit">Research Docs</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-7'>
                                        <Image
                                            src='/img/snack-owen-interview.png'
                                            href='https://docs.google.com/spreadsheets/d/1woQSOoEeEgkZ9-zPOnHIfgYNszKZIXJNbFmT_UIN2lo/edit?gid=0#gid=0'
                                            width={750}
                                            height={700}
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id='design-2' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Design 2.0
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-14'>
                                        <p className='font-playfair mt-4 text-left text-3xl'>
                                            High Fidelity Mockups & Prototypes
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            Next up my design phase is creating visuals. My designs after 2nd round of usability testings are the following.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1'>
                                        <div className='flex-7'>
                                            <p className='mt-4 text-left text-xl font-light mr-7'>
                                                Based on my observation that "none of the interview particpants used filters in Categories" and the corresponding insight that "filters are extra", I removed the <span className='font-bold'>Add Filters</span>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <Image
                                            src='/img/snack-mockups1.png'
                                            width={450}
                                            height={400}
                                        ></Image>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-2 mr-7'>
                                        <Image
                                            src='/img/snack-mockups2.png'
                                            width={570}
                                            height={520}
                                        ></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex-7'>
                                            <p className='mt-4 text-left text-xl font-light'>
                                                Another insight that "users want a faster & more intuitive way to track past orders and edit them" enabled
                                                me to move <span className='font-bold'>Orders</span> from
                                                drawer menu on the left side to the
                                                bottom <span className='font-bold'>Navigation Menu</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id='prototype' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Final Prototype
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <p className='text-left text-xl my-4 mr-10 font-light'>
                                        Drawing up all insights from my usability studies, I created the following final prototype.
                                    </p>
                                    <div className='my-4'>
                                        <Button variant="dark" href="https://www.figma.com/design/Nkgt6VSOc96jhleaksiYhB/movie-theatre-snacks-ordering-app?node-id=284-149&t=5wABIHRbRAT8soqY-0">Prototype</Button>
                                    </div>
                                </div>
                                <Image className='mt-7'
                                    src='/img/snack-mockups3.png'
                                    width={900}
                                    height={850}
                                ></Image>
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
                                            <b>Iterative Testing Is The Key</b>
                                        </p>
                                        <p className='mt-2 text-left text-xl font-light'>Usability testings require time,
                                            effort, and resources. Initially, I was hesitent about whether conducting a second round of usability testing. I felt I collected enough feedbacks from the first round. In addition, the more rounds of usability testings <span className='font-bold'>seemed</span> the more resource intensive. Yet, I realized
                                            that I was able to detect issues in my designs
                                            early through iterative testing. This <span className='font-bold'>saved my time and resources by preventing the need for extensive rework later</span>.
                                            For instance, I reduced the time and effort by eliminating the need to design a filter selection page by determining that the <span className='font-bold'>Add Filters</span> function was superfluous after conducting additional testing.
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <h1 className='text-left text-4xl'>02</h1>
                                        <p className='font-playfair mt-4 text-left text-xl'>
                                            <b>Always Prepare A Research Plan</b>
                                        </p>
                                        <p className='mt-2 text-left text-xl font-light'>
                                            I found that having a well-crafted research plan beforehand really helped 
                                            to get the most out of the usability research. Writing out the <span className='font-bold'>research questions & KPIs</span> 
                                            ensured that I kept the research goals in mind throughout the interviews. 
                                            Having participants complete the <span className='font-bold'>System Usability Scale</span> allowed me to 
                                            understand users' preferences & things I would've forgotten to ask without preparations. 
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
        </div >
    );
};

export default ProductPage;
