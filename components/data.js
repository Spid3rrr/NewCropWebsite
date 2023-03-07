import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  AdjustmentsIcon,
  LightningBoltIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Freshness delivered to your doorstep - every time, everywhere.",
  desc: "With a commitment to excellence and a passion for the natural bounty of the earth, we strive to make healthy, delicious produce accessible to everyone, everywhere.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Premium Quality Produce",
      desc: "We source only the freshest and highest quality fruits and vegetables from around the world. Our products undergo rigorous quality control checks to ensure that they meet our standards of excellence. When you buy from us, you can be confident that you are getting the best produce available.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Convenient Home Delivery",
      desc: "We understand that time is precious and convenience is key. That's why we offer a seamless home delivery service, delivering your fresh produce right to your doorstep. With our reliable logistics, you can enjoy the taste of fresh fruits and vegetables without ever having to leave your home.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Global Variety: A World of Flavors and Nutrients",
      desc: "We source our produce from the finest farms across the globe, offering you a wide variety of fruits and vegetables from different regions of the world. This means you can enjoy the exotic flavors and unique nutritional benefits of produce from different countries, all in one place. With us, you can explore a world of produce without ever leaving your kitchen.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Welcome to a world of limitless possibilities",
  desc: "At 4A4B, we believe that technology should empower you to achieve your goals, not hold you back. That's why we've created a suite of cutting-edge products and services that bring together the latest advancements in AI, machine learning, and data analytics.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Boost Your Productivity",
      desc: "Say goodbye to manual processes and hello to lightning-fast results. Our technology automates repetitive tasks, freeing up your time to focus on what really matters.",
      icon: <LightningBoltIcon />,
    },
    {
      title: "Customize to Your Needs",
      desc: "Our technology is designed to be flexible and adaptable to your unique requirements. Whether you need a customized dashboard or specific integrations, we'll work with you to create a solution that fits your needs.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Always Connected",
      desc: "Stay connected and in control no matter where you are. Our technology enables you to access your data, insights, and tools from anywhere, at any time. Whether you're in the office, on the go, or working remotely, you'll have everything you need to get the job done. With 4A4B, you're always in the loop and always in control.",
      icon: <DeviceMobileIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
