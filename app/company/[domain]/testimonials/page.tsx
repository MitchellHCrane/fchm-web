import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCompanyTenant, companyContent } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";
import { JsonLd } from "@seo/JsonLd";
import { webPageSchema } from "@seo/schema";
import { MainCTA } from "@ui/company/MainCTA";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

const testimonials = [
  {
    body: "We had a pleasant experience working with Linda Skehan on a second mortgage for our home. She took care of our questions and provided knowledgeable help.",
    name: "Patricia H.",
  },
  {
    body: "I am a Realtor and Linda is my go to loan officer! Not only has she been fantastic to my clients, she has now helped me personally through the process of buying two homes. She goes the extra mile to help those she works with. She is a fantastic communicator and knows how to get the job done, no matter what it takes. I could not recommend her enough! I will always refer anyone and everyone to her for all things loan-related.",
    name: "Camryn M.",
  },
  {
    body: "Phenomenal job! Kept me updated throughout the entire process. Was able to work with my schedule and close the loan quickly. Would definitely recommend and use again.",
    name: "Ross U.",
  },
  {
    body: "What an incredible company. Offering various loan types and a variety of rates. This will be your best decision for your home loan needs.",
    name: "Sariah K.",
  },
  {
    body: "We have purchased 2 homes through Troy. Troy is very knowledgeable and helps make the process easy. He is quick and very attentive. He answered all our questions as first time home buyers and helped us feel comfortable throughout the whole process! Thanks Troy!",
    name: "Marisa W.",
  },
  {
    body: "Working with Kari was sooo easy. We did not think we were in a position to buy and Kari not only told us we were but she literally did EVERYTHING for us! Thank you so much Kari.",
    name: "Rylee R.",
  },
  {
    body: "Alan Cooper was my broker for the two houses I bought and sold. He made the buying process smooth and as stress free as possible. I like to call Alan a magician because he can pull anything out of a hat and he will do anything you need to get the house you want. His service does not stop after you sign the paperwork, you can rely on Alan for support even after closing. I highly recommend Alan, his knowledge and experience matched with the time he invests in his customers is impeccable.",
    name: "Tonia M.",
  },
  {
    body: "I am very happy for the help and professionalism with which Raúl Sáez assisted us, without a doubt, I recommend him 100% to my friends, very hard-working and always concerned about us until the end of the process, thank you very much",
    name: "Clara L.",
  },
  {
    body: "What a great experience from start to close! Thoughtful and caring! Would highly recommend!",
    name: "Alan D.",
  },
];

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/testimonials`;
  return buildPageMetadata({
    url,
    title: "Testimonials | Hear From Our Happy Clients",
    description:
      "Read testimonials from our satisfied clients who achieved their home ownership dreams with First Class Home Mortgage.",
    ogImage: `https://${tenant.host}${companyContent.ogImages.testimonials}`,
  });
}

export default async function TestimonialsPage({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();
  const url = `https://${tenant.host}/testimonials`;
  const image = `https://${tenant.host}${companyContent.ogImages.testimonials}`;

  return (
    <div className="bg-white pt-16">
      <JsonLd
        data={webPageSchema({
          name: "Testimonials | Hear From Our Happy Clients",
          description:
            "Read testimonials from our satisfied clients who achieved their homeownership dreams with First Class Home Mortgage.",
          url,
          image,
        })}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold text-[#2ca4f2]">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold text-[#004e82] sm:text-4xl">
            We&apos;ve had the privilege of helping incredible individuals and families achieve their homeownership dreams.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.name}-${index}`} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-[#2ca4f2]">{testimonial.name}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MainCTA phone={tenant.phone} />
    </div>
  );
}
