import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — BlackBoxWorld LLP",
  description:
    "Terms governing use of the BlackBoxWorld LLP website and services. Governed by the laws of England and Wales.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="17 May 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        the website located at{" "}
        <a href="https://www.blackboxworld.com">www.blackboxworld.com</a> and
        the related products and services (collectively, the &ldquo;Service&rdquo;)
        operated by <strong>BlackBoxWorld LLP</strong>, a limited liability
        partnership registered in England and Wales (&ldquo;BlackBoxWorld LLP&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing or using the Service you
        agree to be bound by these Terms. If you do not agree with any part of
        the Terms you must not access or use the Service.
      </p>

      <h2>1. Information about us</h2>
      <ul>
        <li>Company name: BlackBoxWorld LLP</li>
        <li>Legal form: Limited Liability Partnership (LLP) registered in England and Wales</li>
        <li>Company number: [LLP-number-to-be-inserted]</li>
        <li>Registered office: [registered office address, United Kingdom]</li>
        <li>VAT number (if applicable): [VAT-to-be-inserted]</li>
        <li>Contact: <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a></li>
      </ul>

      <h2>2. Services we provide</h2>
      <p>
        BlackBoxWorld LLP is a product studio that supplies professional
        services, including but not limited to product strategy, UI/UX design,
        software engineering, AI integration, MVP development and bi-weekly
        product sprints. Specific deliverables, timelines and fees are set out
        in the proposal or statement of work (&ldquo;SOW&rdquo;) signed between us and
        the client.
      </p>

      <h2>3. Eligibility and business customers</h2>
      <p>
        The Service is provided primarily to business customers acting in the
        course of a trade, business, craft or profession. If you are dealing
        with us as a consumer (as defined in the Consumer Rights Act 2015),
        certain provisions of these Terms may not apply to you, and your
        statutory rights are not affected by anything in these Terms. You must
        be at least 18 years old and have the legal authority to enter into a
        binding contract.
      </p>

      <h2>4. Order acceptance and formation of contract</h2>
      <p>
        Any quotation, proposal or SOW provided by us is an invitation to treat
        and not a binding offer. A binding contract is formed only when both
        parties sign the SOW or you have accepted the SOW in writing and made
        the required payment.
      </p>

      <h2>5. Fees, billing and payment</h2>
      <ul>
        <li>All fees are quoted in GBP unless otherwise stated and are exclusive of VAT, which will be added at the prevailing rate where applicable.</li>
        <li>Sprint subscriptions are invoiced bi-weekly in advance. Subscriptions auto-renew until cancelled in accordance with these Terms.</li>
        <li>One-time MVP packages are invoiced 50% on contract signature and 50% on delivery, unless otherwise agreed in the SOW.</li>
        <li>Invoices are payable within fourteen (14) days of issue unless a different period is stated in the SOW.</li>
        <li>We reserve the right to charge statutory interest and reasonable recovery costs under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        On receipt of full payment for an engagement, custom code, designs and
        deliverables produced specifically for the client become the
        client&apos;s property, subject to a perpetual, non-exclusive licence
        retained by BlackBoxWorld LLP to use any pre-existing tools, libraries,
        components or know-how incorporated into the deliverables. All rights
        in this website, our trade marks, methodologies and underlying systems
        remain the exclusive property of BlackBoxWorld LLP.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        Each party undertakes to keep confidential all information received
        from the other party that is identified as confidential or that would
        reasonably be regarded as confidential, and to use such information
        only for the purposes of the engagement. This clause survives
        termination of the contract.
      </p>

      <h2>8. Acceptable use</h2>
      <p>You must not use the Service:</p>
      <ul>
        <li>in any way that breaches any applicable local, national or international law or regulation;</li>
        <li>to infringe any intellectual property right, trade mark, privacy right or other right of any third party;</li>
        <li>to transmit any material that is defamatory, obscene, unlawful, harmful, or contains viruses, worms, trojans or other malicious code;</li>
        <li>to interfere with the proper working of the Service or any equipment, network or software used to provide it.</li>
      </ul>

      <h2>9. Third-party services</h2>
      <p>
        The Service may integrate with or rely on third-party platforms (for
        example hosting, payment processing, AI APIs). We are not responsible
        for the availability, accuracy or content of any third-party service,
        and your use of them is subject to the applicable third-party terms.
      </p>

      <h2>10. Warranties and consumer rights</h2>
      <p>
        We warrant that the Service will be provided with reasonable skill and
        care in accordance with section 49 of the Consumer Rights Act 2015 (or
        the equivalent term implied by section 13 of the Supply of Goods and
        Services Act 1982 for non-consumer contracts). Except as expressly set
        out in these Terms, all warranties, conditions and other terms implied
        by statute or common law are excluded to the fullest extent permitted
        by law.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        Nothing in these Terms limits or excludes our liability for: (a) death
        or personal injury caused by negligence; (b) fraud or fraudulent
        misrepresentation; or (c) any other liability that cannot lawfully be
        limited or excluded under English law.
      </p>
      <p>
        Subject to the paragraph above, our total aggregate liability to you
        arising out of or in connection with the Service or these Terms,
        whether in contract, tort (including negligence), breach of statutory
        duty or otherwise, shall not exceed the total amounts paid by you to
        BlackBoxWorld LLP in the three (3) months immediately preceding the
        event giving rise to the claim. We shall not be liable for any loss of
        profits, loss of business, loss of revenue, loss of anticipated
        savings or any indirect or consequential loss.
      </p>

      <h2>12. Termination and cancellation</h2>
      <p>
        Either party may terminate or pause an engagement in accordance with
        the terms of the SOW and our{" "}
        <a href="/refund">Refund &amp; Cancellation Policy</a>. We may suspend
        or terminate access to the Service immediately for material breach of
        these Terms.
      </p>

      <h2>13. Data protection</h2>
      <p>
        Our processing of personal data is governed by our{" "}
        <a href="/privacy">Privacy Policy</a>, which forms part of these Terms
        and complies with the UK GDPR and the Data Protection Act 2018.
      </p>

      <h2>14. Force majeure</h2>
      <p>
        Neither party shall be liable for any failure or delay in performing
        its obligations to the extent caused by an event beyond its reasonable
        control, including acts of God, war, terrorism, civil disturbance,
        epidemic, pandemic, governmental action or failure of public utilities.
      </p>

      <h2>15. Changes to the Terms</h2>
      <p>
        We may amend these Terms from time to time. The version in force at
        the time you enter into an SOW will apply to that engagement. The
        current version of these Terms is always available at this URL.
      </p>

      <h2>16. Governing law and jurisdiction</h2>
      <p>
        These Terms, their subject matter and their formation are governed by
        the laws of England and Wales. The courts of England and Wales shall
        have exclusive jurisdiction to settle any dispute or claim arising out
        of or in connection with these Terms or their subject matter, save
        that we retain the right to bring proceedings in any other
        jurisdiction where you reside or have assets.
      </p>

      <h2>17. Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a>{" "}
        or at the registered office address above.
      </p>
    </LegalPage>
  );
}
