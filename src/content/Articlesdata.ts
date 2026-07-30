export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "image"; src: string; alt: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  read: string;
  /** Full article body. Omitted for articles where only a summary exists so far. */
  body?: ContentBlock[];
}

export const articles: Article[] = [
  {
    slug: "understanding-ecl-ifrs9",
    title: "Understanding Expected Credit Loss (ECL) under IFRS 9",
    description:
      "Learn the fundamentals of Expected Credit Loss, including the three-stage impairment model, PD, LGD, EAD, and forward-looking macroeconomic adjustments.",
    author: "Probmatrix Research Team",
    date: "March 10, 2026",
    read: "6 min read",
  },
  {
    slug: "data-quality-ifrs9-success",
    title: "Why Data Quality Determines IFRS 9 Success",
    description:
      "Discover why accurate, complete, and governed data is the foundation of every successful IFRS 9 implementation.",
    author: "Probmatrix Research Team",
    date: "March 18, 2026",
    read: "5 min read",
  },
  {
    slug: "building-explainable-credit-risk-models",
    title: "Building Explainable Credit Risk Models",
    description:
      "Explore best practices for creating transparent, auditable, and regulator-friendly credit risk models.",
    author: "Probmatrix Analytics",
    date: "April 2, 2026",
    read: "7 min read",
  },
  {
    slug: "avoid-black-box-ifrs9-solutions",
    title: "Why Should Financial Institutions Avoid Black-Box IFRS 9 Solutions?",
    description:
      "Is Your IFRS 9 Process a Black Box? Uncover the hidden complexities for clearer, more effective credit risk decisions.",
    author: "Probmatrix Research Team",
    date: "April 15, 2026",
    read: "6 min read",
    body: [
      { type: "image", src: "/articles/blackbox/image1.jpeg", alt: "Why Should Financial Institutions Avoid Black-Box IFRS 9 Solutions?" },
      {
        type: "p",
        text: "As more Financial Institutions are implementing IFRS 9 Expected credit loss models, many are turning to third-party \"black-box\" solutions. IFRS 9 is very crucial for FIs as it directly impacts profitability. Therefore, the ECL modeling process must be transparent and well-defined. These solutions often promise simplicity but can introduce significant challenges. This article explores the challenges of relying on black-box solutions, provides examples of their pitfalls, and suggests more transparent, flexible alternatives.",
      },
      { type: "h2", text: "Challenges of relying on IFRS 9 black-box solutions:" },
      {
        type: "ol",
        items: [
          "Senior management and decision-makers frequently do not understand the code or calculations driving the ECL estimates, risking misinformed decisions.",
          "Many teams are accustomed to spreadsheet-based models. Complex user interfaces designed by solution providers can be unintuitive, limiting proper analysis.",
          "Some solutions merely multiply PD, LGD, and EAD while overlooking components estimation methodologies, such as TTC PD/LGD, macroeconomic modeling, PiT adjustments, staging, and SICR.",
          "Step-by-step visibility into ECL modeling, vital for assessing portfolio behavior is often missing. Users directly receive a final number without understanding how it was derived.",
          "Usually, the solutions are harder to integrate and require system and hardware enhancements to work efficiently.",
          "Usually, black box IFRS 9 solutions increase the cost and reduce control over the ECL estimation.",
          "Sometime, adjusting assumptions or adding expert judgment can be difficult to integrate into the solution.",
        ],
      },
      { type: "h2", text: "Examples of Black-Box Systems Shortcomings:" },
      { type: "h3", text: "EXAMPLE # 1 Lack of Transparency" },
      {
        type: "p",
        text: "The first example is related to the black box solution Mechanism itself. You give input, set the parameters and run the solution, and receive final ECL numbers without clarity on:",
      },
      {
        type: "ul",
        items: [
          "The specific model used",
          "Key parameters driving the outcome",
          "Whether the approach is suited to your portfolio",
          "How to incorporate management overlays",
        ],
      },
      { type: "p", text: "These are questions which are not addressed in the solutions by solution providers." },
      { type: "image", src: "/articles/blackbox/image2.jpeg", alt: "Black-box solution lacking transparency into model, parameters, and overlays" },
      { type: "h3", text: "EXAMPLE # 2 Inability to Perform Data Analysis" },
      {
        type: "p",
        text: "When using these solutions, conducting thorough data analysis to understand your portfolio's behavior becomes extremely challenging. Key insights, such as the macroeconomic impact on Expected Credit Loss (ECL), forward-looking Point-in-Time (PiT) Probability of Default (PD) fluctuations, recovery trends, and default behaviors, are difficult to obtain. This limitation arises because users lack access to the ECL modeling steps, which are crucial for gaining deeper analytical insights.",
      },
      {
        type: "p",
        text: "Let's take an example of TTC PD estimation for corporate portfolio using Markov Chain Migration Matrix",
      },
      { type: "image", src: "/articles/blackbox/image3.jpeg", alt: "Probability matrix for TTC PD estimation using a Markov Chain migration matrix" },
      {
        type: "p",
        text: "In the image above, you can see a probability matrix that not only provides TTC PDs but also offers valuable insights into both the model and portfolio:",
      },
      {
        type: "ol",
        items: [
          "The first key insight is that the rating model is performing effectively, as indicated by the diagonal dominance in the transition matrix. This means that all diagonal elements of the transition matrix are larger than the corresponding row sum of off-diagonal elements the matrix.",
          "The matrix also provides a clear view of the percentage of obligors that experience rating upgrades or downgrades. This information will help management or analyst to understand how much notch downgrade is actually a significant increase in credit risk for each rating grade.",
          "Additionally, the matrix highlights forward transition probabilities. If these probabilities are increasing, it indicates a deterioration in portfolio credit quality.",
        ],
      },
      {
        type: "p",
        text: "These valuable insights are often missing when using IFRS 9 solutions because users only have access to the final output PD rather than the underlying modeling process.",
      },
      { type: "h2", text: "Practical Solutions" },
      { type: "p", text: "Financial Institutions have several options to avoid black-box limitations:" },
      { type: "h3", text: "SOLUTION # 1 Advisory Services & Custom Automation" },
      { type: "p", text: "Financial institutions can utilize advisory services, gaining access to the following benefits:" },
      { type: "image", src: "/articles/blackbox/image4.jpeg", alt: "Benefits of advisory services: tailored models, transparency, and integrated overlays" },
      {
        type: "ol",
        items: [
          "Appropriate Models tailored to each portfolio.",
          "Working in a familiar environment ensures management and decision-makers understand the modeling steps.",
          "Each calculation is transparent, enabling more effective data analysis.",
          "Management overlays can be seamlessly integrated for greater flexibility.",
        ],
      },
      {
        type: "p",
        text: "Once an FI is confident in the approach, solutions can be automated in VBA, R, Python, or another language of choice allowing flexibility and reducing long-term costs.",
      },
      { type: "h3", text: "How Probmatrix Helps:" },
      {
        type: "p",
        text: "At Probmatrix, we specialize in both IFRS 9 advisory and automation. Our cost-effective services give your FI full control over the ECL modeling process:",
      },
      {
        type: "ol",
        items: [
          "No hidden codes or complex interfaces every stage is clearly documented.",
          "Instead of complex UI-based systems designed for solution providers, our approach prioritizes user-friendliness and integration with tools your team already knows.",
          "We incorporate TTC PD, TTC LGD, macroeconomic modeling, PiT estimates, SICR, and staging mechanisms.",
          "Our solution provides step-by-step visibility into ECL estimation, allowing management to track portfolio behavior, detect stage movements, and make informed strategic decisions not just rely on a single output number.",
          "Our approach is lightweight and designed to work within your current infrastructure, saving you time and reducing costs.",
          "Keeps your organization in full control of IFRS 9 compliance. No hidden dependencies, no unnecessary outsourcing, just a solution designed for your needs.",
          "Incorporate expert judgment without struggling with system limitations or hidden processes.",
        ],
      },
      { type: "h3", text: "SOLUTION # 2 Probmatrix Add-In" },
      {
        type: "p",
        text: "Our Excel Add-in provides an intuitive ribbon interface for comprehensive modeling and data analysis. It includes multiple methodologies for PD, LGD, macroeconomic modeling, and EAD, plus validation tools.",
      },
      { type: "image", src: "/articles/blackbox/image5.png", alt: "Probmatrix IFRS 9 Add-In ribbon banner" },
      { type: "image", src: "/articles/blackbox/image6.jpeg", alt: "Probmatrix Add-In interface for IFRS 9 modeling and data analysis" },
      { type: "h3", text: "KEY BENEFITS:" },
      {
        type: "ol",
        items: [
          "Works like any native Excel feature.",
          "Reduces time and effort.",
          "Supports multiple methodologies based on portfolio needs.",
          "It also contains data analysis tools.",
          "Displays each calculation step, making the process easy to review and audit.",
          "Can be customized based on requirements.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Black-box IFRS 9 solutions may appear convenient, but their hidden methodologies, limited transparency, and integration challenges often create more problems than they solve. Financial Institutions stand to benefit from a clear, step-by-step approach that not only fulfills regulatory obligations but also empowers management with meaningful insights. Whether you need complete advisory and automation, simple Excel-based tools, or an easy-to-use Add-in, the right solution should always offer visibility, flexibility, and full control over your IFRS 9 compliance.",
      },
      {
        type: "p",
        text: "For more information on how Probmatrix can help, feel free to reach out. Let's make IFRS 9 compliance both transparent and straightforward.",
      },
    ],
  },
  {
    slug: "jacob-frye-pit-lgd",
    title: "Jacob–Frye PIT LGD: From Concept to Practical Application",
    description:
      "This article explains how the Jacob–Frye approach can be applied in practice to derive Point-in-Time LGD under IFRS 9, linking recovery behavior to changing macroeconomic conditions. Using a consumer portfolio example, we show how PIT LGD responds to economic stress while remaining stable, explainable, and anchored to long-run recovery assumptions—supporting robust and audit-ready ECL outcomes.",
    author: "Probmatrix Research Team",
    date: "April 22, 2026",
    read: "4 min read",
    body: [
      { type: "image", src: "/articles/jacobfrye/image1.jpeg", alt: "Jacob–Frye PIT LGD: From Concept to Practical Application" },
      {
        type: "p",
        text: "Under IFRS 9, Loss Given Default is expected to move with economic conditions rather than remain static. In stressed environments, recoveries weaken, while in improving conditions, recoveries strengthen. The Jacob–Frye approach addresses this requirement by linking LGD behavior directly to the prevailing default environment.",
      },
      {
        type: "p",
        text: "The core idea is simple and intuitive: when portfolio default risk increases, loss severity also tends to increase, reflecting lower recoveries during economic downturns. Instead of relying on unstable macro-LGD regressions, the Jacob–Frye method produces a smooth, monotonic, and economically consistent adjustment of LGD from through-the-cycle to point-in-time levels.",
      },
      { type: "h2", text: "Jacob–Frye PIT LGD Framework" },
      {
        type: "p",
        text: "The Jacob–Frye approach derives point-in-time LGD by linking recovery severity to the prevailing credit environment. The methodology operates within a one-factor latent credit risk framework in which both default frequency and recovery outcomes are influenced by a common systematic risk driver.",
      },
      { type: "p", text: "The model assumes that:" },
      {
        type: "ul",
        items: [
          "Long-run (through-the-cycle) Probability of Default and Loss Given Default represent unconditional portfolio behavior.",
          "Deviations from long-run conditions reflect changes in the underlying economic environment.",
          "As credit conditions deteriorate and default rates increase, recoveries decline in a consistent and monotonic manner.",
        ],
      },
      {
        type: "p",
        text: "Point-in-time LGD is obtained by conditioning recovery expectations on the same systematic factor that drives portfolio default behavior. This ensures internal consistency between PD and LGD while preserving the long-run expected loss implied by historical data.",
      },
      {
        type: "p",
        text: "The methodology does not rely on direct macroeconomic regressions and avoids manual overlays. Instead, it produces smooth, economically intuitive LGD adjustments that respond naturally to changes in portfolio credit conditions.",
      },
      { type: "h2", text: "Illustrative Example" },
      {
        type: "p",
        text: "To demonstrate this behavior, a forward-looking example has been constructed for consumer portfolio using Jacob-Frye methodology, incorporating key macroeconomic indicators and projected portfolio default rates over the forecast horizon.",
      },
      { type: "image", src: "/articles/jacobfrye/image2.jpeg", alt: "Forecast-horizon macroeconomic indicators and projected portfolio default rates" },
      { type: "image", src: "/articles/jacobfrye/image3.jpeg", alt: "PIT LGD path responding to macroeconomic conditions over the forecast horizon" },
      {
        type: "ul",
        items: [
          "The above illustration shows that the PIT LGD responds concurrently to changes in macroeconomic conditions, moving from lower values in stable periods to higher values under worsening Macro economic conditions.",
          "Given that the portfolio under consideration is a consumer portfolio, LGD sensitivity is most pronounced with respect to unemployment and import trends. As unemployment rises, borrower repayment capacity weakens, leading to higher default rates and lower recoveries. At the same time, declining import activity signals broader economic slowdown, further amplifying credit stress. Together, these dynamics result in an increase in portfolio default rates and a corresponding upward adjustment in PIT LGD over time.",
          "The directional relationships observed are intuitive and consistent with economic theory:",
        ],
      },
      {
        type: "ol",
        items: [
          "Unemployment shows a strong positive relationship with default rates and LGD.",
          "Imports and government expenditure exhibit a negative relationship, where declining economic activity and fiscal support are associated with worsening credit outcomes.",
        ],
      },
      {
        type: "ul",
        items: ["The resulting PIT LGD path remains stable, explainable, and anchored to long-run recovery assumptions."],
      },
      {
        type: "p",
        text: "This example highlights how the method naturally captures LGD cyclicality without abrupt shocks or manual overlays, making it particularly suitable for IFRS 9 ECL modeling.",
      },
      { type: "image", src: "/articles/jacobfrye/image4.png", alt: "Probmatrix IFRS 9 Add-In banner" },
      { type: "h2", text: "Implementation Using Probmatrix IFRS 9 Add-In ®" },
      {
        type: "p",
        text: "Probmatrix IFRS 9 Excel Add-In ® fully supports Jacob–Frye–based PIT LGD calculation, enabling users to:",
      },
      {
        type: "ol",
        items: [
          "Convert TTC LGD into PIT LGD using significant MEVs",
          "Ensure consistency between Portfolio PD and LGD movements",
          "Perform scenario-based PiT LGD projections",
        ],
      },
      {
        type: "p",
        text: "All outputs generated using this framework are used as inputs to IFRS 9 Expected Credit Loss calculations.",
      },
      { type: "h2", text: "Summary" },
      {
        type: "p",
        text: "The Jacob–Frye approach estimates PIT LGD by linking recovery behavior to changes in the credit environment, ensuring LGD increases as default risk rises. It provides a smooth, economically intuitive adjustment from long-run LGD without relying on unstable regressions. Probmatrix IFRS 9 Excel Add-In ® implements this methodology to deliver transparent, audit-ready PIT LGD calculations.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}