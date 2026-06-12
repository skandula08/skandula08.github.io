**********  

<div style="text-align: center;"> 
<br />

<h5><b><b><i>Digitizing the MBTA to increase a sense of community 
within the Boston ridership.</i></b></b></h5>
<br />

<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/1778e1a4-f3fc-44df-b5be-ac22f2ef5c8e_rw_1920.png?h=a01b24db3f46908084c3f4d6ceddc738" width=500 style="display: block;
  margin: 0 auto;" />
    
<br />

<i>Mia, Sammi, Sree, Anqi, Jerry</i>
</div>
<br />
<br />



### The initial seed...
****Observed challenge:**** On the train, there’s often a lack of sense of community, and people are often found on their phones, isolating themselves from their physical surroundings.. 
We noticed on the train and in stations, people spent their time looking on their devices. Our only issue was, when we wanted to address this point of isolatory subway experiences, is that often, a forced experience of speaking to others during these daily rituals can be deeply uncomfortable, and feel potentially unsafe.

____________________________________________________________________________
****Design Goal:**** There's a way we could combine entertainment with pathfinding. We can create a game that implements your current location and your planned MBTA journey to create a contained gaming experience that you can use to anonymously, or collaboratively engage with others in the Boston commuter community

____________________________________________________________________________
****Proposed Interface:**** A multiplayer gaming app that people can play on their phones. People on the train can play an anonymous multiplayer train game, collaborating with other people on the same train, and compete with people from other trains (green line, orange line, etc.), to be on the top of the leaderboard. This could make going on the train a fun and less isolating experience.

<br />


### Starting point:

In a nutshell, the train game we designed is called *MBTriviA*, trivia game, which met our standards of simplicity, interaction, competitiveness and real-time performance, and decided to design around this idea. After the player enters the subway station, by scanning the two-dimensional code on the carriage or station to generate the game, at the same time, the GPS system will obtain the location to calculate the arrival time, the player can compete in this different time to answer the question who is the most accurate and fastest. Your own ranking can also be seen on the leaderboard.


In the subsequent refinement and improvement, we also added a series of richer design and game content such as a periodic category for each line, friend mode, waiting mode, maps that can be viewed at any time, number of achievements, leaderboards and overall rankings of different trains, and even the placement of posters and QR codes in subway stations.

### Research and Planning phase:

To start we did some competitive analysis on similar apps, *Trivia Crack*, *NYT Games*, and *Pokemon Go*. 


**<a href="https://docs.google.com/document/d/1HXU3JRD4FGOVmJBIn2sk67_zwpS-lpEXtiHkxzQRUko/edit?tab=t.0" 
target="_blank">
  Here's our built out research document.
</a>**
 
After we set out to map out our app and come ups with some conceptualizations of our visual style.
We chose to incorporate the colors of the MBTA train lines as different game modes, and implemented the locomotive and mapping imagery as elements in the iconography and splash screens.

<div style="display:flex">
<div>
<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/d8614c4f-e9d9-4e85-adb9-e5ceb8bccfaa_rw_1920.png?h=64611e927e4735bd97fe44f8c1b890f4" style="width: 100%; margin: 5px">
<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/d7e54978-e9d6-466d-9d40-4f58f4c5cb30_rw_600.png?h=364772e3ba079d67cb790cdfc9ccdcef" style="width: 100%; margin: 5px">
</div>

<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/2b90999f-c053-4d8f-aa4a-b9af8f6ff599.png?h=37ee5bb40d181e6b6fee709a7a7ab76b" style="width: 205%; margin: 5px">
</div>
</div>


#### USER PERSONAS


| Persona 1 | Persona 2 |
|---|---|
|Penelope Marshall, a 20-year-old Northeastern University student, recently started her first co-op position in Seaport. Every morning, she has to take the T from Northeastern to Seaport, which takes about 30 minutes. Penelope suffers from a short attention span due to chronic TikTok use, so she gets very bored on her morning commute which puts her in a bad mood for the rest of the day. Penelope wishes there was some fun, mentally stimulating activity that she could participate in while on the train that would allow her to get a more pleasant start to the day.|Jason, a Northeastern student, planned to catch the Orange Line subway after classes. However, faced with a 10-minute wait for the next bus, he found himself bored. Spotting an MBTriviA QR code, he decided to pass the time by opening the app. Upon checking his profile, he discovered he was just 10 questions away from the "Answer 100 questions" achievement! Excited, he scanned the code and delved into the history category. Surprised by some new facts, like the Isabella Museum being a cold case, Jason finished the questions just as the train arrived. He felt time had flown by and was pleased with the new knowledge gained.|   

<br />
<br />

*As a fun extension to the project, my friends and I created a campy storyline of a couple of characters using the app. (view with caution)*

