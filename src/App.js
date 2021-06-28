import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import Nav                  from './components/nav/Nav';
import NavBar               from './components/nav/NavBar';

import EmailSignup          from './components/contact/EmailSignup';
import AnnouncementBanner   from './components/contact/AnnouncementBanner'; 
import EmailConfirmation    from './components/contact/EmailConfirmation';

import HomeHeader           from './components/home/HomeHeader';
import HeaderComponent      from './components/HeaderComponent';

import HeaderMessage        from './components/header/HeaderMessage'
import PurpleContent        from './components/PurpleContent';

import HomeMain             from './components/home';
import AboutMain            from './components/about';
import CorporateMain        from './components/corporate';
import PersonalMain         from './components/personal';
import ServicesMain         from './components/services';
import YogaTherapyMain      from './components/yogatherapy';
import PrenatalMain         from './components/prenatal';

import Coaching             from './components/coaching/Coaching';
import Speaking             from './components/coaching/Speaking';

import Footer               from './components/footer'

import './App.css';

export default class App extends Component {
  state = {
    user: null,
    uid: null,
    emailContact: "",
    //// SQUARE BOX DISPLAY OF SERVICES
    otherServices: [{ 
      smallText: "Bootcamp",
      largeText: "Fitness",
      image: "bootcamp_fitness.png",
      content: "Power hour of cardio, Plyometrics, HIIT, resistance bands, and body weight exercises. Modifications for all levels.",
    },{
      smallText: "Lunch +",
      largeText: "Learn",
      image: "lunch_and_learn.png",
      content: "Health, fitness, and mindfulness tools and tips for a balanced lifestyle and productive work experience.",
    },{
      smallText: "Corporate",
      largeText: "Massage",
      image: "corporate_massage.png",
      content: "Relaxing intuitive massage break from static postures.",
    },{
      smallText: "Work",
      largeText: "Play",
      image: "office-yoga.png",
      content: "Take time to play at work! Fun games that focus on leadership and team building.",
    },{
      smallText: "Wellness",
      largeText: "Retreats",
      image: "wellness_retreats.png",
      content: "Curated and customizable off-site wellness retreats for team building and training, with a fitness and wellness focus.",
    },{
      smallText: "Health",
      largeText: "Fairs",
      image: "health_fairs.png",
      content: "Create a wellness fair for your office or add us on to your existing fair for various wellness sessions.",
    }],
    //// PAGE HEADERS COPY
    aboutPage: {
      title: "THE TEAM BEHIND", 
      subtitle: "Prana Wellness",
      image: "about-header2.png",
      header: "the power of prana",
      message: 'Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.',
      value: "contactRequest",
      backgroundColor: "white",
      button: "Schedule A Session"
    },  
    wellnessServices: {
      title: "EXPLORE OUR WIDE-RANGING",
      subtitle: "Wellness Services",
      image: "service-header.png",
      header: "",
      message: "",
      value: "",
      backgroundColor: "purple",
      button: ""
    },
    personalWellness: {
      title: "REDISCOVER",
      subtitle: "Personal Wellness",
      image: "personal-header.jpg",
      header: "the power of prana",
      message: 'Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.',
      value: "contactRequest",
      backgroundColor: "purple",
      button: "Schedule A Session",
    },  
    corporateWellness: {
      title: "CONSIDER",
      subtitle: "Corporate Wellness",
      image: "corporate-header2.png",
      header: "Want Prana in Your Workplace?",
      message: "If you’d love to see a wellness program in your workplace, refer Prana Wellness to your company or HR manager and get a promo code to unlock premium content!",
      value: "referralRequest",
      backgroundColor: "white",
      button: "Refer to Employer",
    },
    yogaTherapy: {
      title: "THE REASON FOR", 
      subtitle: "Yoga Therapy", 
      image: "yoga-header.jpg",
      header: "WHAT IS YOGA THERAPY?",
      message: "Yoga Therapy blends Eastern and Western medicine in a wholistic practice of healing the whole person. Yoga meets Integrative Medicine. Yoga Therapy is the adaptation of yoga practices for people with specific health challenges, chronic pain, anxiety, depression, and illness. Yoga Therapists are trained to work alongside medical doctors, chiropractors, physical therapists, and physiatrists.",
      value: "contactRequest",
      backgroundColor: "white",
      button: "BRING PRANA TO YOU"
    },
    maternalHealth: {
      title: "YOGA FOR",
      subtitle: "Maternal Health",
      image: "prenatal-header2.jpg",
      header: "Prenatal Yoga Experience",
      message: "You can expect to learn something new each time, as we explore the pregnant body's challenges and strengths. Leave class feeling encouraged and motivated. We really want clients to honor their bodies in this practice, and do what feels good. We are  motivated to do this work because there is major inequity in maternal health care. We want to close that gap.",
      value: "contactRequest",
      backgroundColor: "white",
      button: "BRING PRANA TO YOU"
    },
    coachingSpeaking: {
      title: "ENGAGE WITH",
      subtitle: "Speaking & Coaching",
      image: "coaching-header.jpg",
      header: "SPEAKING TO INSPIRE",
      message: "Book Stephanie, “Motivator in Chief,” to motivate, inspire, and provide valuable tools to educate your team at work, youth group, newbie entrepreneurs, or wellness providers.",
      value: "contactRequest",
      backgroundColor: "purple",
      button: "BRING PRANA TO YOU"
    },
    //// PAGE BODY COPY
    corporateBodyText: {
      header: "DON'T SEE A PACKAGE THAT'S RIGHT?",
      message: "Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.",
      value: "contactRequest",
      backgroundColor: "purple",
      button: "Bring Prana to Your Workplace",
    },
    eventsList: [{
      title: "Prenatal Yoga",
      location: "virtual",
      info: "Guided movement for support, empowerment, and education.",
      price: "donation based",
      day: "Monday",
      when: "Every",
      time: "5p PT",
      note: "(happening now)",
      img: "./events/prenatal.png",
      link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
    },{
      title: "Postpartum Yoga",
      location: "virtual",
      info: "Build confidence, strengthen, and renew the body. ",
      price: "donation based",
      day: "Tuesday",
      when: "1st & 3rd ",
      time: "5p PT",
      note: "(starting July 6th)",
      img: "./events/postpartum.png",
      link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
    },{
      title: "Yoga on the Harbor",
      location: "in San Diego",
      info: "Join us in person, for a fun community flow!",
      price: "donation based",
      day: "Wednesday",
      when: "1st",
      time: "6p PT",
      note: "(starting July 7th)",
      img: "./events/harbor.png",
      link: "https://yogaontheharbor.eventbrite.com"
    },{
      title: "Yoga Flow",
      location: "virtual",
      info: "Join us from anywhere! All levels yoga flow.",
      price: "donation based",
      day: "Thursday",
      when: "Every",
      time: "5p PT",
      note: "(starting July 8th)",
      img: "./events/flow.png",
      link: "https://mailchi.mp/f44d1c9f43d6/yogflowthursdays"
    },{
      title: "Meditation + Breathwork",
      location: "virtual",
      info: "with @thenalaverse",
      price: "donation based",
      day: "Friday",
      when: "Every",
      time: "10p PT",
      note: "(happening now)",
      img: "./events/meditation.png",
      link: "https://thenalaverse.com/get-lifted"
    }]
  };  

