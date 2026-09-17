import { redirect, useLoaderData } from "react-router";
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return {};
};

export default function App() {
  useLoaderData();

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Smart discounts for Shopify variants</h1>
        <hr className={styles.rule} />
        <p className={styles.text}>
          Apply percentage discounts to specific product variants, with
          smart include/exclude control.
        </p>

        <div className={styles.notice}>
          <p>
            This app installs from the Shopify App Store. If you&apos;re a
            merchant looking to add it to your store, search for it in the
            App Store rather than logging in here directly.
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.marker}>%</span>
            Apply percentage discounts to specific product variants
          </li>
          <li className={styles.item}>
            <span className={styles.marker}>%</span>
            Include or exclude individual variants from a discount
          </li>
          <li className={styles.item}>
            <span className={styles.marker}>%</span>
            Set discounts per variant title for precise control
          </li>
        </ul>
      </div>
    </div>
  );
}
