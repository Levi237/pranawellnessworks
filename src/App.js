import React, { Component } from 'react';
import { Switch, Redirect, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import Nav                  from './components/nav/Nav';
import NavBar               from './components/nav/NavBar';

import AnnouncementBanner   from './components/banners/AnnouncementBanner'; 
import PurpleContent        from './components/banners/PurpleContent';

import EmailSignup          from './components/contact/EmailSignup';
import EmailConfirmation    from './components/contact/EmailConfirmation';

import HomeHeader           from './components/home/HomeHeader';
import FeatureBlogHeader    from './components/blog/FeatureBlogHeader';
import HeaderComponent      from './components/header/HeaderComponent';
import HeaderMessage        from './components/header/HeaderMessage'


import HomeMain             from './components/home';
import BlogMainIndex        from './components/blog';
import ShowBlog             from './components/blog/ShowBlog';
import FAQMain              from './components/faq';
import AboutMain            from './components/about';
import EventsMain           from './components/events';
import CorporateMain        from './components/corporate';
import PersonalMain         from './components/personal';
import ServicesMain         from './components/services';
import YogaTherapyMain      from './components/yogatherapy';
import PrenatalMain         from './components/prenatal';
import Coaching             from './components/coaching/Coaching';
import Speaking             from './components/coaching/Speaking';

import Footer               from './components/footer';

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
    textCopy: {
      aboutPage: {
        title: "THE TEAM BEHIND", 
        subtitle: "Prana Wellness",
        image: "about-header.png",
        header: "the power of prana",
        message: "Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.",
        value: "contactRequest",
        backgroundColor: "white",
        button: "Schedule A Session"
      }, 
      wellnessServices: {
        title: "EXPLORE OUR WIDE-RANGING",
        subtitle: "Wellness Services",
        image: "service-header.png",
        header: false,
        message: false,
        value: false,
        backgroundColor: "purple",
        button: false
      },
      personalWellness: {
        title: "REDISCOVER",
        subtitle: "Personal Wellness",
        image: "personal-header.jpg",
        header: "the power of prana",
        message: "Prana is Sanskrit for breath, considered as a life-giving force. Prana is seen as a universal energy, which flows in currents in and around the body.",
        value: "contactRequest",
        backgroundColor: "purple",
        button: "Schedule A Session",
      },  
      corporateWellness: {
        title: "CONSIDER",
        subtitle: "Corporate Wellness",
        image: "corporate-header.png",
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
        image: "prenatal-header.jpg",
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
        button: "SCHEDULE YOUR CONSULTATION"
      },
      eventsInformation: {
        title: "NURTURE YOUR",
        subtitle: "Inner Yogi",
        image: "events-header.jpg",
        header: "Monthly Schedule",
        message: false,
        value: "contactRequest",
        backgroundColor: "white",
        button: false
      },
      corporateBodyText: {
        header: "DON'T SEE A PACKAGE THAT'S RIGHT?",
        message: "Whether you want one activity or all of them, we can help you find a program that works best for your company. Mix and match services, define your timeline, and help us understand your unique needs for wellness in the workplace.",
        value: "contactRequest",
        backgroundColor: "purple",
        button: "Bring Prana to Your Workplace",
      }
    },
    //// PAGE BODY COPY
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
      time: "10:30a PT",
      note: "(happening now)",
      img: "./events/meditation.png",
      link: "https://thenalaverse.com/get-lifted"
    }],
    //// BLOG HARDCOPY
    blogs: [{
      id: `000000`,
      category: `meditation`,
      keyWords: [`meditation`, `health`],
      title: `5 Ways to Create a Powerful Morning`,
      subtitle: `Here are 5 Ways to Create a Powerful Morning:`,
      authorId: `000`,
      publishDate: `Monday, July 26 2021`,
      heroImage: `morning-routine-blog-banner.png`,
      copy: [{
        type: `p`,
        content: [{text: `Mornings are the most essential part of your day! I’m willing to argue that point. Mornings set the tone and energy for the rest of your day. If you have a mindful morning, you are essentially curating peace and positivity for your day ahead. Routines help us to stay focused and achieve our goals, so focusing on what you do in the morning, will increase productivity every day.`}]
      },{
        type: `ol`,
        content: [{
          list: [{
            type: `b`,
            text: `Drink Your Water!`,
          },{
            text: ` Keep a bottle of room temperature water by your bed, and as soon as you wake up, drink it! Your brain and heart, the most vital, life-giving organs, are about 73% water. You must keep them fed. In India, water is used in many “Kriya,” or cleansing practices, to remove toxins from the body. Water in the morning increases your energy levels, boosts red blood cell count. Red blood cells carry oxygen to the brain. H20 boosts your metabolism, so that your energy from food converts properly. It cleanses, and also contributes to your glowing skin! Water first thing in the morning will awaken and rehydrate the body.`,
        }],
        },{
          list: [{
            type: `b`,
            text: `Breathe.`
          },{
            text: ` Pranayama, or breathwork is essential for regulating the nervous system. When you start your morning with breath, you are creating a blank slate for your day. You are priming the body to operate out of a parasympathetic state, which is calm. Breathing in and out through your nose slows the heart rate and eases anxiety. A great energizing breath for your morning practice is “Kapalabhati.” Kapala means mind, and Bhati means glow. Who doesn’t want a mind glow up!? Start this breath by placing one hand on your belly. Inhale through the nose and expand the belly out. As you exhale, pretend like you are blowing out a candle with your nose. Naval contracts toward the spine. Blow out only through the nose. You can speed up this breath as it suits your body, to build energy and heat to start your day.`,
        }],
        },{
          list: [{
            type: `a`,
            link: `https://www.etsy.com/shop/pranawellnessstudio/`,
            text: `#GetMeditated`,
          },{
            type: `b`,
            text: ` Meditation.`
          },{
            text: ` opens up new realms of creativity in the brain. It physiologically creates new space in the brain. According to a Harvard study, meditation increases cortical thickness, which governs learning, thinking and memory. It decreases brain cell volume in the amygdala, which is behind anxiety, fear, and stress. Meditation deals with “past trauma.” This can be small traumas from a phone call 5 minutes ago, or bigger issues that have affected us in the past. It allows you to go into each day with a fresh outlook. Set an intention for the same. Mine is `
          },{
            type: `a`,
            link: `https://www.etsy.com/shop/pranawellnessstudio/`,
            text: `“I am free. I am calm. I am at peace.”`
          }],
        },{
          list: [{
            type: `b`,
            text: `Journal.`,
           },{
             text: ` The “monkey mind” is always busy! We are human, so we cannot stop the mind from running, unfortunately. This is a myth. But we can prevent the mind from controlling us, and learn to make sense of it all. By writing out your thoughts, ideas, worries, lists, and goals on paper, you allow them to be released from your brain. Dedicate some time in the morning to incorporate some self-study, or svadhyaya. Observe your thoughts and feelings, and put them on paper. One simple journaling practice that involves very little direction is “brain dumping.” This means you simply write down any and everything that comes to mind. It can be lists, ideas, frustrations, diary entries, food journals, or simply an account of your feelings at the moment. Name them. Whatever is allowing your monkey mind to race, put it on the paper. No journal prompts, no deep questions, just you.`,
        }],
        },{
          list: [{
            type: `b`,
            text: `Move.`,
          },{
            text: ` Movement is one of the best ways to ensure a healthy aging process. Our body is full of synovial fluids and muscle fascia that need movement and lubrication, always. The more you move, the less your muscle fascia will “stick.” When our bodies become accustomed to staying still, they lose essential tissues and cells, and overall mobility decreases. Take time to loosen the joints in the morning, stretch out your shoulders and hamstring, and spine. Sun Salutations and CARs are a great way to get the body tuned up each morning. Take a mindful walk! Something is better than nothing, and walking helps to increase awareness and energy, and is very meditative.`}],
        }]
      },{
        type: `p`,
        content: [{
          type: `b`,
          text: `The Challenge:`,
        },{
          text: ` When you wake up tomorrow morning, Take 3 deep breaths. Finish a full glass of water. DO NOT look at your phone for (at least) the first hour you’re awake. Notice what happens…...`}]
      }],
    }],
    showBlog: {},
    authors: [{
        id: `000`,
        firstName: "Stephanie",
        lastName: "Singleton",
        jobTitle: "Founder, Prana Wellness",
        headshotImage: "authors/stephanie-headshot.png",
        description: "Determined to learn from the source, I traveled to Rishikesh, India to study yoga, meditation, and breathwork under master yogis. India challenged me both mentally and physically, and the knowledge that I gained was far beyond yoga poses. It gave me a new perspective on wellness.",
        socialMedia: {
            facebook: "",
            instagram: "pranawellnessworks",
            linkedin: "",
            tiktok: "",
            twitter: "",
            youtube: "",
        }
    }]
  };  


  selectBlog = (e, blog) => {
     this.setState({
      showBlog: blog
    });
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
  scrollToTop = () => {
    const top = document.getElementById('scroll-to-bar');
    top.scrollIntoView({behavior: 'smooth'});
  }
  render(){
    const { emailContact, eventsList, textCopy, blogs, authors, showBlog } = this.state
    return(

      <ParentWrapper>
        {/******* scrollToTop id *******/}
        <ScrollToBar id="scroll-to-bar"></ScrollToBar>

        {/******* POP UPS *******/}
        <Nav toggleHamburger={this.toggleHamburger}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>
        <Switch><Route path={routes.MAIL} exact render={() => <EmailConfirmation/>}/></Switch>

        {/******* BODY SWITCHBOARD *******/}
        <Switch>
          <Route path={routes.MAIL} exact render={() => <></> }/>     
          <Route path={routes.ROOT} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"home"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/>
            <HomeMain scrollToTop={this.scrollToTop} /> 
          </> }/>
          <Route path={routes.BLOGS} exact render={() => <>
            <NavBar page={"white"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <FeatureBlogHeader selectBlog={this.selectBlog} blog={blogs[0]} author={authors[0]}/>
            <BlogMainIndex selectBlog={this.selectBlog}  blogs={blogs}/> 
          </> }/>  
          <Route path={`/blogs/${showBlog.id}`} exact render={() => <>
          { (showBlog.id) 
            ? <>
                <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
                <ShowBlog blog={showBlog} author={authors[0]}/> 
              </>
            : <Redirect to={routes.BLOGS}/> 
          }  
          </> }/>  
          <Route path={routes.FAQ} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <FAQMain/> 
          </> }/>  
          <Route path={routes.INFO} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.aboutPage}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.aboutPage}>
              <AboutMain />
            </HeaderMessage>
          </> }/>      
          <Route path={routes.SERV} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(true)} textCopy={textCopy.wellnessServices}/> 
            <ServicesMain toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.wellnessServices} scrollToTop={this.scrollToTop} eventsList={eventsList}/>
          </> }/>           
          <Route path={routes.WELL} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(true)} textCopy={textCopy.personalWellness}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.personalWellness}>
              <PersonalMain/>
            </HeaderMessage> 
          </> }/>       
          <Route path={routes.CORP} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.corporateWellness}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.corporateWellness}>
              <CorporateMain>
                <PurpleContent textCopy={textCopy.corporateBodyText} toggleEmailSignup={this.toggleEmailSignup}/>
              </CorporateMain>
            </HeaderMessage> 
          </> }/>  
          <Route path={routes.YOGA} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.yogaTherapy}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.yogaTherapy}>
              <YogaTherapyMain/>
            </HeaderMessage>
          </> }/>
          <Route path={routes.PREG} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.maternalHealth}/> 
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.maternalHealth} >
              <PrenatalMain/>
            </HeaderMessage> 
          </> }/>
          <Route path={routes.COACH} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.coachingSpeaking}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.coachingSpeaking}>
              <Speaking/>
              <Coaching/>
            </HeaderMessage> 
          </> }/>     
          <Route path={routes.EVENT} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(false)} textCopy={textCopy.eventsInformation}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.eventsInformation}>
              <EventsMain eventsList={eventsList}/>
            </HeaderMessage> 
          </> }/>   
           
          <Route path={routes.ROOT} render={() => <>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
              <HomeHeader toggleEmailSignup={this.toggleEmailSignup}/>
            <HomeMain /> 
          </> }/>
        </Switch>          

        <Footer toggleEmailSignup={this.toggleEmailSignup} scrollToTop={this.scrollToTop}/>
        
      </ParentWrapper>
    );
  };
};

const ScrollToBar = styled.section`
  width: 100vw;
  height: 0;
`;
const ParentWrapper = styled.div`
  text-align: center;
  @media screen and (max-width: 945px) {
  }
`;