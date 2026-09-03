// ===== 데이터 파일 =====
// 논문이나 소식을 추가할 때는 이 파일만 수정하면 됩니다.
// 각 항목을 복사해서 맨 위에 붙여넣고 내용을 바꾸세요.

const PUBLICATIONS = [
  {
    year: 2025,
    title: "Sacrificial Template-Derived CoMo-LDH Gas Diffusion Electrode for Anion Exchange Membrane Water Electrolysis",
    authors: "S. J. Lee†, Y. Park†, S. H. Lee†, S. Y. Park, I. T. Kim, Y. Kim, B. S. Soh, G. H. Kim, J. Lee*, S. Lee*, K. Shin*, Y. S. Park*",
    journal: "Advanced Science",
    volume: "e08370 (2025)",
    highlight: true
  },
  {
    year: 2025,
    title: "Oxygen-Deficient Co3O4 Electrode for Anion Exchange Membrane Water Electrolyzer",
    authors: "Y. S. Park, C. Kim, J. Lee, J.-Y. Jeong, Y. Park, M. J. Jang, S. M. Choi*",
    journal: "International Journal of Energy Research",
    volume: "vol. 2025, 3025302 (2025)",
    highlight: false
  },
  {
    year: 2025,
    title: "Optimizing Hybrid-phase IrO2 Catalysts with Ti for Enhanced Oxygen Evolution Reaction for Proton Exchange Membrane Water Electrolysis",
    authors: "Y. H. Yun†, J. Choi†, Y. Park, H. Park, G. Doo, M. J. Kim, S. S. Han, J. H. Park*, S. Lee*, C. Lee*, H. S. Cho*",
    journal: "Small",
    volume: "2503601 (2025)",
    highlight: true
  },
  {
    year: 2025,
    title: "Structural and Compositional Optimization of Fe-Co-Ni Ternary Amorphous Electrocatalysts for Efficient Oxygen Evolution in Anion Exchange Membrane Water Electrolysis",
    authors: "C. Lee†, Y. H. Yun†, S.-H. Kim†, G. Doo, S. Lee, H. Park, Y. Park, J. Shin, H.-S. Cho, S.-K. Kim, E. Cho*, C. Jung*, M.-J. Kim*",
    journal: "Small",
    volume: "vol. 21, issue 4, 2405468 (2025)",
    highlight: false
  },
  {
    year: 2024,
    title: "Solar-Powered AEM Electrolyzer via PGM-Free (Oxy)hydroxide Anode with Solar to Hydrogen Conversion Efficiency of 12.44%",
    authors: "J. S. Ha†, Y. Park†, J.-H. Lee, J. S. Ha, S. J. Lee, I. T. Kim, H. Jin, S. M. Kim, S. M. Choi*, H. M. Lee*, Y. S. Park*",
    journal: "Advanced Science",
    volume: "vol. 11, issue 25, 2401782 (2024)",
    highlight: true
  },
  {
    year: 2024,
    title: "Integrated Structural Modulation Inducing Fast Charge Transfer in Aqueous Zinc-Ion Batteries",
    authors: "N. Naresh†, Y. Park†, S. H. Jeong, S. J. Lee, D. P. Lee, S. H. Lee, G. H. Ryu, Y. H. Jung, J.-H. Kim",
    journal: "Small",
    volume: "2406249 (2024)",
    highlight: false
  },
  {
    year: 2023,
    title: "Electrochemical Dealloying of Ni-rich Pt-Ni Nanoparticle Network for Robust Oxygen Reduction Electrocatalysts",
    authors: "J. Yoo†, Y. Park†, J. Choi, J. Roh, K. Shin, H.-S. Cho, E. Cho, C. Lee* and H. M. Lee*",
    journal: "ACS Sustainable Chemistry & Engineering",
    volume: "vol. 11, issue 42, pp. 15146-15502 (2023)",
    highlight: false
  },
  {
    year: 2023,
    title: "Effect of intrinsic and extrinsic activity of electrocatalysts on anion exchange membrane water electrolyzer",
    authors: "Y. S. Park†, Y. Park†, M. J. Jang†, J. Lee, C. Kim, M. G. Park, J. Yang, J. Choi, H. M. Lee* and S. M. Choi*",
    journal: "Chemical Engineering Journal",
    volume: "vol. 472, 145150 (2023)",
    highlight: false
  },
  {
    year: 2023,
    title: "Machine learning filters out efficient electrocatalysts in the massive ternary alloy space for fuel cells",
    authors: "Y. Park†, C.-K. Hwang†, K. Bang, D. Hong, H. Nam, S. Kwon, B. C. Yeo, D. Go, J. An, B.-K. Ju, S. H. Kim, J. Y. Byun, S. Y. Lee, J. M. Kim*, D. Kim*, S. S. Han* and H. M. Lee*",
    journal: "Applied Catalysis B: Environmental",
    volume: "vol. 339, 123128 (2023)",
    highlight: true
  },
  {
    year: 2023,
    title: "The interfaces of Ag-rich and Cu-rich AgCu phases boost oxygen reduction activity",
    authors: "Y. Park†, C. Lee†, J. Choi†, P. W. Kang, H. M. Lee and P.-P. Choi, C. Jung*",
    journal: "Applied Surface Science",
    volume: "vol. 637, issue 15, pp. 157949 (2023)",
    highlight: false
  },
  {
    year: 2023,
    title: "Machine learning-enabled exploration of the electrochemical stability of real-scale metallic nanoparticles",
    authors: "K. Bang, D. Hong, Y. Park, D. Kim*, S. S. Han* and H. M. Lee*",
    journal: "Nature Communications",
    volume: "vol. 14, 3004 (2023)",
    highlight: true
  },
  {
    year: 2023,
    title: "Catalyst-Support Interactions in Zr2ON2-supported IrOx Electrocatalysts to Break the Trade-off Relationship between the Activity and Stability in the Acidic Oxygen Evolution Reaction",
    authors: "C. Lee†, K. Shin†, Y. Park†, Y. H. Yoon, M. Kim, W.-C. Cho, C.-H. Kim, J. H. Lee, S.-K. Kim, H. M. Lee, H. Y. Kim*, S. Lee*, G. Henkelman* and H.-S. Cho*",
    journal: "Advanced Functional Materials",
    volume: "vol. 33, issue 25, 2301557 (2023)",
    highlight: false
  },
  {
    year: 2022,
    title: "Iterative Redox Activation Promotes Interfacial Synergy in an Ag/CuxO Catalyst for Oxygen Reduction",
    authors: "Y. Park†, K. Shin†, C. Lee†, S. Lee, Y. Lee, C. H. Kim, H. S. Cho*, G. Henkelman* and H. M. Lee*",
    journal: "Chemical Engineering Journal",
    volume: "vol. 446, part 2 (2022)",
    highlight: false
  },
  {
    year: 2021,
    title: "Structural Effectiveness of AgCl-decorated Ag Nanowires Enhancing Oxygen Reduction",
    authors: "S. Choi†, Y. Park†, J. Choi, C. Lee, H. S. Cho, C. H. Kim, J. Koo* and H. M. Lee*",
    journal: "ACS Sustainable Chemistry & Engineering",
    volume: "vol. 9, pp. 7519-7528 (2021)",
    highlight: false
  },
  {
    year: 2021,
    title: "In-Silico High-Throughput Screening of Ag-Based Electrocatalysts for Anion-Exchange Membrane Fuel Cells",
    authors: "J. Choi†, S. Kwon†, Y. Park, K. Kang, H. M. Lee*",
    journal: "Journal of Physical Chemistry Letters",
    volume: "vol. 12, pp. 5660-5667 (2021)",
    highlight: false
  },
  {
    year: 2020,
    title: "Artificial Intelligence to Accelerate the Discovery of N2 Electroreduction Catalyst",
    authors: "M. Kim, B. C. Yeo, Y. Park, H. M. Lee, S. S. Han* and D. Kim*",
    journal: "Chemistry of Materials",
    volume: "vol. 32, pp. 709-720 (2020)",
    highlight: false
  },
  {
    year: 2018,
    title: "A novel approach of an infrared transparent Er:Y2O3-MgO nanocomposite for eye-safe laser ceramics",
    authors: "H. J. Ma, W. K. Jung, Y. Park, and D. K. Kim*",
    journal: "Journal of Materials Chemistry C",
    volume: "vol. 6, pp. 11096-11103 (2018)",
    highlight: false
  },
  {
    year: 2017,
    title: "A robust approach for highly transparent Y2O3 ceramics by stabilizing oxygen defects",
    authors: "W. K. Jung, H. J. Ma, Y. Park, and D. K. Kim*",
    journal: "Scripta Materialia",
    volume: "vol. 137, pp. 1-4 (2017)",
    highlight: false
  }
];

const NEWS = [
  {
    date: "2026.09",
    ko: "연구실 홈페이지를 오픈했습니다.",
    en: "Our lab website is now live."
  },
  {
    date: "2026.03",
    ko: "박영태 교수가 국립금오공과대학교 재료공학부 신소재공학전공에 부임했습니다.",
    en: "Prof. Youngtae Park joined the Department of Materials Science and Engineering at Kumoh National Institute of Technology."
  },
  {
    date: "2025",
    ko: "CoMo-LDH 기체확산전극 연구가 Advanced Science에 게재되었습니다.",
    en: "Our work on CoMo-LDH gas diffusion electrodes was published in Advanced Science."
  }
];
