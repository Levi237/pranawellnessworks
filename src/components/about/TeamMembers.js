import React, { Component } from 'react';
import styled from 'styled-components';

export default class TeamMembers extends Component {
    state = {
        team: [{
            name: "Jackson",
            skills: [
                "Speaker | Author | Educator",
                "Certified Life Coach",
                "Reiki Master (I, II, & III)",
                "Neuro-Linguistic Programming (NLP) Master Practitioner",
                "Certified Cognitive Behavioral Therapist (CBT)"
                ],
            description: 
                "Jackson Pallas is an existential philosopher & life guide. He has spent the better part of two decades working as a management consultant, helping companies—of all sizes, across all industries—grow their bottom line by building better infrastructures to optimize process and human performance. Now, he is on a mission to help people. Millions and millions (and millions) of people. Ultimately, Jackson believes that with an enlightened understanding about the fundamental essence of humanity, each of us will be better able to recognize purpose and achieve peace in our everyday lives. His content (books, lectures, and trainings) typically addresses the following: focus, awareness, perception, meaning, alignment, and/or holistic well-being."
            ,
            image: "jackson.jpg",
        },{
            name: "Alexeyeva",
            skills: [
                "200CYT Meditation",
                "RYT200 Yoga",
                "Reiki I & II"
                ],
            description: 
                "Alexeyeva is an advocate, mentor, and educator for mindfulness and conscious breathing. She knows the power of the breath and how it can transform a situation - or a life. She believes that meditation is a call home to yourself and that the breath is a direct pathway to get there. Alexeyeva is passionate about people and curious about their lives. She enjoys creating a safe and comfortable space, free of judgment, where individuals can come to sit, slow down, explore and reconnect with themselves and their purpose through the power and sensations of their own breath. She believes in sharing practical mindfulness and breathing techniques that can be applied in daily life and that when someone is ready and willing to surrender to the power of their breath, it is an invitation for the ultimate journey of self-love to begin."
            ,
            image: "alexeyeva.png",
        },{
            name: "Melanie",
            skills: [
                "200Hour RYT Yoga Instructor",
                " Certified Group Fitness Instructor",
                "MBA Candidate C/O2021 -USC Marshall"
                ],
            description: 
                "Melanie is a yoga teacher at Corepower Yoga where she's been teaching for almost 3 years. She has an incredible passion for holistic health and wellness and has integrated her love for wellness into her own career. Currently, she is an entrepreneur within the health and wellness space. Through her company's wellness devices, she not only hopes to raise awareness about the importance of preventative health but to also provide an accessible, customizable, and convenient way for people to prioritize their daily wellness."
            ,
            image: "melanie.png",

        },{
            name: "Keren",
            skills: [
                "200RYS Yoga Instructor", 
                "Yoga Therapist in training"
                ],
            description: 
                "Keren’s Yoga journey began after years of struggling with her body image. She found a way to connect and love herself through Yoga. After becoming a lawyer in Israel and completing an MBA, she followed her heart and dedicated herself to the practice and study of Yoga. Keren is passionate about passing on the gift of Yoga as a tool for self-transformation and is currently on the path to becoming a Yoga Therapist. Her classes are a balance between a strong and safe physical practice and a tranquil state of mind. In her classes, she weaves in elements of philosophy, pranayama, and meditation."            ,
            image: "keren.png",

        },{
            name: "Nadirah",
            skills: [
                "200 hour RYT Yoga Instructor",
                "50 hour RYT Continued Ed",
                "Reiki Master"
                ],
            description: 
                "Nadirah bases her yoga practice as the mind, body, and spirit connecting, through breath and movement. As an entertainer, she is well aware of the many benefits yoga and meditation has to offer in real life situations. The Chicago native wholeheartedly believes that yoga is a journey to everlasting inner peace and oneness with self. This in turn, teaches us to self-love through listening, learning, and laughing, in order to shine our light and inspire others to do the same.",
            image: "nadirah.png",

        }]
    };

    render(){
        const { team } = this.state;
        
        const memberInfo = team.map((member, key) => {
            const skillList = member.skills.map((skill) => {
                return (<><span>{skill}</span><br /></>)
            })
            return (
                <div key={key} className="team-box">
                    <div className={member.description ? "member-box member-hover" : "member-box"}>
                        <div className="member-front">
                            <div className="member-front-data member-hover">
                                <img className="member-picture" src={`../team/${member.image}`} alt={member.name}/>
                                <section>{member.name}</section>
                                <section>{skillList}</section>
                            </div>
                        </div>
                    
                    </div>
                    <div className="member-back">
                        <section>{member.description}</section>
                    </div>
                </div>
            );
        });

        return(
            <TeamWrapper className="team-member-container">
            <h1>Meet the Team</h1>
                {memberInfo}
            </TeamWrapper>
        );
    };
};

