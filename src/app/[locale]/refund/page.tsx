import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/LegalPage";
import { RefundDocument } from "@/components/legal/RefundDocument";
import { isLocale } from "@/lib/i18n/config";
import { getLocalizedMetadata, getSiteContent } from "@/lib/i18n/content";

type LegalProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: LegalProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLocalizedMetadata(locale, "refund");
}

export default async function RefundPage({ params }: LegalProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const site = getSiteContent(locale);
  return <LegalPage locale={locale} site={site} title={locale === "ru" ? "Возвраты и отмена" : "Refund & Cancellation Policy"}><RefundDocument locale={locale} /></LegalPage>;
}
