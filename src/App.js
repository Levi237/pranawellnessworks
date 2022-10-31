import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import Nav                  from './components/nav/Nav';
import NavBar               from './components/nav/NavBar';

import AnnouncementBanner   from './components/banners/AnnouncementBanner'; 
import PurpleContent        from './components/banners/PurpleContent';

import EmailSignup          from './components/contact/EmailSignup';
import EmailConfirmation    from './components/contact/EmailConfirmation';
import SubscribePage        from './components/contact/SubscribePage'

import HomeHeader           from './components/home/HomeHeader';
import HeaderComponent      from './components/header/HeaderComponent';
import HeaderMessage        from './components/header/HeaderMessage'


import HomeMain             from './components/home';
import BlogMainIndex        from './components/blog';
import ShowBlog             from './components/blog/ShowBlog';
import BlogTopicIndex       from './components/blog/CategoryIndex';
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
import GroupMain            from './components/group';

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
      groupPrograms: {
        title: "THE JOY", 
        subtitle: "Journey", 
        image: "group_header.jpg",
        header: "8-Week Group Program to Eliminate Anxiety and Reclaim Your Joy",
        message: "now enrolling for October 2022 program",
        value: "contactRequest",
        backgroundColor: "purple",
        button: "Join Now!",
        link: "https://buy.stripe.com/fZecNvaET0G36uk6oo"
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
        button: "Schedule Free Consult",
        link: "https://calendly.com/stephaniepranawellness/yogatherapyconsult?back=1&month=2021-09"
      },
      maternalHealth: {
        title: "YOGA FOR",
        subtitle: "Maternal Health",
        image: "prenatal-header.jpg",
        header: "Prenatal Yoga Experience",
        message: "You can expect to learn something new each time, as we explore the pregnant body's challenges and strengths. Leave class feeling encouraged and motivated. We really want clients to honor their bodies in this practice, and do what feels good. We are  motivated to do this work because there is major inequity in maternal health care. We want to close that gap.",
        value: "contactRequest",
        backgroundColor: "white",
        button: "Join a Class",
        link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
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
        header: "Class Schedule",
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
        button: "Schedule a Call",
        link: "https://calendly.com/stephaniepranawellness/30min?back=1&month=2021-09"
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
      img: "/events/prenatal.png",
      link: "https://mailchi.mp/8c8ba20bd281/prenatal-mondays"
    },{
    //   title: "Postpartum Yoga",
    //   location: "virtual",
    //   info: "Build confidence, strengthen, and renew the body. ",
    //   price: "donation based",
    //   day: "Tuesday",
    //   when: "1st & 3rd ",
    //   time: "5p PT",
    //   img: "/events/postpartum.png",
    //   link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
    // },{
    //   title: "Yoga on the Harbor",
    //   location: "in San Diego",
    //   info: "Join us in person, for a fun community flow!",
    //   price: "donation based",
    //   day: "Wednesday",
    //   when: "1st",
    //   time: "6p PT",
    //   img: "/events/harbor.png",
    //   link: "https://yogaontheharbor.eventbrite.com"
    // },{
      title: "Yoga Flow",
      location: "virtual",
      info: "Join us from anywhere! All levels yoga flow.",
      price: "donation based",
      day: "Thursday",
      when: "Every",
      time: "5p PT",
      img: "/events/flow.png",
      link: "https://mailchi.mp/f44d1c9f43d6/yogflowthursdays"
    },{
      title: "Wellness Workshop",
      location: "virtual",
      info: "45 minutes",
      price: "donation based",
      day: "Friday",
      when: "Last",
      time: "10:30a PT",
      img: "/events/meditation.png",
      link: "https://thenalaverse.com/stephanie-singleton"
    }],
    //// BLOG HARDCOPY

    blogs: [{
      id: `221031`,
      title: `3 Ways to Ignite Your Digestive Fire`,
      category: `Nutrition`,
      publishDate: `Monday, October 31st, 2022`,
      subtext: `A healthy digestive system is the key to good health.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `When your gut is healthy, you are healthy. When a person’s metabolic fire dies, they will soon die. You cannot continue to live a healthy life with an unhealthy gut, so being mindful of your digestion will help improve longevity.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Warm water with lemon. `
          },{
            text: `Daily. Before you go to bed each night, boil some water so that it will be settled and warmed for you in the morning. `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/210726/5_ways_to_create_a_powerful_morning`,
            text: `As soon as you wake up`
          },{
            text: `, pour yourself a glass of the warm water, squeeze a lemon into it, and go start your day! This daily ritual will help to activate your digestive system and metabolism, encourage healthy elimination, and cleanse toxins. You will feel the difference!`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Eat for your dosha. `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/220221/get_to_know_your_body_what_are_doshas_`,
            text: `Are you eating for YOUR body`
          },{
            text: `, or are you just eating what you’ve been told is “healthy?” Ayurveda is an Eastern science of medicine that focuses on holistic, whole-body healing using your body’s natural systems. It suggests that each human body has a prominent dosha, for which it can be governed. When you begin to focus on eating for your specific body make up, your health and digestive process will be optimized.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Movement in the morning. `
          },{
            text: `Practice forward folds and twisting asanas (postures) as a way to promote healthy digestion and encourage elimination in the morning. A simple forward fold, connecting chest to thighs, with hands toward the floor will do wonders for your digestion, and also your lower back! A simple seated twist, like matsyendrasana, can aid in the digestive process as well as promote a healthy liver detox.`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          text: `Making small changes in your daily habits, leads to big changes in your overall health. Digestion plays a huge role in immunity and even mental health. Be mindful of what your gut is telling you, always. ` 
        }]
      },{
        tag: `img`,
        class: `medium`,
        num: 2
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Try these two simple poses in the morning!` 
        }]
      }]
    },{
      id: `221017`,
      title: `How To Use The Four Agreements to Improve Mental Health`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, October 17th, 2022`,
      subtext: `Learn to live by these four basic agreements and unlock your life of freedom.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `I first read `
        },{
          type: `a`,
          linke: `https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319`,
          text: `The Four Agreements, by Don Miguel Ruiz`
        },{
          text: `, as an assignment in one of my Yoga Teacher trainings. I had heard of it many times, but once I began to read, I knew it wouldn’t just be once. When life gets challenging, or I’m feeling stressed about something, I turn to these agreements. The book provides simple guidelines for life, to increase happiness and your sense of freedom.`
        }]
      },{
        tag: `ol`,
          list: [{
            item: [{
              tag: `b`,
              text: `Be impeccable with your word.  `
            },{
              text: `Speak truth to yourself and to others, and you will feel freedom. One of the five Yamas (restraints) of Yoga, Satya, suggests that one always act in truthfulness. This means being true to your own identity, being true to your word, and true to your values. Your word has the power to impact people in meaningful ways, through love, if used properly. Do not cause harm with your word. When you say what you mean, and mean what you say, you can avoid confusion and hurt.`          
            }]
          },{
            item: [{
              tag: `b`,
              text: `Don’t take anything personally. `
            },{
              text: `This one is perhaps the most important agreement you can make with yourself in pursuing personal mental well-being. It is also the most challenging. When someone does or says something to you that offends, it’s hard to release attachment and not take it personally. Nine times out of ten, that person’s actions or words are a reflection of them, not of you. Take a deep breath, and do some reflection before you react. In Yoga, self-study is called “svadhyaya,” and allows us to see into ourselves and become more self-aware. Reactivity is limiting, so strive to not limit yourself by taking things personally.`
            }]
          },{
            item: [{
              tag: `b`,
              text: `Don’t make assumptions. `
            },{
              text: `One definition of anxiety is assigning an outcome or story to something that has not yet occurred. Our imagination can get the best of us, and we allow the mind to spiral into scenarios that are typically not true, and never come to fruition. Instead of assuming, ask questions. Seek to understand, not to know. Save yourself some mental stress, and don’t assume.`           
            }]
          },{
            item: [{
              tag: `b`,
              text: `Always do your best. `
            },{
              text: `Show up with your A game, no matter the circumstance. You want to put your best effort forward, not only for others, but for yourself in order to grow and learn. Keep in mind, your best today may not be your best tomorrow. Think about the best way to show up for yourself today, and understand that the next day might provide challenges that beckon you to show up differently. The most important part of this agreement is to be non-judgemental of yourself. If you can look at yourself in the mirror and tell yourself you’ve done your best, that’s it. Do not criticize or compare. Instead, reflect on how you can learn and innovate and show up better next time.`
            },{
              tag: `br`
            },{
              tag: `br`
            },{
              tag: `img`,
              content: [{
                class: `wide`,
                num: 2
              }]
            }]
          }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Reflect on a recent challenge you faced. How could you have practiced these four agreements in that situation, and how would it have changed the outcome?` 
        }]
      }]
    },{
      id: `221003`,
      title: `How To Practice Mindful Eating`,
      category: `Nutrition`,
      publishDate: `Monday, October 3rd, 2022`,
      subtext: `Being mindful about your meals keeps you healthy.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Your digestion directly impacts your mental and physical body. When you practice mindful eating, you allow the food to do its job and feed you- mind, body, and spirit. `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Give thanks. `
          },{
            text: `Gratitude is always the best attitude. Whether you pray before meals, meditate, breathe deeply, or simply say thank you, acknowledging the food in front of you and giving thanks for its process makes it feel better going down. All foods have a life cycle, so expressing gratitude is a kind way to be present in the process.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Free from distractions. `
          },{
            text: `Most of us are guilty of eating our meals in front of the TV, with phone in hand, or while working on the computer. There is something luxurious about sitting down to eat and being distraction free. Allowing your mind and body to process (literally) what you are eating, will aid in your digestive process. Eating without distractions is also a great way to expand your mental awareness.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Slowly. `
          },{
            text: `My grandpa used to tell us to chew each bite 65 times before swallowing! When you’re eating too fast, your digestive system has to play catch up and usually cannot keep up. Your body is not able to properly process food, thus gas, acid, and overall discomfort are the result. When you eat slowly, you allow your body to properly work for you, and turn your food into energy.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Drink your water. `
          },{
            text: `Before each meal, you should fill your stomach with ¼ water. This helps to activate your digestion, but also prevents overeating. Rather than chugging water simultaneously with your food, allow it to flush out toxins afterwards.`
           }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Eat foods that agree with you. `
          },{
            text: `Every BODY is different, so that means that the food we eat does not affect each person in the same way. Food is meant to nourish the body and provide energy, but the way it is received in each body may vary. It is so important to understand what your body needs to feel nourished and balanced, and what specific things might make you feel out of balance. Eat foods that make sense for your `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/220221/get_to_know_your_body_what_are_doshas_`,
            text: `dosha`
          },{
            text: `.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Try a no distractions dinner tonight!  ` 
        }]
      }]
    },{
      id: `220919`,
      title: `5 Ways to Improve Mobility`,
      category: `Functional Fitness`,
      publishDate: `Monday,  September 19th, 2022`,
      subtext: `Movement is medicine, and can add years to your life.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Mobility is defined as your muscle range of motion. Without mobility, stagnation appears in the body, and muscles can atrophy causing pain and disease. To be mobile is to be able to move your body in a way that increases circulation and optimizes function. `
        },{
          tag: `a`,
          link: `https://www.instagram.com/reel/CgfZAPtFF_G/?igshid=NmNmNjAwNzg=`,
          text:`Movement`
        },{
          text:` can help increase your lifespan, by giving your body the nourishment it needs and maintaining its natural functions.`
        },{
          tag: `br`
        },{
          tag: `br`
        },{
          tag: `b`,
          text: `Here are 5 ways to improve your mobility:`
        }]
      },{
        tag: `ol`,
            list: [{
              item: [{
                tag: `b`,
                text: `Stretch daily. `
              },{
                tag: `a`,
                linke: ``,
                text: `Stretching`
              },{
                text: ` is so important to our health and the functional movement of our bodies. When we stretch we are waking up the muscle fascia that has become tight and stagnant while we sleep. Check out this quirky explainer on `
              },{
                tag: `a`,
                link: `https://www.youtube.com/watch?v=vmrA3mMATgw`,
                text: `how muscle fascia works`
              },{
                text: ` and see why stretching is so important!`
              }]
            },{
              item: [{
                tag: `b`,
                text: `Find your end range of motion. `
              },{
                text: `And then back off. The human body is capable of many things. Moving is an artform. If you are trying to increase mobility in a specific part of your body, it’s important to identify your limits and explore them. Once your muscle gets to its widest range of motion, create some resistance (gravitational force), and then relax the muscle back to its resting state. Doing this will train your muscles to become more open and mobile.`
              }]
            },{
              item: [{
                tag: `b`,
                text: `Regression and progression. `
              },{
                text: `Think of an infant learning to sit up on their own for the first time. Then they begin to crawl, then stand, then walk, then run. Each movement builds upon the last. This is progression. Try taking a complex movement, or something your body is currently challenged by. This can be getting up from a chair or stepping on a curb. How can you break down the micro movements within that action? Focus on efficiency, and functional movement. Taking some steps backward, at first, can progress you forward.`
              }]
            },{
              item: [{
                tag: `b`,
                text: `Go for a swim! `
              },{
                tag: `a`,
                linke: `https://www.instagram.com/reel/ChskFd9lYUe/?igshid=NmNmNjAwNzg=`,
                text: `Swimming`
              },{
                text: ` allows all of the muscles in the body to be engaged and increases blood flow and lung capacity. By engaging all of your muscles, you are building stamina within your body, and encouraging functionality.`
              }]
            },{
              item: [{
                tag: `b`,
                text: `Get more massages! `
              },{
                text: `The way you care for yourself is important, and contributes to your overall health. When you invest into your body, it will pay you back tenfold. Massage is a great way to open up muscle fascia, prep your body for increased movement, or recover from stress. If booking a massage isn’t in the budget, grab one of those massage guns from online, or find a friend with great hands!`
              },{
                tag: `br`
              },{
                tag: `br`
              },{
                tag: `img`,
                content: [{
                  class: `wide`,
                  num: 2
                }]
              }]
            }]
        },{
          tag: `p`,
          content: [{
            tag: `br`,
          },{
            tag: `b`,
            text: `The Challenge: ` 
          },{
            text: `Pretend like you’re a baby again and go through all the steps of growth, and pay special attention to what movements challenge your body the most!` 
          }]
        }]
      },{
      id: `220905`,
      title: `How to Use Yoga to Decrease Chronic Pain`,
      category: `Yoga`,
      publishDate: `Monday, September 5th, 2022`,
      subtext: `The tools of yoga can help you eliminate chronic pain.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Pain is your body’s reaction to something that it perceives as harmful. It is telling you that something is different. When we experience pain, it often triggers a stress response, causing more breakdown in the function of your nervous system that keeps you healthy.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `Using the tools of yoga, you can `
        },{
          tag: `a`,
          link: `https://www.instagram.com/reel/ChnMa4xl46l/?igshid=NmNmNjAwNzg%3D`,
          text:`decrease the pain response`
        },{
          text:` by activating your parasympathetic nervous system, your rest and digest function.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Breathe. `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/210809/breathing_for_your_body`,
            text: 'Breathing'
          },{
            text: ` is fundamental for your overall health and wellbeing. The mechanics of our breath is indicative of mental and physical health. Someone with shallow, labored breathing, shortness of breath, or tightness across the chest is likely experiencing some sort of pain. Breathing from your belly, using nostril breathing, extended exhales, and correct posture will all contribute to decreasing pain in your body.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Mind your thoughts. `
          },{
            text: `Visualization is a powerful tool in healing from chronic pain. What you focus on increases, so it’s important to focus on what you ideally want to see in your body. Many people who’ve experienced long term, chronic pain do not trust their bodies. It is important to rebuild that relationship, and begin to increase awareness. Visualizing your body free from pain is an important factor in reprogramming the mind, because your brain may no longer discern between movement that is actually happening and pain.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Move accordingly. `
          },{
            text: `Sometimes when the body experiences pain, movement can be intimidating. The mind may become stuck in the safety that is stillness. Movement helps to break up stagnation in the body, which causes pain. When you find movements that are accessible to your body, you can progress into `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/yoga_therapy`,
            text: `pain free exploration`
          },{
            text: `. Asana, the physical practice of yoga, can naturally decrease pain and release tension.`
           }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: ` Sit up straight and take a big deep breath in through your nose. Exhale out through your nose and make it longer than the inhale. How do you feel?` 
        }]
      }]
    },{
      id: `220815`,
      title: `Cooling Foods to Beat Summer Heat`,
      category: `Nutrition`,
      publishDate: `Monday, August 15th, 2022`,
      subtext: `Whether you’re trying to calm your pitta dosha, or simply trying to beat the summer heat, here are some foods that will help you stay cool this summer.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `In Ayurveda, foods are characterized by their various qualities. Foods that have cooling qualities are great to eat during the summer heat, or when your pitta dosha is imbalanced. Pitta is the fire energy in your body. It ignites passion, and love, and ambition, but when imbalanced it can cause "`
        },{
          tag: `a`,
          link: `https://www.instagram.com/p/ChDKNwtvwLE/?igshid=YmMyMTA2M2Y=`,
          text:`inflammation in your gut`
        },{
          text:` acid, and excessive heat in the body.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `If you experience indigestion, gas, acid reflux, diarrhea, heavy sweating, or oily skin, chances are you are pitta dominant or have a pitta imbalance. You can use food as a way to calm your system, and invite in some cooling energy.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `a`,
          link: `https://pranawellnessworks.com/blog/220530/3_tips_for_summer_wellness`,
          text:`Summertime`
        },{
          text:` can have us all feeling like we are going to overheat at times, so being mindful of the energy you’re creating through the food you consume is important. Cooling foods can help your body to feel more at ease during the summer months.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `Eating foods that are cooling to the gut will allow the pitta dosha’s “fire” to be calmed. Foods that are water-based are a great place to start. `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Water-based foods: `
          },{
            text: `Cucumbers, watermelons, honeydew melons, cantaloupe, coconut`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Cooling fruits: `
          },{
            text: `Pears, apples, avocados, (red) grapes, pomegranates, strawberries, lime`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Cooling veggies: `
          },{
            text: `Broccoli, cabbage, celery, kale, peas, potatoes, cauliflower, zucchini, squash`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Cooling grains: `
          },{
            text: `Oats, quinoa, Basmati rice`
           }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Legumes: `
          },{
            text: `Red lentils, black-eyed peas, garbanzo beans, pinto beans`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          text: `As far as meat, turkey has cooling qualities, whereas beef and chicken are heating foods. ` 
        }]
      },{
        tag: `p`,
        content: [{
          text: `When making your meal choices this summer, keep in mind the characteristics of your food, and how they might make your gut feel. Stay cool by allowing yourself more of what feels light and water-based, vs heavy, hot foods. Fresh is always the way to go!` 
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          tag: `a`,
          link: `https://chopra.com/articles/a-pitta-balancing-diet-for-summer`,
          text: `Create a new meal`
        },{
          text: ` this week using all cooling ingredients! ` 
        }]
      }]
    },{
      id: `220725`,
      title: `Yoga for Athletic Performance`,
      category: `Yoga`,
      publishDate: `Monday, July 25th, 2022`,
      subtext: `An athletic body requires special attention and understanding.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `I recently gave a workshop at IDEA World Convention in Vegas, on "`
        },{
          tag: `a`,
          link: `https://www.instagram.com/reel/CgfZAPtFF_G/?igshid=YmMyMTA2M2Y=`,
          text:`Yoga for Athletes`
        },{
          text:`." My goal was to share with athletes, those who train them, and those aspiring to be them that Yoga is so much more than the poses. Yoga can help enhance athletic performance, prevent injury, and increase mind body awareness. 
          `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Biomechanics. `
          },{
            text: `Knowing and understanding how the body functions is essential for athletic performance. With an understanding of anatomy, you can ensure safety and help prevent injury. Alignment, stability, core strength, flexibility, mobility, etc are all ways in which the body communicates. Becoming adept in each of them will help an athletic body function optimally. `
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Key Action. `
          },{
            text: `What is they key action of the sport in which you’re training? Is it a squat, a pitch, a punch, a swing, or a kick? Keeping this in mind will help you to determine what yoga postures will make this key action easier on the body. For example, if you’re a `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/Cgm8YUcvAm8/?igshid=YmMyMTA2M2Y=`,
            text: `boxer`
          },{
            text: `, punching is the primary action, which uses arms and shoulders. A yoga pose that would be helpful to a boxer’s body would be bridge pose, because it is shoulder opening.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Key Challenge. `
          },{
            text: `Where is the most risk for injury in this sport, or what is most challenging? Preventing injury can increase athletic performance and keep you playing longer. By identifying where the body is most challenged, you can find poses that will create stability in the joints and provide preventive intervention. For example, if you run track, and sprained ankles are very common, you can incorporate poses that promote balance in order to build more ankle stability. `
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Mind body union. `
          },{
            text: `By definition, Yoga is the union between mind and body. If you train your mind, the body will follow. Breathing and meditation are tools of yoga that help to bring about that union. Breathing helps to maintain your nervous system, create balance, and decrease stress. Meditation keeps your brain tissues healthy and allows you to be more productive and focused.`
           }]
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
          }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Think of 3 yoga poses that will help you do a particular movement better!` 
        }]
      }]
    },{
      id: `220711`,
      title: `5 Ways to Beat the Monday Blues`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, July 11th, 2022`,
      subtext: `Instead of viewing Monday as the end of your weekend, view it as the start of something new.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Mondays are often a dreaded day by many. It's the first day of the work week, and for lots of people, that means going back to a routine that they're not in love with. What happens when we create routines that make us feel good each day?`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Make your daily routine great.`
          },{
            text: ` It's so important to create habits and systems that nurture your spirit. Find what brings you joy, and do more of that. Having a healthy, sustainable routine will allow you to feel energized for each day, not just the weekend. `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/210726/5_ways_to_create_a_powerful_morning`,
            text: `Enjoy your mornings`
          },{
            text: ` by practicing self-care and movement daily. Once you have a solid morning routine that promotes ease, the rest of your day will feel more inviting. Start with very small changes in your daily schedule, and watch those small adjustments become big changes.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Use Sunday to plan.`
          },{
            text: ` Make a nice cup of herbal tea, grab your journal and planner, and tap in on Sunday evenings. Think of this time as a gift you’re giving to yourself, so you can be less stressed during the week. Take some time to make a plan and set goals for the week. Write out your to-do lists and a detailed schedule. Once it’s all in front of you, you will feel less burdened by the tasks on Monday.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Count your wins.`
          },{
            text: ` During your morning  `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/220404/5_unique_ways_to_practice_self-care`,
            text: `self-care routine`
          },{
            text: ` on Monday, take a moment to reflect on your wins from the prior week. Use those to motivate you, and hold you accountable for the goals that you’ve set for yourself in the new week. Make a list of all the things you did well in the week prior, however small, and give yourself your flowers for it!`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Get a good night's rest. `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/210823/how_to_sleep_better`,
            text: `Sleeping well`
          },{
            text: ` can uplevel your morning on any day, but it’s especially important to get some good sleep on Sunday night, so that your week gets off to a good start. Limit your screen time before bed. Try to eat dinner a bit earlier. Journal at night to allow your mind to release everything it’s thinking onto paper. When you go to sleep with a clear mind, you wake up feeling more rested and energized. `
           }]
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
          }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `This Sunday evening is yours! Plan your week, and look forward to Monday!` 
        }]
      }]
    },{
      id: `220627`,
      title: `How to Decrease Stress`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, June 27th, 2022`,
      subtext: `Our world today is full of stressors that can trigger anxiety and illness.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Stress is at an all time high these days with work-life balance, a pandemic, inflation, politics. All of it is affecting our ability to be mindful and completely healthy. Stress is the root cause of so many illnesses and physical pain. It’s all `
        },{
          tag: `a`,
          link: `https://pranawellnessworks.com/yoga_therapy`,          
          text: `preventable`
        },{
          text: `. The World Health Organization estimates stress costs American employers $300 Billion dollars in healthcare costs, per year. BILLION!          `
        }]
      },{
        tag: `h2`,
        content: [{
          text: `Here are a few things you can do to be more mindful of daily stressors, and how to eliminate them. `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Be mindful of what you ingest.`
          },{
            text: ` Between news and social media, our minds are being inundated with things that are not great for our mental health. Our brains are too used to trauma. Setting a boundary with yourself, and being conscious of what you allow into your space, and when, is so important. Instead of waking up to turn on the news or scroll social media, take control of your day by ingesting more mindful things. Read a book, journal, meditate, breathe.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Take mindful walks.`
          },{
            text: ` Walking daily can add years to your life. It helps to elevate your mental wellbeing, and also promotes physical and cardiac health. Try walking without a real goal. Just walk, observe, listen, and feel. Notice new things in your neighborhood each day. You’ll be surprised at how your mood changes after each walk.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Breathe in and out through your nose. `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CZH6H6CBN_e/?igshid=YmMyMTA2M2Y=`,
            text: `Nostril breathing`
          },{
            text: ` helps to reset your nervous system in moments of stress. It activates your parasympathetic nervous system, which is the “rest and digest” trigger. When you breathe in and out through the nose, it allows your body to feel calm more quickly, instead of exerting energy out of your mouth.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Set boundaries.`
          },{
            text: ` It is so important to have clear boundaries with yourself and others, and state them clearly. `
          },{
            tag: `a`,
            link: `https://www.amazon.com/Boundaries-When-Take-Control-Your/dp/0310585902/ref=asc_df_0310585902/?tag=hyprod-20&linkCode=df0&hvadid=312045581420&hvpos=&hvnetw=g&hvrand=17569300814460995702&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010934&hvtargid=pla-568945958311&psc=1&tag=&ref=&adgrpid=62837065180&hvpone=&hvptwo=&hvadid=312045581420&hvpos=&hvnetw=g&hvrand=17569300814460995702&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010934&hvtargid=pla-568945958311`,
            text: `Boundaries`
          },{
            text: ` may sound cliche, but when you don’t have them you risk inviting negative energy into your space. Boundaries for yourself can look like making sure you get adequate sleep each night. Boundaries with others is being able to say no to things you do not have the capacity for.`
           }]
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
          }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Write a list of your boundaries for yourself and others, today! ` 
        }]
      }]
    },{
      id: `220613`,
      title: `How to Live Fearlessly`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, June 13th, 2022`,
      subtext: `Fear can motivate or hold us back from many things.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Anxiety comes from fear of the unknown. We assign an outcome or storyline to something that has not yet happened, which causes stress in our body and mind. Living fearlessly doesn’t mean you’re never apprehensive or fearful of something, it means you simply show up with an open heart.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Practice non-attachment.`
          },{
            text: ` One of the `
          },{
            tag: `a`,
            link: `https://chopra.com/articles/following-the-5-yamas-to-lead-a-fuller-life`,
            text: `5 Yamas of Yoga`
          },{
            text: ` is `
          },{
            tag: `i`,
            text: `“aparigraha,”`
          },{
            text: ` which is Sanskrit for non-greed or non-attachment. Aparigraha suggests that instead of becoming mentally married to an idea or outcome, we allow things to breathe and be. Attachment breeds anxiety because we expect one specific thing to happen, and when it doesn’t we feel out of control. Welcome the possibility of various outcomes, and you will begin to break down fear.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Create space.`
          },{
            text: ` When you create both mental and physical space in your life, there is more room for new things to come in, and less paralyzation in fear. `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CdEOkeTFVp8/?igshid=YmMyMTA2M2Y=`,
            text: `Create space mentally`
          },{
            text: ` through daily meditation. Meditation opens new realms of creativity in brains, and allows for mental space to be freed. Cleaning and organizing your physical space has been proven to decrease mental clutter and reduce stress of the mind. You’ll be more capable of making decisions with clarity.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Visualization.`
          },{
            text: ` Seeing yourself in a certain way can have a big impact on releasing fear. `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CewCJLhFvfj/?igshid=YmMyMTA2M2Y=`,
            text: `Visualizing letting go`
          },{
            text: ` of things that no longer serve you, creating images of yourself in the place you want to be, with the things you need, will go a long way in living fearlessly.`
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `Operate in abundance.`
          },{
            text: ` There is always enough to go around. There is always a way forward. The difference between a growth mindset and a fixed mindset is that one has clear roadblocks that are immovable. A growth mindset leaves room for various paths and new opportunities. When you operate in abundance, you’re able to see a full picture of possibilities, vs living with lack in mind. `
           }]
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
          }]
      },{
        tag: `p`,
        content: [{
          text: `Fear is simply excitement without breath. So take a deep breath, and find excitement in the possibility of newness and growth. Live fearlessly! `
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Clean your physical space today! Observe how you feel mentally afterwards.` 
        }]
      }]
    },{
      id: `220530`,
      title: `3 Tips for Summer Wellness`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, May 30th, 2022`,
      subtext: `As we enter into a new season, your body and mind may require a different kind of attention.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Summer is upon us and it’s a time to welcome in a new energy, new light, and warmth. It’s also a great time for mental revival. Reflect on the things that you’d like to shed going into this new season, or perhaps things you want to put more energy into. Here are 3 ways to elevate your personal wellness this summer. `
        }]
      },{
        tag: `ol`,
          list: [{
            item: [{
              tag: `b`,
              text: `Stay hydrated. `
            },{
              tag: `a`,
              link: `https://spoonuniversity.com/lifestyle/10-infused-water-recipes-and-their-benefits`,
              text: `Sexy Water`
            },{
              text: ` is a thing! I love using this phrase, as it makes water feel more attractive and enticing. Sexy Water is a way to elevate your hydration experience in a refreshing way. It adds some variety to your water intake. You can use any mix of fresh fruits and herbs, with various health benefits. As it gets hotter outside, your body will require more hydration. Drinking water is an easy natural way to flush out toxins and keep your joints lubricated. `          
            }]
          },{
            item: [{
              text: `Find fun outside. After a crazy couple of year, we are finally back outside just in time for summer. Many of us have spent so much time within 4 walls lately, and that can really take a toll on your mental health, and create stagnation in the physical body. Explore new ways to be outside. Rollerblading, taking long walks in your neighborhood, biking, or going to restaurants with patios. `
            },{
              tag: `a`,
              link: `https://www.eventbrite.com/e/summer-time-chi-yoga-and-wellness-tickets-352847214517`,
              text: `Taking outdoor classes`
            },{
              text: ` is a great way to be outside and hit your fitness goals!  `
            }]
          },{
            item: [{
              text: `Eat well. Summer is the time when lots of fruits come into season. Explore some that are local to your area, and buy organic. Berries, for example, are full of antioxidants, which help prevent tissue damage and are anti-inflammatory. Your circadian rhythm can change this time of year, so It’s important to be mindful of your energy levels and metabolism. Get a balanced and nutritious start to your day with an energizing breakfast, like a green smoothie. Pay attention to your body’s reaction to certain foods, and give it what it needs or cut out what doesn’t feel good. `           
            }]
          }]
      },{
        tag: `img`,
          class: `medium`,
          num: 2
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Make a list of 5 new healthy options for breakfast you’d like to try in the next couple of weeks. Make sure they are fresh and nutrient rich! ` 
        }]
      }]
    },{
      id: `220516`,
      title: `How Posture Affects Breath`,
      category: `Functional Fitness`,
      publishDate: `Monday, May 16th, 2022`,
      subtext: `The way your spine is aligned directly affects the way you breathe.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Try to sit down and hunch over your knees, with your shoulders rolled inwards. Now try to take a deep breath. Notice the labor in the body. Now, sit up straight, lengthen the spine and the crown of the head towards the ceiling. Open the chest and roll the shoulders back and down the spine. Now take a deep breath in and out through the nose. Notice the difference. Notice the calm.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `Your breathing habits can absolutely affect your posture and vice versa. An erect spine and open chest promotes a steady flow of breath through the body. People who have a chronic habit of holding their breath or breathing from a closed posture tend to develop tension and pain in their body. This pain often presents in the shoulders, upper back, neck and chest. Sometimes pain in the body can be relieved by proper breathing.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `A kyphotic spine (one that is hunched over) cannot allow for space to breathe. It is compressing the diaphragm and chest cavity, and shortening your intercostals. Breathing with a lengthened spine, in and out through your nose not only promotes calm, but allows your breath to flow more easily through your body. This also promotes healthy blood circulation.`
        }]
      },{
        tag: `h2`,
        content: [{
          text: `Here are 3 ways to support better posture, through your breath:`
        }]
      },{
        tag: `ol`,
          list: [{
            item: [{
              text: `Inhale, raise your arms over head, exhale cactus them open. As you exhale, draw your elbows together and lift your chest.`          
            }]
          },{
            item: [{
              text: `Try seated cat/cow pose while working at your desk. Straighten your spine. Both feet flat on the ground. Palms facing down on your knees. Inhale, lift your chin and chest, exhale round your spine, tuck your chin. `
            }]
          },{
            item: [{
              text: `Arms out wide like a T. Inhale thumbs up, exhale thumbs all the way down. Repeat! `           
            }]
          }]
      },{
        tag: `img`,
          class: `wide`,
          num: 2
      },{
        tag: `p`,
        content: [{
          text: `Each of these simple exercises will help you to open your chest and shoulders and reverse the effects of poor posture, while also syncing your breath to movement. You’ll feel more calm and open. `
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `The Challenge: Try each of these today!` 
        }]
      }]
    },{
      id: `220502`,
      title: `Mental Health at Work`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, May 2nd, 2022`,
      subtext: `Employee health and wellbeing should be top priority.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Workplace stress is at an all-time high. Employers struggle to retain their employees, because the environment their working in is not conducive to decreasing stress. American employers spend over $3 billion each year on healthcare costs, due to stress related illnesses. Employees are sick mentally and physically.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `p`,
          content: [{
            text: `Promoting health and `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/services_corporate`,
            text: `wellness at work`
          },{
            text: ` can help increase productivity and decrease stress. It will uplevel employee engagement and morale, and promote healthy work-life balance. Employees are more creative when they’re rested and healthy. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `You must be an advocate for yourself! Inquire more about your health benefits, wellness program and incentives, EAP, team building. If your company doesn’t have any of these things, ask, WHY NOT?! You can set the new standard and `
          },{
            tag: `a`,
            link: `https://pranawellnessworks.com/services_corporate`,
            text: `suggest them`
          },{
            text: ` to your team. `
          }]
        },{
          tag: `p`,
          content: [{
            text: `Don’t eat lunch at your desk, while working. Walk away, take a break. Consume your food with mindfulness and slowness in mind. `
          }]
        },{
          tag: `p`,
          content: [{
            text: `Promote open and clear communication, but also set healthy boundaries with yourself, your co-workers, and with your boss. Protect your energy at work by not letting others dictate how you show up. You can be mindful of your energy by `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CcOBHXBJjCA/?igshid=NDA1YzNhOGU=`,
            text: `practicing breathwork`
          },{
            text: ` while working, and taking `
          },{
            tag: `a`,
            link: `https://www.instagram.com/tv/CbX87_JFQVo/?igshid=NDA1YzNhOGU=`,
            text: `short meditation breaks`
          },{
            text: `. This will help to calm the nervous system, increase focus, and make you more present. `
           }]
        },{
          tag: `p`,
          content: [{
            text: `Get up and move often! Sitting is the new cigarette and really increases the risk of long-term pain. Take short movement or stretch breaks every hour.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Next time you’re feeling stressed at work, take 5 minutes to walk about from your computer, take 3 deep breaths, and do a short stretch.  ` 
        }]
      }]
    },{
      id: `220404`,
      title: `5 Unique Ways to Practice Self-Care`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, April 4th, 2022`,
      subtext: `Self-care is the best disease prevention.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Self-care has become a word used regularly when talking about health and wellness. It’s often overused, and much of the focus has been on surface level care, like bubble baths and face masks. These are great! But we have to do the deeper work too. If the past two years have taught us anything, it’s that we must take care of ourselves. Self-care is taking care of yourself- body, mind, and spirit, so that you can be well enough to show up for yourself and others.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `1. Honor Your Body`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `What does this mean exactly? It means to slow down and LISTEN actively to what your body is telling you. It’s always saying something. It will let you know what it needs. Honoring your body can mean taking naps when you feel tired, eating foods that make you feel good and increase your energy, or simply slowing down physically. When your body speaks, listen.`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `2. Find Your Dosha`,
          }]
        },{
          tag: `p`,
          content: [{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/21022022/What_are_Doshas?`,
            text: `Doshas` 
          },{
            text: ` are the energetic forces that flow through your body- kapha, pitta, and vata. Each of use are typically dominant in one dosha. Once you identify what yours is, and perhaps where there may be some imbalance, you can adjust your lifestyle and feel better. You can eat foods that nourish your particular body makeup, and create a lifestyle and habits that promote and sustain equilibrium and best health.`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `3. Take Mindful Walks`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Do this daily, and your physical body, mind, and nervous system will thank you. Leave your phone behind, or turn it to Do Not Disturb. Don’t count your steps or time yourself for fitness. Just walk. Observe. And breathe. Try to observe one new thing (about the same place) each time you walk. Be mindful of the sounds around you, the colors, the smells, the familiarity of certain places and the emotions they bring up. Take a 15 minute walk right in the middle of your day, daily! It will spark creativity, refresh your energy, and increase mobility and blood flow.`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `4. Stretch`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Our bodies crave movement. Stagnant energy can build up in the body, and cause pain. By incorporating a 5 minute `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CSMy0X-lprj/?utm_medium=copy_link`,
            text: `stretch practice`
          },{
            text: ` throughout your day, you can increase blood flow and mental focus, allow your muscle fascia to loosen, and increase overall flexibility. Even with a regular workout routine or yoga practice, stretching is essential in order to nurture your body and maintain optimal functionality. Try 5 minutes in the morning, a few standing stretches during work hours away from your desk, and 5 minutes before bed. Feel the difference. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `5. Learn something new`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Every day! One of the primary habits of highly successful people is their commitment to learning. Learning something new each day can increase your confidence and your awareness. It will allow your mind to wonder, be free, and decrease stress. Learning daily doesn’t have to be hard. You can listen to an hour of a podcast or an audiobook that is mentally enriching in some way. You can spend 30 min using a new language app. You can try a new recipe. You can attend a webinar or event. You can try an activity you’ve never done before. Get curious, and be willing to learn.`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `br`,
        },{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Pick one activity that is completely new to you, and do it this month! ` 
        }]
      }]
    },{
      id: `220321`,
      title: `How to Increase Hip Mobility`,
      category: `Functional Fitness`,
      publishDate: `Monday, March 21st, 2022`,
      subtext: `So much stress is stored in our hips. It’s important to keep them lubricated and mobile to avoid future complications or hip replacement.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `In order to increase hip mobility, you must first understand the interconnectedness of the body. Your hips, knees, and low back are all connected, so they should be strengthened and treated simultaneously. `
        },{
          tag: `a`,
          link: `https://pranawellnessworks.com/yoga_therapy`,
          text: `Yoga Therapy`
        },{
          text: `clients who have come to me for knee problems, actually have a hip problem. Pain or injury in the hip joints can leave to overcompensation on one side and put pressure on the knees. Over time, this will diminish your cartilage tissue in the knee. Similarly, clients who experience low back pain, often develop hip issues. `
        },{
          tag: `br`
        },{
          text: `So what’s the solution to this compounding pain? Increase your hip mobility and strengthen your knees and low back.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Deep relaxation and long holds.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Deep relaxation and long holds. Here are a few poses that promote opening of the hips. Use props such as blankets, yoga blocks, or bolsters, to support your body. It’s important to relax into these poses and hold them for longer periods of time. 3-5 minutes each. With every exhale, allow your body to soften a little more, and become open. `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CZNPN7kB7nT/`,
            text: `By resting in these poses`
          },{
            text: `, your hips will alert you to where the tightness may be, and where you can potentially go deeper.`,
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `p`,
          content: [{
            text: `Images courtesy of Tummee.com`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Knees. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Strengthening the back of your knees is key to stabilizing the hip joints.  Lie on your back and grab the back of your hamstring for some leg extensions. Bending the knees in and out. This exercise can also be done in a chair. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Lower Back. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Pain in your lower back can cause a gait discrepancy in the way you walk. Going on walks regularly, practicing glute bridges, and standing forward folds will all help to release low back tension. `
          },{
            tag: `br`
          },{
            tag: `br`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Hold each of the pictured poses for 3 minutes today, and observe how your hips feel before and after. ` 
        }]
      }]
    },{
      id: `220307`,
      title: `3 Ways to Decrease Anxiety`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, March 7th, 2022`,
      subtext: `Mental health struggles are at an all-time high, and anxiety is the number one culprit.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Anxiety can manifest in both the physical and mental body. It can lead to chronic pain and even disease if left unchecked. My work in `
        },{
          tag: `a`,
          link: `https://pranawellnessworks.com/yoga_therapy`,
          text: `Yoga Therapy`
        },{
          text: ` has focused on discovering the root cause of anxiety, rather than just treating the symptoms. In the last two years, anxiety is at an all-time high in the world. I have seen this first hand with my clients. `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Reframe. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `A great way to decrease anxiety is to acknowledge that it is something you’re experiencing in this moment, it does not belong to you. Anxiety, like other emotional occurrences, is not permanent. It is not a part of your identity. It does not define you. When you’re able to view anxiety as a temporary experience, you’re better able to see its end. Instead of “I have anxiety,” let’s reframe to say “I am experiencing anxiety right now, but it will pass.” `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Check your breath. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Your nose is for breathing and your mouth is for eating! Breathing in and out through your nose helps to calm your nervous system and replenish energy that has been depleted from the body. `
          },{
            tag: `a`,
            link: `https://www.instagram.com/reel/CZH6H6CBN_e/?utm_medium=copy_link`,
            text: `Nostril breathing`
          },{
            text: ` promotes calm, decreases stress quickly, and allows for rest. Are you sitting at your desk breathing out of your mouth right now? Close it! `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Don't write the story yet. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `By definition, anxiety is the fear of something that has yet to happen. That fear becomes debilitating, and interrupts the normal function of your nervous system. When your brain fixates on something that has not happened yet, the outcomes are endless, and typically not indicative of the truth. What you focus on manifests, inevitably. Instead of assigning an outcome, try staying in the present moment through your breath. You have the ability to be the co-creator in your life. Manifest,what you DO want to see happen.`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Take some time to sit and write down a page or more of what your perfect day would look like. Be very specific and detailed! Sky's the limit! ` 
        }]
      }]
    },{
      id: `220221`,
      title: `Get to know Your Body. What are Doshas? `,
      category: `Nutrition`,
      publishDate: `Monday, February 21st 2022`,
      subtext: `Knowing your body better can help you live a more healthy and balanced life.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Doshas are three energies present in every body. They manifest differently in each person, and depending on their constitution, affect various aspects of your lifestyle and health. `,
        },{
          tag: `br`
        },{
          tag: `br`
        },{
          text: `Each body is made up of Kapha (water and earth), Pitta (fire), and Vatta (air and space). In the Eastern science of Ayurveda, there are 5 elements are found in every living being: ether, air, fire, water, earth.`
        },{
          tag: `br`
        },{
          tag: `br`
        },{
          text:`The way each dosha presents in your body can give insight into what YOUR body may need specifically, and how you can make healthy lifestyle choices to live in optimal health. When in balance, each dosha has beautiful strengths. When there is imbalance in your doshas, pain, disease, and mental and physical ailments can manifest.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Pitta:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `The fire within. Pitta energy controls your metabolism, energy, and digestion. Pitta dominant doshas are often type-A personalities. They are passionate and outgoing. They tend to have a strong appetite, and welcome competition.`
          },{
            tag: `br`
          },{
            tag: `br`
          },{
            text: `When out of balance, someone who is pitta dominant may have indigestion or acid in the belly, and may experience inflammatory conditions. When in balance, they feel as though they can eat anything, and digest well. Imbalance in Pitta can also mean they are quick to anger or short tempered. Pitta’s tend to run hot in body temperature. Other characteristics of Pitta are hot, light, sharp, pungent, and acidic. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Vata: `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Water. body composition may be more naturally lean. Vata balances the nervous system and elimination in the body.  Vata’s may tend to have dryer skin or thinner hair. Vata’s are easily cold. Other characteristics of vata are dry, quick, moving, or rough. Vatas in balance tend to be energetic and move around a lot. They are creative spirits and enthusiastic. Vatas love conversation. When out of balance, Vatas will experience stress from all their activity, and perhaps insomnia. Their minds may race. Vata benefits from routine.  `
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Kapha:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Earth. Kapha dictates structure of the body and how the cells are formed. Kapha protects the body. Kapha types bone structure tends to be larger or more dense. Characteristics are slow and steady, solid, oily, and cold. Kaphas sleep well and have normal digestion. They may cary excess weight. When Kapha every is balanced, they are supportive and loyal. When out of balance, they may become stubborn or resistant to change. Kaphas need stimulation and warmth. `
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `There are numerous nuances to doshas and how they affect your body and personality. So there will be a part 2 of this article! `
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Find you what your dosha is! `
        },{
          tag: `a`,
          link: `https://www.banyanbotanicals.com/info/dosha-quiz/`,
          text: `Take this quiz`
        },{
          text: ` to learn more.` 
        }]
      }]
    },{
      id: `220207`,
      title: `How to Get Grounded`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, February 7th 2022`,
      subtext: `Getting grounded can be tough, when the world around you seems to be constantly spinning.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Here are some practices you can use to `
        },{
          tag: `a`,
          link: `https://www.thetalenthack.com/packages/club-meditate-monthly-pass`,
          text: `feel more grounded`
        },{
          text:`, when things are chaotic, and when they’re not.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Get in touch with nature.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Literally. Go outside barefoot and have ten toes on the ground. Or place your hands on some dirt or grass. Touch the trunk of a tree. Nature has a powerful ability to help us feel instantly grounded and in the moment.`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Count your breaths. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Count from 1-10, and from 10 back down to 1, while you inhale and exhale. Count every breath. In and out through your nose, per usual. Counting brings you right into the moment. It allows your mind to be in the present right now, versus dwelling on the past or worrying about the future. Take your time. `
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Repeat this mantra.`,
          }]
        },{
          tag: `p`,
          content: [{
            tag: `i`,
            text: `“Where am I? I am here.” “What time is it? The time is now.”`
          },{
            tag: `br`
          },{
            text: `This mantra activates our consciousness and brings you into the present moment. It’s a reminder that all we have is now, and we should live in the moment. You can practice this mantra seated with your eyes closed, spine straight.`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Mountain pose.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Stand with all ten toes firmly on the ground. Feel your ankles, heels, the balls of your feet all touching the ground. Hands down at your waist, palms facing forward. Take a few deep breaths in through your nose, and out your mouth for cleansing. Get focused, and set an intention for your day. Go forth and be great!`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Take a moment to reflect on your `
        },{
          tag: `a`,
          link: `https://www.thetalenthack.com/packages/club-meditate-monthly-pass`,
          text: `intention`
        },{
          text: ` for today, and how it can make you more grounded? Write it down!` 
        }]
      }]
    },{
      id: `220124`,
      title: `Breathing Exercises for Covid Recovery`,
      category: `Functional Fitness`,
      publishDate: `Monday, January 24th 2022`,
      subtext: `Your lungs need lots of love during Covid recovery, and you may not even know it.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `The Covid virus attacks your respiratory system, and especially your lungs. It’s important to keep your lungs active and expanding throughout recovery. Lung capacity is key. Here are three breathing exercises you can practice during and post-Covid to aid in respiratory recovery. 
          `
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Alternate Nostril Breathing.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `This breath is restorative and helps to rebalance the nervous system. It brings calm to your body. Fold in your other fingers, and have only your pinky and thumb out. Cover one nostril at a time. Inhale left, exhale right. Inhale right, exhale left. Repeat up to 9 times for 3 rounds. Remember to always have one nostril covered with your pinky or thumb as you take each breath. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Ujjayi Breath.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Ujjayi is a victorious breath! It’s meant to empower the mind and body. It’s great for recovery from any workout, and also calms feelings of anger and frustration. Ujjayi is the ultimate respiratory support, and helps to strengthen your lungs and clear bacteria. Breathe in through your nose, and then exhale through the back of your throat. Think Darth Vader sounds, or ocean sounds. Your mouth remains closed. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Extended exhale.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `A long exhale really builds your lung capacity. The counting helps with focus and muscle memory. Inhale through your nose for one count. They gradually increase each exhale (through the nose). For example, Inhale for 1, exhale 2. Inhale 1, exhale 3, Inhale 1, exhale 4. And so on, up to 8. Repeat 3 times. `
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `These breathwork practices can be used daily, whether you’re recovering from Covid or not. They help to bring ease and rest to the body, immune system, and nervous system.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Try one of these right now! Challenge your breath, and build your lung capacity back up!`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `i`,
          text: `Disclaimer: The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.`
        }]
      }]
    },{
      id: `220110`,
      title: `5 Yoga Poses for Covid Recovery`,
      category: `Functional Fitness`,
      publishDate: `Monday, January 10th 2022`,
      subtext: `Recovering from Covid can be tough, and is a different journey for everyone.Natural supplements are always a win!`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Tis the season….so many people are battling Covid right now, or have just come out on the other side. Immunity and prevention are key, but if you do happen to get the virus, it’s important to begin recovery work right away. Here are `,
        },{
          tag: `a`,
          link: `https://www.instagram.com/p/CYkeyhfB0A1/`,
          text:`5 key poses`
        },{
          text: ` to help release congestion, expand your lungs,open your chest, and boost immunity. Do each of these poses 3-5 minutes. Breathe in and out through your nose.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Seated Spinal Twist.`
          }]
        },{
          tag: `p`,
          content: [{
            text: `Twists are cleansing to the body, and help to release toxins. Inhale and exhale deeply in this twist in order to `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CYkeyhfB0A1/`,
            text:`increase lung capacity`
          },{
            text: `. Gaze over your shoulder.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            num: 2
          }]
        },{
          tag: `hr`,
          content: [{}]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Cobra Pose.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Opens your airways in the chest.Feet should be about hips width distance and “shoe laces” facing down. Keep your chin parallel to the floor. Head, neck, and shoulders in line. Inhale lift and open the chest. Exhale, come back down. `
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            num: 3
          }]
        },{
          tag: `hr`,
          content: [{}]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Butterfly.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Lengthen your spine, bring your heels in close and flutter your knees slowly up and down. Activate your lymphatic circulation through `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CYkeyhfB0A1/`,
            text: `movement and breath`
          },{
            text: ` (in and out through your nose).`
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            num: 4
          }]
        },{
          tag: `hr`,
          content: [{}]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Cat/Cow.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Begin in tabletop position, on all fours. Inhale lift your chin and chest, exhale round the spine and tuck your tailbone, push the mat away. This posture gently massages your spine and organs and allows the chest to open.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            num: 5
          }]
        },{
          tag: `hr`,
          content: [{}]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Mountain pose`
          },{
            tag: `small`,
            text:` (arm variations)`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Stand up straight. Inhale your arms lift overhead, exhale arms lower by your sides. Option to come to your tippy toes on the inhale up. This pose helps to elongate and stretch the muscles, and also activates circulation and flow of breath. `
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            num: 6
          }]
        },{
          tag: `hr`,
          content: [{}]
        },{
          tag: `br`,
          content: [{}]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          content: [{
            text: `Recommendations: `
          }]
        },{
          text: `It’s suggested that you do not lie on your back when you have Covid or are recovering from it. The congestion in your chest puts pressure on your lungs, and this will slow the recovery process and not allow the congestion/mucus to release properly. I suggest doing only poses that are upright, or lying on your stomach, rather than on your back. `
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Take 15 min of your day to try these `
        },{
          tag: `a`,
          link: `https://www.instagram.com/p/CYkeyhfB0A1/`,
          text: `5 poses`
        },{
          text: `! Whether you had Covid or not, these are great for immunity.`
        }]
      }]
    },{
      id: `211227`,
      title: `4 Natural Supplements to Boost Immunity`,
      category: `Nutrition`,
      publishDate: `Monday, December 27th 2021`,
      subtext: `Natural supplements are always a win!`,
      copy: [{
        tag: `p`,
        content: [{
          text: `For years, nutritionists, doctors, and society have been telling us to pump ourselves full of vitamin C, drink your orange juice, and take your daily OTC multi-vitamin. While these methods are still effective (I take them myself), there are a few other less common supplements that I believe deserve some shine. In my opinion, natural herbs and supplements are the way to go when it comes to maintaining health and preventing long term illness. Prevention is always better than the cure. These days, we can all use a boost of immunity, so here are some of my favorite supplements:`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Elderberry:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Elderberry has become more popular in the last couple years, but has been around forever. The berry contains powerful antioxidants and vitamins, and can also help prevent and ease cold and flu. They clear the body of free radicals. You can find elderberries in the form of a syrup, gummies, tea, or lozenges.`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Oregano Oil Extract:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Acts as a natural antibiotic and can kill bacteria in the body. It is a powerful aid in healing respiratory issues. It can be found in oil or pill form. The taste is rather strong, and can give a warm sensation in the throat. You can mask this taste by mixing it with tea or water. Oregano oil is known to reduce the severity and duration of respiratory illness. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Chlorophyll:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: ` The stuff that makes plants green, also promotes production of red blood cells! It acts as a natural detoxifying agent, and eliminates fungus. As an added bonus, it’s a natural deodorizer as well (for your poop and your pits!) It absorbs toxins and stimulates immunity. Try Chlorophyll in tablet or liquid form. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Cayenne Pepper:`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `High in vitamins C and A, cayenne pepper is a great additive for your smoothies, or even hot teas! It’s an immunity booster and has anti-inflammatory properties. It’s properties may help protect against cellular damage. When feeling under the weather, I’ve added cayenne to whatever I’m eating or drinking. Plus that cayenne pepper is great for heart health too!`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `If you feel yourself coming down with something, already have it, or just want extra immune support, try these natural supplements!`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: ` Add some Chlorophyll droplets to your water today! It’s super refreshing and energizing, and will give you fresh breath!`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `i`,
          text: `Disclaimer: The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.`
        }]
      }]
    },{
      id: `211213`,
      title: `How to Increase Joy`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, December 13th 2021`,
      subtext: `We are all co-creators of our own destiny.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Every human wants to be happy. You are in charge of cultivating more joy in your life, by spending more time on things you love. Recall the moments where you felt immense peace and happiness, and go there. Here are 4 ways to `
        },{
          tag: `a`,
          link: `https://www.instagram.com/reel/CXUKfKUFp_3/`,
          text: `increase joy.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `More Being, Less Doing. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `We spend so much of our lives trying to do stuff. Trying to get to the next level, make more money, buy more clothes. We assume when we do these things, the joy will come. The constant motion never subsides. We will always be searching for the next best thing to happen in our lives, so we can feel better. What if you can be more joyful by simply being in the moment? Instead of trying to do the next thing, find the lessons in the now. Find the beauty in this moment. Be here, be now.`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Give good feelings your full attention.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `We’ve all heard the saying “nothing lasts forever.” It’s true. Everything is fleeting. Anxiety, pain, worry- all temporary. So are the warm and fuzzy feelings. Happiness, confidence, joy. So when those nice feelings come up, hold on to them. Give them focus and attention, and energy so they will grow. `
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `What are you doing when you feel the most joy?`,
          }]
        },{
          tag: `p`,
          content: [{
            text: ` Do more of it! Life is too short to not do the things you love. Fill your life with as many joyful moments as possible. Take inventory of the things that bring you joy and make your heart smile, and how you can spend more time on those things. Imagine your life if you were able to only do things that brought you joy.`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Live in your “zone of genius” `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `(and say no to more things that are not in it) Your zone of genius is where you absolutely thrive. It is a natural place of growth and creativity. When you stay within this zone, possibilities are limitless because YOU are in control. It’s ok to say no to things that do not reside in this zone. You’re then allowing more space for joy to flourish inside of you.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Say a firm, confident NO to the next thing that is not in your zone of genius.`
        }]
      }]
    },{
      id: `211129`,
      title: `How to Practice Gratitude`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, November 29th 2021`,
      subtext: `The key to less stress is an attitude of gratitude.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `As we close out this month of THANKS, it’s important to highlight the benefits of practicing gratitude as a way to `
        },{
          tag: `a`,
          link: `https://www.thetalenthack.com/packages/club-meditate-monthly-pass`,
          text: `reduce stress.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `My mentor and Director of the Yoga Therapy Program, Dr. Larry Payne, always says there is nothing like a daily dose of Vitamin G! He’s so right. When you `
        },{
          tag: `a`,
          link: `https://www.instagram.com/p/CWq1OyhluiR/`,
          text: `practice gratitude daily`
        },{
          text: `, it becomes harder to focus on stress and negativity. You learn to always find the positive, and focus less on perceived negativity. There is good in every circumstance.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Gratitude journal. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Each day, start your day or end it, take some time to write a list of 3-10 (or more!) things you’re grateful for. They can be as small as your glass of clean water, or big like closing a huge contract. Small wins are big wins :-) By putting pen to paper and visualizing the things you have to be grateful for, however simple, it helps you to gain perspective. Do this daily for best results and overall `
          },{
            tag: `a`,
            link: `https://www.thetalenthack.com/packages/club-meditate-monthly-pass`,
            text: `mindset improvement! `
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Karma Yoga. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Practice acts of service to yourself and others! Karma yoga is the yoga of action. It implies that our actions create outcomes for the greater good. It is a selfless action. The reason why it is important to practice karma yoga with yourself first, is so you can have a clear picture of what YOU need, and build self awareness in order to be capable of giving to others. Share your talents, share your time, do random acts of kindness to strangers, as a show of gratitude to the universe.`          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Salute the Sun! `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Did you know that the movement in yoga of “sun salutations” is literally an act of gratitude?? It’s typically practiced in the morning time, towards the sun, giving thanks for its light and presence. Loving on nature is a really great way to feel grounded and practice gratitude. Sit in the grass, go outside barefoot, touch the trees, smell the flowers, let the sun shine directly on you. When you connect with nature, it releases endorphins in the body, and helps you to feel connected and gracious.`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `Gratitude is the attitude! I live by this value, so eloquently stated by my favorite artist, `
        },{
          tag: `a`,
          link: `https://open.spotify.com/track/6VWCeBktNMGdTTy5LxHj69?si=3ef0c84971f84d10`,
          text: `Londrelle`
        },{
          text: `. “With a heart full of gratitude, and a mind full of peace. That’s how you should live, that’s how you should be….that’s how you should love, that’s how you stay free.” `
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Start that list now! Write down 10 things you’re grateful for today.`
        }]
      }]
    },{
      id: `211115`,
      title: ` What is Yoga?`,
      category: `Yoga`,
      publishDate: `Monday, November 15th 2021`,
      subtext: `Yoga, by definition, is the union of mind and body. It is harmony. It is balance.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Yoga is a lifestyle both on and off the mat. The TOOLS of yoga are `
        },{
          tag: `i`,
          text: `Pranayama`
        },{
          text: ` (breathwork), `
        },{
          tag: `i`,
          text: `Dhyana`
        },{
          text: ` (meditation), and Asana (the physical practice).`
        }]
      },{
        tag: `p`,
        content: [{
          text: `The term “Yoga” is derived from the Sanskrit root word “yuj,” meaning to yoke, to join or unite. Yoga is all about uniting the mind and body, in every way. Through the foods we eat, through our actions, the ways in which we nourish our bodies, through movement, meditation, and breath. Yoga is the act of working towards a harmonious lifestyle of balance.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `a`,
            link: `https://mailchi.mp/f44d1c9f43d6/yogflowthursdays`,
            text: `Asana.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `The physical practice of yoga, on the mat. Linking breath to movement, mind and body. Asana allows your body to express its energy. It releases endorphins and creates ease, and breaks up stagnation in your aura. Understanding movement requires you to get quiet and go inwards, to a deeper state of self-discovery and exploration. To know your body is to create harmony. Get comfortable within yourself.`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `a`,
            link: `https://pranawellnessworks.com/blog/01-09082021/Breathing_for_Your_Body`,
            text: `Pranayama.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `When we breathe, we allow our nervous system to reset, and send the proper signals to the body. Our breath sustains us and allows us to move more freely, without tension. When you are not breathing (properly), your sympathetic nervous system is active. This is your fight or flight response. Disconnected. When you use your breath, you incite the parasympathetic nervous system, which promotes calm and restoration.`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `a`,
            link: `https://mailchi.mp/f81250e2080a/clubmeditate`,
            text: `Meditation.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `The practice of meditation unpacks the past trauma or stress from the body and mind. This can be past stress from 5 minutes ago, or 15 years ago. When you meditate, you are reconnecting and rebuilding parts of the brain that have been damaged by stress or trauma. Meditation frees up space for deeper breaths, for more knowing of self.`,
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `These three practices are the main tools of yoga, used for linking the mind and body. It is a spiritual discipline. Yoga is self-awareness. When you sit, when you move, when you breath…you are practicing yoga.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: ` Decide on one way, TODAY, to `
        },{
          tag: `a`,
          link: `https://mailchi.mp/f44d1c9f43d6/yogflowthursdays`,
          text: `practice yoga`
        },{
          text: `. Journal about what comes up when you go inward.`
        }]
      }]
    },{
      id: `211101`,
      title: `4 Foods to Improve Gut Health`,
      category: `Nutrition`,
      publishDate: `Monday, November 1st 2021`,
      subtext: `Food is nourishing to your mind and body. When your gut speaks to you, listen.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Do you experience bloating, upset stomach, indigestion, constipation, bad breath, or food allergies? If so, your gut is trying to tell you something is not right! You are what you eat.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Ginger`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Ginger has great anti-inflammatory and antioxidant properties. It can ease digestive issues, and soothe nausea. Try boiling some fresh ginger root for your tea each morning, to flush out toxins. 
            Ginger also helps to lower blood insulin levels, associated with obesity. You can ingest ginger in powder form, through the fresh root, in pill form, or as an oil. Add some ginger powder to your next smoothie!`
           }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Turmeric`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Many people, including myself, take daily turmeric supplements to ease inflammatory conditions, in the gut especially. Turmeric pills are most effective, and go straight into your bloodstream. It also comes in powder form or as a spice. Turmeric is best activated with black pepper.  `
                    },{
            tag: `a`,
            link: `https://www.wellplated.com/bedtime-golden-milk/`,
            text: `Golden Milk`
          },{
            text: `, made with turmeric and black pepper, is not only good for your gut, but it will make you sleep like a baby! Try it out!`,
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Kiwis`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Kiwis help support healthy “movements!” They can relieve constipation and aid in digestion. Kiwis aid in breaking down protein. You can slice them up and put them in yogurt, or make a fruit salad with them. They are great for on the go snacks, when you may get a bit backed up!`
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Yogurt`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Probiotics for the win! They are friendly live bacteria and yeast that help promote a healthy gut. Probiotics aid in digestion, and can ease diarrhea. They help create a balanced, healthy flora in your gut biome. The lactobacillus, specifically, in yogurt provides you with the probiotic benefits. Aim for yogurt with very low or no sugars added. Add your favorite fruit and granola on top for a boost of fiber!`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Try a new recipe today with one of these gut healthy foods!`
        }]
      }]
    },{
      id: `211018`,
      title: `How Movement Can Increase Longevity`,
      category: `Functional Fitness`,
      publishDate: `Monday, October 18th 2021`,
      subtext: `Movement is medicine, and prevention is always better than the cure.?`,
      copy: [{
        tag: `p`,
        content: [{
          text: `We live such a sedentary lifestyle. Especially these days, with work from home life. It’s so important to keep your muscles stretched and your joints lubricated, through movement. Take time each day to move your body in some way. Get up from your seat often, throughout the work day to promote more circulation in the body and a healthy prana.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Stretch every day. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Your body does a lot of work for you every day. It keeps the blood pumping through your veins and sustains all of the stress you impose on it. Show your body a little love. As soon as you get out of bed,`
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CSMy0X-lprj/`,
            text: ` stretch!`
          },{
            text: ` Before you go to bed, `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CSMy0X-lprj/`,
            text: ` stretch!`
          },{
            text: ` Simple movements and elongation of the muscles will do wonders for your body to relieve stress and tension. Knots in your body, chronic pain, and mental fatigue can all be relieved by consistent stretching. Try a simple inhale and lift your arms up, exhale forward fold, hands toward the floor. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Body fuzz.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `This is why stretching is so important. `
          },{
            tag: `a`,
            link: `https://www.youtube.com/watch?v=_FtSP-tkSug`,
            text: `BODY FUZZ.`
          },{
            text: ` Have you ever watched a cat or dog wake up from a nap? The first thing they do is lengthen their body and stretch out. We should take notes! When we sleep at night our muscles accumulate a “fuzz” between them. It binds them together and results in the feeling of stiffness or tension in the muscles. By moving the body, we are melting away this accumulated fuzz in the body, and allowing our muscle fascia to breathe and renew each day. `,
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Move through injury. Slowly.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Unpopular opinion. When you strain a muscle or experience a joint injury, the common advice is to rest, and keep that part of your body immobile until it is healed. With the exception of broken bones, this is a false assumption. When your body is stagnant for long periods of time, it forgets how to function. Your muscles may atrophy, your mobility decreases, you may overcompensate on your opposing side, which can result in a new injury or pain. For my `
          },{
            tag: `a`,
            link: `https://calendly.com/stephaniepranawellness/yogatherapyconsult?back=1&month=2021-09`,
            text: `Yoga Therapy`
          },{
            text: ` clients who are rehabbing an injury, I always find safe ways to increase their movement. Light movement and mobility work, in moderation, can help in bringing back normal functionality after injury. Always honor your body, and listen to her when she speaks. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Heart health.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Heart disease is the `
          },{
            tag: `a`,
            link: `https://www.cdc.gov/heartdisease/facts.htm`,
            text: `leading cause of death`
          },{
            text: ` in the United States, for most ethnic groups. Your heart keeps you alive, quite literally. When you move, your heart is essentially speaking to your body. Oxygen goes to the brain. Your breathing is optimized. The nervous system sends the proper signals to the rest of your body. One extra hour of light movement each day corresponds to a 14% drop in coronary heart risk.`,
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `
          No matter your weight, fitness ability, or age...movement will always be medicine. 
          It can prevent disease brought about by stagnation in the body. 
          Movement can increase your lifespan by keeping your body working for you.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: `Take a walk today. 10 minutes or 1 hour. Make it happen. Your body will thank you.`
        }]
      }]
    },{
      id: `211004`,
      category: `Yoga`,
      title: `Yoga for Better Sex`,
      publishDate: `Monday, October 4th, 2021`,
      subtext: `Better sex is just one touch away! Let the tools of yoga elevate your sex life, through mindful breath and intimacy.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Sex is not all about “the hot spots.” It’s about intimacy, trust, and communication. Whether practicing yoga solo to increase your sexual energy, or `,
        },{
          tag: `a`,
          link: `https://sensualbreath.eventbrite.com/`,
          text: `with a partner`
        },{
          text: ` to add some extra spark, the tools of yoga can give you better sex! Here are some practices to explore.`
        }]
      },{
        tag: `ul`,
        list: [{
          item: [{
            tag: `h2`,
            text: `The Locks.`,
          },{
            text: `Your Mula Bandha, or root lock is the space between your anus and belly button. When the energy in your Mula Bandha is activated, it runs up your spine and sends renewed energy throughout your body. When mastered, engaging your Mula Bandha through your breath can increase blood flow to your reproductive parts. Similarly, Uddiyana Bandha, or abdominal lift, occurs when you use your breath to pull energy upwards in the body. This brings a heightened state of awareness. `
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Asana.`
          },{
            text: `Postures such as the following are helpful in increasing sexual awareness and desire.`
          },{
            tag: `br`
          },{
            tag: `i`,
            text: `Cat cow-`
           },{
             text: ` involves titling of the pelvis and activating energy of the spine.`
          },{
            tag: `br`
          },{
            tag: `i`,
            text: `Bridge pose-`
           },{
             text: ` lifting pelvis and opening the energy of the root chakra. `
            },{
              tag: `br`
          },{
            tag: `i`,
            text: `Happy baby-`
           },{
             text: ` opens the groin area, stimulates and puts you in the mindset of play.`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Kundalini Yoga.`
          },{
            text: `A practice that awakens your “shakti” or your primal energy at the base of your spine. Kundalini is an energy that lies dormant until it is activated. The practice is typically comprised of chanting, energizing breathwork, and repetitive postures that challenge the body and awaken energy channels.`
          },{
            tag: `br`
          },{
            tag: `br`
          },{
            tag: `img`,
            num: 2,
            class: `wide`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Acro Yoga.`
          },{
            text: `Trust is a must in `
          },{
            tag: `a`,
            link: `https://www.instagram.com/p/CSellJOoaBT/`,
            text: `Acro`
          },{
            text: `. Trust yourself and your own body’s abilities first, and attune your root chakra. Then build trust `
          },{
            tag: `a`,
            link: `https://sensualbreath.eventbrite.com/`,
            text: `with your partner`
          },{
            text: `, through communication. Acro yoga is a partner practice that relies on one person as the base, and the other as the “flyer” to become weightless and free through connection between the bodies.`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Breathwork.`
          },{
            text: `Breathing is sexy! Use “breath of fire” (kapalabhati) to ignite your fire within. Build this energy within yourself first, then with a partner. Connecting with your partner’s breath is an intimate practice! You will quite literally feel each other’s energy, and as a result desire to be closer.`
          }]
        }]
    },{
      tag: `p`,
      content: [{
        tag: `b`,
        text: `The Challenge: ` 
      },{ 
        text: `Try cat cow, happy baby, and bridge pose at home on your own. Pay attention to the breath, and the areas that feel more open afterwards.`
        // }]
      }]   
    }]    
    },{
        id: `210920`,
        category: `Mindfulness & Meditation`,
        title: `10 Ways to Be Mindful`,
        publishDate: `Monday, September 20th, 2021`,
        subtext: `Maintaining peace in the midst of chaos is a skill we all need to develop.`,
        copy: [{
          tag: `ol`,
          list: [{
            item: [{
              tag: `h2`,
              text: `Always breathe.`,
            },{
              text: ` The best thing you can do for your mind and body is take a deep breath. Breathing in and out through your nose sends a signal of calm to your nervous system and activates its parasympathetic receptors. This allows the body to rest and replenish.`
            }]
          },{
            item: [{
              tag: `h2`,
              text: `Check your energy.`
            },{
              text: ` How are you showing up to your next meeting, phone call, or outing with friends or family? Do you need a quick mental reset before interacting? If so, this starts within. Do a quick `
            },{
              tag: `a`,
              link: `https://www.udemy.com/course/normalizing-mindfulness/?referralCode=51F7D8BFA31B16E34EF6`,
              text: `self-study`
            },{
              text: ` or check-in to ask yourself how and what you’re feeling.`
            }]
          },{
            item: [{
              tag: `h2`,
              text: `Food for thought.`
            },{
              text: ` Food fuels your mind and body. If you eat like crap, chances are you will feel like it too, and your brain will reflect that same garbage. Eat for YOU. Making smart food choices not only creates physical ease, but clears your mind of brain fog.`
            }]
          },{
            item: [{
              tag: `h2`,
              text: `Are you socially aware?`
            },{
              text: ` How does social media make you feel? Do you feel jealous, triggered, or frustrated by some things on your feed? It’s time for a change! Mute or unfollow accounts that don’t make you feel good. Follow more `
            },{
              tag: `a`,
              link: `https://www.instagram.com/pranawellnessworks/`,
              text: `accounts`
            },{
              text: ` that give you the warm n fuzzies. Stop. Scrolling. All. Day! Social is great, but endless scrolling is not.`
            }]
          },{
            item: [{
              tag: `h2`,
              text: `News Cycle.`
            },{
              text: ` As a former CNN producer, believe me, I know news. But the truth is, these days so much of what we consume is toxic to our mind. The television “tells-you-a-vision” which can stifle your own ability to co-create with the universe. Consuming the same cycles of news can have a daunting effect on your mental health. News, in moderation.`
            }]
          },{
            item: [{
              tag: `h2`,
              text: `Habits are contagious.`
            },{
              text: ` It takes 21 days to form a habit, good or bad. The things we choose to do or not do on a daily basis affects our ability to stay healthy mentally and physically. When ditching a bad habit, make sure you replace it with something positive and helpful first.Create small, `
            },{
              tag: `a`,
              link: `https://pranawellnessworks.com/blog/00-26072021/5_Ways_to_Create_a_Powerful_Morning`,
              text: `healthy habits`
            },{
              text: ` that lead to beg change.`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Be kind.`
          },{
            text: ` Treat others how you want to be treated. Simple. The world is a reflection of you. If you spread kindness, the Universe will reward you. Be the change you wish to see in the world.`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Self-care is the best care.`
          },{
            text: ` Schedule it! Make it a priority. Do something different to allow yourself some luxury each month. In order to expand your mindfulness, you must come from a space of overflow in your own mind, body, and spirit.`
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Rest up!`
          },{
            text: ` Let’s let go of this mind set that you must fill every minute, of every day, with “productivity.” Let it go! This mindset in itself is not productive. Honor your body. Allow time for intentional rest so you can be renewed and prepared to face the day ahead and crush your goals. `
          }]
        },{
          item: [{
            tag: `h2`,
            text: `Boundaries. Boundaries. Boundaries.`
          },{
            text: ` The word NO is a complete sentence. Remember that. You can learn to give either an enthusiastic yes, or an empowered no. There is no in between. Decide what you need from yourself and from others. Define your “hard stops.” Be clear and vocalize these boundaries.`
          },{
            tag: `br`,
          },{
            tag: `br`,
          },{
            tag: `img`,
            num: 2,
            class: `wide`
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `These `,
        },{
          tag: `a`,
          link: `https://www.udemy.com/course/normalizing-mindfulness/?referralCode=51F7D8BFA31B16E34EF6`,
          text: `mindfulness tips`,
        },{
          text: ` will substantially change your preparedness when you meet challenges. You will be ready! Remember, prevention is better than the cure.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{ 
          text: `  Read through these again. Reflect on each one, and journal about how you are currently feeling about each one. How can you do better?`
        }]
      }]    
    },{
        id: `210906`,
        category: `Mindfulness & Meditation`,
        title: `4 Ways to Elevate Your Mindset`,
        publishDate: `Monday, September 6th, 2021`,
        subtext: `The law of attraction is real! Invite in what you want and need.`,
        copy: [{
          tag: `h2`,
          content: [{
            text: `What you resist persists.`
          },{
            tag: `br`,
          },{
            tag: `small`,
            text: `This is true, good or bad.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `If you constantly think about something, you are subconsciously drawing it into your life experience. You are magnetizing it through your thinking. It’s the “law of attraction.” You amplify more of what you don’t want, by focusing so much on it. That’s why people say “worrying about something is not going to solve your problem.” It won’t! Writing your goals down is so important. Focusing on what you DO want, will do just that...help it come into focus. Find the good in every situation, and center your energy all around it.`,
          }]
        },{
          tag: `section`,
          list: [{
            tag: `h2`,
            content: [{
              text: `Turn the negative into affirmative.`,
            }]
          },{
            tag: `p`,
            content: [{
              text:`When you hear that annoying, self-doubting, negative voice in your head, tell them to shut up! Silence your negative thoughts immediately by turning them into positive ones. Write down a list of all of your “self-limiting beliefs.” We all have them. These are things that prevent us from hitting our goals, or doing what we want to do. Once they’re all written down on paper, change them to the affirmative, so you start to see them in a different light. Here is an example of a (SLB) self-limiting belief. “I am not good at money management, so I can’t be rich.” Try this instead. I acknowledge my money challenges and I’m ready to face them head on. I will be a steward of my money, so that I can create an abundant future.” Isn’t that a game changer!? `
            }]
          },{
            tag: `h2`,
            content: [{
              text: `Speak it into existence.`,
            }]
          },{
            tag: `p`,
            content: [{
              text: `The power of manifesting is real! You can totally be a co-creator of the life you want, simply by speaking it up. Claim it. Write it down. Everywhere. Visualize it. Make it real and tangible. Grab some post it notes, and write down your next big goal (personal or business). Write the same thing down, and post it in multiple places that will be visible throughout your day. Car dash, laptop keyboard, mirrors, closet, bed side. Seeing what you want more often, helps to make it a part of your life. Say it out loud! Often. Speak about your goals and dreams like they already exist. You may think it sounds crazy now, but it won’t be when things actually start happening! `
            }]
          },{
            tag: `h2`,
            content: [{
              text: `Start from abundance, not lack.`,
            }]
          },{
            tag: `p`,
            content: [{
              text: `This is a tough one. I had to learn this lesson myself. `
            },{
              tag: `a`,
              link: `https://www.udemy.com/course/normalizing-mindfulness/?referralCode=51F7D8BFA31B16E34EF6`,
              text: `Mindset`
            },{
              text: ` is about the way you perceive things. Is your glass half empty or half full? If you begin with the idea that you will always need more, or that you are lacking a specific skill, then you will never see your goals. Shift your mindset to think about what you DO have, what positive things have already happened, and how you can develop what you already have, however small. When you operate in a mind of abundance, rather than lack, you’re already ahead of the game.`,
            }]
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
          }]
        },{
          tag: `p`,
          content: [{
            tag: `b`,
            text: `The Challenge: ` 
          },{ 
            text: ` Make it real! Take some time to write down what a day in your ideal life would look like. Be detailed! What would your day look like, what are your routines, who do you see, and where do you go? Hour by hour.`
          }]
      }]    
    },{
      id: `210823`,
      title: `How to Sleep Better`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, August 23rd 2021`,
      subtext: `Want better sleep? Mindful nights lead to productive mornings.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `What if I told you what you do each night, can shape your day? Do you have a hard time getting to sleep at night, or staying asleep? Do you always wake up tired? Feel like your mind just won’t turn off once you get into bed? I feel you! Been there, done that. Your sleep can be great, your night routine can be healthy, and conducive to a productive day. Try these 4 things.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            text: `Eat Earlier.`
          }]
        },{
          tag: `p`,
          content: [{
            text: `Stop eating 2-3 hours before bedtime. After each meal, your digestive system is in ON mode. It has to break down and process your food. If you are eating, and then jumping into bed shortly after, you are keeping your body ON! It’s still trying to work, while you are trying to rest. Give it some time to fully digest your last meal, so you don’t go to sleep feeling heavy and bloated. Your body will thank you.`
          }] 
        },{
          tag: `h2`,
          content: [{
            text: `No alcohol before bed `
          },{
            tag: `br`
          },{
            tag: `small`,
            text: `(yes, this means red wine too)`
          }]
        },{
          tag: `p`,
          content: [{
            text: `Trust me, this one is super hard for me. I am a diehard red wine fan, and I’m sure I’m not alone in the idea that it just magically puts you to sleep. It doesn’t! Red wine, and other alcohol may seem like physical depressants at first swig, but they actually keep the body and mind active at night. It disrupts your REM sleep, which is the most important, productive, deep sleep of your night. So, by all means do happy hour at your will. Just not right before bed!`
          }]
        },{
          tag: `h2`,
          content: [{
            text: `Ditch the screens!`
          }]
        },{
          tag: `p`,
          content: [{ 
            text: `At least one hour prior to your bedtime, put your phone on Do Not Disturb, close the laptop, and grab a juicy book, instead of turning on the TV. Filling your brain with triggering news stories, or gossip from other people’s lives right before you close your eyes, is basically asking to be kept awake. The blue light in our screens sends signals to the eyes that say “stay awake, be energized, focus on me!” We don’t want that. Blue light can also suppress the secretion of melatonin in the body, and throw off your circadian rhythm. Melatonin is a hormone produced by the pineal gland, in response to darkness. It’s the sleepy button! Let it do its job.` 
          }]
        },{
          tag: `h2`,
          content: [{ 
            text: `Out of your mind, and onto paper.`
          }]
        },{
          tag: `p`,
          content: [{ 
            text: `We all feel like our minds run a mile a minute, right? Especially at night. After a long day, it can feel like you’re going to bed with all of your thoughts right there next to you. Decompress! Write a schedule for the next day, write down your goals, a gratitude list, a WINS  of the day list, a to do list, or even just a brain dump of all the things running through your head. Each of these writing exercises will allow you to clear all of the thoughts in your head, out! It’s like erasing your chalkboard full of notes, so that you can start each new day with a clean slate.`
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        }]
      },{
        tag: `p`,
        content: [{
          text: `Small habits lead to big change. Imagine if you made all 4 of these suggestions a part of your nightly routine. You will see better sleep, better focus the next day, and your body will feel more rested and replenished!`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{ 
          text: ` Set an alarm on your phone each night, when it’s time to power down the screens, stop eating and drinking, and let all of your thoughts out on paper. Let the alarm serve as a reminder to STOP and power down.`
        }]
      }]
    },{
      id: `210809`,
      title: `Breathing for Your Body`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, August 9th 2021`,
      subtext: `Do you want to feel more calm on a regular basis? Do you want to boost your immunity?`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Do you want to feel more calm on a regular basis? Do you want to boost your immunity? Just `
        },{
          tag: `a`,
          link: `https://www.patreon.com/posts/39816022`,
          text: `BREATHE!`
         },{
           text: ` Your breath is so much more to your body than just air. Learn how to take each breath for your body, and make it work for you.`,
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `In and out through the nose. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Most people breathe with their mouth wide open. It’s instinctive. Breathing through your mouth excites the sympathetic nervous system, the fight or flight system. If your body is constantly in this state, it cannot rest and replenish. Immunity decreases, heart rate increases, and it becomes more difficult for your body to find balance. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Use Your Gut`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Another common breath habit is contracting on the inhale and expanding on the exhale. This is backwards! Breathing from the belly up allows for full diaphragmatic expansion. It also allows you to build more awareness in your body, as the breath moves through it. `,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Try this. Place one hand over your belly. Inhale and expand the belly as much as possible, into your palm. Exhale, contract the naval to spine. Repeat. Inhale, expand the belly. Exhale, naval to spine. `,
          }]
        },{
          tag: `img`,
          content: [{
            class: `wide`,
            num: 2
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Give More.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `As humans, we tend to take more than we give to the Universe. If we can learn to practice giving more than we take, we can come closer to alignment. Try to lengthen your Apana, or exhale. Begin with 1:2, then 2:4, 3:6, and 4:8 (inhale:exhale). As you release the exhale, release anything that no longer serves you mentally or physically. `,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `i`,
            text: `Breath to Movement.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Yoga means union. In the physical practice of asana, or movement, we aim to unite the breath with each movement. Inhale arms lift, exhale fold. Inhale, lengthen. Exhale, go inwards. Build consciousness in the way your body moves with your breath.`,
          }]
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: ` 
        },{
          text: ` A few times a day, practice belly breathing. In and out through the nose. Place your palm on your belly. Breathe into the palm on the inhale and feel the palm move in and out with each breath. On the exhale, feel your naval move away from your hand, and towards the spine. This will help you begin to `
        },{
          tag: `a`,
          link: `https://www.udemy.com/course/21-day-meditation-experience/?referralCode=3A2E4017476123B8D6A4`,
          text: `build mindfulness and awareness`
        },{
          text: ` in the body.`,
        }]
      }]
    },{
      id: `210726`,
      category: `Mindfulness & Meditation`,
      title: `5 Ways to Create a Powerful Morning`,
      subtext: `Achieve your goals, increase focus and productivity. Every day!`,
      publishDate: `Monday, July 26 2021`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Mornings are the most essential part of your day! They set the tone and energy for the rest of the day. If you have a mindful morning, you are essentially curating peace and positivity for your day ahead. Routines help us to stay focused and achieve our goals, so focusing on what you do at the beginning of your day will increase productivity, every day.`}]
      },{
        tag: `h2`,
        content: [{
          text: `Here are 5 Ways to Create a Powerful Morning:`
        }]
      },{
        tag: `ol`,
        list: [{
          item: [{
            tag: `b`,
            text: `Drink Your Water!`,
          },{
            text: ` Keep a bottle of room temperature water by your bed, and as soon as you wake up, drink it! Your brain and heart, the most vital, life-giving organs, are about 73% water. You must keep them fed. In India, water is used in many “Kriya,” or cleansing practices, to remove toxins from the body. Water in the morning increases your energy levels and boosts red blood cell count. Red blood cells carry oxygen to the brain. H`
          },{
            tag: `sub`,
            text:`2`,
          },{
            text: `0 boosts your metabolism, so that your energy from food converts properly. It cleanses, and also contributes to your glowing skin! Water first thing in the morning will awaken and rehydrate the body.`,
        }],
        },{
          item: [{
            tag: `b`,
            text: `Breathe.`
          },{
            text: ` Pranayama, or breathwork is essential for regulating the nervous system. When you start your morning with breath, you are creating a blank slate for your day. You are priming the body to operate out of a parasympathetic state, which is calm. Breathing in and out through your nose slows the heart rate and eases anxiety. A great energizing breath for your morning practice is “Kapalabhati.” Kapala means mind, and Bhati means glow. Who doesn’t want a mind glow up!? Start this breath by placing one hand on your belly. Inhale through the nose and expand the belly out. As you exhale, pretend like you are blowing out a candle with your nose. Naval contracts toward the spine. Blow out only through the nose. You can speed up this breath as it suits your body, to build energy and heat to start your day.`,
        }],
        },{
          item: [{
            tag: `a`,
            link: `https://www.etsy.com/shop/pranawellnessstudio/`,
            text: `#GetMeditated`,
          },{
            tag: `b`,
            text: ` Meditation.`
          },{
            text: ` opens up new realms of creativity in the brain. It physiologically creates new space in the brain. According to a Harvard study, meditation increases cortical thickness, which governs learning, thinking and memory. It decreases brain cell volume in the amygdala, which is behind anxiety, fear, and stress. Meditation deals with “past trauma.” This can be small traumas from a phone call 5 minutes ago, or bigger issues that have affected us in the past. It allows you to go into each day with a fresh outlook. Set an intention for the same. Mine is `
          },{
            tag: `a`,
            link: `https://www.etsy.com/shop/pranawellnessstudio/`,
            text: `“I am free. I am calm. I am at peace.”`
          }],
        },{
          item: [{
            tag: `b`,
            text: `Journal.`,
           },{
             text: ` The “monkey mind” is always busy! We are human, so we cannot stop the mind from running, unfortunately. This is a myth. But we can prevent the mind from controlling us, and learn to make sense of it all. By writing out your thoughts, ideas, worries, lists, and goals on paper, you allow them to be released from your brain.`,
          },{
            tag: `img`,
            content: [{
              class: `wide`,
              num: 2
            }]
           },{
             text: `Dedicate some time in the morning to incorporate some self-study, or svadhyaya. Observe your thoughts and feelings, and put them on paper. One simple journaling practice that involves very little direction is “brain dumping.” This means you simply write down any and everything that comes to mind. It can be lists, ideas, frustrations, diary entries, food journals, or simply an account of your feelings at the moment. Name them. Whatever is allowing your monkey mind to race, put it on the paper. No journal prompts, no deep questions, just you.`,
            }],
        },{
          item: [{
            tag: `b`,
            text: `Move.`,
          },{
            text: ` Movement is one of the best ways to ensure a healthy aging process. Our body is full of synovial fluids and muscle fascia that need motion and lubrication, always. The more you move, the less your muscle fascia will “stick.” When our bodies become accustomed to staying still, they lose essential tissues and cells, and overall mobility decreases. Take time to loosen the joints in the morning, stretch out your shoulders, hamstrings, and spine.` 
          },{
            tag: `a`,
            link: `https://www.patreon.com/posts/39545337`,
            text: `Sun Salutations and CARs`
           },{
          text: `are a great way to get the body tuned up each morning. Take a mindful walk! Something is better than nothing, and walking helps to increase awareness and energy, and is very meditative.`}],
        }]
      },{
        tag: `p`,
        content: [{
          tag: `b`,
          text: `The Challenge: `,
        },{
          text: ` When you wake up tomorrow morning, Take 3 deep breaths. Finish a full glass of water. DO NOT look at your phone for (at least) the first hour you’re awake. Notice what happens…...`}]
      }]
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

  componentDidMount(){
    this.setState({
      showBlog: this.state.blogs[0]
    })
  }

  selectBlog = (e, blog) => {
     this.setState({
      showBlog: blog
    });
    this.scrollToTop();
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
          <Route path={routes.BLOG} exact render={() => <>
            <NavBar page={"blogs"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <BlogMainIndex scrollToTop={this.scrollToTop} selectBlog={this.selectBlog}  blogs={blogs} author={authors[0]}/> 
          </> }/>  
          <Route path={`/blog/:id/:endpoint`} exact render={() => <>
            <NavBar page={"blog"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <ShowBlog blogs={blogs} blog={showBlog} author={authors[0]}/> 
          </> }/>
          <Route path={`/blog/:id`} exact render={() => <>
            <NavBar page={"blogs"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <BlogTopicIndex scrollToTop={this.scrollToTop} selectBlog={this.selectBlog}  blogs={blogs} author={authors[0]}/>
          </> }/>
          <Route path={routes.BLOG} render={() => <>
            <NavBar page={"blogs"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <BlogTopicIndex scrollToTop={this.scrollToTop} selectBlog={this.selectBlog}  blogs={blogs} author={authors[0]}/> 
          </> }/> 
          <Route path={routes.FAQ} exact render={() => <>
            <AnnouncementBanner toggleEmailSignup={this.toggleEmailSignup}/>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <FAQMain/> 
          </> }/>  
          <Route path={routes.ABOUT} exact render={() => <>
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
          <Route path={routes.GROUP} exact render={() => <>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <HeaderComponent purpleBox={(true)} textCopy={textCopy.groupPrograms}/>
            <HeaderMessage toggleEmailSignup={this.toggleEmailSignup} textCopy={textCopy.groupPrograms}></HeaderMessage>
            <GroupMain scrollToTop={this.scrollToTop} /> 
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
          <Route path={routes.SUB} render={() => <>
            <NavBar page={"global"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <br/><br/><br/><br/><br/>
              <SubscribePage/>
          </> }/>
          <Route path={routes.ROOT} render={() => <>
            <NavBar page={"home"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
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
`