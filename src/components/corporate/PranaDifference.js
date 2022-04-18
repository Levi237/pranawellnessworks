import React, { Component } from 'react';

import './PranaDifference.css';

export default class PranaDifference extends Component {
    state = {
        pranaDifference: { 
            title: "the Prana Difference",
            subtitle: "wellness in the workplace",
            content: " We work using holistic practices, rooted in Indian tradition, and guide with both mind and body healing in mind. Our wellness services are designed for individuals to learn and implement on their own.",
            image: "prana_difference.png",
            skills: ["tailored program for your company ", "All skill levels welcome", "budget friendly packages", "flexible schedules"],
        }
    };

    render(){
        const { pranaDifference } = this.state;

            return(
                <div className="pranaDifference-container">
                    <div>
                        <div>
                            <section>{pranaDifference.title}</section>
                            <section>{pranaDifference.subtitle}</section>
                            <section>{pranaDifference.content}</section>
                            <div>
                                <section>{pranaDifference.skills[0]}</section>
                                <section>{pranaDifference.skills[1]}</section>
                                <section>{pranaDifference.skills[2]}</section>
                                <section>{pranaDifference.skills[3]}</section>
                            </div>
                        </div>
                    </div>
                        <div><img src={`${pranaDifference.image}`} alt="pranaDifference" /></div>
                </div>
            );
        };
};