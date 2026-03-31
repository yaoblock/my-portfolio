import type { Metadata } from "next";
import CVContent from "../components/cv-content";
import { zh } from "../cv-data";

export const metadata: Metadata = {
  title: "刘静一 - 简历",
  description:
    "10 年市场营销，危机公关与产品增长经验。负责过腾讯 / 网易战略级游戏项目，也经历过初创企业的从零至一。",
  robots: { index: false, follow: false },
};

export default function CVZhPage() {
  return <CVContent data={zh} />;
}
