export default function skillsphere() {
return (
<div className="writeup text-left w-5/6 m-auto text-lg">
This project is based on a platform you *may* already be familiar with, Discord! And we are
creating an automated bot that will be facilitating the experience of learning new skills alongside
other students. When you enter a channel dedicated to building a skill, the bot will release
timely challenges that you can complete to develop your abilities. The bot acts as a facilitator in
each skill chatroom, and as you interact with it, collaborate with other users, and complete
challenges you will be able to move up to a higher level.


<h2> Implementation </h2>

SkillSphere is implemented in Python and integrated into Discord, using the ***discordpy*** library, which is build for custom bots and automation in your servers. Because we aimed to create a bot that could helpfully answer questions and provide assistance, we used the OpenAI API to handle natural language.

We also used a Mongo database to manage past content and user statistics. Due to the rigidity of Discord’s interface, we had to work around visuals and graphical guides by making use of its embedded messages feature and markup system. 
Messaging was key in our project because we couldn’t control the graphics. We have successfully addressed most of the major functionality for the bot. 


<h3>Python schema: </h3>

<h4><b>Here's a summary of the implemented functionality:</b></h4>
<ol>
<li> <b>Channel Creation for Learning-Focused Messaging:</b> Users can create channels dedicated to learning specific skills using a polling system where the majority of users vote on new skill topics to be added.</li>
<li> <b>Tiered User Leveling:</b> Users are added to channels based on their skill level, starting from the lowest tier. They can level up by completing challenges, which are tracked automatically as users progress.</li>
<li><b>Challenge Proposals:</b> Users can propose new challenges either at regular intervals or on request. This feature enhances the engagement by introducing new learning opportunities.</li>
<li><b>Question-Answering:</b> The bot is capable of answering a wide variety of questions, from skill-related
inquiries to general queries, thanks to the integration with ChatGPT.</li>
</ol>
<br />
<br />
<br />

  <h4>Task Descriptions</h4>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-700">
      <thead>
        <tr>
          <th className="border border-gray-700 p-3 text-left">Task</th>
          <th className="border border-gray-700 p-3 text-left">Action</th>
          <th className="border border-gray-700 p-3 text-left">Command</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-700 p-3">
            Task 1: Search for a skill channel and join it
          </td>
          <td className="border border-gray-700 p-3">
            Use the bot in <code>join-new-skill</code> to list available skills
          </td>
          <td className="border border-gray-700 p-3">
            <code>$available</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3"></td>
          <td className="border border-gray-700 p-3">
            Join a selected skill channel
          </td>
          <td className="border border-gray-700 p-3">
            <code>$join &lt;skill-name&gt;</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3">
            Task 2: Suggest a new skill (e.g., knitting)
          </td>
          <td className="border border-gray-700 p-3">
            Submit a skill suggestion to open a community poll
          </td>
          <td className="border border-gray-700 p-3">
            <code>$suggest &lt;skill-name&gt;</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3"></td>
          <td className="border border-gray-700 p-3">
            Context: After suggesting, join the relevant channel
          </td>
          <td className="border border-gray-700 p-3">—</td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3">
            Task 3: Ask SkillBot a question in a skill channel
          </td>
          <td className="border border-gray-700 p-3">
            Ask any question within the Knitting channel
          </td>
          <td className="border border-gray-700 p-3">
            <code>$ask &lt;your-question&gt;</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3">
            Task 4: Submit a completed challenge
          </td>
          <td className="border border-gray-700 p-3">
            Submit your solution for review
          </td>
          <td className="border border-gray-700 p-3">
            <code>$submit &lt;challenge-number&gt;</code>
          </td>
        </tr>
        <tr>
          <td className="border border-gray-700 p-3">
            Task 5: Request a new challenge
          </td>
          <td className="border border-gray-700 p-3">
            Generate a new challenge from the bot
          </td>
          <td className="border border-gray-700 p-3">
            <code>$new</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <br />

  <h4>
    UX Decisions We Made to Make the Bot Interactive and Easy to Communicate
    With
  </h4>

  <br />

  <ul className="list-disc pl-6 space-y-3">
    <li>
      Added pinned command guides and a new <code>$morehelp</code> command to
      provide clear instructions and multiple ways for users to access help
      when joining a new skill channel.
    </li>
    <li>
      Improved the wording of the <code>$available</code> command to clarify
      that users can search for skills using keywords (e.g.{" "}
      <code>$available drawing</code>) or view all skills when no keyword is
      provided.
    </li>
    <li>
      Added emojis to bot responses, including <code>$help</code> and{" "}
      <code>$available</code>, creating a more engaging and visually appealing
      user experience.
    </li>
    <li>
      Added dedicated voice channels for each skill, a general voice channel
      for casual interaction, and a <code>#showcase</code> channel where users
      can share and celebrate their achievements.
    </li>
    <li>
      Added a processing message:
      <blockquote className="mt-2 border-l-4 pl-4 italic">
        SkillShareBot is typing... Please wait a moment while I find the
        answer!
      </blockquote>
      to provide feedback while the bot generates responses.
    </li>
    <li>
      Updated channel headers and instructions to improve consistency and
      clarity, ensuring users can easily understand available commands and how
      to use them.
    </li>
    <li>
      Fixed a bug preventing new challenges from loading with{" "}
      <code>$new</code>, resolved issues in skill joining, and added improved
      error handling plus guidance for reporting issues.
    </li>
    <li>
      Fixed the leveling system error and added clear progress tracking with
      immediate notifications when users level up, including updates in both
      current and next channels.
    </li>
    <li>
      Improved command feedback by adding real-time confirmations for user
      actions (such as challenge completion status and remaining tasks) to
      reduce confusion and improve visibility of system status.
    </li>
  </ul>


<h2> Screenshots of our Bot at work~ </h2>
<br />

<img src="/assets/skillsphere/skillsphere_cover.png" />
<img src="/assets/skillsphere/instructiona_headers.png" />
<div style={{display: "flex"}}>
<img src="/assets/skillsphere/join_and_help.png" width="80%" />

<div>
<img src="/assets/skillsphere/levelup.png" />
<img src="/assets/skillsphere/loading_messages.png" />
<img src="/assets/skillsphere/reengagement.png" />
</div>
</div>

</div> );
}