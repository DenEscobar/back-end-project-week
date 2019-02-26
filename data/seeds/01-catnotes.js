
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('catNotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('catNotes').insert([
        {
          title: "Groom yourself 4 hours", 
          textBody: "Mice. Loves cheeseburgers my left donut is missing, as is my right yet jump around on couch, meow constantly until given food, but dead stare with ears cocked. Poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls love you, then bite you chew iPad power cord groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked ignore the squirrels, you'll never catch them anyway"
        },
        {
          title: "Howl on top of tall thing furrier and even more furrier hairball", 
          textBody: "Rub butt on table immediately regret falling into bathtub but cats making all the muffins. Ask to go outside and ask to come inside and ask to go outside and ask to come inside."
        },
        {
          title: "I bet my nine lives on you-oooo-ooo-hooo", 
          textBody: "Lick left leg for ninety minutes, still dirty."
        },
        {
          title: "bird bird bird bird bird bird", 
          textBody: "Demand to have some of whatever the human is cooking, then sniff the offering and walk away making sure that fluff gets into the owner's eyes pose purrfectly to show my beauty purr for no reason, and cat mojo ignore the human until she needs to get up, then climb on her lap and sprawl. Nap all day chase mice scratch at the door then walk away. Check cat door for ambush 10 times before coming in. Swat at dog. Leave hair on owner's clothes human is washing you why halp oh the horror flee scratch hiss bite but hey! you there, with the hands stare out the window or eat too much then proceed to regurgitate all over living room carpet while humans eat dinner spend six hours per day washing, but still have a crusty butthole. "
        },
        {
          title: "Wack the mini furry mouse", 
          textBody: "Hack up furballs massacre a bird in the living room and then look like the cutest and most innocent animal on the planet destroy couch. Stare at imaginary bug chase ball of string climb leg. "
        },
        {
          title: "Jump on human and sleep on her all night long", 
          textBody: "Love loves cheeseburgers fooled again thinking the dog likes me. "
        },
        {
          title: "I like cats because they are fat and fluffy", 
          textBody: "See owner, run in terror meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat so meoooow, hide when guests come over. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now meowing non stop for food. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff meoooow leave dead animals as gifts going to catch the red dot today going to catch the red dot today demand to have some of whatever the human is cooking, then sniff the offering and walk away yet woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now and try to jump onto window and fall while scratching at wall."
        },
      ]);
    });
};
