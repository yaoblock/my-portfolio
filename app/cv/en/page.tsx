import type { Metadata } from "next";
import CVContent from "../components/cv-content";
import { en } from "../cv-data";

export const metadata: Metadata = {
  title: "Jingyi Liu - CV",
  description:
    "10 years of experience in marketing, crisis PR, and product growth. Led strategic game launches at Tencent and NetEase.",
  robots: { index: false, follow: false },
};

export default function CVEnPage() {
  return <CVContent data={en} />;
}
