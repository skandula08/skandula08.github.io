
This project is based on a platform you *may* already be familiar with, Discord! And we are
creating an automated bot that will be facilitating the experience of learning new skills alongside
other students. When you enter a channel dedicated to building a skill, the bot will release
timely challenges that you can complete to develop your abilities. The bot acts as a facilitator in
each skill chatroom, and as you interact with it, collaborate with other users, and complete
challenges you will be able to move up to a higher level.


## Implementation

SkillSphere is implemented in Python and integrated into Discord, using the ***discordpy*** library, which is build for custom bots and automation in your servers. Because we aimed to create a bot that could helpfully answer questions and provide assistance, we used the OpenAI API to handle natural language.

We also used a Mongo database to manage past content and user statistics. Due to the rigidity of Discord’s interface, we had to work around visuals and graphical guides by making use of its embedded messages feature and markup system. 
Messaging was key in our project because we couldn’t control the graphics. We have successfully addressed most of the major functionality for the bot. 


Python schema: 
- 


#### **Here's a summary of the implemented functionality:**
1. ****Channel Creation for Learning-Focused Messaging:**** Users can create channels dedicated to learning specific skills using a polling system where the majority of users vote on new skill topics to be added.
2. ****Tiered User Leveling:**** Users are added to channels based on their skill level, starting from the lowest
tier. They can level up by completing challenges, which are tracked automatically
as users progress.
3. ****Challenge Proposals:**** Users can propose new challenges either at regular intervals or on request. This
feature enhances the engagement by introducing new learning opportunities.
4. ****Question-Answering:**** The bot is capable of answering a wide variety of questions, from skill-related
inquiries to general queries, thanks to the integration with ChatGPT.

<br />
<br />
<br />

#### Task Descriptions
| Task | Action | Command |
|------|--------|----------|
| Task 1: Search for a skill channel and join it | Use the bot in `join-new-skill` to list available skills | `$available` |
|  | Join a selected skill channel | `$join <skill-name>` |
| Task 2: Suggest a new skill (e.g., knitting) | Submit a skill suggestion to open a community poll | `$suggest <skill-name>` |
|  | Context: After suggesting, join the relevant channel | — |
| Task 3: Ask SkillBot a question in a skill channel | Ask any question within the Knitting channel | `$ask <your-question>` |
| Task 4: Submit a completed challenge | Submit your solution for review | `$submit <challenge-number>` |
| Task 5: Request a new challenge | Generate a new challenge from the bot | `$new` |

<br />

#### UX Decisions We Made to make the Bot interactive and easy to communicate with. 

<br />

  - Added pinned command guides and a new `$morehelp` command to provide clear instructions and multiple ways for users to access help when joining a new skill channel.

- Improved the wording of the `$available` command to clarify that users can search for skills using keywords (e.g., `$available drawing`) or view all skills when no keyword is provided.

- Added emojis to bot responses, including `$help` and `$available`, to create a more engaging and visually appealing user experience.

- Added dedicated voice channels for each skill, a general voice channel for casual interaction, and a `#showcase` channel where users can share and celebrate their achievements.

- Added a processing message (“SkillShareBot is typing... Please wait a moment while I find the answer!”) to provide feedback while the bot is generating a response.

- Updated channel headers and instructions to improve consistency and clarity, ensuring users can easily understand available commands and how to use them.

- Fixed bug preventing new challenges from loading with `$new`, resolved issues in skill joining, and added improved error handling plus guidance for users to report issues.

- Fixed the leveling system error and added clear progress tracking with immediate notifications when users level up, including updates in both current and next channels.

- Improved command feedback by adding real-time confirmations for user actions (e.g., challenge completion status and remaining tasks) to reduce confusion and improve visibility of system status.


## Screenshots of our Bot at work~
<br />

<img src="/assets/skillsphere/skillsphere_cover.png" />
<img src="/assets/skillsphere/instructiona_headers.png" />
<div style="display: flex;">
<img src="/assets/skillsphere/join_and_help.png" width="80%" />

<div>
<img src="/assets/skillsphere/levelup.png" />
<img src="/assets/skillsphere/loading_messages.png" />
<img src="/assets/skillsphere/reengagement.png" />
</div>
</div>