const TeamWrapper = styled.div`
.team-member-container {
    margin-top: 80px;
    position: relative;
}
.team-box {
    position: relative;
    height: 36.67vw;
    width: 30vw;
    display: inline-block;
    vertical-align: top;
    background-color: transparent;
    margin: 10px 1.33vw;
    z-index: 1;
    transition: all .3s ease-in-out;
}
.member-picture {
    max-height: 36.67vw;
    max-width: 30vw;
    height: 36.67vw;
    width: 30vw;
    background-size: cover;
}
.member-back {
    height: 33vw;
    min-height: 33vw;
    width: 25vw;
    overflow: auto;

    margin-top: -33vw;
    margin-left: 2.5vw;
    margin-bottom: 2.5vw;

    position: relative;
    z-index: -1;

    color: var(--darkpurple);
    background-color: transparent;

    font-size: 1.25vw;

    transition: .3s ease;
}

.member-box {
    height: 36.67vw;
    max-width: 30vw;
    position: initial;
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    background-size: cover;
}
.member-box img {
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    float: left;
    border-radius: 0;
    border: 0px solid #965ba5;
}
.member-box.member-hover:hover, .member-box.member-hover:active {
    max-width: 0;
    overflow: hidden;
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    background: transparent;
    background-size: cover;
}
.member-box.member-hover:hover img, .member-box.member-hover:active img{
    max-width: 6vw;
    max-height: 6vw;
    margin: -3vw -1vw;
    border-radius: 100%;
    border: 4px solid #965ba5;
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    float: left;
}
.member-front-data.member-hover:hover {
    color: transparent;
    transition: all .3s ease-in-out;
    transition-delay: .2s;
    background-color: transparent;
}
.member-front-data.member-hover:hover > section {
    color: transparent;
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    background-color: transparent;
    font-size: 0;
}
.member-front-data.pop-hover:hover {
    border: 1px solid #669F35!important;
    color: rgb(191, 158, 200);
    background-color: transparent;
    transition: all .3s ease-in-out;
    transition-delay: .2s;
}
.member-front > img {
    height: 36.67vw;
    width: 30vw;
    position: relative;
    z-index: -1;
    transition: all .3s ease-in-out;
}
.member-front-data {
    width: 28vw;
    height: 34.67vw;
    color: #FFF;
    border: 0px;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    margin: 0;
    transition: all .3s ease-in-out;
    transition-delay: .1s;
}

.member-front-data.member-hover > section {
    transition: all .5s ease-in-out;
    transition-delay: .5s;
    max-width: 30vw;
}
.member-front-data > section:first-of-type {
    font-family: 'Merriweather', sans-serif;
    font-style: italic;
    font-size: 3vw;
    width: 30vw;
    background-color: rgba(0,0,0,.6);
    margin-top: 2vw;
    position: absolute;
    top: 1vw;
}

.member-front-data > section:last-of-type {
    text-transform: uppercase;
    font-weight: normal;
    font-size: 1.33vw;
    letter-spacing: .1vw;
    margin-top: 0vw;
    text-align: left;
    background-color: rgba(0,0,0,.6);
    width: 28vw;
    padding: 1vw;
    position: absolute;
    bottom: 0;
}
@media screen and (max-width: 945px) {
    .team-member-container {
        margin-top: 20vw;
        position: relative;
        width: 100vw;
        }
    .team-box {
        height: 110vw;
        width: 90vw;
        margin: 10px 5vw !important;
    }

    .member-box, .member-front > img {
        height: 110vw;
        max-width: 90vw;
        margin: 15vw 0;
    }
    .member-front-data {
        width: 90vw;
        height: 110vw;
    }
    .member-back {
        height: 100vw;
        width: 85vw;
        margin-top: -111vw;
        font-size: 3.8vw;
    }

    .member-front-data.member-hover > section:first-of-type {
        font-size: 10vw;
        margin-top: 5vw;
        padding: 2vw;
        width: 86vw;
    }
    .member-front-data.member-hover > section:last-of-type {
        font-size: 3.33vw;
        width: 100%;
        max-width: 84vw;
        padding: 3vw;
        bottom: 5vw;
    }
    .member-front-data.member-hover > section {
        transition: all .5s ease-in-out;
        transition-delay: .5s;
        max-width: 90vw;
    }
    .member-box.member-hover img {
        border: 0px solid #965ba5;
        transition: all .5s ease-in-out;
        transition-delay: .5s;
        height: 110vw;
        max-width: 90vw;
        width: 90vw;
        max-height: 110vw;
    }
    .member-box.member-hover:hover img, .member-box.member-hover:active img {
        max-width: 24vw;
        max-height: 24vw;
        margin: -12vw -4vw;
        border-radius: 100%;
        border: 4px solid #965ba5;
        transition: all .5s ease-in-out;
        transition-delay: .5s;
        float: left;
    }
} 
`;