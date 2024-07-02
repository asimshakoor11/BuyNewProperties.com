import React from 'react';
import './styles/BecomeAnAgent.css'

const BecomeAnAgent = () => {

    return (
        <>
            <section id="section-244fc0d2-c72f-45f8-abbc-021ebc1250ac" className="section bg-white is-font-color-dark is-background-color-light">
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Become An Agent</h2>

                <div className="about-section lp-vertical-paddings--large mt-10">
                    <div className="lp-container ">
                        <div className="about-section__row">
                            <div className="about-section__col about-section__col--cms">

                                <div className="cms-content">
                                    <img
                                        src="/images/pages/homepage/becomeanagent.svg"
                                        className="about-section__image portrait"
                                        sizes="(max-width: 1024px) 42vw, 100vw"
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            <div className="about-section__col">
                                <div className="user-content lp-a">
                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                        <img
                                            src="/images/icons/users-alt.svg"
                                            alt=""
                                            width="32"
                                            height="32"
                                        />
                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Generate more clients</h2>
                                        <p className="text-fontlight mb-6">
                                            Unlock unparalleled success in real estate with our dynamic approach, leveraging advanced digital marketing strategies, personalized brand investment, international partnerships, and cutting-edge software solutions to supercharge your lead generation and propel your business to new heights.
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                        <img
                                            src="/images/icons/referral-alt.svg"
                                            alt=""
                                            width="32"
                                            height="32"
                                        />
                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Global Network</h2>
                                        <p className="text-fontlight mb-6">
                                            Our global network of partners consistently sends us high-quality clients. When you build connections with these partners, they can send you exclusive leads through our proprietary software. The possibilities are endless.
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                        <img
                                            src="/images/icons/square-heart.svg"
                                            alt=""
                                            width="32"
                                            height="32"
                                        />
                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Build a World-Class Brand & Amplify Your Real Estate Following
                                        </h2>
                                        <p className="text-fontlight mb-6">
                                            Boost your brand and business with our full-service creative workshop and award-winning content studio. Leverage proven strategies and modern techniques that built the world's most followed real estate brand. Enhance your reach, tap into social media trends, and establish yourself as a leading voice in your market and globally.
                                        </p>
                                    </div>
                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                        <img
                                            src="/images/icons/chart-arrow-grow.svg"
                                            alt=""
                                            width="32"
                                            height="32"
                                        />
                                        <h2 className="font-semibold text-xl md:text-2xl mb-2  text-primarycolor">Professional & Personal Growth</h2>
                                        <p className="text-fontlight  mb-6">
                                            We foster your growth both as a real estate agent and as an individual. Our passionate team supports and motivates each other daily to become the best versions of ourselves. More than just a business, we are a family.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="bg-primarycolor hover:bg-primarycolorhover text-white text-center buttonLong cursor-pointer transition-colors duration-300 ease-in-out">Join Us</button>
                </div>
            </section>
        </>
    );
};

export default BecomeAnAgent;
