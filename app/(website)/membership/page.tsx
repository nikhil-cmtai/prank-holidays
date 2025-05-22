import Membership from "./membership";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership - Prank Holidays",
  description: "Membership of our services and packages.",
};

export default function MembershipPage() {
    return <Membership />;
}

