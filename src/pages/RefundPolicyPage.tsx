interface PolicyBlock {
  type: "p" | "ul";
  text?: string;
  items?: string[];
}

interface PolicySection {
  title: string;
  blocks: PolicyBlock[];
}

const refundPolicyIntro =
  'This Refund and Cancellation Policy applies to purchases and subscriptions for the CredX validation and calibration tool provided by Probmatrix Analytics (Pvt.) Ltd. References to "CredX," "we," "us," or "our" in this policy refer to Probmatrix Analytics (Pvt.) Ltd. By purchasing, activating, downloading, installing, accessing, or using CredX, you acknowledge that you have reviewed and accepted this policy.';

const refundPolicyUpdated = "Last updated: July 27, 2026";

const refundPolicySections: PolicySection[] = [
  {
    title: "1. Nature of the CredX Licence",
    blocks: [
      { type: "p", text: "CredX is a professional software tool delivered through a Microsoft Excel Add-In and associated calculation, licensing, validation, support, or deployment services." },
      { type: "p", text: "A CredX purchase grants the customer a limited right to use the software during the applicable licence period. It does not transfer ownership of the software, calculation engine, methodologies, source code, intellectual property, or underlying technology." },
      { type: "p", text: "CredX licences may include:" },
      { type: "ul", items: ["Monthly subscriptions", "Annual subscriptions", "Named-user Professional licences", "Team or organizational licences", "Usage-limited or unlimited-access plans", "Optional training, implementation, customization, deployment, or support services"] },
    ],
  },
  {
    title: "2. Refund Eligibility Before Licence Activation",
    blocks: [
      { type: "p", text: "A customer may request a full refund within seven calendar days of the initial purchase, provided that:" },
      { type: "ul", items: ["The CredX licence has not been activated", "The software or calculation engine has not been accessed", "No CredX validation or calibration tool has been run", "No user account or organization environment has been provisioned", "No onboarding, training, customization, or implementation work has started", "The refund request is submitted using the contact details provided in this policy"] },
      { type: "p", text: "Once a licence has been activated or CredX functionality has been accessed or used, the purchase will generally become non-refundable, except in the circumstances specifically described below or where a refund is required by applicable law." },
    ],
  },
  {
    title: "3. Activated and Used Licences",
    blocks: [
      { type: "p", text: "Licence fees are generally non-refundable after:" },
      { type: "ul", items: ["A licence key has been issued and activated", "CredX has been installed or enabled for the customer", "A customer has accessed the CredX interface or calculation engine", "A validation, calibration, model-selection, or testing tool has been run", "Any part of the customer's monthly usage allowance has been consumed", "A Team environment has been provisioned", "CredX has been deployed through an approved virtual desktop or customer-controlled environment"] },
      { type: "p", text: "The inability to use all available tools or consume the complete monthly usage allowance does not create an entitlement to a refund." },
      { type: "p", text: "Unused model runs, tool allowances, licence days, user seats, or subscription periods do not carry a cash value and are not refundable or exchangeable unless expressly agreed otherwise in writing." },
    ],
  },
  {
    title: "4. Monthly Subscriptions",
    blocks: [
      { type: "p", text: "Monthly subscriptions may be cancelled at any time before the next billing date." },
      { type: "p", text: "Following cancellation:" },
      { type: "ul", items: ["The subscription will remain active until the end of the current paid billing period", "The customer will not be charged for the next billing period", "No prorated refund will normally be provided for the remaining days of the current billing period", "Any unused model runs or allowances will expire at the end of the applicable billing period"] },
      { type: "p", text: "Failure to use CredX, forgetting to cancel a subscription, or no longer requiring the tool does not normally qualify the customer for a refund." },
    ],
  },
  {
    title: "5. Annual Subscriptions",
    blocks: [
      { type: "p", text: "Annual subscriptions are billed for the complete annual licence period." },
      { type: "p", text: "A customer may cancel an annual subscription to prevent its next renewal. Cancellation does not normally result in a prorated refund for the unused portion of the current annual licence period." },
      { type: "p", text: "An initial annual subscription may qualify for a refund under Section 2 only where the refund is requested within seven calendar days and the licence has not been activated, accessed, provisioned, or used." },
    ],
  },
  {
    title: "6. Subscription Renewals",
    blocks: [
      { type: "p", text: "Where automatic renewal is enabled, the customer is responsible for cancelling the subscription before the renewal date." },
      { type: "p", text: "A customer may request the reversal of an automatic renewal payment within seven calendar days after the renewal date, provided that:" },
      { type: "ul", items: ["CredX has not been accessed or used during the renewed period", "No validation, calibration, or model-testing runs have been performed during the renewed period", "No support, onboarding, or other included service has been used during the renewed period", "The customer submits the request promptly after identifying the renewal charge"] },
      { type: "p", text: "Approval of a renewal refund remains subject to verification of account activity and any rights available under applicable law." },
    ],
  },
  {
    title: "7. Duplicate or Incorrect Charges",
    blocks: [
      { type: "p", text: "A full or partial refund may be issued where we confirm that:" },
      { type: "ul", items: ["The customer was charged more than once for the same subscription", "The amount charged was different from the agreed purchase price", "The customer was charged after a properly completed cancellation", "An unauthorized licence or user seat was added due to an error attributable to us", "A billing error occurred within our payment or licensing system"] },
      { type: "p", text: "Customers should report suspected billing errors within 30 calendar days of the transaction and provide the relevant invoice, payment receipt, transaction reference, and account information." },
    ],
  },
  {
    title: "8. Technical Problems",
    blocks: [
      { type: "p", text: "Customers experiencing a technical problem must contact CredX support and provide reasonable information required to investigate the issue, which may include:" },
      { type: "ul", items: ["The licence or account details", "The CredX version", "The Microsoft Excel and Windows versions", "Screenshots or error messages", "Relevant log files", "A description of the steps that produced the issue", "Confirmation that the documented system and installation requirements have been followed"] },
      { type: "p", text: "We will make reasonable efforts to diagnose and resolve verified CredX software problems." },
      { type: "p", text: "A refund may be considered where:" },
      { type: "ul", items: ["A material defect prevents the customer from accessing the purchased CredX functionality", "The problem is attributable to CredX", "The customer has cooperated with reasonable troubleshooting procedures", "We are unable to provide a correction, workaround, replacement, or restoration of access within a reasonable period"] },
      { type: "p", text: "A refund will not normally be provided where the issue results from:" },
      { type: "ul", items: ["Unsupported versions of Microsoft Excel, Microsoft Office, or Windows", "Customer hardware, network, firewall, security, or virtual-desktop restrictions", "Incorrect installation or unauthorized modification", "Failure to meet published system requirements", "Corrupted, incomplete, incorrectly formatted, or unsuitable customer data", "Customer-developed macros, Add-Ins, software, or security tools", "Third-party products or services outside our control", "Loss of access caused by sharing, misuse, or violation of the licence terms", "Failure to maintain required internet, system, or licence-verification access", "The customer's misunderstanding of a statistical test, methodology, result, threshold, input requirement, or model conclusion"] },
    ],
  },
  {
    title: "9. Model Results and Professional Judgement",
    blocks: [
      { type: "p", text: "CredX is a validation, calibration, testing, monitoring, and decision-support tool. It does not guarantee:" },
      { type: "ul", items: ["A particular validation outcome", "Model approval", "Regulatory approval", "Audit acceptance", "IFRS 9 compliance", "A specific statistical result", "Improvement in model performance", "Acceptance of a methodology by management, auditors, regulators, clients, or other third parties"] },
      { type: "p", text: "Dissatisfaction with a valid statistical result, test conclusion, exception, calibration outcome, sensitivity result, or model finding does not qualify the customer for a refund." },
      { type: "p", text: "Customers remain responsible for reviewing inputs, methodologies, assumptions, outputs, interpretations, accounting conclusions, validation opinions, audit judgements, and regulatory requirements." },
    ],
  },
  {
    title: "10. Professional, Team and Organizational Licences",
    blocks: [
      { type: "p", text: "CredX Team and organizational licences are generally non-refundable once:" },
      { type: "ul", items: ["User accounts or seats have been created", "An organization environment has been configured", "Licence keys have been issued", "Internal or external client-use rights have been enabled", "Team onboarding has started", "Training has been delivered or scheduled", "Templates have been configured", "Deployment or implementation work has begun"] },
      { type: "p", text: "Removing a user, reducing the number of seats, or discontinuing use during an active billing period does not normally result in a prorated refund." },
      { type: "p", text: "Any adjustment to the number of users or licence scope will apply from the next billing period unless otherwise agreed in writing." },
    ],
  },
  {
    title: "11. Training, Implementation and Custom Services",
    blocks: [
      { type: "p", text: "Fees for training, onboarding, implementation, custom validation tools, organization-specific templates, virtual-desktop deployment, data assistance, consulting, and other professional services are separate from standard CredX licence fees unless expressly stated otherwise." },
      { type: "p", text: "These fees are non-refundable once the relevant work has commenced or resources have been allocated." },
      { type: "p", text: "Where a service is cancelled before completion, we may deduct:" },
      { type: "ul", items: ["Work already completed", "Time already incurred", "Non-recoverable third-party expenses", "Configuration or development work", "Reserved training or consulting time", "Other reasonable costs arising from the cancellation"] },
      { type: "p", text: "Any additional refund or cancellation terms stated in a proposal, quotation, statement of work, order form, or signed agreement will take precedence for the relevant services." },
    ],
  },
  {
    title: "12. Trials, Demonstrations and Promotional Access",
    blocks: [
      { type: "p", text: "Where CredX is provided under a free trial, demonstration, promotional licence, or complimentary access arrangement, no refund is available because no licence fee has been paid." },
      { type: "p", text: "Customers are responsible for cancelling before the end of a trial where the trial automatically converts into a paid subscription and the applicable checkout terms clearly disclose that arrangement." },
      { type: "p", text: "Payments made after a trial has converted into a paid subscription will be handled under the monthly, annual, renewal, and mandatory-rights provisions of this policy." },
    ],
  },
  {
    title: "13. Change of Mind",
    blocks: [
      { type: "p", text: "Except for the unused and unactivated purchase period described in Section 2 or rights provided under applicable law, refunds are not available because a customer:" },
      { type: "ul", items: ["Changes their mind", "No longer requires CredX", "Purchases the wrong licence option", "Does not have sufficient data to perform a test", "Does not possess the required technical or statistical knowledge", "Does not use the licence", "Does not use all available model runs", "Experiences changes in staffing, projects, clients, or internal priorities", "Finds an alternative software product or methodology"] },
      { type: "p", text: "Customers should review the product description, included tools, usage allowances, system requirements, licence scope, and buying options before completing the purchase." },
    ],
  },
  {
    title: "14. Immediate Digital Delivery",
    blocks: [
      { type: "p", text: "CredX may be activated, provisioned, downloaded, installed, or made accessible shortly after payment." },
      { type: "p", text: "Where required by applicable law, the customer may be asked to:" },
      { type: "ul", items: ["Request immediate delivery or activation of CredX", "Consent to the supply of the digital product or service before the end of any statutory cancellation period", "Acknowledge that immediate activation, access, download, installation, or use may affect or end a statutory right to cancel"] },
      { type: "p", text: "Nothing in this policy excludes, restricts, or overrides a consumer right that cannot lawfully be excluded or restricted." },
    ],
  },
  {
    title: "15. How to Request a Refund",
    blocks: [
      { type: "p", text: "Refund requests must be submitted to:" },
      { type: "ul", items: ["Email: support@probmatrix.io", "Company: Probmatrix Analytics (Pvt.) Ltd.", "Website: probmatrix.io"] },
      { type: "p", text: "The request should include:" },
      { type: "ul", items: ["Customer or organization name", "Registered email address", "Invoice or order number", "Payment date", "Licence type", "Reason for the request", "Confirmation of whether CredX has been activated or used", "Any relevant billing records, screenshots, or error information"] },
      { type: "p", text: "Submitting a refund request does not guarantee approval. Each request will be reviewed against this policy, account activity, licence records, service-delivery records, contractual terms, and applicable law." },
    ],
  },
  {
    title: "16. Refund Processing",
    blocks: [
      { type: "p", text: "Approved refunds will normally be:" },
      { type: "ul", items: ["Returned through the original payment method where reasonably possible", "Limited to the amount actually received by us for the refundable item", "Reduced by any non-refundable work, services, or costs where permitted", "Processed within 10 business days after approval"] },
      { type: "p", text: "The customer's bank, payment processor, or card provider may require additional time to post the refunded amount." },
      { type: "p", text: "We are not responsible for differences caused by foreign-exchange movements, intermediary-bank charges, card-provider charges, payment-processing fees, or other third-party costs, except where applicable law requires otherwise." },
      { type: "p", text: "Taxes will be refunded only to the extent that they are refundable under the applicable tax rules and have not already become payable to a tax authority." },
    ],
  },
  {
    title: "17. Chargebacks and Payment Disputes",
    blocks: [
      { type: "p", text: "Customers should contact us before initiating a payment dispute or chargeback so that we have an opportunity to investigate and resolve the matter." },
      { type: "p", text: "Initiating an unjustified chargeback for a valid and properly delivered CredX licence may result in:" },
      { type: "ul", items: ["Temporary suspension of the licence", "Termination of access", "Recovery of chargeback or administrative costs where legally permitted", "Restriction of future purchases"] },
      { type: "p", text: "This section does not prevent a customer from exercising any lawful right to dispute an unauthorized or incorrect transaction." },
    ],
  },
  {
    title: "18. Licence Suspension or Termination",
    blocks: [
      { type: "p", text: "No refund will normally be provided where a licence is suspended or terminated because of:" },
      { type: "ul", items: ["Unauthorized copying, sharing, resale, sublicensing, or distribution", "Sharing of named-user credentials or licence keys", "Attempting to bypass usage, security, or licence controls", "Reverse engineering or unauthorized access to the calculation engine", "Use beyond the purchased licence scope", "Non-payment", "Fraudulent or abusive activity", "Any other material violation of the CredX licence terms"] },
    ],
  },
  {
    title: "19. Relationship With Other Terms",
    blocks: [
      { type: "p", text: "This policy should be read together with the applicable:" },
      { type: "ul", items: ["CredX Terms of Use", "End-User Licence Agreement", "Subscription or order terms", "Privacy Policy", "Proposal or quotation", "Statement of work", "Any organization-specific agreement"] },
      { type: "p", text: "Where a signed agreement contains different refund or cancellation terms, the signed agreement will take precedence to the extent of the inconsistency." },
    ],
  },
  {
    title: "20. Changes to This Policy",
    blocks: [
      { type: "p", text: "We may update this Refund and Cancellation Policy to reflect changes in CredX products, licence arrangements, payment processes, legal requirements, or business practices." },
      { type: "p", text: "The version applicable to a purchase will generally be the version published or provided when the relevant purchase or renewal was completed, unless a change is required by applicable law." },
    ],
  },
  {
    title: "21. Mandatory Legal Rights",
    blocks: [
      { type: "p", text: "Nothing in this policy is intended to exclude, limit, or waive any statutory guarantee, remedy, cancellation right, refund right, or other protection that cannot legally be excluded under the laws applicable to the customer." },
      { type: "p", text: "Where any provision of this policy conflicts with a mandatory legal requirement, the mandatory legal requirement will apply to the extent of that conflict." },
    ],
  },
];

