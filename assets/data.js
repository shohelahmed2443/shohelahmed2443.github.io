window.SITE_DATA = {
  profile: {
    name: "Shohel Ahmed",
    title: "PhD Candidate in Applied Mathematics",
    institution: "University of Alberta",
    department: "Department of Mathematical and Statistical Sciences",
    dissertation: "Modelling Foraging Behaviour in Ecological Dynamics",
    advisor: "Prof. Hao Wang",
    expectedCompletion: "November 2026",
    email: "shohel2@ualberta.ca",
    github: "https://github.com/shohelahmed2443",
    orcid: "https://orcid.org/0000-0002-1639-0950",
    researchGate: "https://www.researchgate.net/profile/Shohel-Ahmed-2",
    buet: "https://math.buet.ac.bd/",
    cv: "Shohel_Ahmed_CV.pdf",
    intro: "I develop mechanistic and data-driven mathematical models to understand how behaviour, environmental change, and biological interactions shape ecological and epidemiological dynamics.",
    bio: "I am a PhD candidate in Applied Mathematics at the University of Alberta, supervised by Prof. Hao Wang. My doctoral research focuses on foraging behaviour in ecological dynamics, with emphasis on behavioural plasticity, consumer–resource systems, stoichiometry, tipping points, transient dynamics, and data-driven mathematical biology. I am also an Assistant Professor (on study leave) in the Department of Mathematics at Bangladesh University of Engineering and Technology (BUET)."
  },

  stats: [
    { value: 14, suffix: "", label: "Published / accepted journal papers" },
    { value: 5, suffix: "+", label: "Manuscripts in progress" },
    { value: 10, suffix: "+", label: "Recent talks & workshops" },
    { value: 4, suffix: "", label: "Core research directions" }
  ],

  researchAreas: [
    {
      id: "behaviour",
      title: "Behavioural Plasticity & Consumer–Resource Dynamics",
      short: "How adaptive behaviour and individual heterogeneity reshape ecological dynamics.",
      description: "Mechanistic ODE and PDE–ODE models of consumer–resource systems with adaptive foraging, personality structure, behavioural plasticity, bifurcations, homoclinic dynamics, long transients, and ecological tipping behaviour.",
      methods: ["ODE/PDE", "Bifurcation analysis", "Trait structure", "Stochastic dynamics"],
      keywords: ["behaviour", "foraging", "plasticity", "consumer-resource", "transients"]
    },
    {
      id: "stoichiometry",
      title: "Stoichiometric & Optimal Foraging",
      short: "Linking nutrient constraints, food quality, and adaptive diet choice.",
      description: "Mathematical frameworks connecting ecological stoichiometry, resource quality, compensatory feeding, optimal foraging, adaptive diet choice, and population-level outcomes.",
      methods: ["Stoichiometry", "Optimal foraging", "Adaptive dynamics", "Nonlinear systems"],
      keywords: ["stoichiometry", "foraging", "nutrients", "resource quality"]
    },
    {
      id: "data",
      title: "Data-driven Mathematical Biology",
      short: "Blending mechanistic modelling with empirical dynamical modelling and machine learning.",
      description: "Hybrid approaches using empirical dynamical modelling, S-maps, causal inference, machine learning, forecasting, universal differential equations, and mechanistic models to extract interpretable biological dynamics from data.",
      methods: ["EDM", "CCM", "Machine learning", "Forecasting"],
      keywords: ["EDM", "machine learning", "causality", "forecasting"]
    },
    {
      id: "environment",
      title: "Environmental & Infectious Disease Modelling",
      short: "Mathematical models for methane impacts, aquatic systems, climate-sensitive disease, and epidemiology.",
      description: "Environmental and epidemiological modelling spanning methane-induced aquatic transitions, zebrafish development, oil-sands systems, climate-sensitive norovirus dynamics, and infectious-disease intervention models.",
      methods: ["Epidemiology", "Environmental modelling", "Parameter estimation", "Hybrid models"],
      keywords: ["methane", "zebrafish", "epidemiology", "climate", "norovirus"]
    }
  ],

  featuredProjects: [
    {
      category: "Behaviour",
      title: "Behavioural Heterogeneity as a Driver of Consumer–Resource Dynamics",
      status: "Under review",
      description: "Trait-structured consumer–resource modelling that connects individual behavioural differences to population and ecosystem dynamics.",
      collaborators: "Kyung-Han Choi, Hao Wang",
      venue: "The American Naturalist"
    },
    {
      category: "Environment",
      title: "Methane-induced transitions in aquatic ecosystems",
      status: "Published 2026",
      description: "A mathematical framework for understanding ecological transitions associated with methane exposure in aquatic systems.",
      collaborators: "Pranali Chowdhury, Tianxu Wang, Keith Tierney, Hao Wang",
      venue: "Journal of Mathematical Biology"
    },
    {
      category: "Stoichiometry",
      title: "Adaptive Complementary Foraging in Stoichiometric Ecological Dynamics",
      status: "In preparation",
      description: "Adaptive complementary foraging strategies under nutrient and food-quality constraints.",
      collaborators: "Angela Peace, Hao Wang",
      venue: "Manuscript in preparation"
    },
    {
      category: "Environment",
      title: "Predicting Methane Emissions from Alberta Oil Sands Territories",
      status: "Active collaboration",
      description: "Data-validated modelling of hydrocarbon biodegradation, greenhouse-gas emissions, and ecological impacts in oil-sands tailings systems.",
      collaborators: "NSERC Alliance Missions team",
      venue: "Interdisciplinary research project"
    }
  ],

  publications: [
    {type:"published", year:2026, authors:"Pranali Chowdhury, Tianxu Wang, Keith Tierney, Shohel Ahmed, Hao Wang", title:"Mathematical modelling of methane-induced transitions in aquatic ecosystems", venue:"Journal of Mathematical Biology", details:"92:86"},
    {type:"published", year:2025, authors:"Shohel Ahmed, Xiao Han, Hao Wang", title:"Behavioral Plasticity in Consumer-Resource Dynamics", venue:"SIAM Journal on Applied Mathematics", details:"85, 2190–2214"},
    {type:"published", year:2025, authors:"Nuzhat Nuari Khan Rivu, Md Kamrujjaman, Shohel Ahmed", title:"Comparative Analysis of Stochastic and Predictable Models in the HIV Epidemic Across Genders", venue:"International Journal of Biomathematics", details:"2550107"},
    {type:"published", year:2025, authors:"Juping Ji, Shohel Ahmed, Hao Wang", title:"A hybrid approach to study and forecast climate-sensitive norovirus infections in the USA", venue:"Journal of Theoretical Biology", details:"598:112007"},
    {type:"published", year:2024, authors:"Shohel Ahmed, Juping Ji, Hao Wang", title:"Stoichiometric Theory in Optimal Foraging Strategy", venue:"Journal of Mathematical Biology", details:"89:57"},
    {type:"published", year:2023, authors:"Peng Wu, Shohel Ahmed, Xiunan Wang, Hao Wang", title:"PrEP intervention in the mitigation of HIV/AIDS epidemics in China via a data-validated age-structured model", venue:"Bulletin of Mathematical Biology", details:"85:41"},
    {type:"published", year:2022, authors:"Velizar Kirkow, Hao Wang, Pablo Venegas Garcia, Shohel Ahmed, Christopher M. Heggerud", title:"Impacts of a changing environment on a stoichiometric producer-grazer system: a stochastic modelling approach", venue:"Ecological Modelling", details:"469"},
    {type:"published", year:2022, authors:"Hao Wang, Pablo Venegas Garcia, Shohel Ahmed, Christopher M. Heggerud", title:"Mathematical comparison and empirical review of the Monod and Droop forms for resource-based population dynamics", venue:"Ecological Modelling", details:"466"},
    {type:"published", year:2022, authors:"Zahurul Islam, Shohel Ahmed, M. M. Rahman, M. F. Karim, M. R. Amin", title:"Global Stability Analysis and Parameter Estimation for a Diphtheria Model: A Case Study of an Epidemic in Rohingya Refugee Camp in Bangladesh", venue:"Computational and Mathematical Methods in Medicine", details:"Article ID 6545179"},
    {type:"published", year:2021, authors:"Shohel Ahmed, Sumaiya Rahman, Md. Kamrujjaman", title:"Optimal Treatment Strategies to Control Acute HIV Infection", venue:"Infectious Disease Modelling", details:"6, 1202–1219"},
    {type:"published", year:2020, authors:"Shohel Ahmed, Md. Kamrujjaman, Sumaiya Rahman", title:"Dynamics of a Viral Infectiology under Treatment", venue:"Journal of Applied Analysis and Computation", details:"10(5), 1800–1822"},
    {type:"published", year:2019, authors:"Asif Ahmed, Shohel Ahmed, Md. Kamrujjaman", title:"Competitive Reaction-Diffusion Systems: Traveling Waves and Numerical Solutions", venue:"Advances in Research", details:"19(6), 1–12"},
    {type:"published", year:2018, authors:"Shohel Ahmed, Abdul Alim, Sumaiya Rahman", title:"A Controlled Treatment Strategy Applied to HIV Immunology Model", venue:"Numerical Algebra, Control and Optimization", details:"8(3), 309–324"},
    {type:"published", year:2017, authors:"Sumaiya Rahman, Shohel Ahmed", title:"To Assess the Tuberculosis Situation in Urban and Rural Areas of Bangladesh with Special Emphasis on the Facility of Treatment Scenario", venue:"Public Health Research", details:"7(3), 73–77"},
    {type:"review", year:2026, authors:"Shohel Ahmed, Kyung-Han Choi, Hao Wang", title:"Behavioural Heterogeneity as a Driver of Consumer-Resource Dynamics", venue:"The American Naturalist", details:"Under review"},
    {type:"review", year:null, authors:"Shohel Ahmed", title:"Dynamics of an Intra-host Diffusive Pathogen Infection Model", venue:"Computers and Mathematics with Applications", details:"Submitted"},
    {type:"preparation", year:null, authors:"Hao Wang, Shohel Ahmed, Jacob Serpico, Shan Gao, Tao Feng", title:"A unified mathematical framework for tipping points", venue:"Manuscript in preparation", details:""},
    {type:"preparation", year:null, authors:"Shohel Ahmed, Angela Peace, Hao Wang", title:"Adaptive Complementary Foraging in Stoichiometric Ecological Dynamics", venue:"Manuscript in preparation", details:""},
    {type:"preparation", year:null, authors:"Shohel Ahmed, Christopher M. Heggerud, Hao Wang", title:"Behavioral Plasticity Under Anthropogenic Forcing", venue:"Manuscript in preparation", details:""},
    {type:"preparation", year:null, authors:"Shohel Ahmed, Hao Wang", title:"Foraging Plasticity in Food-chain Model", venue:"Manuscript in preparation", details:""},
    {type:"preparation", year:null, authors:"Pablo Venegas Garcia, Shohel Ahmed, Hao Wang", title:"Risks of methane mitigation via human-driven microbial community shifts in oil sands tailings", venue:"Manuscript in preparation", details:""}
  ],

  education: [
    {date:"2021–Present", title:"PhD in Applied Mathematics", place:"University of Alberta", note:"Expected November 2026 · Dissertation: Modelling Foraging Behaviour in Ecological Dynamics · Advisor: Prof. Hao Wang"},
    {date:"2025", title:"Graduate Embedded Certificate in Data Science", place:"University of Alberta", note:"Department of Mathematical and Statistical Sciences"},
    {date:"2025", title:"Graduate Teaching and Learning Program: Foundations", place:"University of Alberta", note:""},
    {date:"2018", title:"M.Phil. in Mathematics", place:"Bangladesh University of Engineering and Technology (BUET)", note:"Dissertation on mathematical modelling and optimal treatment strategies for acute HIV infection"}
  ],

  teaching: [
    {date:"Fall 2026", title:"Principal Instructor — MATH 209: Calculus for Engineering III", place:"University of Alberta"},
    {date:"2021–Present", title:"Research & Teaching Assistant", place:"University of Alberta"},
    {date:"Fall 2022 & Fall 2023", title:"Guest Instructor — MATH 572: Mathematical Modelling in Industry, Government, and Sciences", place:"University of Alberta"},
    {date:"Fall 2022", title:"Principal Instructor — MATH 100: Calculus for Engineering I", place:"University of Alberta"},
    {date:"2014–Present", title:"Assistant Professor (Study Leave)", place:"Department of Mathematics, BUET"}
  ],

  mentorship: [
    {date:"Summer 2024", student:"J. C. P. Padmanabhuni", program:"University of Alberta Research Experience (UARE)", home:"Indian Institute of Technology, Kharagpur"},
    {date:"Winter 2024", student:"Xiao Han", program:"University of Alberta Research Experience (UARE)", home:"East China Normal University"},
    {date:"Summer 2021", student:"Velizar Kirkow", program:"MITACS Research Internship", home:"University of Exeter"},
    {date:"2017–2018", student:"Md. Zahurul Islam", program:"Research mentorship", home:"Currently Assistant Professor, Bangladesh Army University of Engineering & Technology"}
  ],

  talks: [
    {date:"August 2026", title:"When Behavior Matters: Linking Individual Behavior to Ecosystem Dynamics", event:"Ecological Forecasting Initiative (EFI) Annual Conference", place:"Fields Institute, University of Toronto"},
    {date:"June 2026", title:"Modeling Foraging Behavior in Ecological Dynamics", event:"CAIMS Annual Meeting 2026", place:"University of Regina"},
    {date:"May 2026", title:"Stoichiometric Foraging Strategies under Nutrient Constraints and Adaptive Behavior", event:"Alberta Mathematics Dialogue 2026", place:"MacEwan University, Edmonton"},
    {date:"March 2026", title:"Foraging Behavior in Ecological Dynamics: from Environmental Drivers to Behavioral Mechanisms", event:"SMB CDEV Seminar", place:"Online"},
    {date:"March 2026", title:"When Behavior Matters: Linking Individual to Ecosystem Dynamics", event:"CNAS Research Day", place:"University of Alberta"},
    {date:"February 2026", title:"Foraging Behavior in Ecological Dynamics: from Environmental Drivers to Behavioral Mechanisms", event:"Collaborative Mathematical Biology Seminar", place:"University of Alberta"},
    {date:"December 2025", title:"Modelling Foraging Behavior in Ecological Dynamics", event:"Canadian Mathematical Society Winter Meeting", place:"Toronto"},
    {date:"September 2025", title:"Stoichiometric Theory in Optimal Foraging Strategy", event:"Society for Mathematical Biology Annual Meeting", place:"Edmonton"}
  ],

  awards: [
    {year:"2026", title:"Fields Institute Travel Grant", note:"Ecological Forecasting Initiative Conference, Toronto"},
    {year:"2026", title:"ICMS and Durham University Travel Grant", note:"Mathematical Approaches to Spatial Biology, Durham University, UK"},
    {year:"2026", title:"GPS Graduate Student Support Award", note:"University of Alberta"},
    {year:"2025–2026", title:"Faculty of Graduate Studies and Research Travel Awards", note:"Winter 2025 and Summer 2026"},
    {year:"2021", title:"University of Alberta Doctoral Recruitment Scholarship", note:"University of Alberta"},
    {year:"2019", title:"A F Mujibur Rahman Gold Medal", note:"Awarded for M.Phil. result"},
    {year:"2018", title:"ICTP Travel Grant", note:"Workshop on Control, Optimization and Differential Equations, Italy"},
    {year:"2017", title:"Travel Grant", note:"Workshop on Operations Research of Biological Systems, Malaysia"}
  ],

  service: [
    {date:"May 2026", title:"Session Organizer", note:"Mathematical Biology session, Alberta Mathematics Dialogue 2026"},
    {date:"2025–Present", title:"Leader / Co-leader", note:"Data-driven modelling and rigorous analysis research sub-groups"},
    {date:"2022–Present", title:"Organizing Committee Member", note:"CMB and ILMEE group social events and junior-member engagement"},
    {date:"Summer 2025", title:"Organizing Member", note:"Society for Mathematical Biology Annual Meeting 2025"},
    {date:"2023", title:"Secretary", note:"Society in Graduate Mathematics and Statistics (SIGMAS)"},
    {date:"2023", title:"Youth Secretary", note:"Bangladesh Canada Association of Edmonton"}
  ]
};