  toggleHamburger = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  toggleEmailSignup = (e) => {
    const emailForm = document.getElementById('email');
    emailForm.classList.toggle('active');
    emailForm.classList.toggle('inactive');
    this.setState({
      emailContact: e.currentTarget.value
    });
  };
  
  render(){
    const { user, emailContact, eventsList, aboutPage, wellnessServices, personalWellness, corporateWellness, yogaTherapy, maternalHealth, coachingSpeaking, corporateBodyText } = this.state
    return(
      <GridContainer className="grid-container">

        <Nav toggleHamburger={this.toggleHamburger}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>

        <Switch>
          <Route path={routes.MAIL} exact render={() => 
            <EmailConfirmation/>
            }/>
        </Switch>

        <ContactGrid className="grid-contact">
          <AnnouncementBanner 
            toggleEmailSignup={this.toggleEmailSignup}/>
        </ContactGrid>

        <NavGrid className="grid-nav">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <NavBar 
                        page={"home"} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                        /> 
            }/>          
            <Route path={routes.MAIL} exact render={() => 
                      <></> }/>  
            <Route path={routes.ROOT} exact render={() => 
                      <NavBar 
                        page={"home"} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                        /> 
            }/>    
            <Route path={routes.ROOT} render={() => 
                      <NavBar 
                        page={"global"} 
                        user={user} 
                        logout={this.logout} 
                        toggleHamburger={this.toggleHamburger}
                        toggleEmailSignup={this.toggleEmailSignup}
                        /> 
            }/>    
          </Switch>
        </NavGrid>

        <GridHeader className="grid-header">
          <Switch>         
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/> }/>
            <Route path={routes.INFO} exact render={() => 
                    <HeaderComponent purpleBox={(false)} textCopy={aboutPage}/> }/>
            <Route path={routes.SERV} exact render={() => 
                    <HeaderComponent purpleBox={(true)} textCopy={wellnessServices}/> }/> 
            <Route path={routes.WELL} exact render={() => 
                    <HeaderComponent purpleBox={(true)} textCopy={personalWellness}/> }/>
            <Route path={routes.CORP} exact render={() => 
                    <HeaderComponent purpleBox={(false)} textCopy={corporateWellness}/> }/>   
            <Route path={routes.YOGA} exact render={() => 
                    <HeaderComponent purpleBox={(false)} textCopy={yogaTherapy}/> }/> 
            <Route path={routes.PREG} exact render={() => 
                    <HeaderComponent purpleBox={(false)} textCopy={maternalHealth}/> }/> 
            <Route path={routes.COAC} exact render={() => 
                    <HeaderComponent purpleBox={(false)} textCopy={coachingSpeaking}/> }/> 
            <Route path={routes.MAIL} exact render={() => 
                      <></> }/>  
            <Route path={routes.ROOT} render={() => 
                    <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/> }/>                    
          </Switch>
        </GridHeader>

