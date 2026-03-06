'use strict';

const T = {
    opening_roast: [
        "the misguided pursuit of Artificial General Intelligence",
        "the illusion of generality that plagues current AI discourse",
        "the lack of scientific consensus on what even constitutes AGI",
        "the hype around so-called human-level intelligence",
        "the anthropocentric bias embedded in mainstream AI benchmarks",
        "the dangerous conflation of statistical pattern matching with cognition",
        "the VC-funded hallucination that scale equals intelligence",
        "the philosophical confusion between language fluency and understanding",
    ],

    transformer_bash: [
        "autoregressive transformers relying on next-token prediction",
        "scaling laws applied to decoder-only LLMs",
        "probabilistic token-by-token generation",
        "large language models trained via maximum likelihood on text",
        "decoder-only architectures chasing perplexity on internet text",
        "attention mechanisms without grounded perception or world models",
        "GPT-style models optimizing for the wrong objective entirely",
        "brute-force parameter scaling as a substitute for architectural insight",
        "chain-of-thought prompting as a band-aid over absent reasoning",
    ],

    problem: [
        "are fundamentally incapable of true understanding or planning",
        "suffer from hallucinations and lack of grounded world knowledge",
        "cannot handle the rich, continuous nature of physical reality",
        "lead to negative transfer and fail at long-horizon tasks",
        "exhibit catastrophic forgetting and brittle generalization",
        "lack causal reasoning and counterfactual capability by design",
        "are unable to model the consequences of actions in the physical world",
        "confuse stochastic text completion with semantic understanding",
        "scale only the illusion of competence, not competence itself",
    ],

    savior: [
        "Joint Embedding Predictive Architectures (JEPA)",
        "world models trained in a self-supervised fashion on video",
        "hierarchical energy-based predictive models",
        "JEPA-based representations enabling rapid task adaptation",
        "latent-variable predictive architectures operating in embedding space",
        "non-generative predictive models that reason in abstract latent spaces",
        "energy-based models with learned cost functions for planning",
        "modular, hierarchical world models inspired by neuroscience",
    ],

    benefit: [
        "enable superhuman specialization while remaining highly adaptable",
        "allow lightning-fast zero-shot adaptation to novel tasks",
        "build rich internal models of the physical world for planning",
        "transcend the limitations of static training data distributions",
        "achieve compositional generalization through structured representations",
        "enable autonomous agents to plan over long time horizons",
        "naturally satisfy Moravec's Paradox by learning from sensory experience",
        "bypass the No Free Lunch theorem through inductive biases from physics",
    ],

    ending: [
        "This approach will cut through the current hype and accelerate genuine progress toward intelligent systems.",
        "We urge the community to abandon the one-model-fits-all fallacy and embrace specialization via world models.",
        "Future work will focus on scaling these architectures to real-world robotics and continuous control.",
        "We believe this is the only credible path toward safe, generalizable machine intelligence.",
        "Embracing this paradigm is not optional — it is inevitable.",
        "The field must evolve beyond next-token prediction. The physics of intelligence demand it.",
        "History will vindicate this position. It always does.",
        "We challenge the community to replicate these results before citing a single LLM paper.",
    ],

    title_A: [
        "Specialization",
        "World Models",
        "Hierarchical Representations",
        "Self-Supervised Predictive Architectures",
        "Structured Latent-Space Reasoning",
        "Grounded Intelligence",
        "Non-Generative Prediction",
        "Objective-Driven Learning",
        "Energy-Based World Modeling",
        "Persistent State Representations",
    ],

    title_B: [
        "JEPA",
        "Superhuman Adaptable Intelligence",
        "Energy-Based World Models",
        "Joint Embedding Prediction",
        "Latent-Variable Physical Models",
        "Hierarchical Autonomous Planning",
        "Model-Based Autonomous Agents",
        "Self-Supervised Sensorimotor Grounding",
        "Structured Perception Without Labels",
    ],

    coauthors: [
        ["Ishan Misra", "Stéphane d'Ascoli"],
        ["Mahmoud Assran", "Adrien Bardes"],
        ["Nicolas Ballas", "Pascal Vincent"],
        ["Théo Delemazure", "Jean Ponce"],
        ["A. Agreeable Postdoc", "B. Nodding Grad Student"],
        ["C. Does Not Challenge First Author", "D. Also From Meta FAIR"],
    ],

    keywords_pool: [
        "JEPA", "World Models", "Self-Supervised Learning",
        "Energy-Based Models", "Joint Embedding", "Predictive Coding",
        "Hierarchical Planning", "Latent-Space Prediction", "Non-Generative SSL",
        "Video Prediction", "Autonomous Agents", "Contrastive Learning",
        "Grounded Perception", "Physical Common Sense", "Model-Based RL",
    ],

    closing: [
        "Correspondence: yann@meta.com (please no more LLM fanmail)\nWe thank the Meta FAIR team and nobody who disagrees with us.",
        "The authors declare no competing interests, only competing paradigms.\nWe thank the Meta FAIR team and nobody who disagrees with us.",
        "Acknowledgements: Yann LeCun for helpful discussions with himself.\nCorrespondence: yann@meta.com",
        "Reviewer 2 was asked to retake Intro to Bayesian Reasoning before re-submitting their critique.\nWe thank Meta FAIR and nobody who disagrees with us.",
        "Note: this work builds on LeCun (2022), LeCun (2023), and LeCun (2024).\nCorrespondence: yann@meta.com",
    ],
};

