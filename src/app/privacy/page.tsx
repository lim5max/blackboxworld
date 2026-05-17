import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — BlackBoxWorld LLP",
  description:
    "How BlackBoxWorld LLP collects, uses, and protects personal data under UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="17 May 2026">
      <p>
        This Privacy Policy explains how <strong>BlackBoxWorld LLP</strong>
        {" "}(&ldquo;BlackBoxWorld LLP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects,
        uses, stores and protects personal data when you visit our website at{" "}
        <a href="https://www.blackboxworld.com">www.blackboxworld.com</a>{" "}
        (the &ldquo;Site&rdquo;) or engage us for professional services.
      </p>
      <p>
        We are committed to handling personal data in accordance with the UK
        General Data Protection Regulation (UK GDPR) and the Data Protection
        Act 2018.
      </p>

      <h2>1. Data controller</h2>
      <ul>
        <li>Data controller: BlackBoxWorld LLP</li>
        <li>Legal form: Limited Liability Partnership registered in England and Wales</li>
        <li>Company number: [LLP-number-to-be-inserted]</li>
        <li>Registered office: [registered office address, United Kingdom]</li>
        <li>ICO registration number: [ICO-number-to-be-inserted]</li>
        <li>Privacy contact: <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a></li>
      </ul>

      <h2>2. Personal data we collect</h2>
      <p>
        We only collect personal data that you choose to provide to us. We do
        not run web analytics, advertising trackers or third-party marketing
        tags on the Site, and we do not build user profiles based on browsing
        behaviour.
      </p>

      <h3>2.1 Information you provide</h3>
      <ul>
        <li>Contact details you submit through our forms or the booking flow (for example name, email address, company name).</li>
        <li>Project information you share with us during discovery calls or in the course of an engagement.</li>
        <li>Billing details necessary to invoice you (company name, address, VAT number). Card payments are processed by our payment provider; we do not store full card numbers.</li>
        <li>Correspondence you exchange with us by email or shared collaboration tools.</li>
      </ul>

      <h3>2.2 Information processed automatically</h3>
      <ul>
        <li>Standard server access logs containing your IP address, browser user-agent and the URL of the page you requested. These logs are kept for a short period for security and debugging purposes only.</li>
      </ul>

      <h2>3. Lawful bases for processing</h2>
      <p>We rely on the following lawful bases under Article 6(1) of the UK GDPR:</p>
      <ul>
        <li><strong>Contract</strong> (Art. 6(1)(b)): to take steps at your request before entering into a contract and to perform a contract with you, such as scoping a project, delivering services or issuing invoices.</li>
        <li><strong>Legitimate interests</strong> (Art. 6(1)(f)): to operate, secure and improve our Site and respond to your enquiries. We always balance our interests against your rights and freedoms.</li>
        <li><strong>Legal obligation</strong> (Art. 6(1)(c)): to keep accounting and tax records as required by UK law.</li>
        <li><strong>Consent</strong> (Art. 6(1)(a)): where required, for example before sending marketing emails. You can withdraw your consent at any time.</li>
      </ul>

      <h2>4. How we use personal data</h2>
      <ul>
        <li>To respond to enquiries and schedule discovery calls.</li>
        <li>To deliver, support and improve our services.</li>
        <li>To send transactional emails, invoices and project updates.</li>
        <li>To meet our legal, accounting and tax obligations.</li>
      </ul>

      <h2>5. Cookies and tracking</h2>
      <p>
        The Site does not set any non-essential cookies and does not use
        advertising, profiling or analytics cookies. Only strictly necessary
        cookies that are required for the Site to function may be set; under
        regulation 6(4) of the Privacy and Electronic Communications
        Regulations 2003 (PECR) these do not require prior consent.
      </p>

      <h2>6. Sharing personal data</h2>
      <p>
        We share personal data only where necessary and only with carefully
        selected recipients, namely:
      </p>
      <ul>
        <li>service providers acting as our processors (for example hosting, email delivery, accounting and payment processing) under written contracts that meet the requirements of Article 28 UK GDPR;</li>
        <li>professional advisers (lawyers, accountants) under confidentiality obligations;</li>
        <li>competent authorities where we are required by law to disclose the data.</li>
      </ul>
      <p>We never sell personal data.</p>

      <h2>7. International transfers</h2>
      <p>
        Where personal data is transferred outside the United Kingdom we rely
        on transfer mechanisms recognised under the UK GDPR, such as UK
        adequacy regulations, the International Data Transfer Agreement (IDTA)
        or the EU Standard Contractual Clauses together with the UK Addendum,
        supported by transfer risk assessments where appropriate.
      </p>

      <h2>8. Data retention</h2>
      <p>
        We retain personal data only for as long as is necessary for the
        purposes for which it was collected:
      </p>
      <ul>
        <li>Enquiry data: up to 24 months from the last interaction.</li>
        <li>Client project data: for the duration of the engagement plus 6 years to comply with statutory limitation periods.</li>
        <li>Accounting and tax records: 6 years from the end of the relevant financial year, as required by HMRC.</li>
        <li>Server logs: up to 30 days.</li>
      </ul>

      <h2>9. Security</h2>
      <p>
        We apply appropriate technical and organisational measures to protect
        personal data against accidental or unlawful destruction, loss,
        alteration, unauthorised disclosure or access. These include access
        controls, encryption in transit, vendor due diligence and staff
        training. No transmission over the internet can be guaranteed to be
        100% secure, so we cannot guarantee absolute security.
      </p>

      <h2>10. Your rights</h2>
      <p>Under the UK GDPR you have the right to:</p>
      <ul>
        <li>be informed about how we use your personal data (this notice);</li>
        <li>access the personal data we hold about you;</li>
        <li>request rectification of inaccurate or incomplete data;</li>
        <li>request erasure (the &ldquo;right to be forgotten&rdquo;) where applicable;</li>
        <li>restrict processing in certain circumstances;</li>
        <li>data portability for data you have provided to us;</li>
        <li>object to processing based on legitimate interests;</li>
        <li>withdraw consent at any time where processing is based on consent;</li>
        <li>not be subject to a decision based solely on automated processing that produces legal effects (we do not carry out such processing).</li>
      </ul>
      <p>
        To exercise any of these rights please contact{" "}
        <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.
        We will respond within one month, as required by law.
      </p>

      <h2>11. Right to complain</h2>
      <p>
        If you are not satisfied with how we handle your personal data you have
        the right to lodge a complaint with the Information Commissioner&apos;s
        Office (ICO), the UK supervisory authority:
      </p>
      <ul>
        <li>Website: <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a></li>
        <li>Helpline: 0303 123 1113</li>
        <li>Post: Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</li>
      </ul>
      <p>We would, however, appreciate the chance to address your concerns directly first.</p>

      <h2>12. Children</h2>
      <p>
        The Site and our services are not directed at children under 13. We do
        not knowingly collect personal data from children.
      </p>

      <h2>13. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The current
        version, with its effective date, is always available at this URL.
        Material changes will be notified by an appropriate means (for
        example, a banner on the Site or a direct email).
      </p>

      <h2>14. Contact</h2>
      <p>
        Any questions about this Privacy Policy or our data practices? Contact
        us at <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>
        {" "}or at the registered office address above.
      </p>
    </LegalPage>
  );
}
