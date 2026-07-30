export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; src: string; alt: string }
  | { type: "quote"; text: string };

export interface Paper {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  read: string;
  body?: ContentBlock[];
}

export const papers: Paper[] = [
  {
    slug: "expected-life-maturity-revolving-credit-ifrs9",
    title: "Expected Life (Maturity) for Revolving Credit Products under IFRS 9",
    description:
      "This paper explores how behavioural maturity provides a robust IFRS 9 aligned framework for measuring expected credit loss horizons in revolving credit portfolios. Using survival analysis, it demonstrates how exposure duration can be derived from observed customer behaviour rather than contractual assumptions and explains how expected remaining life is estimated at reporting date.",
    author: "Syed Muhammad Danyal",
    date: "February 16, 2026",
    read: "4 min read",
    body: [
      {
        type: "image",
        src: "/whitepapers/expected-life-maturity/image1.jpeg",
        alt: "Expected Life (Maturity) for Revolving Credit Products under IFRS 9",
      },
      { type: "h2", text: "Moving Beyond Contractual Assumptions" },
      {
        type: "p",
        text: "Revolving credit products including credit cards, overdrafts, and working capital facilities pose a distinctive challenge under IFRS 9.",
      },
      {
        type: "p",
        text: "Unlike term loans, these products do not have a fixed economic life. Although contractually cancellable at short notice, many facilities remain active for years. Customers draw, repay, and continue using them in ways that often diverge significantly from contractual terms.",
      },
      { type: "p", text: "This creates a fundamental modelling question:" },
      {
        type: "quote",
        text: "Over what period should expected credit losses be measured for revolving products?",
      },
      { type: "p", text: "The answer lies not in contractual maturity but in Expected maturity." },
      { type: "h2", text: "The IFRS 9 Principle" },
      {
        type: "p",
        text: "IFRS 9 requires expected credit losses to be measured over the period during which an entity is exposed to credit risk.",
      },
      {
        type: "p",
        text: "For certain revolving facilities, the standard explicitly recognizes that contractual notice periods do not adequately limit exposure. Instead, institutions must estimate the period over which credit risk is actually present based on historical behavior and credit risk management practices.",
      },
      { type: "p", text: "This shifts the focus from legal maturity to economic reality." },
      { type: "h2", text: "What Is Expected Life?" },
      {
        type: "p",
        text: "Expected Life represents the expected period during which a revolving facility remains active and exposes the lender to credit risk.",
      },
      { type: "p", text: "A facility's life ends when it is:" },
      {
        type: "ul",
        items: [
          "Closed by the customer,",
          "Cancelled or materially restricted by the bank, or",
          "Terminated following default.",
        ],
      },
      { type: "p", text: "This definition reflects observed behavior rather than contractual wording." },
      { type: "h2", text: "Why Traditional Approaches Are Insufficient" },
      { type: "p", text: "Some institutions attempt to approximate exposure duration using:" },
      {
        type: "ul",
        items: ["Average account age,", "Observed time-to-closure from closed accounts only, or", "Contractual assumptions."],
      },
      { type: "p", text: "These approaches often underestimate true exposure because they:" },
      {
        type: "ul",
        items: [
          "Ignore accounts that are still active,",
          "Overweight early closures, and",
          "Fail to reflect the persistence observed in long-tenured customers.",
        ],
      },
      {
        type: "p",
        text: "Revolving portfolios require a framework that recognizes both completed and ongoing customer relationships.",
      },
      { type: "h2", text: "Data-Driven Approach: Survival Analysis" },
      {
        type: "p",
        text: "Survival analysis provides a structured method for estimating how long facilities remain active based on observed historical data.",
      },
      { type: "p", text: "Rather than focusing solely on closed accounts, this approach evaluates:" },
      {
        type: "ul",
        items: [
          "The proportion of facilities that remain active over time,",
          "The timing of closures and defaults, and",
          "The impact of credit risk management actions.",
        ],
      },
      {
        type: "p",
        text: "The result is a behavioral survival profile that describes how a portfolio naturally evolves.",
      },
      {
        type: "p",
        text: "From this profile, behavioral maturity is derived as the average duration for which facilities remain active.",
      },
      { type: "h2", text: "The Survival Curve: How Customers Actually Behave" },
      {
        type: "image",
        src: "/whitepapers/expected-life-maturity/image2.jpeg",
        alt: "Survival curve chart showing how a credit card portfolio evolves over time since origination",
      },
      { type: "p", text: "The above chart illustrates how a credit card portfolio evolves over time." },
      { type: "p", text: "The vertical axis represents the survival probabilities." },
      { type: "p", text: "The horizontal axis represents months since origination." },
      { type: "p", text: "Several insights emerge:" },
      {
        type: "ul",
        items: [
          "Attrition occurs gradually rather than abruptly.",
          "A substantial portion of accounts survive well beyond four years.",
          "A persistent long-term tail extends beyond 80 Months.",
        ],
      },
      {
        type: "p",
        text: "This pattern clearly demonstrates that exposure duration materially exceeds contractual notice periods.",
      },
      {
        type: "p",
        text: "The survival curve is not theoretical it is derived directly from historical customer behavior.",
      },
      {
        type: "p",
        text: "Expected maturity is then determined as the average duration represented by this curve.",
      },
      { type: "h2", text: "Remaining Life: The Forward-Looking View" },
      {
        type: "image",
        src: "/whitepapers/expected-life-maturity/image3.jpeg",
        alt: "Distribution of expected remaining maturity across the current portfolio",
      },
      { type: "p", text: "At reporting date, we focus on accounts that are currently active." },
      {
        type: "p",
        text: "The above chart shows the distribution of expected remaining maturity across the current portfolio.",
      },
      { type: "p", text: "Key observations include:" },
      {
        type: "ul",
        items: [
          "44% of customers are expected to remain active for up to 12 months.",
          "12% fall in the 12-24 month range & other 12% in the 24-36 month range.",
          "A meaningful 18% are expected to remain active for 36-48 months.",
          "A smaller portion extends beyond 48 months.",
          "On Average the remaining expected life is about 2 Years",
        ],
      },
      { type: "p", text: "This distribution highlights an important reality:" },
      { type: "p", text: "Exposure is heterogeneous." },
      {
        type: "p",
        text: "Some customers are nearing closure, while others are deeply embedded and likely to remain active for years.",
      },
      { type: "h2", text: "Why Longer-Tenured Accounts Often Live Longer" },
      {
        type: "p",
        text: "One frequently observed phenomenon is that accounts that have already survived several years often exhibit longer expected remaining life.",
      },
      { type: "p", text: "This is not a modelling anomaly." },
      { type: "p", text: "It reflects behavioral persistence." },
      {
        type: "p",
        text: "Customers who survive early attrition phases tend to represent a more stable segment with lower closure propensity. As a result, their expected remaining life may exceed that of a newly originated account.",
      },
      { type: "h2", text: "Why This Matters for IFRS 9" },
      { type: "p", text: "Behavioral maturity directly influences:" },
      {
        type: "ul",
        items: ["Lifetime ECL horizon", "Stage 2 exposure measurement", "Sensitivity to macroeconomic scenarios"],
      },
      {
        type: "p",
        text: "Underestimating maturity may systematically understate exposure. Overestimating it may inflate provisions unnecessarily.",
      },
      { type: "h2", text: "How to Model Expected Remaining Life with Our IFRS 9 Add-In ®" },
      {
        type: "image",
        src: "/whitepapers/expected-life-maturity/image4.jpeg",
        alt: "Probmatrix IFRS 9 Add-In banner",
      },
      {
        type: "p",
        text: "While survival modelling can be statistically complex, implementation does not need to be.",
      },
      {
        type: "p",
        text: "Our IFRS 9 Excel Add-In enables institutions to model expected maturity and expected remaining life directly within Excel without external statistical software.",
      },
      { type: "h2", text: "Step 1: Upload Historical Revolving Portfolio Data" },
      { type: "p", text: "Users selects account-level historical data." },
      {
        type: "p",
        text: "The Add-In automatically identifies active versus terminated facilities and handles right-censoring appropriately.",
      },
      { type: "h2", text: "Step 2: Generate the Behavioral Survival Curve" },
      {
        type: "p",
        text: "Using Kaplan-Meier methodology, the Add-In constructs the Monthly survival probabilities with Tail stability control. The survival curve is generated transparently and can be reviewed, validated, and exported.",
      },
      { type: "h2", text: "Step 3: Calculate Expected Remaining Expected Life" },
      { type: "p", text: "For the current portfolio snapshot, the Add-In:" },
      {
        type: "ul",
        items: [
          "Determines each facility's age",
          "Conditions on survival to reporting date",
          "Computes customer-level expected remaining life",
        ],
      },
      {
        type: "p",
        text: "Our IFRS 9 Add-In brings that behavioral modelling capability directly into Excel, combining statistical rigor with practical implementation.",
      },
      {
        type: "quote",
        text: "If you would like to see how the Add-In models Expected maturity in practice, feel free to connect.",
      },
      { type: "h2", text: "Governance and Model Controls" },
      { type: "p", text: "A robust behavioral maturity framework should include:" },
      {
        type: "ul",
        items: [
          "Explicit treatment of ongoing accounts (right-censoring),",
          "Tail stability controls where long-term data becomes sparse,",
          "Periodic monitoring of behavioral shifts, and",
          "Alignment with documented credit risk management policies.",
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Under IFRS 9, the exposure horizon must reflect economic reality not legal form. Behavioral maturity provides that economic lens. It translates observed customer behavior into a defensible, data-driven measure of credit exposure duration.",
      },
      {
        type: "p",
        text: "The survival curve reveals how customers actually behave. The remaining life distribution shows how that behavior translates into forward-looking exposure.",
      },
      {
        type: "p",
        text: "Together, they form a coherent framework for measuring lifetime risk in revolving portfolios.",
      },
      { type: "p", text: "The adoption of behavioral modelling grounded in survival analysis gain:" },
      {
        type: "ul",
        items: [
          "Greater accuracy,",
          "Improved stability of provisions,",
          "Stronger audit defensibility, and",
          "Clear alignment with IFRS 9 principles.",
        ],
      },
    ],
  },
];

export function getPaperBySlug(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}