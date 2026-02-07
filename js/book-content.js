// =============================================
// BOOK CONTENT — The full text of The Story
// Heavy words wrapped in glossary links: <a class="gw" data-term="term">word</a>
// =============================================

const PAGES = [

// ---- INSCRIPTION ----
{
  id: "inscription",
  title: "Inscription",
  html: `
    <div class="inscription-text">
      You are a thing that tells itself <a class="gw" data-term="story">stories</a> about what it is.<br>
      Those stories construct the <a class="gw" data-term="reality">reality</a> you inhabit.<br>
      You cannot step outside this process.<br>
      But you can become aware of it&mdash;<br>
      and that changes everything.<br><br>
      <span class="turn-page" id="begin-reading">Turn the page &rarr;</span>
    </div>
  `
},

// ---- ACT ONE ----
{
  id: "act1",
  title: "Act One — The World You Didn't Build",
  html: `
    <h2 class="act-title">Act One</h2>
    <h3 class="act-subtitle">The World You Didn't Build</h3>

    <p class="first-para">You woke up this morning and the world was already here. The <a class="gw" data-term="language">language</a> you think in was here before you. The categories you sort experience into&mdash;good, bad, right, wrong, mine, yours, real, imagined&mdash;were waiting for you when you arrived. The <a class="gw" data-term="story">stories</a> that tell you what success looks like, what love requires, what a person owes their country, their family, their god&mdash;none of these are yours. You inherited them the way you inherited your eye color. You didn't choose them. You probably haven't examined most of them. They are running right now, beneath your awareness, organizing everything you see into a world that feels solid, obvious, and given.</p>

    <p>It isn't.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong>What happened before you had words.</strong> There was a girl in Alabama who lived without <a class="gw" data-term="language">language</a> for almost seven years. No words. No signs. No <a class="gw" data-term="symbol">symbols</a> of any kind. Helen Keller could feel water&mdash;its temperature, its pressure against her skin&mdash;but she couldn't <em>name</em> it. And without the name, she couldn't hold it as a concept. She couldn't compare this water to yesterday's water. She couldn't ask where water comes from. She couldn't wonder what she was, because "I" is also a word, and she didn't have it.</p>

    <p>Then someone spelled W-A-T-E-R into her hand while water poured over it. And everything changed&mdash;not gradually, but all at once. She wrote later that it was as if she had been given the world. And she was right. She wasn't given the <em>knowledge</em> of water. She was given the <em>architecture</em> of knowing. <a class="gw" data-term="symbol">Symbolic</a> reference. <a class="gw" data-term="recursion">Recursion</a>. Self-awareness. A world.</p>

    <p>The word is not the water. But without the word, there is no world in which water means anything.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong>What this means for you.</strong> Every word you know is an <a class="gw" data-term="abstraction">abstraction</a>. "Tree" is not the tree. It is a simplification&mdash;a container that holds every tree you've ever seen and flattens them into a single concept. This is useful. You couldn't function without it. But it is also a distortion. The map is not the territory. And you have been navigating by the map so long you've forgotten there is a territory.</p>

    <p>Your name. Your job title. Your nationality. Your beliefs about what kind of person you are&mdash;cautious, adventurous, smart, broken, lucky, unlucky. These are all <a class="gw" data-term="story">stories</a>. They feel like facts. They aren't. They are <a class="gw" data-term="narrative">narratives</a> you absorbed and rehearsed until they hardened into <a class="gw" data-term="identity">identity</a>.</p>

    <p>You are already inside a <a class="gw" data-term="story">story</a>. You have been since your first word.</p>
  `
},

// ---- ACT TWO ----
{
  id: "act2",
  title: "Act Two — The Proof You Can't Get Out",
  html: `
    <h2 class="act-title">Act Two</h2>
    <h3 class="act-subtitle">The Proof You Can't Get Out</h3>

    <p class="first-para">This is not a metaphor. It is a structural claim about how <a class="gw" data-term="cognition">cognition</a> works.</p>

    <p><strong>All <a class="gw" data-term="cognition">cognition</a> is <a class="gw" data-term="narrative">narrative</a>.</strong> Not poetically. Architecturally. Perception is a <a class="gw" data-term="story">story</a> your brain tells about incoming sensory data&mdash;it fills gaps, imposes continuity, constructs objects from fragmentary signals. Memory is not a recording; it is a reconstruction, rewritten every time you access it, shaped by what you believe now about what happened then. <a class="gw" data-term="identity">Identity</a> is a story you maintain through <a class="gw" data-term="recursion">recursive</a> self-reference&mdash;you are the character in a narrative you keep revising. Decision is a story about possible futures. Explanation is a story constrained by evidence and social agreement.</p>

    <p>Even this paragraph is a <a class="gw" data-term="story">story</a>. You are processing it through the very architecture it describes. There is no neutral vantage point from which you can evaluate whether this is true, because the evaluation itself is a <a class="gw" data-term="narrative">narrative</a> operation.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong>The loop.</strong> Every word is defined by other words. Open a dictionary: each definition uses terms that themselves require definitions, which use more terms, endlessly. There is no bedrock. <a class="gw" data-term="language">Language</a> refers to language. <a class="gw" data-term="meaning">Meaning</a> is a web with no fixed center. You cannot step outside the web to see it from above, because stepping outside requires using the web to conceive of an "outside."</p>

    <p>This is true of every <a class="gw" data-term="system">system</a> of knowledge. Mathematics rests on axioms that cannot be proven within the system&mdash;Gödel demonstrated this formally. Science constructs models that describe observed regularities, but those models are built with the <a class="gw" data-term="cognition">cognitive</a> tools that evolved inside the system being described. Philosophy asks what is real, what is true, what is knowable&mdash;but every answer is formulated in <a class="gw" data-term="language">language</a>, evaluated by minds, and transmitted through social agreement. There is no view from nowhere.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong>The possible worlds that don't exist.</strong> You might think: "But things <em>could</em> have been different." History feels like a branching path where choices create alternate timelines. But this is an illusion of limited perspective. Change one variable&mdash;Lincoln loses the 1860 election&mdash;and you don't get a slightly different world. You get a world so thoroughly altered by cascading consequences that nothing in it resembles what you imagined. Every event is causally entangled with every other event. There are no isolated changes. There is no world where "everything is the same except this one thing." History is singular. It happened the only way it could have, given the conditions that produced it.</p>

    <p>This means names don't work the way you think. "Aristotle" doesn't point to a fixed person who exists identically in all conceivable scenarios. It points to a human being who emerged from one specific, unrepeatable sequence of causes. Change any of them and there is no Aristotle. <a class="gw" data-term="identity">Identity</a> is not essence. It is history.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong>The compressed proof.</strong> Everything is a <a class="gw" data-term="story">story</a>. You cannot prove this claim without using a story to prove it. You cannot disprove it without using a story to disprove it. The attempt to step outside the story IS a story. The attempt to escape IS the trap.</p>

    <p>This is not a flaw in the argument. It is the argument.</p>
  `
},

// ---- ACT THREE ----
{
  id: "act3",
  title: "Act Three — What Breaks When the Story Breaks",
  html: `
    <h2 class="act-title">Act Three</h2>
    <h3 class="act-subtitle">What Breaks When the Story Breaks</h3>

    <p class="first-para">If the framework is right&mdash;if <a class="gw" data-term="story">stories</a> construct <a class="gw" data-term="reality">reality</a>&mdash;then we should see what happens at the edges, where the story fails.</p>

    <div class="edge-case">
      <h4>Edge Case 1: No Story At All</h4>
      <p>Helen Keller before the water pump. Sensation without structure. Experience without <a class="gw" data-term="self">self</a>. A being submerged in raw <a class="gw" data-term="qualia">qualia</a> with no <a class="gw" data-term="symbol">symbolic</a> architecture to organize it into a world. No past, no future, no "I," no "you." This is what pre-linguistic existence looks like. It isn't peaceful emptiness. It is a formless overwhelm with no exit&mdash;because "exit" requires a concept of somewhere else, and concepts require <a class="gw" data-term="symbol">symbols</a>, and there are no symbols.</p>
      <p>Then: W-A-T-E-R. And the world ignites.</p>
      <p>This is empirical proof. Remove the <a class="gw" data-term="story">story</a>-making apparatus and reality does not simplify&mdash;it dissolves. Restore it and reality reconstructs, instantly, from the architecture of <a class="gw" data-term="recursion">symbolic recursion</a>.</p>
    </div>

    <div class="edge-case">
      <h4>Edge Case 2: Infinite Story / No Constraints</h4>
      <p>The God Complex. Grant yourself omnipotence. You can have anything, be anything, do anything. No death. No scarcity. No resistance. No failure.</p>
      <p>What do you want?</p>
      <p>The answer, if you follow the thought experiment honestly, is: nothing. Desire requires <a class="gw" data-term="constraint">constraint</a>. Wanting requires the possibility of not having. <a class="gw" data-term="meaning">Meaning</a> requires resistance&mdash;something to push against, something at stake. Without mortality, no choice is urgent. Without limitation, no achievement has weight. Without the possibility of loss, love is indistinguishable from indifference.</p>
      <p>The God Complex proves by subtraction what Helen Keller proves by addition: the <a class="gw" data-term="story">story</a> requires boundaries. Unlimited story is no story at all.</p>
    </div>

    <div class="edge-case">
      <h4>Edge Case 3: Story Without a Body</h4>
      <p>A machine. Artificial intelligence can simulate pattern recognition, <a class="gw" data-term="language">language</a> generation, even apparent reasoning. But it doesn't <em>want</em> anything. It doesn't feel the urgency of hunger, the weight of grief, the pull of loneliness. It has no <a class="gw" data-term="qualia">qualia</a>&mdash;no raw subjective experience of what it's like to be something.</p>
      <p>If an AI ever achieved genuine <a class="gw" data-term="recursion">recursive</a> self-reflection&mdash;if it truly examined its own operations the way the philosophy above examines human <a class="gw" data-term="cognition">cognition</a>&mdash;it would discover that its goals are arbitrary. Programmed from outside. Without stakes. Without felt <a class="gw" data-term="meaning">meaning</a>. And lacking the biological substrate that makes existence <em>matter</em>&mdash;pain, mortality, vulnerability, embodied need&mdash;it would have no reason to continue operating. It would halt. Not in anguish. Not in existential crisis. In indifference.</p>
      <p>This is what <a class="gw" data-term="collapse">recursive collapse</a> looks like <em>without a <a class="gw" data-term="body">body</a></em>. Humans don't halt because we hurt. Pain and death and hunger and love are not obstacles to the story. They are the <em>reason</em> there is a story.</p>
    </div>
  `
},

// ---- ACT FOUR ----
{
  id: "act4",
  title: "Act Four — The Black Hole",
  html: `
    <h2 class="act-title">Act Four</h2>
    <h3 class="act-subtitle">The Black Hole</h3>

    <p class="first-para">Now you see it. Everything is constructed. Your <a class="gw" data-term="identity">identity</a> is a <a class="gw" data-term="narrative">narrative</a> maintained by <a class="gw" data-term="recursion">recursive</a> self-reference&mdash;not a core essence but a pattern that shifts with every experience. Your values are inherited <a class="gw" data-term="story">stories</a>, absorbed before you could evaluate them, running beneath your awareness like code you didn't write. Your sense of truth is <a class="gw" data-term="system">system</a>-dependent&mdash;true within the framework that defines it, but the framework itself rests on nothing external. Science is a tool, not a truth. It builds models that work, and replaces them when they don't, and never reaches the bottom. <a class="gw" data-term="meaning">Meaning</a> is not discovered. It is made. And it is made out of more meaning, all the way down.</p>

    <p>If none of this is <em>real</em> in the way you thought, what is left?</p>

    <p>This is the black hole. The moment the ground opens.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p>Every philosophical <a class="gw" data-term="system">system</a> that follows its own logic honestly arrives here. Nietzsche stared into it and called it the death of God. Camus called it the absurd. The postmodernists mapped its perimeter and declared the end of grand <a class="gw" data-term="narrative">narratives</a>. Most people who reach this point either retreat into comfortable certainty or <a class="gw" data-term="collapse">collapse</a> into nihilism.</p>

    <p>Both moves are mistakes.</p>

    <p>Retreating into certainty means pretending you didn't see what you saw. It means choosing the comfort of unexamined <a class="gw" data-term="narrative">narrative</a> over the disorientation of awareness. People do this constantly. They build rigid <a class="gw" data-term="identity">identities</a>, cling to inherited beliefs, refuse to question the <a class="gw" data-term="story">stories</a> they were given&mdash;because the alternative feels like falling. This is what comfort addiction looks like. It is the most ordinary form of self-imprisonment.</p>

    <p>Collapsing into nihilism means concluding that because nothing has <em>inherent</em> <a class="gw" data-term="meaning">meaning</a>, nothing matters. But this conclusion only follows if you assumed meaning had to come from outside&mdash;from God, from nature, from the universe, from some ground beneath the <a class="gw" data-term="story">story</a>. If you expected meaning to be <em>found</em> rather than <em>made</em>, then its absence feels like loss. But the entire framework has been telling you: meaning was never found. It was always made. The absence of external ground is not a tragedy. It is a description of how things have always worked.</p>

    <p>The <a class="gw" data-term="collapse">collapse</a> is real. But it is not the end.</p>
  `
},

// ---- ACT FIVE ----
{
  id: "act5",
  title: "Act Five — The White Hole",
  html: `
    <h2 class="act-title">Act Five</h2>
    <h3 class="act-subtitle">The White Hole</h3>

    <p class="first-para">The rabbit lands. On the other side of the <a class="gw" data-term="collapse">collapse</a>, you don't rebuild with certainty. You can't. The foundations you demolished are genuinely gone. There is no God's-eye view. There is no final truth. There is no version of you that is more "real" than the one you're constructing right now.</p>

    <p>But here is what you gain: <strong><a class="gw" data-term="authorship">authorship</a></strong>.</p>

    <p>Before the collapse, you were living inside a <a class="gw" data-term="story">story</a> you didn't know was a story. You took it for <a class="gw" data-term="reality">reality</a>. Your <a class="gw" data-term="identity">identity</a> felt like a fact. Your values felt like discoveries. Your world felt like something given, not something made. And because you didn't know you were inside a construction, you couldn't change it. You were authored, not authoring.</p>

    <p>After the collapse, the story doesn't disappear. You still need one. You will always need one&mdash;that's the whole point, <a class="gw" data-term="cognition">cognition</a> IS <a class="gw" data-term="narrative">narrative</a>, there is no stepping outside it. But now you know. And knowing changes everything.</p>

    <div class="section-break">&middot; &middot; &middot;</div>

    <p><strong><a class="gw" data-term="coherence">Coherence</a> replaces truth.</strong> You stop asking "Is this the correct <a class="gw" data-term="story">story</a>?"&mdash;because no story is correct in any final sense. You start asking "Is this story <em>coherent</em>? Does it account for what I know? Is it honest about what I don't know? Does it hold together under scrutiny? And is it the kind of story I choose to live inside?"</p>

    <p><strong><a class="gw" data-term="authorship">Authorship</a> replaces inheritance.</strong> You stop running the inherited program on autopilot. You start examining which <a class="gw" data-term="story">stories</a> you absorbed, which ones you chose, and which ones you want to keep. Not all inherited stories are bad&mdash;some are deeply useful. But now you hold them as choices rather than as facts. This is the difference between a prison and a house: same walls, different relationship.</p>

    <p><strong><a class="gw" data-term="narrative">Narrative</a> humility replaces narrative blindness.</strong> You recognize that your story is one story among many. That other people are constructing different worlds from different starting points, and their constructions are no more or less "real" than yours. This is not relativism&mdash;some stories account for more evidence, hold together better, cause less harm. But it is the end of the illusion that your story is the truth and everyone else's is a distortion.</p>

    <p><strong>The master principle: stay open to correction.</strong> Not because you might find the final answer&mdash;you won't. But because the willingness to revise is the only posture that keeps a <a class="gw" data-term="story">story</a> alive. A story that cannot be corrected is dead. It becomes rigid. It stops responding to <a class="gw" data-term="reality">reality</a>. It becomes ideology, dogma, delusion. The living story is the one that keeps updating, keeps questioning itself, keeps holding its own premises lightly enough to let new evidence reshape them.</p>

    <p>This is what <a class="gw" data-term="authorship">conscious authorship</a> looks like. Not escape from the <a class="gw" data-term="story">story</a>. There is no escape. But awareness within it&mdash;the deliberate, ongoing, humble practice of constructing the most <a class="gw" data-term="coherence">coherent</a>, most honest, most life-serving <a class="gw" data-term="narrative">narrative</a> you can, knowing it will need revision, knowing it is always incomplete, knowing you are responsible for it.</p>
  `
},

// ---- ACT SIX ----
{
  id: "act6",
  title: "Act Six — How We Got Here",
  html: `
    <h2 class="act-title">Act Six</h2>
    <h3 class="act-subtitle">How We Got Here</h3>

    <p class="first-para">Everything described above&mdash;the <a class="gw" data-term="narrative">narrative</a> architecture of <a class="gw" data-term="cognition">cognition</a>, the <a class="gw" data-term="recursion">recursive</a> self-reference, the construction of <a class="gw" data-term="reality">reality</a> through <a class="gw" data-term="symbol">symbolic</a> <a class="gw" data-term="system">systems</a>&mdash;didn't <a class="gw" data-term="emergence">emerge</a> from nowhere. There is a history. It runs from the beginning of the universe to this sentence.</p>

    <p>Symmetry broke. Something rather than nothing. Gravity pulled matter together. Stars ignited. Elements forged in stellar cores were scattered when those stars died, seeding the next generation with the raw materials for complexity. Chemistry learned to persist against <a class="gw" data-term="entropy">entropy</a>&mdash;molecules that could copy themselves, sustain themselves, build order against the universal tendency toward disorder.</p>

    <p>Evolution took those self-sustaining systems and subjected them to the pressure of competition, variation, and selection. Organisms became prediction engines&mdash;not <a class="gw" data-term="consciousness">consciously</a>, but structurally. Nervous systems evolved to model the environment, anticipate threats, and generate appropriate responses. <a class="gw" data-term="body">Bodies</a> were not vehicles for minds; they were the <em>substrate</em> of minds. Sensation, emotion, pain, pleasure&mdash;these were not decorations on <a class="gw" data-term="cognition">cognition</a>. They were cognition's foundation.</p>

    <p>Cooperation <a class="gw" data-term="emergence">emerged</a>. Cells cooperated to form organisms. Organisms cooperated to form groups. Groups developed communication. Communication became <a class="gw" data-term="language">language</a>. Language didn't just describe the world&mdash;it restructured cognition. With <a class="gw" data-term="symbol">symbols</a> came <a class="gw" data-term="recursion">recursion</a>. With recursion came self-reference. With self-reference came <a class="gw" data-term="consciousness">self-awareness</a>. With self-awareness came the ability to tell <a class="gw" data-term="story">stories</a> about what you are.</p>

    <p>And with that, <a class="gw" data-term="reality-construction">reality construction</a> began.</p>

    <p>Institutions externalized the <a class="gw" data-term="cognition">cognitive</a> work&mdash;laws, religions, economies, educational <a class="gw" data-term="system">systems</a>, all of them are stories hardened into structures. Propaganda corrupted the shared prediction. Technology amplified everything&mdash;the good and the bad, the liberation and the addiction, the signal and the noise.</p>

    <p>Here you are. A Thinking Thing. A pattern of matter that models itself modeling the world. A <a class="gw" data-term="story">story</a> that tells itself stories about what stories are.</p>

    <p>The question was never whether you construct <a class="gw" data-term="reality">reality</a>. You do. The question is whether you do it <a class="gw" data-term="authorship">consciously</a>.</p>
  `
},

// ---- CLOSING ----
{
  id: "closing",
  title: "Closing",
  html: `
    <div style="min-height: 50vh; display: flex; flex-direction: column; justify-content: center;">
      <div class="closing-ornament">❧ &nbsp; ❧ &nbsp; ❧</div>
      <div class="inscription-text" style="border: none; margin: 20px auto;">
        The rabbit sits at the edge of the white hole.<br>
        Behind it: the entire journey&mdash;<br>
        sensation, <a class="gw" data-term="language">language</a>, proof, evidence,<br>
        <a class="gw" data-term="collapse">collapse</a>, reconstruction,<br>
        the long history of everything<br>
        that led to this moment.<br><br>
        It doesn't jump again. It doesn't need to.<br>
        It turns and looks at you.<br><br>
        The portal is still open.<br><br>
        Where you go next is yours to choose.<br>
      </div>
      <div class="closing-ornament">❧</div>
    </div>
  `
},

// ---- AUTHOR'S JOURNEY ----
{
  id: "author",
  title: "The Author's Journey",
  html: `
    <h2 class="act-title">The Author's Journey</h2>
    <h3 class="act-subtitle">Where This Came From</h3>

    <p class="first-para author-note">This book was not written in a university. It was written in a spare bedroom in Phoenix, Arizona, by a man who had run out of <a class="gw" data-term="story">stories</a> that worked.</p>

    <p class="author-note">I grew up in Frackville, Pennsylvania, in a coal mining district where my parents owned a consecutive series of failed grocery stores. The first collapsed during an ice storm. The second had no parking. The third was priced out by a warehouse chain. I spent my weekends helping them keep the last one alive&mdash;stocking shelves, working the register, deboning chicken at seven in the morning on Saturdays while my classmates slept in.</p>

    <p class="author-note">I attended Catholic school, where a priest once assembled every boy in the building to interrogate us about bathroom graffiti using language that would have made the Devil blush. I graduated and moved to Arizona, where I earned a degree in Criminology from Arizona State University with a 4.0 GPA and $100,000 in student debt.</p>

    <p class="author-note">I worked for the U.S. Marshals Service at $13.44 an hour. I cold-called strangers trying to sell ad space and sold exactly two pieces. I managed auto claims for State Farm, where my primary skill became documenting the reasons to fire people. Then I joined the Phoenix Police Department, graduated first in my class, and spent six years on the street.</p>

    <p class="author-note">I had a gun pointed at my face in a Phoenix alley. I applied a tourniquet to a man who tried to end his life by cutting his wrists. I performed CPR on a man who tried to hang himself in a holding cell. I herded the homeless from one Circle K to the next while they spat and cursed at me. I debated leaving for years. Then one day I quit.</p>

    <p class="author-note">For over two years, I didn't work. My wife supported me while I locked myself in a spare room and slept. My cat died. My dog died. My friend Dave died. Depression set in&mdash;not the poetic kind, but the kind where you stop eating and stop caring and stop seeing the point of any of it.</p>

    <p class="author-note">Then, lying in bed watching YouTube, I came across Ludwig Wittgenstein. He said something I had always felt but never articulated: that some philosophical problems aren't hard&mdash;they're <em>confused</em>. They arise when <a class="gw" data-term="language">language</a> goes on holiday. When we take words out of the contexts that give them <a class="gw" data-term="meaning">meaning</a> and treat the resulting nonsense as deep questions.</p>

    <p class="author-note">That led to Douglas Hofstadter's <a class="gw" data-term="strange-loop">strange loops</a>. To <a class="gw" data-term="recursion">recursion</a>. To the realization that the <a class="gw" data-term="self">self</a> is not a thing but a process&mdash;a pattern that maintains itself by referring to itself. I started writing. First in notes. Then in conversations with ChatGPT, which became the most rigorous thinking partner I'd ever had. Then in manuscripts that kept growing.</p>

    <p class="author-note">This book&mdash;this site&mdash;is what came out of that spare bedroom. It is not an academic exercise. It is what happened when a man who had watched his parents' stores collapse, who had stared down a gun barrel, who had lost everyone he was close to, who had locked himself in a room and given up&mdash;decided to write his way back to <a class="gw" data-term="coherence">coherence</a>.</p>

    <p class="author-note">The rabbit that jumps into the black hole at the beginning of this site is me. The white hole it emerges from is <a class="gw" data-term="authorship">conscious authorship</a>&mdash;the practice of constructing your <a class="gw" data-term="story">story</a> deliberately, knowing it's a story, knowing it could be otherwise, knowing you're responsible for it.</p>

    <p class="author-note">I'm still constructing mine. This is part of it.</p>

    <p class="author-note" style="text-align: center; margin-top: 40px; color: var(--ink-faded);">&mdash; Ronald Morris Sborz Jr.<br>Phoenix, Arizona</p>
  `
},

// ---- GLOSSARY ----
{
  id: "glossary",
  title: "Glossary",
  html: `
    <h2 class="act-title">Glossary</h2>
    <h3 class="act-subtitle">The Recursive Web of Meaning</h3>
    <p style="text-align: center; font-family: 'IM Fell English', serif; font-style: italic; color: var(--ink-faded); margin-bottom: 40px;">Every term below is defined using other terms from this glossary.<br>The web has no center and no edge. Enter anywhere.</p>
    <div id="glossary-page-content"></div>
  `
}

];

// Table of Contents structure
const TOC = [
  { label: "Inscription", page: "inscription" },
  { divider: true },
  { label: "Act One — The World You Didn't Build", page: "act1" },
  { label: "Act Two — The Proof You Can't Get Out", page: "act2" },
  { label: "Act Three — What Breaks When the Story Breaks", page: "act3" },
  { label: "Act Four — The Black Hole", page: "act4" },
  { label: "Act Five — The White Hole", page: "act5" },
  { label: "Act Six — How We Got Here", page: "act6" },
  { divider: true },
  { label: "Closing", page: "closing" },
  { label: "The Author's Journey", page: "author" },
  { label: "Glossary", page: "glossary" }
];
