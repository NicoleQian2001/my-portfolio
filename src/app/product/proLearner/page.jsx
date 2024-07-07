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
                                <li className='nav-item'>
                                    <a className='nav-link' href='#research-light-bg'>
                                        User Research
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#define'>
                                        Define
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#hta'>
                                        Hierarchical Task Analysis
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#design'>
                                        Design 1.0
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
                                <h1 className='font-lato text-4xl font-bold text-left mt-5'>ProLearner
                                </h1>
                                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                                    Problem Statement
                                </h3>
                                <p className='text-left text-xl mt-4 font-light'>
                                    In traditional classroom settings, students often face pressure from regular scheduled assessments
                                    and judgment from peers. Conversely, in online classes, students struggle to form
                                    connections with their peers due to the lack of face-to-face interaction.
                                </p>
                                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                                    Outcomes
                                </h3>
                                <p className='text-left text-xl mt-4 font-light'>
                                    I, along with 5 teammates, designed an online
                                    informal learning platform that provides a
                                    more supportive, interactive, & inclusive
                                    community AND flexible learning styles &
                                    pace customizations.
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
                                            Value Proposition As Context Study
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            We began with the stage of empathy to gain a deeper
                                            understanding of users’ pain points and desires.
                                        </p>
                                    </div>
                                </div>
                                <Image
                                    className='mt-7'
                                    src='/img/val-proposition.png'
                                    width={850}
                                    height={800}
                                ></Image>
                                <div className='md:flex xs:flex-col mt-6'>
                                    <p className='mt-4 text-left text-xl font-light'>
                                        Our group discovered that our <span className='font-bold'>unique selling point</span> is to <span className='font-bold'>amplify the
                                            advantage of informal learning — the ability to learn at one’s own pace
                                            in a judgment-free environment</span>. While in a classroom environment,
                                        students are bound to the pace of the teacher and may encounter
                                        social pressure in their learning experience, informal learning
                                        is the complete opposite. In addition, we also identify that our
                                        user group also fears not being able to stay on track and
                                        becoming overwhelmed.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section id='define' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Define
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-1 mr-14'>
                                        <p className='font-playfair mt-4 text-left text-3xl'>
                                            Affinity Diagram
                                        </p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-left text-xl mt-4 font-light'>
                                            After our team identified the problems proLearner faced, we
                                            started brainstorming ideas and features we could introduce
                                            to solve these problems. A Miro board with all of the different
                                            individual and grouped ideas was made, and a vote was held to
                                            determine the key features to be included in the prototype.
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-6'>
                                    <p className='mt-4 text-left text-xl font-light'>
                                        Among all of the options, we highlighted the following five features.<br />
                                        1. A recommendation system where we can take the user  area of interest and return courses.<br />
                                        2. A formative evaluation feature consisting of optional project ideas would allow users to evaluate their learning.<br />
                                        3. An anonymous community feature that allows people to register for courses and ask questions in communities anonymously.<br />
                                        4. A community feature allows people taking the same courses to connect and chat with each other.<br />
                                        5. A Q&A system to achieve real-time and asynchronous communication between course instructors and students.
                                    </p>
                                </div>
                                <Image
                                    className='mt-7'
                                    src='/img/affinity-diagram.png'
                                    width={850}
                                    height={800}
                                ></Image>
                            </div>
                        </section>
                        <section id='hta' className={styles.section}>
                            <div className='wrap'>
                                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                                    Hierarchical Task Analysis
                                </h3>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <p className='font-playfair mt-4 text-left text-3xl'>
                                        Explore a Hobby via Informal Learning
                                    </p>
                                </div>
                                <p className='text-left text-xl my-4 font-light'>
                                    In HTA 2, the workflow model demonstrated the complex and
                                    time-consuming processes; people go through to develop a
                                    new hobby via informal learning without our platform. In
                                    comparison, in our solution, users can easily navigate
                                    through the websites to find courses related to their
                                    hobbies that deliver structured knowledge and provide
                                    practices and solutions.
                                </p>
                                <Image
                                    src='/img/hta.png'
                                    width={750}
                                    height={700}
                                ></Image>
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
                                            Low Fidelity Wireframes
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-3'>
                                        <p className='mt-4 text-left text-xl font-light mr-7'>
                                            Recommendation System
                                        </p>
                                    </div>
                                    <div className='flex-7'>
                                        <Image
                                            src='/img/recommendation-sys.png'
                                            width={750}
                                            height={700}
                                        ></Image>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-7 mr-7'>
                                        <Image
                                            src='/img/q&a-system.png'
                                            width={750}
                                            height={700}
                                        ></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex-3'>
                                            <p className='mt-4 text-left text-xl font-light'>
                                                Q&A System
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-3'>
                                        <p className='mt-4 text-left text-xl font-light mr-7'>
                                            Anonymous Community (Accessible to every user (not courses specific))
                                        </p>
                                    </div>
                                    <div className='flex-7'>
                                        <Image
                                            src='/img/community.png'
                                            width={750}
                                            height={700}
                                        ></Image>
                                    </div>
                                </div>
                                <div className='md:flex xs:flex-col mt-10'>
                                    <div className='flex-7 mr-7'>
                                        <Image
                                            src='/img/practice-soln.png'
                                            width={750}
                                            height={700}
                                        ></Image>
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex-3'>
                                            <p className='mt-4 text-left text-xl font-light'>
                                                Optional practices and solutions
                                            </p>
                                        </div>
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
