/**
 * Created by leglars on 2017/3/14.
 */

const projects = [
    {
        projectId: "1",
        projectURL: "whispereffect",
        title: "Whisper Effect",
        subtitle: "Use your body to listen in the world",
        styleId: "we",
        titleImage: {
                src: "https://c1.staticflickr.com/3/2904/33816558092_17c7206588.jpg",
                alt: "we title image",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true,},
                title: "Whisper Effect",
                subtitle: "Use your body to listening the world",
                heroImages: [
                    {
                        src: 'https://c1.staticflickr.com/3/2857/33280229143_2df4368ab4.jpg',
                        alt: 'we exhibition',
                        key: 1,
                    },
                    {
                        src: 'https://c1.staticflickr.com/4/3931/33280228693_24aa365a2a.jpg',
                        alt: 'we exhibition',
                        key: 2,
                    }
                ],
                content: [
                    "Providing a novel listening experience to the public by introducing bone conduction is the initial idea of this project under the core theme: Designing for Playful and open-ended interactions in everyday life: human values in physical computing. One of the advantages of bone conduction is privacy so that we can create a private communication space within a public context. Meanwhile, to deliver an intuitive experience, we consider the relationship between materials, metaphors, and behaviors. Besides, we embed an anonymous and cross-time communication experience into a folktale called <a href='https://medium.com/@mowen/cambodia-tell-a-tree-hole-your-secret-f661db9ab796'><span class='reference'>'Tell a secret to a tree hole.'</span></a></div>"
                ]
            },
            {
                sectionTitle: "Inspiration",
                is: {
                    columns: true,
                },
                subtitle: "Explore the exiting projects",
                content: [
                    {
                        key: 1,
                        image: {
                            src: 'https://c1.staticflickr.com/3/2812/33707050880_9ca5872441.jpg',
                            alt: "Everyday Whisper"
                        },
                        text: ["In APT 8, <a href='https://www.qagoma.qld.gov.au/whats-on/exhibitions/apt8/artists/lawrence-english'><span class='reference'>Lawrence English took a sound sculpture called 'Everyday Whisper'</span></a>. Visitors, as parts of it, can provide a piece of voice processed like a whisper. The speaker array plays several pieces of whispers at the same time, which can give viewers wonderful acoustic experiences. This concept expands our understanding of the context of sound and encourages us to exploit the possibility of sound around our life."]
                    },
                    {
                        key: 2,
                        image: {
                            src: 'https://c1.staticflickr.com/3/2809/33280229853_b39ff6a513.jpg',
                            alt: "Listen Tree"
                        },
                        text: ["<a href=''><span class='reference'>Listen Tree</span></a> uses the feature that solid objects can conduct sound waves to the tree in order to embed audio to the surrounding environment. From this project, we realised that the core of bone conduction could change the way people perceive sound, and from this, people can get sound messages by an unexpected approach."]
                    },
                    {
                        key: 3,
                        image: {
                            src: 'https://c1.staticflickr.com/3/2911/33280229163_844d099829.jpg',
                            alt: "Tell your secret to a tree hole"
                        },
                        text: ["The folktale, <a href='https://medium.com/@mowen/cambodia-tell-a-tree-hole-your-secret-f661db9ab796'><span class='reference'>'Tell a secret to a tree hole.'</span></a>, has many version. It is said that it was originally from Ireland called <a href='http://spellbinders.org/story/the-king-with-horses-ears/'><span class='reference'>“The King With The Horse’s Ears”</span></a>. Combined with bone conduction, we wish to create a private space in public context so that people can release themselves by talking. Also, a folktale as background can take audience into the installation in a short time, like they are a role in story."]
                    },
                    {
                        key: 4,
                        image: {
                            src: 'https://c1.staticflickr.com/3/2891/33280229443_06b9ab0ce1.jpg',
                            alt: "Talking Window"
                        },
                        text: ["The design group noticed that people would like to lean on the window when they’re tired on public transportation. Therefore, they created the <a href='https://youtu.be/pOnySNREmj0'><span class='reference'>'Talking Window'</span></a> to send some messages through the window to passengers. This project shows privacy is a part of bone conduction. So audience sometimes has an illusion that he is the chosen one."]
                    },
                ]
            },
            {
                sectionTitle: "Ideate",
                is: {columns: true},
                subtitle: '"Responsive Environment" with human value',
                content: [
                    {
                        key: 1,
                        image:{
                            src:"https://c1.staticflickr.com/4/3936/34052177386_12b8a19528_n.jpg",
                            alt: "RE diagram"
                        },
                        text:[
                        "<h3>Responsive Environment</h3>",
                        "Based on studio’s process, the initial idea comes from a subtopic - Responsive Environment. According to MIT Media Lab, RE can seem as augmenting and mediating human experience, interaction and perception with sensor networks. So that we summed up a simple framework as our understanding and a guide to enhance the user experience.",
                        "<h3>Other Concepts</h3>",
                        "To raise the human value of exploring the desires of people from a range of age groups, we generated two concepts. ",
                    ],
                },
                {
                    key: 2,
                    image:{
                        src:"https://c1.staticflickr.com/4/3954/34092678085_51401c3f6d_n.jpg",
                        alt: "Huggable sculpture"
                    },
                    text:[
                "The Huggable sculpture hopes reflect how powerful it is to be able to give, by hugging, and receive, by listening, with sharing hopes/dreams between strangers, which provides insight across generations."
                ]
                },
                {
                    key: 3,
                    image:{
                        src:"https://c1.staticflickr.com/3/2861/34052374716_a88becf11c_n.jpg",
                        alt: "Pillow talk"
                    },
                    text:[
                "Pillow Talk aims to empathy visitors’ childhood memories that lay on bed with careful and listen to late-night broadcast in secret. A vertical bed is set up as the installation. Visitors can lean on it as lay on a bed. Through a pillow, they can hear something and response the questions.",
                "However, restricted by cost and time, we can’t build an installation above two. We followed the folktale’s framework, make a cardboard tree."
                    ]
                },
                ]

            },
            {
                sectionTitle: "Storyboard",
                is: {imageWithText: true, singleImage: false},
                subtitle: "Tell the secret to a treehole",
                images: [
                    {
                        isVideo: true,
                        src:"https://www.youtube.com/embed/7HvsA6K81Bw"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2807/33935688112_9e6f7d3c19_c.jpg",
                        alt:"king & hairdresser"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2846/34052108276_2d22559869_c.jpg",
                        alt:"Hairdresser"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2911/34053307556_751005ca1e_c.jpg",
                        alt:"tree"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2888/34052110506_6fa46058f9_c.jpg",
                        alt:"sally"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2878/33962663921_f54e5b5af3_c.jpg",
                        alt:"Listening tree"
                    },
                    
                ],
                content: [
                "In the previous conceptual design, some concept sketches are being present, which seems like the visual representativeness of this project. Therefore, when the team starts to illustrate the storyboard, there are more lovely roles and setting being drawn out.",
                "Since we use the folktale as the background of the project, it is our storyboard script naturally. Then we decided to deliver a carton-style puppetoon to fit the script, which is funny and attractive."
                ]
            },
            {
                sectionTitle: "Prototyping",
                is: {imageWithText: true, singleImage: false},
                subtitle: "Physical building",
                images: [
                    {
                        src:"https://c1.staticflickr.com/4/3953/33964576241_de0b763376_c.jpg",
                        alt:"Electronical protoptye"
                    },
                    {
                        src:"https://c1.staticflickr.com/4/3937/33710057080_22c3315e88_c.jpg",
                        alt:"soldering"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2845/34054106226_eb2625b602.jpg",
                        alt:"bear"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2869/34094733335_2c9a869c7b_c.jpg",
                        alt:"drum"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2900/34054105476_5002805be2_c.jpg",
                        alt:"drum2"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2907/33710061430_d4e6728249_c.jpg",
                        alt:"Physical tree"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2897/33937768722_ab075ca0b5_c.jpg",
                        alt:"Testing material"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2878/33962663921_f54e5b5af3_c.jpg",
                        alt:"carton tree"
                    },
                ],
                content: [
                "We found <a href='https://au.pinterest.com/pin/433964114069452451/'><span class='reference'> a tutorial on Pinterest.</span></a> It taught us how to make a cardboard truck. We took serval weeks to build our tree step by step.",
            'I took apart three speakers and took out their amplifier unit to drive the transducer. The sensor was put on the top of tree hole so that the forehead of audience can against on it when they "talk to treehole". Under the tree hole, there is a distance sensor, so the program knows whether a user is approaching.',
            "Due to the installation is a tree, I preferred no physical interaction method, like buttons and screen. As a result, I proposed using light to give user feedback, which was inspired by glow worm. Then, we conducted a body storming to stimulate the interaction process and summarized seven different light patterns covering all system status."
                ]
            },
            {
                sectionTitle: "Exhibition",
                is: {imageWithText: true, singleImage: false},
                subtitle: "The happy hours",
                images: [
                    {
                        src:"https://c1.staticflickr.com/3/2829/34092680615_90a759ab60_c.jpg",
                        alt:"family photo"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2879/33284463753_d3e6a959a4_c.jpg",
                        alt:"Demo"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2807/33711384210_74bb7c172c_c.jpg",
                        alt:"litening"
                    },
                    {
                        src:"https://c1.staticflickr.com/4/3956/33711382860_332b3b3179_c.jpg",
                        alt:"litening2"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2910/33284454123_a2a479d330_c.jpg",
                        alt:"tree1"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2892/33939098442_baf170467f_c.jpg",
                        alt:"tree2"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2831/33253642564_08f83c7493_c.jpg",
                        alt:"tree3"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2849/33939100512_c4d7a42c24_c.jpg",
                        alt:"introduce1"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2838/33253644854_555ff22a5b_c.jpg",
                        alt:"introduce2"
                    },
                    {
                        src:"https://c1.staticflickr.com/3/2857/33962666781_364dc35553_c.jpg",
                        alt:"Everyone"
                    },
                ],
                content: [
                "In the Exhibition, people like the tree because the light makes the tree look shining. The color-change tree holes catch many people's eyes, especially kids'. They are curious about what is in the tree hole. But, since we aim to deliver a novel and private communication experience, the interaction seems hidden, if they didn't know the tree-hole folktale before. ",
                "To introduce our strange concept and technology to people, we design and set up a tutorial-like experience place for them - watching the video with covering ear by hands to listening to the narrative. However, in the peak time, there are so many people coming that most of them can't follow our default process to experience our project, which make some of them feel confused that how the tree works."
                ]
            },

        ]
    },

    {
        projectId: "2",
        title: "Thinking of You",
        projectURL: "thinkingofyou",
        subtitle: "Enhance family connection by just one touch",
        styleId: "toy",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true },
                title: "Thinking of You",
                subtitle: "Enhance family connection by just one touch",
                heroImages: [
                    {
                        src: 'https://c1.staticflickr.com/3/2875/33686731260_44e7c438c7.jpg',
                        alt: 'we exhibition',
                        key: 1,
                    },
                    {
                        src: 'https://c1.staticflickr.com/3/2882/33915010022_58cbc56ba3.jpg',
                        alt: 'interview',
                        key: 2,
                    }
                ],
                content: [
                    '"Thinking of you" is a digital photo display app working on tablet. As an academic orientated project, it aims to reduce social isolation amongst the elderly by improving their social connections with others through importing ICT into their daily lives.',
                    'Before I participated into this project, there had been two design iterations being done by two different students separately. Therefore, the basic concept had matured when I got this project. And my task mainly focused on conducting evaluation on the target group (which corporate with a clinical psychology research group) and collecting and analyzing feedbacks and data for future improvement. Then, I generated a new version “Thinking of You” prototype with some innovative features inspired by results achieved from the evaluation.'
                ]
            },
            {
                sectionTitle: "History",
                is: {imageWithText: true},
                subtitle: "",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2949/33930355672_958216fe50_c.jpg",
                        alt: "Mika Version"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2832/33245159124_94278f7b1a_c.jpg",
                        alt: "Lin Version"
                    },
                ],
                content: [
                    "This initial idea of “Thinking of You” comes from Mika in 2008. She explored that use a touch screen based digital photo frame to foster the aging in place. After a wide range of interviews, observation and prototype presenting, she realized that a message simple as “I am Thinking of You” had a positive response from the receiver activating an active social connection, and considered that the combination of texting message and photo displaying has the potential benefit for enhancing people connections.",
                    "In 2014, Lin continued her work, and developed a workable web app. Compared with Mika’s version, Lin’s design is more like a photo album app. Her study proved that the more active social connections contribute to the reducing social isolations level amongst younger generation."
                ]
            },
            {
                sectionTitle: "Evaluation",
                is: {columns: true},
                subtitle: "Methodology & Implementation",
                content: [
                    {
                        key: 1,
                        image: {
                            src: "https://c1.staticflickr.com/3/2884/33245267964_fec9caac7e_b.jpg",
                        alt: "Evaluation Phase Diagram",
                        },
                        text: [
                        "<h3>Methodology</h3>",
                            "We apply single-case research framework and follow the reversal design (or A-B-A design) to construct the evaluation. We planned to invite ten people (participant) from that aged care facility, as well as their nominated families (contact) to join this 6-week project.",
                    "<ul><li><b>Phase A: baseline, all people follow their normal daily routine</b></li><li><b>Phase B: intervention, a tablet running ToY is placed in participant’s suite.</b></li></ul>"
                        ]
                    },
                    {
                        key: 2,
                        image: {
                            src: "https://c1.staticflickr.com/3/2849/33932346532_d51f3faba6_z.jpg",
                            alt: "ToY Sturcture"
                        },
                        text: [
                        "<h3>Implementation</h3>",
                            "In my research, the target audience is aging generation living in a nursing home with a low recognition capacity. Therefore, the functionality and interaction should be as simple as possible so that they can complete the evaluation without problem.",
                    "The way we collect social connections data (daily message dairy) caused each participant couldn’t nominate too many contact. Considering the team’s management ability, we decided that each participant could nominate 4 contacts at most. Meanwhile, it is convenient for overlaying all contacts’ photos within one screen. So, participants not need the others interaction with the device but touch the screen when they were thinking someone.",
                    "To record all operations of participants, the app should integrate an event recording module.",
                    "The new “Thinking of You” consists of three parts: app itself, data recording and messaging. I apply Flask to build and manage the logic of the app; use Firebase to store, record, and monitor the data; employ Polivo as messaging provider. The whole app sets up on the RESTful structure."
                        ]
                    }
                ]
            },
            {
                sectionTitle: "Evaluation",
                is: {imageWithText: true},
                subtitle: "Data Collection",
                images: [
                    {
                        src: "https://c1.staticflickr.com/4/3933/33705226350_640ac18a63_o.jpg",
                        alt: "Interview"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2907/33278203343_3a2b624a91_o.jpg",
                        alt: "Data Snapshot"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2849/33932346532_d51f3faba6_z.jpg",
                        alt: "ToY Sturcture"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2884/33245267964_9e9e9f61bb_o.jpg",
                        alt: "Phase Diagram"
                    },
                ],
                content: [
                    "<h3>Data Collection</h3>",
                    "At the end of each phase, we hold a semi-structure interview with the participant to measure their social status and social satisfaction; besides, A daily dairy message sends to each contact to track participant’s social connections during the whole evaluation. By comparing with data of each phase, the difference helps to understand the impact of ToY. ",
                    "By the way, all participants’ operations on the app are recorded. It allows us to explore the pattern of behaviors."
                ]
            },
            {
                sectionTitle: "Findings",
                is: {
                    imageWithText: true,
                    singleImage: false
                },
                subtitle: "",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2948/34049212976_4138027cba_c.jpg",
                        alt: "Evaluation Phase Diagram",
                    }
                        ],
                content: [
                    "<ul><li><b>1. Aging people have a better technology adaptability than stereotype</b></li>" +
                        "<li><b>2. The amount of social connections didn’t change</b></li>" +
                        "<li><b>3. Sharing stories behind photos to friends is a crucial daily activity</b></li>" +
                        "<li><b>4. The ToY message is expected to deliver more information</b></li>" +
                        "<li><b>5. ToY seems as an alternative communication tool contacting family without disturbance</b></li>" +
                        "<li><b>6. Their children update new photos regularly</b></li>" +
                        "<li><b>7. Simplify interaction with deliberation</b></li></ul>",
                        "<a href='https://c1.staticflickr.com/3/2948/34049212976_4acf833a9b_o.jpg' target='blank'><span class='reference'><b class='secondary'>Full size poster</b></span></a>"
                ]
            },
            {
                sectionTitle: "Prototyping",
                is: {
                    imageWithText: true,
                },
                subtitle: "",
                images: [
                    {
                        src: "https://github.com/leglars/portfolio/blob/master/src/statics/images/toy/display.gif?raw=true",
                        alt: "Display",
                    },
                    {
                        src: "https://github.com/leglars/portfolio/blob/master/src/statics/images/toy/photoview.gif?raw=true",
                        alt: "Photo view",
                    },
                    {
                        src: "https://github.com/leglars/portfolio/blob/master/src/statics/images/toy/message.gif?raw=true",
                        alt: "message",
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2930/33961307271_2e20d3cf0d_c.jpg",
                        alt: "Photo view snapshot",
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2926/33961300961_d8731d9d2c_c.jpg",
                        alt: "Enhanced message",
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2904/33961308371_778763b6c3_c.jpg",
                        alt: "Photo uploader",
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2923/33961314761_74bc371481_c.jpg",
                        alt: "Notification",
                    }
                        ],
                content: [
                    "So far, I have achieved some potential ideas from the findings for the subsequent design iteration and transfer these ideas into detailed solutions and features, then integrate them into TOY. However, the limited user number confines my ability to make convincing design decisions which is the most engaging feature for users. To address this defect, I Justifying user demand level for each idea in the <a href='portfolio/src/statics/file/Thesis_Final.pdf'><span class='reference'>Thesis Report</span></a> based on what I found from evaluation and literatures."
                ]
            },

        ]
    },
    {
        projectId: "3",
        projectURL: "xuedaoji-speechdailypractice",
        title: "Speech Practice App",
        subtitle: "An affordable proffessional speech test training service",
        styleId: "xdj",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true,},
                title: "XueDaoJi - Speech Practice",
                subtitle: "An affordable premium speech training service",
                heroImages: [
                    {
                        src: 'https://c1.staticflickr.com/3/2811/33682545960_c7e761fe8f.jpg',
                        alt: 'XueDaoJi Logo',
                        key: 1,
                    },
                    {
                        src: 'https://c1.staticflickr.com/4/3941/33255653193_1d519dc8b3_m.jpg',
                        alt: 'Speech Test',
                        key: 2,
                    }
                ],
                content: [
                    "XueDaoJi is an English educational agency located in Hefei, China. It provides superior academic English test training service - SAT, AP, TOEFL and IELTS.",
                    "XueDaoJi - Speech Practice is a mobile app based on WeChat mini program framework. Through it, I desire to provide an professional online English speech practice service for Chinese English language test examinee, TOEFLr and IELTSer, with an affordable price. Besides, applying mini program framework, this app can offer a ready-access-upon-use experience that a user can open the app at any time without any installation."
                ]
            },
            {
                sectionTitle: "Background",
                is: { columns: true },
                title: "Background",
                subtitle: "Seek new market opportunity",
                content: [
                    {
                        key: 1,
                        image: {
                            src: 'https://c1.staticflickr.com/4/3941/33568545700_6bb001084a_n.jpg',
                            alt: "WeChat"
                        },
                        text: [
                        "<h3>WeChat</h3>",
                        "In China, WeChat is the most popular IM and social media platform. However, companioning with Official Account Platform and WeChat Pay, WeChat become a universal app. The users can almost do anything related with daily life on it. A report shows there are 700 million monthly active users in 2016. Almost every Chinese smartphone user has a WeChat account. To a large extent, it has become THE app in China.",
                        "In Jan 2017, WeChat officially released mini program platform and development framework to public. Through APIs, a mini program can directly access abundant WeChat’s features, such as authority, payment, IM, voice message, etc. Compared with developing a native app, by the help of WeChat platform, Mini Program has a simpler developing structure and more powerful distribution channel. By the way, cross-platform is also an attractive feature of the mini program.",
                        "Mini Program promotes a ready-access-upon-use philosophy. It says users just go to open an app without any installation and sign-in requirement (WeChat authority) when they want to use it. This scenario fits many small apps."

                        ]
                    },
                    {
                        key: 2,
                        image: {
                            src: 'https://c1.staticflickr.com/3/2942/33140287513_1e3ff58d32_n.jpg',
                            alt: "Everyday Whisper"
                        },
                        text: [
                        "<h3>Oversea Study Wave</h3>",
                        "With the burgeoning of oversea study market, language teaching and training industry gains a quick development in China. The other factor pushing this boom is that its target consumers, in most cases, have a high payment ability and an active consumption willing. Therefore, enormous people come in to seek the opportunity."
                        ]
                    },
                ]
            },
            {
                sectionTitle: "Problem Scope",
                is: {columns: true},
                title: "Problem Scope",
                subtitle: "",
                content: [
                    {
                        key: 1,
                        image: false,
                        text: [
                        "<h3 class='startLine'>Where is problem?</h3>",
                        "The traditional language training is low-efficiency because of too many dispensable processes. However, 1-to-1 or small group teaching, which are considered as the best way to improve grade, is cost. Furthermore, teaching has less effect for students than hard practice. Here, use a typical 1-to-1 speaking course as an example.",

                        "<ul><li>1. Teacher gives a topic; student responses like testing context</li>" +
                        "<li>2. Critiques response and analyzes issues</li>"+
                        "<li>3. Review and analyze the topic</li>" +
                        "<li>4. Help student to organize a sample answer and present other related phrase or sentence</li>" +
                        "<li>5. Student practices</li>" +
                        "<li>6. Have a break</li>" +
                        "<li>7. Iterate</li>" +
                        "<li>8. Arrange assignment based on student situation</li></ul>",

                        "In fact, Effective guidance, step 2, 3, 4, and 8, are the essence of teaching; and Self-practice is the core of learning. however, teaching just takes up half of course time which means resultless expense is also half - around $50 per hour.",

                        "<b>Why we can't extract the essential parts and package as a service?</b>",
                        "<h3>Find a starting point</h3>",
                        "Q1 & Q2 are considered the hardest sections in the TOEFL Speaking Test because of the particular testing form which has no preparing time for the testers. It requires a tester has a great speaking capacity. The best way to improve the performance in the examination is to do practice every day with teacher's guide.",

                        "Short voice message, which is not longer than 60 second, is one of the core features of WeChat. Some training agencies ask their students to submit 45s speech every day as the assignment. And teachers critique these submissions.",

                        "Based on above thought, the primary idea of this product has come out <br/> <b class='secondary'>-- A Speech Testing Practice Service by WeChat mini program framework.</b>"
                        ]
                    }
                ]
            },
            {
                sectionTitle: "Interaction Flow",
                is: { imageWithText: true },
                title: "Interaction Flow",
                subtitle: "Interaction Sequence & User Journey",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2831/33140773723_edbe034775_o.jpg",
                        alt: "Interaction Sequence"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2919/33824154311_3dd5a91a86_o.jpg",
                        alt: "New User Sign in"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2846/33824154231_e13ab5e0a5_o.jpg",
                        alt: "Daily Practice"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2896/33569067050_968a0d5443_o.jpg",
                        alt: "Teacher Evaluation Workflow"
                    },
                ],
                content: [
                    "The first timeline diagram briefly illustrates how clients (users and teachers) interact with the system in a time sequence.  It also simply displays the high-level system structure.",

                    "The rest three diagram tells the potential journeys from different views of users and teachers respectively. It gives an outline of the future design(UX, UI) and development."
                ]
            },
            {
                sectionTitle: "Visual Design",
                is: { imageWithText: true },
                title: "Visual Design",
                subtitle: "Interaction Sequence & User Journey",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2807/33927398556_8c117b1ca2_b.jpg",
                        alt: "Dashboard"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2918/33810665082_4cf883fff1_b.jpg",
                        alt: "Enrollment & Payment"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2834/33155321403_1a29564cc6_b.jpg",
                        alt: "Practice Page"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2873/33927397816_25bfb5773f_c.jpg",
                        alt: "Simple Answer"
                    },
                ],
                content: [
                    "According to the user journey, in the first stage of this project, I designed the main pages' UI of the mini-program-end app. It strictly follows the <a href='https://mp.weixin.qq.com/debug/wxadoc/design/index.html?t=2017119' target='_blank'><span class='reference'>WeChat UI guideline</span></a>. It is a robust UI system which has been deployed on WeChat, a billion level product, in many years. Before achieving plenty of usage data of target users, I believe it is a good choice for startup stage."
                ]
            },
            {
                sectionTitle: "Prototyping",
                is: {
                    imageWithText: true,
                    singleImage: true
                },
                title: "Prototyping",
                subtitle: "Interaction Sequence & User Journey",
                images: [
                    {
                        src: "https://github.com/leglars/portfolio/blob/master/src/statics/images/xdj/ezgif.com-resize.gif?raw=true",
                        alt: "Interaction Prototyping",
                        size: {
                            height: 480,
                            width: 270
                        }
                    }
                ],
                content: [
                    "Due to Sketch can't create interactive prototype directly, I applied Flinto to make the prototype. Since Flinto has Sketch plugin which can bridge the communication between two tools, I can quickly adapt the workflow - updating the interface in Sketch and managing the interaction logic between pages in Flinto. ",
                    "The left Gif presents the main operation in mini-program-end."
                ]
            },

        ],
    },
        {
        projectId: "4",
        title: "Web Design",
        projectURL: "wdc",
        subtitle: "Some web design works in last two years",
        styleId: "wdc",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true,},
                title: "Web Design Collection",
                subtitle: "My web design works in last two years",
                keyword: ["HTML5", "CSS3", "jQuery", "Polymer", "Js", "Sass"],
                heroImages: [
                    {
                        src: 'https://c1.staticflickr.com/3/2911/34003783406_4383143426.jpg',
                        alt: 'Snapshot of InfiniteLeaders',
                        key: 1,
                    },
                    {
                        src: 'https://c1.staticflickr.com/3/2941/33201654504_d903be904b.jpg',
                        alt: 'Snapshot of InTheKnow',
                        key: 2,
                    }
                ],
                content: [
                "In this collection, I pick up four websites' snapshots designed and built in last two years. In each stage, I always tried my best to deliver what I constructed in mind and drew on the paper. Through those practices, I achieved a deep understanding of the primary front-end technical stack: HTML5, CSS3, jQuary, Bootstrap, and Sass; and I also had a taste with some modern front-end tools: Polymer, Angular1.X, Npm, and WebPack."
                ],

            },
            {
                is: {imageWithText: true},
                sectionTitle: "Course Portfolio",
                subtitle: "DECO7350",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2922/33094059534_433f24f496_k.jpg",
                        alt: "Main page"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2927/33896647006_7fe8fbdd99_c.jpg",
                        alt: "About page & Skill list"
                    }
                ],
                content: [
                'I designed and built this website in serval hours because its time was short. With the simple structure and typography layout, it reached the aim of displaying content - course conclusion and reflection. A point of this site which is worthy of mentioning is that the skill list has a CSS animation to show the skill bar increment when the "about" page is rendered.'
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "Website Redesign",
                subtitle: "DECO7120",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2807/33898126616_1e67575336_h.jpg",
                        alt: "Index Page"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2896/33554019690_4d7cbb8670_b.jpg",
                        alt: "About"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2932/33898118156_12af3a0a11_c.jpg",
                        alt: "Project list"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2842/33096079794_84fd3e0f8f_h.jpg",
                        alt: "Project detail"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2888/33554012860_5b38ffe25e_h.jpg",
                        alt: "Article list"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2833/33938896075_ade5a40a70_k.jpg",
                        alt: "Article page"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2851/33095582034_5ecd03d83c_c.jpg",
                        alt: "contact"
                    },
                ],
                content: [
                'This work is a redesign project. I picked up a web site of a small training company called "Infinite Leaders" as a virtual client. After analyzing their business and site structure, I reorganized their information structure to make sure the site can provide information clearly, and then, redesigned the basic VIS (logo and primary color) and the whole website making it look professional. <a href="portfolio/src/statics/file/Final T02-Jacaranda.pdf" target="_blank"><span class="reference">Here is the document</span></a> record the whole redesign process.'
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "In The Know",
                subtitle: "social mobile computing",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2842/33939752735_413aa02f6f_c.jpg",
                        alt: "Entry point"
                    },
                    {
                        src: "https://c1.staticflickr.com/4/3932/33554694910_ac8f327d30_c.jpg",
                        alt: "Issue List"
                    },
                    {
                        src: "https://c1.staticflickr.com/4/3935/33096447004_5a27799d37_c.jpg",
                        alt: "News sources page [rank view]"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2930/33782391932_6557ed6d09_h.jpg",
                        alt: "News article"
                    },
                ],
                content: [
                'It has been introduced comprehensively under "In The Know" project. When I built this prototype, the Polymer 1.0 just released. I decided to attempt Material Design in this site. It was also the first time for me to touch with many concepts like Bower, Web Component, shadow DOM, hook, data binding, etc. Besides those technical improvements, I gained an in-depth understanding of material design and the usage on responsive context.'
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "Truth Detective",
                subtitle: "DECO7120",
                images: [
                    {
                        src: "https://c1.staticflickr.com/3/2819/33554828000_d82a72a274_h.jpg",
                        alt: "Entry point"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2935/33126937583_91bcea56c8_c.jpg",
                        alt: "Story Mode"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2839/33096590514_baf90b98ca_c.jpg",
                        alt: "Play Mode"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2858/33126914923_786907d3ff_c.jpg",
                        alt: "Confirmation page"
                    },
                ],
                content: [
                'I have to say this site has a bad design. It is more like an experiment. We put different interesting things into it, such as semantic UI, CSS drawing, HTML media and few Angular. The real important parts of this demo are the role & story design, classical game interface,  and the detective game concept.'
                ]
            },

        ]
    },
    {
        projectId: "5",
        title: "In The Know",
        projectURL: "intheknow",
        styleId: "itk",
        subtitle: "Use your body to listen in the world",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true},
                title: "In The Know",
                subtitle: "aaaaaaaaa",
                heroImages: [
                    {
                        src: 'https://github.com/leglars/portfolio/blob/master/src/statics/images/we/whisper_effect_title_hero_1.jpg?raw=true',
                        alt: 'we exhibition',
                        key: 1,
                    },
                    {
                        src: 'https://github.com/leglars/portfolio/blob/master/src/statics/images/we/whisper_effect_title_hero_2.jpg?raw=true',
                        alt: 'we exhibition',
                        key: 2,
                    }
                ],
                content: [
                    "In the Know is a web-based application attempting to diminish the media bias. It brings different published news articles from multiple media organisations together, thus allowing the public to consume the news related with the same issue from different angles.",
                ],
            },
            {
                sectionTitle: "Problem Space",
                is: {columns: true},
                subtitle: "Laurence - Everyday Whisper",
                content: [
                    "Journalism and media are biased. Research found that the perception of bias is both subjective and relativistic (D’Alessio, 2003). Due to the mass volume of media available, people become tired of judging the accuracy, news-relevance and bias of the article they read. This causes readers to develop a preference for specific news providers and ignore other worthy news sources, even lose perception and awareness of bias in the media.",

                    "Bias is sometimes unavoidable, but it can be minimised if every reader had the chance to view and compare a story over time, from a range of viable sources. Based on this mind, In The Know wishes to provide people a platform where they can make an informed decision of whether a news provider may show signs of bias and make their own justified judgments.",

                    "With the increasing number of digital news incorporating a user feedback system, it is important to “understand how people process and integrate technology-mediated messages from unknown others to make sense of their social world” (Lee, 2012). Therefore, In the Know also offers an anonymous free-to-comment atmosphere through Danmaku (flying comment) system."
                ]
            }

        ]
    },
    {
        projectId: "6",
        title: "Live & Memory",
        projectURL: "live",
        subtitle: "Use your body to listen in the world",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "introduction",
                subtitle: "",
                is: {},
                content: "In this title, we apply bone conduction technology to change the way of listening and embed this innovative experience into a folktale - Don’t tell your secret to a tree hole. To deliver an intuitive experience, we consider the relationship between materials, metaphors, and behaviors",
            },
            {
                sectionTitle: "inspire",
                is: {},
                subtitle: "Laurence - Everyday Whisper",
                content: "Swift the daily idea can bring us into a brand-new world."
            }

        ]
    },
    {
        projectId: "7",
        title: "City Talk",
        projectURL: "citytalk",
        subtitle: "Use your body to listen in the world",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "introduction",
                subtitle: "",
                is: {},
                content: "In this title, we apply bone conduction technology to change the way of listening and embed this innovative experience into a folktale - Don’t tell your secret to a tree hole. To deliver an intuitive experience, we consider the relationship between materials, metaphors, and behaviors",
            },
            {
                sectionTitle: "inspire",
                subtitle: "Laurence - Everyday Whisper",
                content: "Swift the daily idea can bring us into a brand-new world."
            }

        ]
    },
    {
        projectId: "8",
        title: "Graphic Design",
        projectURL: "graphic-design",
        styleId: "gdc",
        subtitle: "",
        titleImage:{
                src: "https://c1.staticflickr.com/3/2843/33974491825_670774c923.jpg",
                alt: "placeholder",
            },
        sections: [
            {
                sectionTitle: "Introduction",
                is: {titlePage: true,},
                title: "Graphic Design Collection",
                subtitle: "",
                keyword: ["Adobe Creative Suite", "Graphic Design", "Typography", "VI"],
                heroImages: [
                    {
                        src: 'https://c1.staticflickr.com/5/4282/35028172631_4b08c10932.jpg',
                        alt: 'snapshot of masterpiece',
                        key: 1,
                    },
                    {
                        src: 'https://c1.staticflickr.com/5/4264/34772306780_af88345b00.jpg',
                        alt: 'Snapshot of Miaoqu',
                        key: 2,
                    }
                ],
                content: [
                "This collection contains some representative graphic works. Most of them came from my college era when I immersed in starting up a social entrepreneur group (SIFE) on the campus and working on several projects. They recorded my growth on graphic design. After I had come to Australia, I put myself into the exploration in UX and interaction design and had less effort on creating posters.",
                "Of Course, graphic design is not equal to make a beautiful poster. The collection includes magazine & newspaper typography, posters, presentation materials for competitions and other related works. These all present my understanding and capability on graphic design."
                ],

            },
            {
                is: {imageWithText: true},
                sectionTitle: "Magazine & Newspaper",
                subtitle: "Typography with InDesign",
                images: [
                    {
                        src: "https://c1.staticflickr.com/5/4191/33866986383_3a2ba37dd8_c.jpg",
                        alt: "Elites in Brisbane"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4156/33866993083_2f01831f43_b.jpg",
                        alt: "Tiandi sample 1"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4191/33834409784_433f2913e2_b.jpg",
                        alt: "Tiandi sample 2"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4185/33834415834_6390d0cfaf_b.jpg",
                        alt: "Tiandi Sample 3"
                    },
                ],
                content: [
                "Newspaper typography is my start-point of graphic design. I was an editor working for school journal. In a B&W world, I knew that the combination of basic visual elements, such as space, font, gray, segment line, shadow, position, and density, is so powerful. I realized the enjoyment in design and started to learning around this area.",
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "Posters",
                subtitle: "",
                images: [
                	{
                        src: "https://c1.staticflickr.com/5/4159/34547220571_02703d45e1_k.jpg",
                        alt: "MasterPiece"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4159/34546923911_66c5a1bb90_c.jpg",
                        alt: "Recruiting"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4164/34636565456_15a1d9c4f9_b.jpg",
                        alt: "Google Competition Presentation"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4165/34546900011_600d86702d_h.jpg",
                        alt: "Enjoying Childhood"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4180/34546902241_98e55bdcc5_b.jpg",
                        alt: "Alumni Meeting"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4178/34636578396_1d5b80b8df_c.jpg",
                        alt: "StoryMaker"
                    },
                    {
                        src: "https://c1.staticflickr.com/3/2948/34049212976_4138027cba_c.jpg",
                        alt: "Thinking of You"
                    },
                    

                ],
                content: [
                'Posters always serve certain goals: showing an attitude, delivering an idea, telling a story and enhancing an atmosphere. It is the mindset when I make a poster. Then some Easter eggs may give people who catch the point a chuckle.'
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "Presentation Design",
                subtitle: "Competition Presentation Material",
                images: [
                    {
                        src: "https://c1.staticflickr.com/5/4170/33834698604_1b572eac70_c.jpg",
                        alt: "KungShiFu Competition"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4177/34636344076_383ba7b86a_k.jpg",
                        alt: "Enactus National Competition"
                    }
                ],
                content: [
                'These works helped my teams to achieve three national-level competitions. Before I started to make a presentation material, I would read the script first and highlight points we desire to present to judges. I attempt to assist audiences getting an overview of presenting content in shortest time. Then, give it a stunning style which should contribute to not just displaying information, but also reflecting the brand.'
                ]
            },
            {
                is: {imageWithText: true},
                sectionTitle: "Other Works",
                subtitle: "",
                images: [
                    {
                        src: "https://c1.staticflickr.com/5/4173/34700235555_3b84d76c81_h.jpg",
                        alt: "Logos"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4185/34659808916_d100a6179e_b.jpg",
                        alt: "Thank-you Card"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4155/34312537280_5b45f4f98e_b.jpg",
                        alt: "Business Card & Name Card"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4161/34312372990_d6d467611d_c.jpg",
                        alt: "T-shirt"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4159/34312353720_248b7bee0f_c.jpg",
                        alt: "Brasket Icon"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4166/34656498236_c4a9b98d73_c.jpg",
                        alt: "Clip & Band"
                    },
                    {
                        src: "https://c1.staticflickr.com/5/4194/33857994674_7660edb852_k.jpg",
                        alt: "Postcards"
                    },
                ],
                content: [
                'This page contains a wide range of works from logos, thank-you card, to T-shirt and postcard, gathered from different projects. Each of them demonstrates my inspiration and trial at that time.'
                ]
            },

        ]
    },
];

export default projects;