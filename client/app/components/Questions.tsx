"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Questions = () => {
  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="What is Chillflix?"
          title="What is Chillflix?"
        >
          Chillflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices.
          <br />
          <br />
          You can watch as much as you want, whenever you want without a single
          commercial - all for one low monthly price. There&apos;s always
          something new to discover and new TV shows and movies are added every
          week!
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="How much does Chillflix cost?"
          title="How much does Chillflix cost?"
        >
          Watch Chillflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from xx
          to xx a month. No extra costs, no contracts.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Where can I watch?"
          title="Where can I watch?"
        >
          Watch anywhere, anytime. Sign in with your Chillflix account to watch
          instantly on the web at this website from your personal computer or on
          any internet-connected device that offers the Chillflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
          <br />
          <br />
          You can also download your favorite shows with the iOS, Android, or
          Windows 10 app. Use downloads to watch while you&apos;re on the go and
          without an internet connection. Take Chillflix with you anywhere.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="How do I cancel?"
          title="How do I cancel?"
        >
          Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks. There are no
          cancellation fees - start or stop your account anytime.
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="What can I watch on Chillflix?"
          title="What can I watch on Chillflix?"
        >
          Chillflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Chillflix originals, and more. Watch as
          much as you want, anytime you want.
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Is Chillflix good for kids?"
          title="Is Chillflix good for kids?"
        >
          The Chillflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space.
          <br />
          <br />
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don&apos;t want kids to see.
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Questions;
