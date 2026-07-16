import type { Locale } from "@/lib/i18n/config";

export function PrivacyDocument({ locale }: { locale: Locale }) {
  if (locale === "ru") {
    return <>
      <p>Эта Политика объясняет, как <strong>BlackBoxWorld LLP</strong> собирает, использует, хранит и защищает персональные данные при посещении сайта и работе с нами.</p>
      <h2>1. Контролёр данных</h2><ul><li>BlackBoxWorld LLP, зарегистрированная в Англии и Уэльсе.</li><li>Номер компании: [LLP-number-to-be-inserted].</li><li>Юридический адрес: [registered office address, United Kingdom].</li><li>ICO registration number: [ICO-number-to-be-inserted].</li><li>Контакт: <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</li></ul>
      <h2>2. Какие данные мы собираем</h2><ul><li>Контактные данные и информация о компании, которые вы отправляете нам.</li><li>Проектные материалы, переписка и обратная связь.</li><li>Данные для выставления счетов. Полные номера банковских карт мы не храним.</li><li>Стандартные серверные логи: IP-адрес, user-agent, запрошенный URL и время запроса.</li></ul>
      <h2>3. Правовые основания</h2><p>Мы обрабатываем данные для подготовки и исполнения договора, выполнения юридических обязанностей, защиты законных интересов по эксплуатации и безопасности сайта, а также на основании согласия там, где оно требуется.</p>
      <h2>4. Как мы используем данные</h2><ul><li>Отвечаем на запросы и планируем созвоны.</li><li>Оказываем и поддерживаем услуги.</li><li>Отправляем счета, транзакционные сообщения и проектные обновления.</li><li>Защищаем сайт и выполняем юридические и бухгалтерские обязанности.</li></ul>
      <h2>5. Cookies</h2><p>Сайт использует строго необходимый cookie <code>bbworld-locale</code>, чтобы запомнить выбранный язык на срок до одного года. Он не используется для рекламы, аналитики или профилирования. Мы не устанавливаем рекламные и поведенческие cookies.</p>
      <h2>6. Передача данных</h2><p>Данные передаются только необходимым обработчикам — например, поставщикам хостинга, email, бухгалтерии и платежей — по договорным условиям защиты данных, а также профессиональным консультантам и государственным органам, если этого требует закон. Мы не продаём персональные данные.</p>
      <h2>7. Международные передачи</h2><p>Для передач за пределы Великобритании применяются признанные UK GDPR механизмы: adequacy regulations, IDTA либо EU Standard Contractual Clauses с UK Addendum.</p>
      <h2>8. Срок хранения</h2><ul><li>Запросы: до 24 месяцев после последнего контакта.</li><li>Проектные данные: срок проекта плюс до 6 лет.</li><li>Бухгалтерские записи: 6 лет.</li><li>Серверные логи: до 30 дней.</li><li>Cookie языка: до одного года либо до удаления пользователем.</li></ul>
      <h2>9. Безопасность</h2><p>Мы используем контроль доступа, шифрование при передаче, проверку поставщиков и другие разумные технические и организационные меры.</p>
      <h2>10. Ваши права</h2><p>В предусмотренных UK GDPR случаях вы вправе запросить доступ, исправление, удаление, ограничение обработки, переносимость данных, возразить против обработки и отозвать согласие. Напишите на <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</p>
      <h2>11. Жалоба</h2><p>Вы можете обратиться в Information Commissioner’s Office: <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.</p>
      <h2>12. Дети</h2><p>Сайт и услуги не предназначены для детей младше 13 лет. Мы сознательно не собираем их данные.</p>
      <h2>13. Изменения и контакт</h2><p>Актуальная версия всегда опубликована на этой странице. Вопросы: <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</p>
    </>;
  }

  return <>
    <p>This Policy explains how <strong>BlackBoxWorld LLP</strong> collects, uses, stores, and protects personal data when you visit the website or work with us.</p>
    <h2>1. Data controller</h2><ul><li>BlackBoxWorld LLP, registered in England and Wales.</li><li>Company number: [LLP-number-to-be-inserted].</li><li>Registered office: [registered office address, United Kingdom].</li><li>ICO registration number: [ICO-number-to-be-inserted].</li><li>Contact: <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</li></ul>
    <h2>2. Data we collect</h2><ul><li>Contact and company information you send us.</li><li>Project materials, correspondence, and feedback.</li><li>Billing information needed to invoice you. We do not store full payment-card numbers.</li><li>Standard server logs containing IP address, user agent, requested URL, and request time.</li></ul>
    <h2>3. Lawful bases</h2><p>We process data to take steps before and perform a contract, comply with legal obligations, pursue legitimate interests in operating and securing the website, and on consent where consent is required.</p>
    <h2>4. How we use data</h2><ul><li>Respond to enquiries and schedule calls.</li><li>Deliver and support services.</li><li>Send invoices, transactional messages, and project updates.</li><li>Secure the website and meet legal and accounting obligations.</li></ul>
    <h2>5. Cookies</h2><p>The website uses the strictly necessary <code>bbworld-locale</code> cookie to remember your language choice for up to one year. It is not used for advertising, analytics, or profiling. We do not set behavioural-advertising cookies.</p>
    <h2>6. Sharing data</h2><p>We share data only with necessary processors such as hosting, email, accounting, and payment providers under suitable data-protection terms; with professional advisers; and with authorities where law requires it. We never sell personal data.</p>
    <h2>7. International transfers</h2><p>Transfers outside the United Kingdom use mechanisms recognised under UK GDPR, including adequacy regulations, the IDTA, or EU Standard Contractual Clauses with the UK Addendum.</p>
    <h2>8. Retention</h2><ul><li>Enquiries: up to 24 months after the last interaction.</li><li>Project data: the engagement plus up to 6 years.</li><li>Accounting records: 6 years.</li><li>Server logs: up to 30 days.</li><li>Language cookie: up to one year or until you delete it.</li></ul>
    <h2>9. Security</h2><p>We use access controls, encryption in transit, vendor review, and other reasonable technical and organisational measures.</p>
    <h2>10. Your rights</h2><p>Where UK GDPR applies, you may request access, correction, erasure, restriction, portability, object to processing, and withdraw consent. Contact <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</p>
    <h2>11. Complaints</h2><p>You may complain to the Information Commissioner’s Office: <a href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</a>.</p>
    <h2>12. Children</h2><p>The website and services are not directed to children under 13, and we do not knowingly collect their data.</p>
    <h2>13. Changes and contact</h2><p>The current version is always available here. Questions: <a href="mailto:privacy@blackboxworld.com">privacy@blackboxworld.com</a>.</p>
  </>;
}