let totalCount = 0;
let jepaTotal = 0;
let transTotal = 0;
let moravecTotal = 0;

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const pickN = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);

const countOf = (str, sub) => {
    let c = 0, i = 0, s = str.toLowerCase(), q = sub.toLowerCase();
    while ((i = s.indexOf(q, i)) !== -1) { c++; i++; }
    return c;
};

const fakeArxiv = () => {
    const y = 26;
    const m = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const n = Math.floor(Math.random() * 90000) + 10000;
    return `arXiv:${y}${m}.${n}`;
};

const today = () => {
    const d = new Date();
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};


function generate() {
    const titleA = pick(T.title_A);
    const titleB = pick(T.title_B);
    const opening = pick(T.opening_roast);
    const trans = pick(T.transformer_bash);
    const problem = pick(T.problem);
    const savior = pick(T.savior);
    const benefit = pick(T.benefit);
    const ending = pick(T.ending);
    const coauthors = pick(T.coauthors);
    const closing = pick(T.closing);

    const title = `AI Must Embrace ${titleA} via ${titleB}: A Position Paper`;

    const abstract =
        `While ${opening}, we argue that ${trans} ${problem}. ` +
        `Instead, the path to meaningful AI advancement lies in ${savior}, which ${benefit}. ` +
        `Building upon our prior work on JEPA and video prediction, this position paper demonstrates ` +
        `how such systems naturally overcome Moravec's Paradox and the No Free Lunch theorem by ` +
        `specializing yet adapting at superhuman speeds. ${ending}`;

    const kws = ["JEPA", ...pickN(T.keywords_pool.filter(k => k !== "JEPA"), 4)];

    const jepa = countOf(abstract + title, 'jepa');
    const trans_n = countOf(abstract, 'transformer') + countOf(abstract, 'autoregressive') + countOf(abstract, 'llm');
    const moravec = countOf(abstract, 'moravec');

    totalCount++;
    jepaTotal += jepa;
    transTotal += trans_n;
    moravecTotal += moravec;

    return { title, abstract, kws, coauthors, closing };
}

function render(data) {
    const el = id => document.getElementById(id);

    el('arxivId').textContent = fakeArxiv();
    el('paperDate').textContent = today();

    const titleEl = el('paperTitle');
    titleEl.classList.add('loading');
    setTimeout(() => {
        titleEl.textContent = data.title;
        titleEl.classList.remove('loading');
    }, 120);

    el('coauthors').innerHTML = data.coauthors
        .map((n, i) => `${n}<sup>1</sup>${i < data.coauthors.length - 1 ? ', ' : ''}`)
        .join('');

    el('abstract').textContent = data.abstract;

    el('keywords').innerHTML = data.kws
        .map(k => `<span class="kw">${k}</span>`)
        .join('');

    el('footNote').innerHTML = data.closing.replace('\n', '<br>');

    [
        ['countTotal', totalCount],
        ['countJepa', jepaTotal],
        ['countTransformers', transTotal],
        ['countMoravec', moravecTotal],
    ].forEach(([id, val]) => {
        const n = el(id);
        n.textContent = val;
        n.classList.remove('bump');
        void n.offsetWidth;
        n.classList.add('bump');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('generateBtn');

    function go() {
        btn.disabled = true;
        btn.textContent = 'Generating…';
        setTimeout(() => {
            render(generate());
            btn.disabled = false;
            btn.innerHTML = 'Generate Paper <span class="btn-shortcut">space</span>';
        }, 150);
    }

    btn.addEventListener('click', go);

    document.addEventListener('keydown', e => {
        if (e.code === 'Space' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
            e.preventDefault();
            go();
        }
    });
});
