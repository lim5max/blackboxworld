import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";

export function TermsDocument({ locale }: { locale: Locale }) {
  if (locale === "ru") {
    return <>
      <p>Настоящие Условия регулируют использование сайта BlackBoxWorld и профессиональных услуг, оказываемых <strong>BlackBoxWorld LLP</strong> («мы»). Заказ конкретного проекта дополнительно регулируется согласованным statement of work («SOW»).</p>
      <h2>1. О компании</h2><ul><li>Юридическое лицо: BlackBoxWorld LLP.</li><li>Форма: Limited Liability Partnership, зарегистрированная в Англии и Уэльсе.</li><li>Номер компании: [LLP-number-to-be-inserted].</li><li>Юридический адрес: [registered office address, United Kingdom].</li><li>Контакт: <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a>.</li></ul>
      <h2>2. Услуги и договор</h2><p>Мы оказываем услуги по продуктовой стратегии, дизайну, разработке программного обеспечения, AI-интеграциям и связанным цифровым материалам. Объём, сроки, стоимость и критерии приёмки фиксируются в SOW или письменном подтверждении заказа.</p><p>При расхождении между SOW и настоящими Условиями приоритет имеет SOW в части конкретного проекта.</p>
      <h2>3. Стоимость и оплата</h2><p>Если не согласовано иное, счета оплачиваются авансом в валюте счёта. Клиент отвечает за применимые налоги и банковские комиссии. При просрочке мы вправе приостановить работу и сдвинуть сроки.</p>
      <h2>4. Работа, обратная связь и изменения</h2><p>Клиент своевременно предоставляет материалы, доступы и консолидированную обратную связь. Задержки со стороны клиента могут изменить график. Запросы вне согласованного scope оцениваются отдельно.</p>
      <h2>5. Интеллектуальная собственность</h2><p>После полной оплаты клиент получает права на согласованные итоговые материалы в объёме, указанном в SOW. Мы сохраняем права на ранее созданные инструменты, библиотеки, методы и open-source компоненты. До полной оплаты все права остаются у BlackBoxWorld LLP.</p>
      <h2>6. Конфиденциальность</h2><p>Обе стороны обязуются защищать непубличную информацию другой стороны и использовать её только для исполнения проекта. Обязательство сохраняется после завершения договора.</p>
      <h2>7. Допустимое использование</h2><p>Нельзя использовать наши услуги для нарушения закона, прав интеллектуальной собственности, приватности третьих лиц, распространения вредоносного кода или вмешательства в работу систем.</p>
      <h2>8. Сторонние сервисы</h2><p>Проект может зависеть от хостинга, платёжных систем, AI API и других сторонних платформ. Их доступность и условия регулируются соответствующими поставщиками.</p>
      <h2>9. Гарантии</h2><p>Мы оказываем услуги с разумной квалификацией и заботой согласно применимому праву Великобритании. Конкретные коммерческие результаты, инвестиции или показатели роста не гарантируются.</p>
      <h2>10. Ограничение ответственности</h2><p>Ничто не исключает ответственность, которую нельзя законно ограничить, включая ответственность за смерть или вред здоровью вследствие небрежности и за мошенничество. В остальных случаях совокупная ответственность ограничивается суммой, уплаченной клиентом за три месяца до события, ставшего основанием требования. Мы не отвечаем за косвенные убытки и упущенную прибыль в максимально допустимой законом степени.</p>
      <h2>11. Пауза, отмена и возвраты</h2><p>Порядок паузы, отмены и возвратов описан в <Link href={`/${locale}/refund`}>Политике возвратов и отмены</Link> и соответствующем SOW.</p>
      <h2>12. Персональные данные</h2><p>Обработка персональных данных описана в <Link href={`/${locale}/privacy`}>Политике конфиденциальности</Link> и регулируется UK GDPR и Data Protection Act 2018.</p>
      <h2>13. Право и споры</h2><p>Условия регулируются правом Англии и Уэльса. Исключительную юрисдикцию имеют суды Англии и Уэльса, если обязательное право не требует иного.</p>
      <h2>14. Контакты</h2><p>Вопросы по Условиям: <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a>.</p>
    </>;
  }

  return <>
    <p>These Terms govern use of the BlackBoxWorld website and professional services supplied by <strong>BlackBoxWorld LLP</strong> (“we”, “us”). A specific engagement is also governed by the agreed statement of work (“SOW”).</p>
    <h2>1. Company information</h2><ul><li>Legal entity: BlackBoxWorld LLP.</li><li>Legal form: Limited Liability Partnership registered in England and Wales.</li><li>Company number: [LLP-number-to-be-inserted].</li><li>Registered office: [registered office address, United Kingdom].</li><li>Contact: <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a>.</li></ul>
    <h2>2. Services and contract formation</h2><p>We provide product strategy, design, software development, AI integration, and related digital services. Scope, timing, fees, and acceptance criteria are set out in an SOW or written order confirmation.</p><p>If an SOW conflicts with these Terms, the SOW controls for that engagement.</p>
    <h2>3. Fees and payment</h2><p>Unless agreed otherwise, invoices are payable in advance in the invoiced currency. You are responsible for applicable taxes and bank fees. We may pause work and move delivery dates when an invoice is overdue.</p>
    <h2>4. Delivery, feedback, and changes</h2><p>You must provide materials, access, and consolidated feedback on time. Client delays may move the delivery schedule. Requests outside the agreed scope are estimated separately.</p>
    <h2>5. Intellectual property</h2><p>After full payment, you receive the rights to agreed final deliverables described in the SOW. We retain rights to pre-existing tools, libraries, methods, and open-source components. Until full payment, all rights remain with BlackBoxWorld LLP.</p>
    <h2>6. Confidentiality</h2><p>Each party will protect the other party’s non-public information and use it only for the engagement. This obligation survives termination.</p>
    <h2>7. Acceptable use</h2><p>You must not use the services to break the law, infringe intellectual-property or privacy rights, distribute malicious code, or interfere with systems or networks.</p>
    <h2>8. Third-party services</h2><p>A project may rely on hosting, payments, AI APIs, and other third-party platforms. Their availability and use are governed by the relevant provider terms.</p>
    <h2>9. Warranties</h2><p>We provide services with reasonable skill and care under applicable UK law. We do not guarantee investment, revenue, growth, or another specific commercial result.</p>
    <h2>10. Limitation of liability</h2><p>Nothing limits liability that cannot lawfully be limited, including death or personal injury caused by negligence and fraud. Otherwise, aggregate liability is limited to fees paid in the three months before the event giving rise to the claim. To the fullest lawful extent, we are not liable for indirect loss or lost profit.</p>
    <h2>11. Pause, cancellation, and refunds</h2><p>Pause, cancellation, and refund rules are set out in our <Link href={`/${locale}/refund`}>Refund & Cancellation Policy</Link> and the applicable SOW.</p>
    <h2>12. Data protection</h2><p>Our handling of personal data is described in the <Link href={`/${locale}/privacy`}>Privacy Policy</Link> and governed by UK GDPR and the Data Protection Act 2018.</p>
    <h2>13. Governing law</h2><p>These Terms are governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction unless mandatory law requires otherwise.</p>
    <h2>14. Contact</h2><p>Questions about these Terms: <a href="mailto:hello@blackboxworld.com">hello@blackboxworld.com</a>.</p>
  </>;
}
