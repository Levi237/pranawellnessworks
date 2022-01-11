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
      title: "Postpartum Yoga",
      location: "virtual",
      info: "Build confidence, strengthen, and renew the body. ",
      price: "donation based",
      day: "Tuesday",
      when: "1st & 3rd ",
      time: "5p PT",
      img: "/events/postpartum.png",
      link: "https://mailchi.mp/fcd82697d0c7/postpartumtuesdays"
    },{
      title: "Yoga on the Harbor",
      location: "in San Diego",
      info: "Join us in person, for a fun community flow!",
      price: "donation based",
      day: "Wednesday",
      when: "1st",
      time: "6p PT",
      img: "/events/harbor.png",
      link: "https://yogaontheharbor.eventbrite.com"
    },{
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
      id: `10012022`,
      endpoint: `5_Yoga_Poses_for_Covid_Recovery`,
      title: `5 Yoga Poses for Covid Recovery`,
      category: `Functional Fitness`,
      publishDate: `Monday, January 10th 2022`,
      heroImage: `10012022_1.jpg`,
      subtext: `Recovering from Covid can be tough, and is a different journey for everyone.Natural supplements are always a win!`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Tis the season….so many people are battling Covid right now, or have just come out on the other side. Immunity and prevention are key, but if you do happen to get the virus, it’s important to begin recovery work right away. Here are 5 key poses to help release congestion, expand your lungs,open your chest, and boost immunity. Do each of these poses 3-5 minutes. Breathe in and out through your nose.`
        }]
      },{
        tag: `section`,
        list: [{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Seated Spinal Twist.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Twists are cleansing to the body, and help to release toxins. Inhale and exhale deeply in this twist in order to increase lung capacity. Gaze over your shoulder. `,
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            src: `10012022_2.jpg`,
          }]
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
            src: `10012022_3.jpg`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Butterfly.`,
          }]
        },{
          tag: `p`,
          content: [{
            text: `Lengthen your spine, bring your heels in close and flutter your knees slowly up and down. Activate your lymphatic circulation through movement and breath (in and out through your nose).`
          }]
        },{
          tag: `img`,
          content: [{
            class: `small`,
            src: `10012022_4.jpg`,
          }]
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
            src: `10012022_5.jpg`,
          }]
        },{
          tag: `h2`,
          content: [{
            tag: `b`,
            text: `Mountain pose (arm variations)`,
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
            src: `10012022_6.jpg`,
          }]
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
          text: `Take 15 min of your day to try these 5 poses! Whether you had Covid or not, these are great for immunity.`
        }]
      },{
        tag: `p`,
        content: [{
          tag: `i`,
          text: `Disclaimer: The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment.`
        }]
      }]
    },{
      id: `27122021`,
      endpoint: ` 4_Natural_Supplements_to_Boost_Immunity`,
      title: `4 Natural Supplements to Boost Immunity`,
      category: `Nutrition`,
      publishDate: `Monday, December 27th 2021`,
      heroImage: `27122021_1.jpg`,
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
            src: `27122021_2.jpg`,
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
      id: `13122021`,
      endpoint: `How_to_Increase_Joy`,
      title: `How to Increase Joy`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, December 13th 2021`,
      heroImage: `13122021_1.jpg`,
      subtext: `We are all co-creators of our own destiny.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `Every human wants to be happy. You are in charge of cultivating more joy in your life, by spending more time on things you love. Recall the moments where you felt immense peace and happiness, and go there. Here are 4 ways to `
        },{
          type: `a`,
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
            src: `13122021_2.jpg`,
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
      id: `09-29112021`,
      endpoint: `How_to_Practice_Gratitude`,
      title: `How to Practice Gratitude`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, November 29th 2021`,
      heroImage: `29112021_1.jpg`,
      subtext: `The key to less stress is an attitude of gratitude.`,
      copy: [{
        tag: `p`,
        content: [{
          text: `As we close out this month of THANKS, it’s important to highlight the benefits of practicing gratitude as a way to `
        },{
          type: `a`,
          link: `https://www.thetalenthack.com/packages/club-meditate-monthly-pass`,
          text: `reduce stress.`
        }]
      },{
        tag: `p`,
        content: [{
          text: `My mentor and Director of the Yoga Therapy Program, Dr. Larry Payne, always says there is nothing like a daily dose of Vitamin G! He’s so right. When you `
        },{
          type: `a`,
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
            src: `29112021_2.jpg`,
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
          type: `a`,
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
      id: `08-15112021`,
      endpoint: `What_is_Yoga`,
      title: ` What is Yoga?`,
      category: `Yoga`,
      publishDate: `Monday, November 15th 2021`,
      heroImage: `15112021_1.jpg`,
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
            src: `15112021_2.jpg`,
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
      id: `07-01112021`,
      endpoint: `4_Foods_to_Improve_Gut_Health`,
      title: `4 Foods to Improve Gut Health`,
      category: `Nutrition`,
      publishDate: `Monday, November 1st 2021`,
      heroImage: `01112021_1.jpg`,
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
            src: `01112021_2.jpg`,
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
      id: `06-18102021`,
      endpoint: `How_Movement_Can_Increase_Longevity`,
      title: `How Movement Can Increase Longevity`,
      category: `Functional Fitness `,
      publishDate: `Monday, October 18th 2021`,
      heroImage: `18102021_1.jpg`,
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
            src: `18102021_2.jpg`,
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
      id: `05-04102021`,
      endpoint: `Yoga_for_Better_Sex`,
      category: `Yoga`,
      title: `Yoga for Better Sex`,
      publishDate: `Monday, October 4th, 2021`,
      heroImage: `04102021_1.jpg`,
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
            src: `04102021_2.jpg`,
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
      id: `04-20092021`,
      endpoint: `10_Ways_to_Be_Mindful`,
      category: `Mindfulness & Meditation`,
      title: `10 Ways to Be Mindful`,
      publishDate: `Monday, September 20th, 2021`,
      heroImage: `20092021_1.jpg`,
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
          src: `20092021_2.jpg`,
          class: `wide`,
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
      id: `03-06092021`,
      endpoint: `4_Ways_to_Elevate_Your_Mindset`,
      category: `Mindfulness & Meditation`,
      title: `4 Ways to Elevate Your Mindset`,
      publishDate: `Monday, September 6th, 2021`,
      heroImage: `06092021_1.png`,
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
            src: `06092021_2.png`,
            class: `wide`,
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
      id: `02-23082021`,
      endpoint: `How_to_Sleep_Better`,
      title: `How to Sleep Better`,
      category: `Mindfulness & Meditation`,
      heroImage: `23082021_1.png`,
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
            src: `23082021_2.png`,
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
      id: `01-09082021`,
      endpoint: `Breathing_for_Your_Body`,
      title: `Breathing for Your Body`,
      category: `Mindfulness & Meditation`,
      publishDate: `Monday, August 9th 2021`,
      heroImage: `09082021_1.jpg`,
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
            src: `09082021_2.jpg`,
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
      id: `00-26072021`,
      endpoint: `5_Ways_to_Create_a_Powerful_Morning`,
      category: `Mindfulness & Meditation`,
      keyWords: [`meditation`, `health`],
      title: `5 Ways to Create a Powerful Morning`,
      subtext: `Achieve your goals, increase focus and productivity. Every day!`,
      authorId: `000`,
      publishDate: `Monday, July 26 2021`,
      heroImage: `26072021_1.jpg`,
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
            src: `26072021_2.jpg`,
            class: `wide`,
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
          <Route path={routes.BLOG} render={() => <>
            <NavBar page={"blogs"} toggleHamburger={this.toggleHamburger} toggleEmailSignup={this.toggleEmailSignup}/>
            <BlogMainIndex scrollToTop={this.scrollToTop} selectBlog={this.selectBlog}  blogs={blogs} author={authors[0]}/> 
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
`;