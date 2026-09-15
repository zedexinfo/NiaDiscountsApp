// app/routes/privacy-policy.tsx
//
// Public privacy policy page — intentionally has NO loader calling
// authenticate.admin(), so it's reachable without Shopify OAuth or a
// ?shop= param. Link this URL in the Partner Dashboard's
// "Privacy policy URL" field.

import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy" },
    { name: "robots", content: "index, follow" },
  ];
};

export default function PrivacyPolicy() {
  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Privacy Policy — Nia Discounts</h1>
        <p style={styles.meta}>
          <em>Last updated: [DATE]</em>
        </p>

        <p>
          This Privacy Policy describes how Zedexinfo collects, uses, and shares information
          in connection with the <strong>Nia Discounts</strong> application
          ("the App") for the Shopify platform.
        </p>

        <p>
          By installing or using the App, the merchant agrees to the
          collection and use of information as described in this policy.
        </p>

        <h2 style={styles.h2}>1. Information We Collect</h2>

        <h3 style={styles.h3}>a) Information we collect through Shopify's APIs</h3>
        <p>
          When a merchant installs the App, we access certain data from your
          Shopify store via the Shopify Admin API in order to provide the
          App's functionality. This may include:
        </p>
        <ul style={styles.ul}>
          <li>Store information (shop name, domain, email, currency, plan)</li>
          <li>Product and variant data (titles, prices, variant options, metafields)</li>
          <li>Discount configuration data (discount codes, functions, and rules you create in the App)</li>
          <li>Cart and checkout data required to evaluate and apply discounts at checkout (via Shopify Discount Functions)</li>
          <li>Order data, where required to confirm a discount was applied correctly</li>
        </ul>
        <p>
          We only request the API access scopes required for the App's
          discount functionality.
        </p>

        <h3 style={styles.h3}>b) Information we collect directly from you (the merchant)</h3>
        <ul style={styles.ul}>
          <li>Account and contact details you provide when configuring the App or contacting support</li>
          <li>Settings and configuration choices you make within the App's admin interface (e.g., include/exclude rules, matching logic)</li>
        </ul>

        <h3 style={styles.h3}>c) Information we collect from your customers</h3>
        <ul style={styles.ul}>
          <li>The App does not use cookies or tracking technologies on your storefront.</li>
          <li>
            The App does not directly collect personal information from your
            customers. Any customer-related data (such as cart contents or
            applied discount codes) is processed only as needed, in real
            time, to calculate and apply discounts at checkout, and is not
            used for any other purpose.
          </li>
        </ul>

        <h3 style={styles.h3}>d) Automated logs</h3>
        <p>
          We may generate technical logs (e.g., error logs, performance logs)
          relating to the App's operation to help us maintain and
          troubleshoot the App. These logs are not used to identify
          individual customers.
        </p>

        <h2 style={styles.h2}>2. How We Use Information</h2>
        <p>We use the information described above to:</p>
        <ul style={styles.ul}>
          <li>Provide, operate, and maintain the App's core discount functionality</li>
          <li>Diagnose and fix technical issues</li>
          <li>Communicate with you about the App (support, updates, changes to this policy)</li>
          <li>Comply with Shopify's platform requirements and applicable law</li>
        </ul>
        <p>
          We do not sell merchant or customer data, and we do not use the
          data we access for advertising or marketing purposes.
        </p>

        <h2 style={styles.h2}>3. Data Storage and Security</h2>
        <ul style={styles.ul}>
          <li>
            App configuration data is stored in a PostgreSQL database (hosted
            via Neon, region: <code>iad1</code> / US) and our hosting
            infrastructure (Vercel).
          </li>
          <li>We take reasonable technical and organizational measures to protect data in transit (TLS/HTTPS) and at rest.</li>
          <li>Access to stored data is limited to what's necessary to operate and support the App.</li>
        </ul>

        <h2 style={styles.h2}>4. Data Sharing</h2>
        <p>We do not share merchant or customer data with third parties, except:</p>
        <ul style={styles.ul}>
          <li>With service providers who help us operate the App (e.g., hosting and database providers), under confidentiality obligations</li>
          <li>Where required by law, regulation, legal process, or governmental request</li>
          <li>In connection with a merger, acquisition, or sale of assets, with notice to affected merchants where required</li>
        </ul>

        <h2 style={styles.h2}>5. Data Retention</h2>
        <p>
          We retain data for as long as the App is installed on your store
          and as needed to provide the App's functionality. If you uninstall
          the App, we will delete or anonymize your data within [X days],
          except where retention is required by law.
        </p>

        <h2 style={styles.h2}>6. Your Rights and Mandatory Compliance Webhooks</h2>
        <p>
          In accordance with Shopify's platform requirements, the App is
          subscribed to Shopify's mandatory compliance webhooks (
          <code>customers/data_request</code>, <code>customers/redact</code>,{" "}
          <code>shop/redact</code>) to support data subject rights under
          applicable privacy laws (e.g., GDPR, CPRA), including the right to
          request access to, or deletion of, personal data.
        </p>
        <p>
          To exercise these rights, merchants or their customers may contact
          us at [support email], or submit a request through Shopify.
        </p>

        <h2 style={styles.h2}>7. Children's Privacy</h2>
        <p>
          The App is intended for use by merchants and is not directed at
          children. We do not knowingly collect personal information from
          children.
        </p>

        <h2 style={styles.h2}>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will
          be posted on this page with an updated "Last updated" date.
          Continued use of the App after changes take effect constitutes
          acceptance of the revised policy.
        </p>

        <h2 style={styles.h2}>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle
          data, contact us at:
        </p>
        <p>
          <strong>Zedexinfo Pvt. Ltd.</strong>
          <br />
          Email:contact@zedexinfo.com
        </p>

        <hr style={styles.hr} />
        <p style={styles.disclaimer}>
          This document is provided as a starting template and is not legal
          advice. Review it with a qualified professional before publishing,
          especially if you operate in or serve customers in jurisdictions
          with specific requirements (GDPR, CPRA, etc.).
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: "#1a1a1a",
    background: "#ffffff",
    padding: "48px 16px",
  },
  container: {
    maxWidth: 720,
    margin: "0 auto",
    lineHeight: 1.6,
  },
  h1: {
    fontSize: "1.75rem",
    marginBottom: "0.25rem",
  },
  h2: {
    fontSize: "1.25rem",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },
  h3: {
    fontSize: "1.05rem",
    marginTop: "1.25rem",
    marginBottom: "0.4rem",
  },
  ul: {
    paddingLeft: "1.25rem",
    marginTop: "0.25rem",
  },
  meta: {
    color: "#666",
    marginBottom: "1.5rem",
  },
  hr: {
    margin: "2.5rem 0 1rem",
    border: "none",
    borderTop: "1px solid #e0e0e0",
  },
  disclaimer: {
    fontSize: "0.85rem",
    color: "#777",
  },
};