        <MainGrid className="grid-main">
          <Switch>
            <Route path={routes.HOME} exact render={() => 
                      <HomeMain /> }/>
            <Route path={routes.INFO} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={aboutPage}>
                        <AboutMain /> 
                      </HeaderMessage> }/>      
            <Route path={routes.SERV} exact render={() => 
                      <ServicesMain toggleEmailSignup={this.toggleEmailSignup} textCopy={wellnessServices} eventsList={eventsList}/> }/>           
            <Route path={routes.WELL} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={personalWellness}>
                        <PersonalMain/>
                      </HeaderMessage> }/>       
            <Route path={routes.CORP} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={corporateWellness}>
                        <CorporateMain>
                          <PurpleContent textCopy={corporateBodyText} toggleEmailSignup={this.toggleEmailSignup}/>
                        </CorporateMain>
                      </HeaderMessage> }/>  
            <Route path={routes.YOGA} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={yogaTherapy}>
                        <YogaTherapyMain/>
                      </HeaderMessage>}/>
            <Route path={routes.PREG} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={maternalHealth} >
                        <PrenatalMain/>
                      </HeaderMessage> }/>
            <Route path={routes.COAC} exact render={() => 
                      <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={coachingSpeaking}>
                        <Speaking/><Coaching/>
                      </HeaderMessage> }/>      
            <Route path={routes.MAIL} exact render={() => 
                      <></> }/>                
            <Route path={routes.ROOT} render={() => 
                      <HomeMain /> }/>
          </Switch>          
        </MainGrid>

        <Footer/>
        
      </GridContainer>
    );
  };
};

const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  min-height: 100%;
  grid-template-rows: 46px 150px calc(100vh - 196px) auto 220px;
  grid-template-columns: 200px calc(100vw - 400px) 200px;
  background-color: #fff;
  grid-gap: 0;
  margin: 0;
grid-template-areas:
  ' contact contact contact '
  ' nav nav nav '
  ' header header header '
  ' main main main '
  ' footer-left footer-mid footer-right ';
  grid-gap: 0;

@media screen and (max-width: 945px) {
    grid-template-rows: 40px 80px 90vh auto 40vw 20vw 40vw;
    grid-template-columns: 100vw;
  grid-template-areas:
    ' contact '
    ' nav '
    ' header '
    ' main '
    ' footer-left '
    ' footer-mid '
    ' footer-right ';
  }
`;

const GridHeader = styled.div`
  grid-area: header;
  text-align: center;
  @media screen and (max-width: 945px) {
      margin-bottom: 0;
      margin-top: 0;
      text-align: center;
      height: 44vw;
      overflow: hidden;
    }
`;

const NavGrid = styled.div`
  grid-area: nav;
  background-color: transparent;
  position: absolute;
  z-index: 10;
  color: #FFF;
  width: 100vw;
  margin-top: 20px;
    @media screen and (max-width: 945px) {
      margin-left: 5vw;
      width: 90vw;
      margin-top: 40px;
    }
`;
const MainGrid = styled.div`
  grid-area: main;
  background-color: #FFF;
  padding-bottom: 60px;
  text-align: center;
`;

const ContactGrid = styled.div`
  grid-area: contact;
  background-color: var(--purple);
  position: relative;
  z-index: 9;
`;