import React, { Component } from 'react';
import FloralBoxComponent   from '../FloralBoxComponent';
export default class WhyYogaTherapy extends Component {
    state = {
        info: { 
            title: "Why Yoga Therapy?",
            subtitle: "WHAT I SAY TO THOSE WHO HAVEN'T TRIED IT",
            content: "Most people are unaware of the power they possess within their own body to heal itself. Yoga Therapy is a personal, tailored approach to healing both mental and physical challenges. It is the perfect marriage of Eastern and Western medicine, and an alternative to traditional methods. Every session with me, you will feel safe and free to exist in your own body and in your personal truth. Yoga Therapy is specific and focused, using traditional practices to address health challenges, reduce symptoms, restore balance, manage a condition, increase vitality, and improve mental health.",
            image: "yoga-therapy.jpg",
            servicesTitle: "HOW CAN WE WORK TOGETHER?",
            skills: ["none"],
            services: [
                'Private one on one Yoga Therapy',
                'Onsite Yoga Therapist at your medical office',
                'Focused workshops for your clients:',
                'lower back, shoulder opener; reduce anxiety'
            ],
            boxOne: "right",
            boxTwo: "left",
            backgroundColor: "#E0CEE5",
            subtitleColor: "white",
            route: false,
            cta: "",
            ctaColor: "",
        }
    };

    render(){
        return( <FloralBoxComponent passedInfo={this.state.info} /> );
    };
};