export default function RefundPolicy(): JSX.Element {
  return (
    <div className="rp-page">
      <div className="rp-glow" aria-hidden="true" />

      {/* Header */}
      <section className="rp-hero">
        <div className="rp-container">
          <a className="rp-back" href="/solutions/credX">
            <span aria-hidden="true">←</span> Back to CredX
          </a>
          <span className="rp-eyebrow">CredX</span>
          <h1 className="rp-title">Refund &amp; Cancellation Policy</h1>
          <p className="rp-updated">{refundPolicyUpdated}</p>
          <p className="rp-intro">{refundPolicyIntro}</p>
        </div>
      </section>

      {/* Full policy text — read top to bottom, no accordion, so it's
          easy to scan or Ctrl-F on a dedicated legal page. */}
      <section className="rp-section">
        <div className="rp-container rp-content">
          {refundPolicySections.map((section) => (
            <div className="rp-block" key={section.title} id={section.title.split(".")[0]}>
              <h2 className="rp-block-title">{section.title}</h2>
              {section.blocks.map((block, bi) =>
                block.type === "p" ? (
                  <p className="rp-p" key={bi}>
                    {block.text}
                  </p>
                ) : (
                  <ul className="rp-ul" key={bi}>
                    {block.items!.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rp-section rp-section-alt">
        <div className="rp-container rp-contact">
          <h2 className="rp-block-title">Questions About This Policy?</h2>
          <p className="rp-p">
            Reach out to our team directly for anything not covered above.
          </p>
          <div className="rp-contact-actions">
            <a className="rp-btn rp-btn-primary" href="mailto:support@probmatrix.io">
              support@probmatrix.io
            </a>
            <a className="rp-btn rp-btn-outline" href="tel:+923365264744">
              +92 336 5264744
            </a>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap");

        .rp-page {
          --rp-bg: #0a1b2e;
          --rp-bg-alt: #0d2036;
          --rp-panel: #0f2540;
          --rp-line: rgba(255, 255, 255, 0.09);
          --rp-accent: #3b9eea;
          --rp-text-body: #9fb4cc;
          --rp-text-heading: #ffffff;

          position: relative;
          background: var(--rp-bg);
          overflow: hidden;
          font-family: "Inter", system-ui, sans-serif;
        }

        .rp-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(59, 158, 234, 0.16) 0%, rgba(59, 158, 234, 0) 70%);
          pointer-events: none;
        }

        .rp-container {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .rp-hero {
          padding: 96px 0 48px;
        }

        .rp-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--rp-text-body);
          text-decoration: none;
          margin-bottom: 28px;
        }

        .rp-back:hover {
          color: #ffffff;
        }

        .rp-eyebrow {
          display: inline-block;
          font-weight: 600;
          font-size: 12.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--rp-accent);
          margin-bottom: 16px;
        }

        .rp-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 4vw, 2.6rem);
          line-height: 1.2;
          color: var(--rp-text-heading);
          margin: 0 0 14px;
        }

        .rp-updated {
          font-size: 0.85rem;
          color: var(--rp-text-body);
          margin: 0 0 24px;
        }

        .rp-intro {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--rp-text-body);
          margin: 0;
        }

        .rp-section {
          position: relative;
          padding: 40px 0 80px;
        }

        .rp-section-alt {
          background: var(--rp-bg-alt);
          padding: 56px 0;
        }

        .rp-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .rp-block-title {
          font-family: "Poppins", system-ui, sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--rp-text-heading);
          margin: 0 0 14px;
          scroll-margin-top: 24px;
        }

        .rp-p {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--rp-text-body);
          margin: 0 0 12px;
        }

        .rp-p:last-child {
          margin-bottom: 0;
        }

        .rp-ul {
          list-style: none;
          margin: 0 0 12px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .rp-ul li {
          position: relative;
          padding-left: 16px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--rp-text-body);
        }

        .rp-ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--rp-accent);
        }

        .rp-contact {
          text-align: center;
        }

        .rp-contact .rp-p {
          margin: 0 0 24px;
        }

        .rp-contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .rp-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 999px;
          padding: 12px 24px;
          text-decoration: none;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }

        .rp-btn-primary {
          background: var(--rp-accent);
          color: #ffffff;
        }

        .rp-btn-primary:hover {
          opacity: 0.9;
        }

        .rp-btn-outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .rp-btn-outline:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 640px) {
          .rp-hero {
            padding: 72px 0 32px;
          }

          .rp-section {
            padding: 32px 0 56px;
          }
        }
      `,
        }}
      />
    </div>
  );
}