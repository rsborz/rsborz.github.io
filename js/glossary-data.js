// =============================================
// GLOSSARY DATA — The recursive web of meaning
// Each term links to other terms, forming the
// self-referential web the philosophy describes.
// =============================================

const GLOSSARY = {

  "story": {
    title: "Story",
    body: "A structured sequence of symbols organized to convey relationships between things, events, and ideas. Stories are not optional additions to human experience — they are the architecture through which experience becomes intelligible. Without <span class='glossary-link' data-term='language'>language</span> assembled into stories, there is sensation but no <span class='glossary-link' data-term='meaning'>meaning</span>, feeling but no understanding. A story is not the same as fiction: the claim that the Earth orbits the Sun is a story. The claim that you are a particular kind of person is a story. The scientific method is a story about how to tell reliable stories. Every map, model, theory, memory, plan, and identity is a story. You cannot step outside of stories because the attempt to do so is itself a story.",
    seeAlso: ["narrative", "language", "meaning", "recursion", "identity"]
  },

  "narrative": {
    title: "Narrative",
    body: "The process of constructing and maintaining <span class='glossary-link' data-term='story'>stories</span> over time. While a story can be a single account, narrative is the ongoing activity — the way a <span class='glossary-link' data-term='self'>self</span> continuously weaves experience into <span class='glossary-link' data-term='coherence'>coherent</span> structure. All <span class='glossary-link' data-term='cognition'>cognition</span> is narrative: perception narrates sensory data into a scene, memory narrates the past into a retrievable account, <span class='glossary-link' data-term='identity'>identity</span> narrates the self into continuity across time. Narrative is not something humans do in addition to thinking. Narrative is what thinking is.",
    seeAlso: ["story", "cognition", "self", "identity", "reality-construction"]
  },

  "recursion": {
    title: "Recursion",
    body: "A process that refers back to itself. <span class='glossary-link' data-term='language'>Language</span> is recursive: words are defined by other words, which are defined by other words, with no foundation outside the system. <span class='glossary-link' data-term='consciousness'>Consciousness</span> is recursive: it is awareness aware of its own awareness. <span class='glossary-link' data-term='identity'>Identity</span> is recursive: the <span class='glossary-link' data-term='self'>self</span> is a <span class='glossary-link' data-term='story'>story</span> told by the self about the self. This is not a flaw or a paradox — it is the fundamental architecture of <span class='glossary-link' data-term='meaning'>meaning</span>. Every system of knowledge, when traced to its foundations, loops back to its own premises. There is no non-recursive ground.",
    seeAlso: ["language", "consciousness", "self", "strange-loop", "cognition"]
  },

  "language": {
    title: "Language",
    body: "A system of shared symbols and rules that transforms the continuous flux of sensation into repeatable, communicable distinctions. Words do not touch raw <span class='glossary-link' data-term='reality'>reality</span> — they are abstractions, generalizations, useful distortions. The word 'tree' is not a tree. But without the word, the concept 'tree' cannot be held, compared, remembered, or communicated. <span class='glossary-link' data-term='language'>Language</span> does not describe experience — it restructures <span class='glossary-link' data-term='cognition'>cognition</span> itself. With symbols came <span class='glossary-link' data-term='recursion'>recursion</span>. With recursion came self-reference. With self-reference came <span class='glossary-link' data-term='consciousness'>consciousness</span> as we know it. Language is not a tool the mind uses. Language is what makes the mind a mind.",
    seeAlso: ["symbol", "abstraction", "cognition", "recursion", "story"]
  },

  "symbol": {
    title: "Symbol",
    body: "A mark, sound, or gesture that stands for something other than itself through social agreement. Unlike a sign (smoke means fire through causal connection), a symbol's relationship to what it represents is arbitrary and maintained by convention. The letters W-A-T-E-R have no inherent connection to the substance they name. This arbitrariness is <span class='glossary-link' data-term='language'>language's</span> greatest power: it frees representation from the thing represented, allowing <span class='glossary-link' data-term='abstraction'>abstraction</span>, imagination, and the construction of <span class='glossary-link' data-term='meaning'>meaning</span> beyond immediate sensation. Helen Keller's transformation at the water pump was the moment she grasped the symbolic relationship — and with it, gained a <span class='glossary-link' data-term='self'>self</span>.",
    seeAlso: ["language", "abstraction", "meaning", "self"]
  },

  "abstraction": {
    title: "Abstraction",
    body: "The process of stripping away particular details to create a general category. Every word is an abstraction: 'tree' compresses the infinite variety of actual trees into a single container. This compression is necessary — no mind could process raw <span class='glossary-link' data-term='reality'>reality</span> in its full complexity — but it is also a distortion. The map is not the territory. The menu is not the meal. The <span class='glossary-link' data-term='story'>story</span> is not the thing storied. Forgetting this is the most common source of confusion in philosophy and in life: treating abstractions as if they were the things themselves.",
    seeAlso: ["language", "symbol", "reality", "story"]
  },

  "cognition": {
    title: "Cognition",
    body: "The full range of processes by which a mind organizes, interprets, and responds to information. The central claim of this work: all cognition is <span class='glossary-link' data-term='narrative'>narrative</span>. Perception is a <span class='glossary-link' data-term='story'>story</span> the brain tells about sensory data. Memory is a story reconstructed each time it is accessed. Decision is a story about possible futures. Even the 'automatic' processes of <span class='glossary-link' data-term='consciousness'>awareness</span> — pattern recognition, emotional response, spatial orientation — are narrative in structure, though not in <span class='glossary-link' data-term='language'>language</span>. Language adds the capacity for deliberate, reflective, revisable cognition: reasoning, planning, self-examination.",
    seeAlso: ["narrative", "story", "consciousness", "language", "qualia"]
  },

  "consciousness": {
    title: "Consciousness",
    body: "The emergent phenomenon of a sufficiently complex biological system experiencing itself and its environment. Not a substance, not a soul, not a ghost in the machine — a process. The brain creates <span class='glossary-link' data-term='consciousness'>conscious</span> awareness through the unified processing of sensory information, generating an internal reconstruction of external <span class='glossary-link' data-term='reality'>reality</span>. All animals with nervous systems have some form of awareness. What distinguishes human consciousness is <span class='glossary-link' data-term='language'>language</span>: the capacity to name, reflect upon, and <span class='glossary-link' data-term='story'>story</span> one's own experience — to be not merely aware, but aware of being aware. The so-called 'hard problem' of consciousness dissolves when we recognize that experience IS the process, not something produced by the process.",
    seeAlso: ["emergence", "qualia", "self", "language", "reality"]
  },

  "qualia": {
    title: "Qualia",
    body: "The raw, first-person, subjective qualities of experience: the redness of red, the taste of an apple, the felt weight of grief. <span class='glossary-link' data-term='qualia'>Qualia</span> are the aspect of <span class='glossary-link' data-term='consciousness'>consciousness</span> that cannot be fully captured by <span class='glossary-link' data-term='language'>language</span> or communicated to another mind. You can describe pain as 'sharp' or 'throbbing,' but the description is never the experience. This gap between felt experience and symbolic description is permanent and irreducible — not because <span class='glossary-link' data-term='language'>language</span> is inadequate, but because qualia and language belong to different layers of <span class='glossary-link' data-term='emergence'>emergence</span>. We feel first. We <span class='glossary-link' data-term='story'>story</span> second. The story never fully contains the feeling.",
    seeAlso: ["consciousness", "emergence", "language", "feeling", "story"]
  },

  "feeling": {
    title: "Feeling",
    body: "The body's primary mode of engagement with <span class='glossary-link' data-term='reality'>reality</span>. Feeling precedes <span class='glossary-link' data-term='language'>language</span>, precedes <span class='glossary-link' data-term='story'>story</span>, precedes thought. Pain, pleasure, hunger, fear, warmth, cold — these are not decorations on <span class='glossary-link' data-term='cognition'>cognition</span>. They are cognition's foundation. The body does not think its way to action; it feels its way, and thought follows. This is why a <span class='glossary-link' data-term='consciousness'>conscious</span> machine without a body would halt: without the biological stakes of pain and mortality and need, there is no substrate for <span class='glossary-link' data-term='meaning'>meaning</span> to root in. Humans don't halt because we hurt. The hurt is the reason there is a story.",
    seeAlso: ["qualia", "consciousness", "meaning", "body", "cognition"]
  },

  "self": {
    title: "Self",
    body: "The <span class='glossary-link' data-term='story'>story</span> a <span class='glossary-link' data-term='consciousness'>conscious</span> being tells about itself to itself. Not a fixed entity but a continuously updated pattern — a <span class='glossary-link' data-term='strange-loop'>strange loop</span> of <span class='glossary-link' data-term='recursion'>recursive</span> self-reference. The self is what emerges when a system capable of symbolic representation turns that capacity inward and begins modeling its own operations, history, and intentions. Before <span class='glossary-link' data-term='language'>language</span>, there is awareness but no self. Helen Keller before W-A-T-E-R had sensation without selfhood. The self is not discovered. It is constructed — and can be reconstructed. This is both the vulnerability and the liberation at the heart of <span class='glossary-link' data-term='authorship'>conscious authorship</span>.",
    seeAlso: ["identity", "story", "recursion", "strange-loop", "authorship", "language"]
  },

  "identity": {
    title: "Identity",
    body: "The specific content of the <span class='glossary-link' data-term='self'>self's</span> <span class='glossary-link' data-term='story'>story</span>: your name, your history, your beliefs about what kind of person you are, your roles and relationships. Identity feels like a fact — like something you discover about yourself. It is not. It is a <span class='glossary-link' data-term='narrative'>narrative</span> constructed from inherited stories, personal experience, and social feedback, continuously revised. An identity crisis is not the failure of identity; it is the moment the old story no longer <span class='glossary-link' data-term='coherence'>coheres</span> and a new one has not yet been built. Identity is not essence. It is history organized into a usable <span class='glossary-link' data-term='story'>story</span>.",
    seeAlso: ["self", "story", "narrative", "coherence", "authorship"]
  },

  "reality": {
    title: "Reality",
    body: "That which persists and pushes back. Physical reality — matter, energy, forces, regularities — exists independently of any <span class='glossary-link' data-term='story'>story</span> about it. It hurts when you fall. It doesn't care about your narrative. But human experience of reality is always mediated: the brain reconstructs an internal model from sensory data, and <span class='glossary-link' data-term='language'>language</span> further structures that model into navigable categories. We never experience reality directly. We experience our <span class='glossary-link' data-term='consciousness'>conscious</span> reconstruction of it. This is not solipsism — the reconstruction is constrained by what actually exists. But it means every human reality is a <span class='glossary-link' data-term='narrative'>narrative</span> reality, told within and about a physical reality we can model but never fully grasp.",
    seeAlso: ["reality-construction", "story", "consciousness", "emergence"]
  },

  "reality-construction": {
    title: "Reality Construction",
    body: "The process by which <span class='glossary-link' data-term='consciousness'>conscious</span>, <span class='glossary-link' data-term='language'>language</span>-using beings build their experienced world. Physical <span class='glossary-link' data-term='reality'>reality</span> provides the substrate. Biology provides the sensory apparatus. But the human world — the world of <span class='glossary-link' data-term='meaning'>meaning</span>, purpose, <span class='glossary-link' data-term='identity'>identity</span>, value — is constructed through <span class='glossary-link' data-term='narrative'>narrative</span>. This construction is not optional, not escapable, and not a defect. It is how <span class='glossary-link' data-term='cognition'>cognition</span> works. The question is not whether you construct reality. You do. The question is whether you do it <span class='glossary-link' data-term='authorship'>consciously</span>.",
    seeAlso: ["reality", "narrative", "authorship", "consciousness", "meaning"]
  },

  "meaning": {
    title: "Meaning",
    body: "The relationship between things as organized by a <span class='glossary-link' data-term='story'>story</span>. Meaning does not exist in the universe independently of minds that construct it. Atoms are not meaningful; they simply are. Meaning arises when a <span class='glossary-link' data-term='consciousness'>conscious</span>, <span class='glossary-link' data-term='language'>symbol</span>-using being identifies relationships — this causes that, this resembles that, this matters because of that — and organizes them into <span class='glossary-link' data-term='narrative'>narrative</span> structure. Meaning is not found. It is made. And it is made out of more meaning, in an infinite <span class='glossary-link' data-term='recursion'>recursive</span> web. The absence of inherent meaning is not nihilism. It is the precondition for <span class='glossary-link' data-term='authorship'>authorship</span>.",
    seeAlso: ["story", "language", "recursion", "authorship", "coherence"]
  },

  "emergence": {
    title: "Emergence",
    body: "The phenomenon by which complex patterns arise from simpler components interacting according to rules, producing properties that exist at the higher level but not at the lower. Wetness is not a property of individual water molecules — it emerges from their collective behavior. <span class='glossary-link' data-term='consciousness'>Consciousness</span> is not a property of individual neurons — it emerges from their organized interaction. <span class='glossary-link' data-term='meaning'>Meaning</span> is not a property of individual words — it emerges from their <span class='glossary-link' data-term='narrative'>narrative</span> arrangement. Human existence is layered emergence: physics → chemistry → biology → <span class='glossary-link' data-term='cognition'>cognition</span> → <span class='glossary-link' data-term='language'>language</span> → <span class='glossary-link' data-term='story'>story</span>. Each layer is real. None is reducible to the others without loss.",
    seeAlso: ["consciousness", "reality", "cognition", "story"]
  },

  "coherence": {
    title: "Coherence",
    body: "The quality of a <span class='glossary-link' data-term='story'>story</span> holding together — accounting for available evidence, containing no unresolved contradictions, and maintaining internal consistency. In the framework of <span class='glossary-link' data-term='authorship'>conscious authorship</span>, coherence replaces truth as the standard for evaluating narratives. Not because truth doesn't matter, but because no <span class='glossary-link' data-term='narrative'>narrative</span> can claim final, absolute truth — every story is incomplete, every model is a simplification, every framework rests on premises it cannot prove. Coherence asks: does this story hold together? Does it account for what I know? Is it honest about what it doesn't know? And is it the kind of story I choose to live inside?",
    seeAlso: ["story", "authorship", "narrative", "meaning"]
  },

  "authorship": {
    title: "Conscious Authorship",
    body: "The deliberate, ongoing practice of constructing one's own <span class='glossary-link' data-term='story'>story</span> with awareness that it is a story. Before authorship, you live inside inherited <span class='glossary-link' data-term='narrative'>narratives</span> without knowing they are narratives — your <span class='glossary-link' data-term='identity'>identity</span> feels like a fact, your values feel discovered, your world feels given. After the collapse — after seeing that everything is constructed — authorship becomes possible. Not escape from the story (there is no escape), but deliberate participation in it. The <span class='glossary-link' data-term='self'>self</span> shifts from authored to authoring. The master principle of conscious authorship: stay open to correction. A story that cannot be revised is dead.",
    seeAlso: ["story", "narrative", "identity", "self", "coherence", "collapse"]
  },

  "collapse": {
    title: "Collapse (The Black Hole)",
    body: "The moment when a mind following its own <span class='glossary-link' data-term='narrative'>narrative</span> logic honestly arrives at the recognition that everything is constructed — <span class='glossary-link' data-term='identity'>identity</span>, <span class='glossary-link' data-term='meaning'>meaning</span>, truth, value — and that there is no external ground beneath any of it. Nietzsche called this the death of God. Camus called it the absurd. It feels like the ground opening. Most minds either retreat to comfortable certainty or fall into nihilism. Both are errors. The collapse is real but it is not the end. It is the structural prerequisite for <span class='glossary-link' data-term='authorship'>conscious authorship</span> — the black hole that, traversed, becomes a white hole.",
    seeAlso: ["authorship", "meaning", "narrative", "identity", "constraint"]
  },

  "constraint": {
    title: "Constraint",
    body: "A limitation that makes structure possible. Without constraints, nothing can take form — not matter, not <span class='glossary-link' data-term='meaning'>meaning</span>, not <span class='glossary-link' data-term='identity'>identity</span>. The laws of physics are constraints that allow the universe to exist. Grammar is a constraint that allows <span class='glossary-link' data-term='language'>language</span> to function. Mortality is a constraint that gives choices urgency. The God Complex thought experiment proves this by subtraction: remove all constraints (grant omnipotence) and desire evaporates, meaning dissolves, <span class='glossary-link' data-term='story'>story</span> becomes impossible. Freedom is not the absence of constraint but navigation between constraints. Total freedom is indistinguishable from nothingness.",
    seeAlso: ["meaning", "story", "feeling", "authorship"]
  },

  "strange-loop": {
    title: "Strange Loop",
    body: "Douglas Hofstadter's term for a system that, by moving through its own levels, arrives back at its starting point — creating a tangled hierarchy where the 'higher' level and 'lower' level become inextricable. The <span class='glossary-link' data-term='self'>self</span> is a strange loop: the brain creates a model of itself, which model becomes part of what the brain is, which changes the model, endlessly. <span class='glossary-link' data-term='language'>Language</span> is a strange loop: it defines itself using itself. This book is a strange loop: it uses <span class='glossary-link' data-term='narrative'>narrative</span> to prove that everything is narrative, which makes it an example of its own argument.",
    seeAlso: ["recursion", "self", "language", "cognition"]
  },

  "body": {
    title: "Body",
    body: "The biological substrate from which <span class='glossary-link' data-term='consciousness'>consciousness</span> emerges. Not a vehicle for the mind but the material condition of mind. The body is an emergent machine: particles form atoms, atoms form molecules, molecules form cells, cells form organs, organs form systems, systems form an organism that, through unified sensory processing, experiences itself and its environment. <span class='glossary-link' data-term='feeling'>Feeling</span> — pain, pleasure, hunger, desire — is the body's primary mode of <span class='glossary-link' data-term='cognition'>cognition</span>. Without embodiment, there are no stakes. Without stakes, <span class='glossary-link' data-term='meaning'>meaning</span> has nothing to root in. This is why a disembodied intelligence would halt: <span class='glossary-link' data-term='recursion'>recursive</span> self-awareness without biological need produces indifference, not understanding.",
    seeAlso: ["consciousness", "feeling", "emergence", "qualia", "meaning"]
  },

  "entropy": {
    title: "Entropy",
    body: "The tendency of all systems toward disorder over time. The second law of thermodynamics: in any closed system, the total entropy increases. Life is a local, temporary reversal of this tendency — an eddy of order in a river of increasing disorder. Every <span class='glossary-link' data-term='body'>body</span> eventually succumbs. Every structure eventually dissolves. This is not a punishment but a feature: it is the <span class='glossary-link' data-term='constraint'>constraint</span> that makes all other structure possible. Without entropy, nothing changes. Without change, no <span class='glossary-link' data-term='story'>story</span>. Heraclitus said everything is flux. The laws of thermodynamics proved him right.",
    seeAlso: ["constraint", "body", "story", "reality"]
  },

  "system": {
    title: "System",
    body: "A collection of parts working together according to rules to produce specific outputs. Governments, economies, languages, religions, families, corporations — all are systems. Every system rests on <span class='glossary-link' data-term='story'>stories</span> that define its purpose and govern its operation. We live embedded in systems we did not create, following rules we did not write, playing roles we did not choose. Most people never examine which systems they serve or whether those systems serve them. <span class='glossary-link' data-term='authorship'>Conscious authorship</span> includes examining the systems you participate in — not necessarily to abandon them, but to hold them as choices rather than as fate.",
    seeAlso: ["story", "authorship", "reality-construction", "constraint"]
  }
};
