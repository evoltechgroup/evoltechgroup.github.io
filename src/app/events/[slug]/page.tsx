import { notFound } from "next/navigation";
import { eventDetailsConfig, getEventBySlug } from "@/data/eventDetailsConfig";
import EventTemplate1 from "../templates/EventTemplate1";
import EventTemplate2 from "../templates/EventTemplate2";
import EventTemplate3 from "../templates/EventTemplate3";
import EventTemplate4 from "../templates/EventTemplate4";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return eventDetailsConfig.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | EvolTech Events`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: (event.bannerImage ?? event.image).src,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
  };
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const renderTemplate = () => {
    switch (event.template) {
      case "template1":
        return <EventTemplate1 event={event} />;
      case "template2":
        return <EventTemplate2 event={event} />;
      case "template3":
        return <EventTemplate3 event={event} />;
      case "template4":
        return <EventTemplate4 event={event} />;
      default:
        return <EventTemplate1 event={event} />;
    }
  };

  return <>{renderTemplate()}</>;
}