<br/>
<div style="display: flex">
<p  style="width: 500px">
Plot: <br/>
Richard and his classmate Alexander get on the orange line at forest hill, but with 12 minutes to go before departure time, they don't know what to talk about. When the vibe started to become super embarrassed, they noticed the QR code for MBTriviA in the carriage, felt fresh and scanned it to find out and pass the time. They plan to compete to see who has the most knowledge, and the map at the top of the screen can easily tell them the time.
</p>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/KQCal82CvLA?si=oQMQ1eL4JuS5oduM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br/>

#### A core concept was to integrate waiting times and location data tracking

1.) While on a train, a game will take just as long as your destination, with a subway line map acts as a progress bar and timer, the end being the stop you exit on.

2.) While in a station, the trivia game lasts as long as it will take until your train arrives. 

#### Emphasizing community building and human connection
1.) A leaderboard feature can allow you to compete against other commuters in Boston

2.) A multiplayer game mode to play against friends and other riders of the MBTA
<br />
<br />

### Low Fidelity Prototypes:


<div style="display:flex">
<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/10aa9de8-18cb-4c70-a0f8-9756adc6100f_rw_1200.png?h=ad3e722fade7cad7fd788baf9f74fde6" style="width: 100%; margin: 5px">

<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/e62b9962-dab2-46ae-9b0e-adfe9ce429c3_rw_1920.png?h=51abd11c2331535746d7a62126902853" style="width: 90%; margin: 5px">
</div>
<div style="display:flex">

<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/7b0a43e6-daf6-45ee-9495-85c979ab9d82_rw_1920.png?h=43c538bf0df7ad09711850fda2534b97" style="width: 305%; margin: 5px">
<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/2aaca462-a959-4db0-9ae4-cdd506ee80dc_rw_600.png?h=9e55db2239c43621b9b520b2b2cad60a" style="width: 60%; height: 50%; margin: 5px">
<img src="https://cdn.myportfolio.com/12def683-758c-419e-9fd1-93f047691924/43b9651d-2809-4d83-9891-0bf76ba1cb9c_rw_1200.png?h=7bebc6ac74d2ac0e089f8cf65b713ff9" style="width: 30%; height: 50%; margin: 5px">
</div>


Through iterative user testing we identified some key pain points in our original design:
<br />
<br />
| 1.) Visibility of system status: User doesn’t know the rules for the game immediately, the homepage doesn’t have the appropriate title and info that explains contents. <br /> Solution: Added a big “i” button on the homepage or a small “?” mark next to the start/select mode button so that they can check rules. Add explanations of the rules and small tips on the loading page. | 2.) User control and freedom: Users are not able to customize the features they need and have no freedom to self-edit/limit the time spent on individual questions. <br />Solution: add a setting in the profile for users to set how much time they want to spend on a problem, after reaching the time, they skip/randomly select an option.| 
|---|---|
****3.) Visibility of system status &  Match Between System and the Real World: user doesn’t know the meaning of the score icon and the solution he provides means this score icon doesn’t match his own experience of playing a game. <br />Solution (given by user): Maybe add two avatars at the top of the screen, one for yourself and one for your opponent, and each correct answer increases the number of correct answers and combos**** | ****4.) Flexibility and efficiency of use: the time we let the users select the game modes is not efficient and not friendly to new users since it’s not directly on the homepage.  <br />Solution: switch the start game button into two modes, so that users can know there’s two modes and select what they want immediately**** |
<br />
<br />

### High Fidelity Prototype

<br />

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/proto/Fmzu8tJfsDkvs6Fhp6YJGf/Sree--Jerry--Mia--Anqi--Sammi?content-scaling=fixed&kind=proto&node-id=348-23&scaling=scale-down&starting-point-node-id=348%3A23&embed-host=share" allowfullscreen style="display: block;
  margin: 0 auto;"></iframe>
<br />
<br />


<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/design/Fmzu8tJfsDkvs6Fhp6YJGf/Sree--Jerry--Mia--Anqi--Sammi?node-id=216-26&embed-host=share" allowfullscreen style="display: block;
  margin: 0 auto;"></iframe>
<br />

<br />

### Takeaways & what we learned:
For me, the biggest gain is that I have experienced more professional design and the mechanism of team operation. Starting from the design system, we have continued to discuss, which has enhanced my thinking on design details and the logic of design. I also realize the importance of teamwork. Everyone is good at something, and a reasonable division of labor can improve our efficiency and quality. 
After presenting our work to our peers, we were praised at how seamless the integration of the MBTA was in train themed trivia format. We also got some complements at our proposed timing simulation feature where the trivia games will last as long as the train takes to get to and from stations.  
<br />

### How can we make it better?
I think from the perspective of a game, what we need most first is to collect a large amount of player data and collect experience from some successful games, such as some 3A games, because the case study we have done is only about some similar games. In more successful games, the choice of colors and ICONS, the consideration of images, and so on. The Settings of the operation, even the color selection of the color blind mode, the adaptation of different screens, and the game balance, are worth our reference and learning, and can also help us better improve the game's function.