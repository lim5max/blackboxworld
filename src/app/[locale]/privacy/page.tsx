import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/LegalPage";
import { PrivacyDocument } from "@/components/legal/PrivacyDocument";
import { isLocale } from "@/lib/i18n/config";
import { getLocalizedMetadata, getSiteContent } from "@/lib/i18n/content";

type LegalProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LegalProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLocalizedMetadata(locale, "privacy");
}

export default async function PrivacyPage({ params }: LegalProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSiteContent(locale);
  return <LegalPage locale={locale} site={site} title={locale === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}><PrivacyDocument locale={locale} /></LegalPage>;
}
