import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";

export function RefundDocument({ locale }: { locale: Locale }) {
  if (locale === "ru") {
    return <>
      <p>Эта Политика описывает паузы, отмену и возвраты для профессиональных услуг <strong>BlackBoxWorld LLP</strong>. Она применяется вместе с нашими <Link href={`/${locale}/terms`}>Условиями</Link> и согласованным SOW.</p>
      <h2>1. Право потребителя на отмену</h2><p>Если вы действуете как потребитель по Consumer Contracts Regulations 2013, вы вправе отменить договор услуг в течение 14 дней без объяснения причины. Если по вашему явному запросу работа началась раньше, при отмене оплачивается уже выполненная часть. После полного оказания услуги право на отмену прекращается.</p>
      <h2>2. Бизнес-клиенты</h2><p>Клиенты, действующие в рамках бизнеса или профессии, не пользуются обязательным consumer cooling-off period; применяются условия ниже и соответствующий SOW.</p>
      <h2>3. Дизайн-подписка</h2><ul><li>Design Partner и Design + Growth оплачиваются за месяц вперёд.</li><li>Подписку можно отменить или поставить на паузу до следующего платёжного периода.</li><li>Отмена действует с конца уже оплаченного месяца; пропорциональный возврат за неиспользованные дни не производится.</li><li>Все полностью оплаченные итоговые материалы остаются у клиента.</li></ul>
      <h2>4. Тест-драйв</h2><p>Test Drive — разовый проект с фиксированным scope. После начала работы оплата не возвращается, кроме случаев, предусмотренных обязательным правом. Если вы оформляете дизайн-подписку в течение 14 дней после сдачи, 50% стоимости Test Drive засчитывается в первый месяц.</p>
      <h2>5. Спринты и MVP</h2><p>Двухнедельные спринты оплачиваются вперёд и могут быть остановлены до следующего периода. Разовый MVP обычно оплачивается в порядке, указанном в SOW; уже выполненная работа и безвозвратные затраты возврату не подлежат.</p>
      <h2>6. Доработка вместо возврата</h2><p>Если результат существенно не соответствует согласованному scope или критериям приёмки, мы сначала исправим несоответствие без дополнительной оплаты. Это не ограничивает обязательные права потребителя.</p>
      <h2>7. Как оформляется возврат</h2><p>Напишите на <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a>, указав номер SOW или счёта и причину. Одобренный возврат отправляется исходным способом оплаты в течение 14 дней, если закон не требует иного.</p>
      <h2>8. Что не возвращается</h2><ul><li>Уже оказанные услуги и согласованные этапы.</li><li>Лицензии, хостинг, домены, AI-кредиты и другие сторонние расходы.</li><li>Согласованные дополнительные работы вне первоначального scope.</li></ul>
      <h2>9. Chargeback</h2><p>До открытия платёжного спора свяжитесь с нами. Необоснованный chargeback может привести к приостановке услуг и взысканию связанных расходов.</p>
      <h2>10. Контакт</h2><p>Пауза, отмена или возврат: <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a>.</p>
    </>;
  }

  return <>
    <p>This Policy explains pauses, cancellations, and refunds for professional services supplied by <strong>BlackBoxWorld LLP</strong>. It applies with our <Link href={`/${locale}/terms`}>Terms</Link> and the agreed SOW.</p>
    <h2>1. Consumer cancellation right</h2><p>If you act as a consumer under the Consumer Contracts Regulations 2013, you may cancel a services contract within 14 days without giving a reason. If work starts early at your express request, you must pay for the portion already supplied. The cancellation right ends after the service is fully performed.</p>
    <h2>2. Business customers</h2><p>Customers acting in business or professional capacity do not receive the statutory consumer cooling-off period; the rules below and the applicable SOW govern instead.</p>
    <h2>3. Design subscriptions</h2><ul><li>Design Partner and Design + Growth are billed monthly in advance.</li><li>You may cancel or pause before the next billing period.</li><li>Cancellation takes effect at the end of the paid month; unused days are not refunded pro rata.</li><li>Fully paid final deliverables remain yours.</li></ul>
    <h2>4. Test Drive</h2><p>Test Drive is a fixed-scope one-off project. Once work begins, its fee is non-refundable except where mandatory law requires otherwise. If you subscribe within 14 days of delivery, 50% of the Test Drive fee is credited to the first month.</p>
    <h2>5. Sprints and MVP projects</h2><p>Two-week sprints are billed in advance and can be stopped before the next period. One-time MVP payment milestones follow the SOW; completed work and irreversible costs are not refundable.</p>
    <h2>6. Rework before refund</h2><p>If a deliverable materially misses the agreed scope or acceptance criteria, we first correct it at no additional fee. This does not limit mandatory consumer rights.</p>
    <h2>7. Requesting a refund</h2><p>Email <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a> with the SOW or invoice reference and reason. An approved refund is sent to the original payment method within 14 days unless law requires otherwise.</p>
    <h2>8. Non-refundable items</h2><ul><li>Services and accepted milestones already delivered.</li><li>Licences, hosting, domains, AI credits, and other third-party costs.</li><li>Approved additional work outside the original scope.</li></ul>
    <h2>9. Chargebacks</h2><p>Please contact us before opening a payment dispute. An unjustified chargeback may lead to suspended services and recovery of related costs.</p>
    <h2>10. Contact</h2><p>Pause, cancellation, or refund requests: <a href="mailto:billing@blackboxworld.com">billing@blackboxworld.com</a>.</p>
  </>;
}
