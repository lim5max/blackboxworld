import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — BlackBoxWorld LLP",
  description:
    "How refunds, pauses and cancellations work for BlackBoxWorld LLP service subscriptions and one-time engagements, in accordance with UK consumer law.",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="17 May 2026">
      <p>
        This Refund &amp; Cancellation Policy explains how refunds, pauses and
        cancellations work for services supplied by <strong>BlackBoxWorld LLP</strong>
        {" "}(&ldquo;BlackBoxWorld LLP&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). It should
        be read together with our{" "}
        <a href="/terms">Terms of Service</a> and any signed statement of work
        (&ldquo;SOW&rdquo;).
      </p>
      <p>
        BlackBoxWorld LLP supplies professional services and digital
        deliverables. We do not sell physical goods.
      </p>

      <h2>1. Consumer cancellation right (14-day cooling-off period)</h2>
      <p>
        If you are dealing with us as a consumer (as defined in the Consumer
        Contracts (Information, Cancellation and Additional Charges)
        Regulations 2013), you have the right to cancel a contract for the
        supply of services within 14 days of entering into it, without giving
        any reason.
      </p>
      <p>
        However, by signing an SOW and asking us to begin work during the
        cooling-off period you expressly request that we start performing the
        services before the 14-day period expires and acknowledge that:
      </p>
      <ul>
        <li>if the services are fully performed within the 14-day period you lose your right to cancel;</li>
        <li>if you cancel during the 14-day period after work has commenced, you must pay for the portion of the services already supplied, calculated in proportion to the total price.</li>
      </ul>
      <p>
        To exercise your cancellation right please email{" "}
        <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a>{" "}
        with your name, the SOW reference and a clear statement that you wish
        to cancel.
      </p>

      <h2>2. Business customers</h2>
      <p>
        Customers acting in the course of a business, trade, craft or
        profession are not consumers under UK law and do not benefit from the
        statutory cooling-off period. The cancellation terms below apply
        instead.
      </p>

      <h2>3. Sprint subscriptions</h2>
      <ul>
        <li>Sprint plans are billed bi-weekly in advance in GBP and renew automatically until cancelled.</li>
        <li>You may pause or cancel your subscription at any time before the next billing date. Cancellations take effect at the end of the current paid sprint.</li>
        <li>We do not issue pro-rata refunds for unused days in a paid sprint, but all deliverables produced during that sprint are yours to keep.</li>
        <li>To pause or cancel, email <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a> at least 48 hours before the next renewal.</li>
      </ul>

      <h2>4. One-time MVP engagements</h2>
      <ul>
        <li>One-time MVP packages are invoiced 50% on signature of the SOW and 50% on delivery, unless otherwise agreed.</li>
        <li>The upfront deposit is non-refundable once we have scheduled discovery, allocated team capacity and begun discovery or design work, as it covers irreversible resource commitments on our side.</li>
        <li>If you cancel before any work has commenced, the deposit will be refunded in full, less any third-party costs (for example licences, hosting or paid integrations) already incurred on your behalf.</li>
        <li>Final-payment refunds are not available once the MVP has been delivered and accepted in accordance with the SOW.</li>
      </ul>

      <h2>5. Rework guarantee in lieu of refund</h2>
      <p>
        Where a delivered milestone materially fails to meet the agreed scope,
        we will rework it at no additional cost until it satisfies the agreed
        acceptance criteria. This is our preferred remedy and is offered in
        addition to, and without prejudice to, any statutory remedy you may
        have under section 54 of the Consumer Rights Act 2015 (where it
        applies).
      </p>

      <h2>6. How refunds are processed</h2>
      <ul>
        <li>Where a refund is due, requests must be submitted in writing within 14 days of the relevant invoice.</li>
        <li>Refunds are paid in GBP to the original payment method used.</li>
        <li>We process eligible refunds within 14 days of accepting your request, in line with regulation 34 of the Consumer Contracts Regulations 2013 where applicable.</li>
      </ul>

      <h2>7. Non-refundable items</h2>
      <ul>
        <li>Third-party software licences, hosting, domains, AI credits and similar costs purchased on your behalf.</li>
        <li>Discovery, strategy or workshop hours that have already been delivered.</li>
        <li>Add-ons or change requests outside the original SOW that have been accepted by you.</li>
      </ul>

      <h2>8. Chargebacks</h2>
      <p>
        Please contact us before initiating a payment dispute or chargeback.
        Most issues can be resolved quickly through direct communication.
        Unjustified chargebacks may result in suspension or termination of the
        Service and recovery of associated costs and bank fees.
      </p>

      <h2>9. Changes to this Policy</h2>
      <p>
        We may update this Policy from time to time. Changes apply only to
        engagements entered into after the revised effective date and are
        always available at this URL.
      </p>

      <h2>10. Contact</h2>
      <p>
        For refund or cancellation requests, contact{" "}
        <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a>.
      </p>
    </LegalPage>
  );
}
