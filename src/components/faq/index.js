import React, { Component } from 'react';
import styled from 'styled-components';

export default class FAQMain extends Component {
    state = {
        faq: [{
            topic: `FAQ`,
            qa: [{
                question: `What makes Prana Wellness different?`,
                answer: `It’s a lifestyle! We are educators, and we equip you with the tools to elevate and heal yourself.`,
            },{
                question: `What does Prana mean?`,
                answer: `Prana is sanskrit for breath, life-giving force. It is a universal energy.`,
            }]
        },{
            topic: `Corporate Wellness`,
            qa: [{
                question: `Can I customize a wellness package if we need something different?`,
                answer: `Yes, everything is customizable, based on your needs.`,
            },{
                question: `How do I know what my employees want from a wellness program?`,
                answer: `Easy! We can provide you with a custom survey for your employees, to find out what day/times might work best for wellness breaks, and what classes they’d prefer.`,
            },{
                question: `Do employees need to bring any equipment to class?`,
                answer: `Typically, just a yoga mat is required. Other equipment is optional.`,
            },{
                question: `What if we don’t have a physical space for classes?`,
                answer: `Don’t worry! Prana Wellness offers all classes outdoors and virtually. You have options.`,
            },{
                question: `How do I ensure employees engage in the wellness program?`,
                answer: `Prana will provide you with an “Internal Marketing Guide” with key steps and guidance to get your employees to come to class. This includes a custom promo flyer.`,
            },{
                question: `Is there a cap on how many employees can attend a session?`,
                answer: `No minimum or maximum! We have done classes for 3 and 300!`,
            }]
        },{
            topic: `Individual Wellness`,
            qa: [{
                question: `What is Yoga Therapy anyway?`,
                answer: `Yoga Therapy is a blend of Eastern and Western medicine, combined with the healing tools of Yoga. Yoga Therapy is focused, one on one integrative health therapy, focused on healing specific mental and physical ailments. Yoga Therapists are trained to work alongside medical doctors, physical therapists, and chiropractors to treat chronic pain, back, knee, shoulder, and joint issues, as well as depression and anxiety.`,
                },{
                question: `Do you offer both business coaching, and 1:1 coaching?`,
                answer: `Yes, both! Happy to customize the coaching you need to elevate your life in the business and wellness world. For entrepreneurs and companies.`,
                },{
                question: `When can I start prenatal yoga?`,
                answer: `Anytime! Honor your body, and do what feels right. Our classes are designed with every level and physical ability in mind. There are always modifications to suit your body, no matter what stage you’re in. Prenatal yoga is a wonderful form of self-care to practice throughout your pregnancy. It helps to foster education, build a support system, and strengthen you mentally, physically, and spiritually.`,
                },{
                question: `When can I start postpartum yoga?`,
                answer: `6-8 weeks postpartum, after being cleared for activity by your doctor. Postpartum focuses on regaining strength in the abdomen and pelvic floor, and releasing tension in the neck and shoulders.`,
            }]
        }]
    }
    render(){
        const { faq } = this.state;

        const showFAQ = faq.map((topic, k) => {
            const showQA = topic.qa.map((qa, k) => {
                return(
                    <section key={k}>
                        <h2>{qa.question}</h2>
                        <p>{qa.answer}</p>
                    </section>
                )
            })
            return(
                <div key={k}>
                    <div><h1>{topic.topic}</h1></div>
                    {showQA}
                </div>
            )
        })
        return(
            <FAQWrapper>
                <HeaderPadding></HeaderPadding>
                <h1>Frequently Asked Questions</h1>
                {showFAQ}
                <br/><br/><br/><br/>
            </FAQWrapper>
        );
    };
};
const HeaderPadding = styled.section`
    height: 120px;
`;

const FAQWrapper = styled.div`
    > div {
        text-align: left;
        padding: 0 10vw 2.5vw;
        
        > div {
            > h1 {
                text-align: left;
                padding: 5vw 0 0;
                color: var(--green)!important;
            }
            > button {
                border: none;
                background-color: transparent;
            }
        }
        > section {
            > h2 {
                padding: 40px 0 20px;
                color: var(--darkpurple);
                font-family: var(--fancy-font);
            }
            p {
                color: var(--grey);
            }
        }
    }
`;