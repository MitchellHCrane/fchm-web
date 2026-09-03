import type { Officer, ResourceCardId } from "@content/schema";
import { DEFAULT_RESOURCE_CARDS } from "@content/schema";
import { shared, applicationHref, filedropHref } from "@config/site";
import { GetStartedItem, type GetStartedItemProps } from "./GetStartedItem";
import styles from "./GetStarted.module.css";

/** Ported from troywarner/src/Components/GetStarted.js — cards are now data-driven. */
export function GetStarted({ officer }: { officer: Officer }) {
  const cards = buildCards(officer);

  return (
    <div className={styles.getStartedDiv} id="getStarted">
      <div className={styles.getStartedBackground}>
        <h2 className={styles.getStartedH2}>Resources</h2>
        <p className={styles.getStartedP}>
          Here are some helpful links to get you started with the purchase of
          your next home.
        </p>
      </div>
      <div className={styles.gridContainer}>
        {cards.map((c) => (
          <GetStartedItem key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}

function buildCards(officer: Officer): GetStartedItemProps[] {
  const wanted: ResourceCardId[] =
    officer.resourceCards ?? DEFAULT_RESOURCE_CARDS;
  const out: GetStartedItemProps[] = [];

  for (const id of wanted) {
    switch (id) {
      case "application":
        out.push({
          title: "Loan Application",
          description:
            "Create your account to apply with First Class Home Mortgage.",
          url: applicationHref(officer.application),
          icon: "application",
          btnText: "Start Application",
        });
        break;
      case "creditSmart":
        out.push({
          title: "CreditSmart Loan Education",
          description:
            "Be confident about your finances. Our lessons will empower you to make educated decisions throughout the homebuying process.",
          url: shared.links.creditSmart,
          icon: "creditSmart",
          btnText: "Start Learning",
        });
        break;
      case "upload": {
        const url =
          officer.filedropUrl ?? filedropHref(officer.email);
        out.push({
          title: "Upload Documents",
          description:
            "Safely and securely send documents through DocumentGuardian.",
          url,
          icon: "upload",
          btnText: "Upload Documents",
        });
        break;
      }
      case "dpa":
        out.push({
          title: "Down Payment Assistance",
          description:
            "Learn about down payment assistance programs available to you.",
          url: shared.links.dpa,
          icon: "dpa",
          btnText: "Learn More",
        });
        break;
      case "review":
        out.push({
          title: "Leave a Review",
          description:
            "It's our priority to continue providing quality service to our customers. Tell us about your experience.",
          url: officer.reviewUrl ?? shared.links.corporateReview,
          icon: "review",
          btnText: "Write Review",
        });
        break;
      case "schedule":
        if (officer.calendlyUrl) {
          out.push({
            title: "Schedule Strategy Appointment",
            description: "Click to schedule a strategy appointment.",
            url: officer.calendlyUrl,
            icon: "schedule",
            btnText: "Schedule",
          });
        }
        break;
      case "swag":
        out.push({
          title: "Get Free Swag",
          description:
            "Thank you for choosing First Class Home Mortgage. Fill out a simple form and get swag!",
          url: "https://elevatepromo.com/fchm_thankyou/",
          icon: "swag",
          btnText: "Get Swag",
        });
        break;
    }
  }

  for (const extra of officer.extraCards ?? []) {
    out.push({
      title: extra.title,
      description: extra.description,
      url: extra.href,
      icon: extra.icon,
      btnText: extra.btnText,
    });
  }

  return out;
}
