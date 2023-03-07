import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What makes 4A4B different from other technology companies",
    answer: "4A4B uses cutting-edge technology and innovative algorithms to provide customized solutions that meet the unique needs of our customers. Our team of experts is dedicated to constant innovation, ensuring that our products and services are always at the forefront of technological advancements",
  },
  {
    question: "Is 4A4B user-friendly?",
    answer: "Absolutely! We've designed our platform to be intuitive and user-friendly, so you can get up and running quickly and easily. Whether you're a tech expert or a newcomer, you'll find that 4A4B is simple to use and provides real results.",
  },
  {
    question: "Can 4A4B integrate with my existing systems?",
    answer:
      "Yes, 4A4B can easily integrate with your existing systems, providing a seamless and efficient solution for your business. Our team of experts can help you with the integration process, ensuring a smooth transition to our platform.",
  },
  {
    question: "What kind of support does 4A4B offer?",
    answer:
      "4A4B offers 24/7 support to ensure that you have access to the help you need, when you need it. Our knowledgeable support team is always available to answer your questions and assist you in any way they can.",
  },
];
