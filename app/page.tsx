import Hero from "./_components/Hero";
import Newest from "./_components/Newest";
import { MotionDiv } from "./framer";

export default function Home() {
  return (
  <MotionDiv className="bg-white pb-6 sm:pb-8 lg:pb-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  >
    <Hero/>
    <Newest/>
  </MotionDiv>
  );
}
