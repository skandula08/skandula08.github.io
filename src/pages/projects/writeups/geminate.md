
### Build process

Firstly in order to build our project, GemiNate, locally, we need the source code downloaded onto our machine. After unzipping or cloning the project, open it in visual studio code, or locate the folder in your terminal and cd into it.

To build the project, first make sure npm is installed, then run npm install at the project root. The project also needs environment variables, namely for the google SSO and the soundcloud API. These environment variables should be received from those sources.

After building and filling out the .env files, one can run npm run dev to run both the server and the client in development mode. When deploying to an environment, one must also fill out the .env files there.

The deployed application can be found here: [```https://gamenite-gs0z.onrender.com/```](https://gamenite-gs0z.onrender.com/)

<button class="live-link-button"><a href="https://gamenite-gs0z.onrender.com/">Visit the live site here!</a></button>

### User Interactions

In order to interact with GemiNate’s new features, the ones that were added and updated by us, users can follow the following steps for each user story:

 #### Blackjack

   Blackjack is a game, similar to Nim and Number Guesser, so it can be accessed through the games subtab on the sidebar, or the site root/games. Then, one can either select “Create New Game” or on one of the existing Blackjack games. Blackjack requires at least two users to play, so you need at least two separate users to join the game to start.

   The player who created the game can then choose the number of rounds and decks, and players can take turns making moves in Blackjack. The moves that a player can make are shown to them on the screen.

   After all players have made moves on every round, the game will end. This is all you need to play Blackjack. The rules are fairly simple, your goal is to try to get as close to 21 points as possible without going over, so you beat the computer, who will draw cards until they reach 17 or more points.

 #### Communities

 Communities, too, are found on the sidebar. Click on the tab labeled communities. Users can make only one community per day.

To create a community, click the button labeled as such, and enter a name. If you would like it to be private, click the “private” checkbox before making your community. You can also enter a description.  

Upon making your community, it will appear in your “My Communities” list. You can click on it to enter, and others can see it if it is public, and join by pressing “join.” Note that for them it will appear in the “joinable communities” list.  

As the owner of the community, you can make edits to its information.  

#### Profile Enhancements

   Profile enhancements can be done through your profile menu.  
   These are the new fields that were added in GemiNate.  
     
   Users can select a profile picture from their local files and it will be cropped to a square. They can also choose pronouns from a drop-down of common English pronouns and pronoun sets. Note that “it/its” is rarely but genuinely used by some individuals, and is not meant to be derogatory. If users want to use multiple sets, or a neopronoun, they can also specify “Other” and write their pronouns in a field.!
   

#### Jukebox

   Jukeboxes are primarily accessed through communities and are directly tied to a community. If you are the community’s owner or a DJ (see above), you can interact with a community’s jukebox \- regular users are still able to interact with a Jukebox’s volume, so that they can turn it down or off, and they can request to be a DJ.

   Here, a user is searching for “music.” 
   This will come up with a list of tracks users can add. These are taken directly from Soundcloud’s API.  
     
   A DJ or an owner can then add these tracks to the community’s queue. The tracks can be moved in the queue or removed, and then paused or played, set to loop, skipped, or shuffled.  
   
     
   	Note that the tracks that can be played are the ones that
    are available through Soundcloud, which makes this functionality visible and public to the uploader.

## Technical Overview

In addition to rebranding the product to GemiNate and redesigning the site’s UI, our team implemented three major user stories on top of the existing code: a brand-new live blackjack game, profile improvements and social communities, and finally live music streaming through our jukebox feature. In this report, we will discuss each user story separately, discussing profile improvements and communities separately, for simplicity.

Over the course of this project, we have completed all of the essential and desirable conditions of satisfaction we laid out for ourselves. Thankfully, we didn’t have to update our scope\!

<table>
  <thead>
    <tr>
      <th>User Story</th>
      <th>Features</th>
    </tr>
  </thead>
  <tbody>
    <!-- User Story 1 -->
    <tr>
      <td rowspan="11">
        <strong>1.</strong> As a player on GameNite, I want to be able to play blackjack live with several other players so that I can learn from others’ strategies within a social experience.
      </td>
      <td>Players can start a blackjack game with between 2 and 6 players</td>
    </tr>
    <tr>
      <td>Blackjack game will implement a representation of a deck of cards that can be shuffled and dealt to players</td>
    </tr>
    <tr>
      <td>Players are dealt cards from the deck at the beginning of the game, and the dealer (the server) draws one card</td>
    </tr>
    <tr>
      <td>Players are able to see the cards that are on the table graphically</td>
    </tr>
    <tr>
      <td>Players are able to hit or stand on their turn, and the game will properly let them continue or bust</td>
    </tr>
    <tr>
      <td>The dealer will draw a new card at the end of the round, unless their cards total 17 or higher. If the dealer busts, all players who have not already busted win</td>
    </tr>
    <tr>
      <td>At the end of each round, all players who do not bust and have cards closer in value to 21 than the dealer are granted a win, and other players are granted a loss</td>
    </tr>
    <tr>
      <td>Room creator sets the number of blackjack games, and players can bet chips. Whoever has the most chips at the end of the games wins</td>
    </tr>
    <tr>
      <td>Players should be warned when placing large bets</td>
    </tr>
    <tr>
      <td>Graphics resemble playing cards and the table resembles casino tables</td>
    </tr>
    <tr>
      <td>Multi-deck options to prevent card-counting</td>
    </tr>
    <!-- User Story 2 -->
    <tr>
      <td rowspan="12">
        <strong>2.</strong> As a user of GameNite, I want to customize my profile and create communities so I can express myself and interact with other users.
      </td>
      <td>Users can set a profile picture to any .jpg or .png they upload, or to a default option</td>
    </tr>
    <tr>
      <td>A user’s profile picture will be displayed next to their name on their profile page, in activity logs, and in chat messages</td>
    </tr>
    <tr>
      <td>Users can write their own bios that will be displayed publicly on their profile</td>
    </tr>
    <tr>
      <td>Users can sign in using external applications (SSO), such as a Google account</td>
    </tr>
    <tr>
      <td>Users can add personal pronouns to a dedicated field on their profile</td>
    </tr>
    <tr>
      <td>Users can create a community and send invite messages</td>
    </tr>
    <tr>
      <td>The user who created the community is the owner; owners can kick or ban users</td>
    </tr>
    <tr>
      <td>Private communities should only be accessible by members</td>
    </tr>
    <tr>
      <td>Community owners cannot leave without passing the owner role to someone else</td>
    </tr>
    <tr>
      <td>Users can only create up to one community every day</td>
    </tr>
    <tr>
      <td>Owners should be able to customize the name and picture of a community</td>
    </tr>
    <tr>
      <td>Communities can be set to public, and anyone can join from a public communities page</td>
    </tr>
    <!-- User Story 3 -->
    <tr>
      <td rowspan="9">
        <strong>3.</strong> As a member of the gaming community on GameNite, I want to collaborate with other players to create a fun and lively environment by sharing music that we can play during games.
      </td>
      <td>Users in a community can listen to music together simultaneously</td>
    </tr>
    <tr>
      <td>Owners can grant community members a DJ role, allowing them to update the music playlist</td>
    </tr>
    <tr>
      <td>Owners and DJ members can add tracks to their community’s jukebox (via SoundCloud API or MP3 upload)</td>
    </tr>
    <tr>
      <td>Users can select a community, which will play that community’s jukebox for them</td>
    </tr>
    <tr>
      <td>All members can control their own volume (including muting) without impacting others</td>
    </tr>
    <tr>
      <td>Owners and DJ members can add/remove tracks from specific queue positions and shuffle the queue</td>
    </tr>
    <tr>
      <td>Members can request access to the DJ role</td>
    </tr>
    <tr>
      <td>Music will play site-wide, not just in the community chat</td>
    </tr>
    <tr>
      <td>Owners and DJ members can choose to loop the entire jukebox queue or individual tracks</td>
    </tr>
  </tbody>
</table>

### Blackjack

The game of Blackjack was added as a game alongside the existing Nim and Number Guesser games. The game relies on the players to make moves in a sequence. The implementation of Blackjack includes a betting stage, a stage where players can make moves (namely hitting, or drawing a card, and standing) and a dealer phase, which mostly serves to show the results of the individual round. The implementation of games within the original application relies on a move payload being made in order to make updates to the visuals, so every change to the board had to come from a user input; namely, the dealer phase instantly shows the dealer’s draws, and the player who started the game has to end it manually, to ensure every player is able to see what the dealer drew and if they won their bet or not.

### Profile Improvements

Profile improvements were added as extensions onto the existing profile structure. The main additions were pronouns, profile pictures, and bios, all optional additions to a user’s profile. The fact that they’re optional meant the addition was easy. Attributes were simply added to the existing UserRecord, and no migration was required since the attributes weren’t required.  

- To support updating these attributes, the existing UPDATE endpoint was simply extended, with the maximum request size increased to 5 MB in order to accommodate for base-64 encoded profile pictures.  

- Instead of using cloud storage, we chose to store all uploaded images directly in our Mongo documents as base-64 encoded URLs. These images are encoded and decoded in both the frontend and backend, such that they can be sent in a typical “application/json” request, without having to worry about multi-part form requests. While we admit that there is a trade-off in request and response size, we’ve determined that for the scope and scale of this project, that hindrance is acceptable and made up for by the reduction in complexity that comes from avoiding multi-part form requests and persistent cloud storage.  

- On the frontend, existing patterns were followed to display new profile information to other users and to present the edit form to the current user. Following existing patterns, a single hook was used to encapsulate the state of the Profile form.

### Communities

Users can create private and public communities, and other users can join them, either through invites or from the open communities list on the communities tab, a new tab on the sidebar that’s made specifically for communities. The user who created the community is designated as the owner (this role can be transferred later) and has the power to kick, ban, and invite other users. Each user can only create one community on a given calendar day.  


Communities store a list of users, which includes all users who have joined a community, including kicked or banned users. It uses that list, which includes a users’ roles, to verify whether or not a user is allowed as part of a community, and to verify whether or not a user can make a request from the community’s controller. Kicked users can rejoin public communities and get invites back to private ones, but being banned is permanent.  


Communities also have banners, names, and descriptions, and they can be changed similarly to the profile, but only by the owner. The banner, or background image, works similarly to the profile pictures, where they are stored as base-64 encoded URLs. See the above section on Profile Improvements to understand how they are stored \- they must be requested separately from the rest of a community in order to facilitate community load times.

### Jukebox

This feature is built around the SoundCloud API, with the intention to live broadcast music to multiple user sessions at once. Of course, webhooks stood out as a way to have bidirectional communication and manage the state of multiple sessions centrally.   

At the data level, the entity we focused on was *``Playlists``*. These would be the shared entities responsible for the listening session produced for an arbitrary number of users. The idea is that each community has an associated playlist, and based on the community visited, any user can tune in to the associated playlist.   

Finding these playlists by community, something that needs to happen fairly often, proved to be a more expensive and slower task than anticipated. To remedy this, we added the index ```PlaylistByCommunityIndex``` to allow for O(1) lookup, a big improvement.

In connecting to SoundCloud, we chose to use their client authentication flow, which was a great idea because it avoids requiring users to have SoundCloud accounts. Storing the playlist persistently while playback is stateful also has its benefits. This way, the track queue survives restarts, but playback naturally resets, which matches user expectations.  

The persistent music bar was chosen due to its similarity to existing music players. We found our initial design a bit confusing, but aligning with similar products not only provides us a jumping off point, but it means that our users will be primed to use our product correctly.

### Testing

- The backend, server-side code has about 98.49% test coverage.  
- The frontend was manually tested and shown to the TA during weekly meetings, and there are component tests for certain critical aspects of the implementation, such as for community features and the jukebox music bar.
