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
    <div className={styles.index}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Smart Discounts for Shopify Variants</h1>
        <p className={styles.text}>
          Apply percentage discounts to specific product variants, with smart include/exclude control.
        </p>
        <p className={styles.text}>
          This app is installed from the Shopify App Store. If you&apos;re a
          merchant looking to install it, please visit our listing on the
          Shopify App Store.
        </p>
        <ul className={styles.list}>
          <li>
            Apply percentage discounts to specific product variants.
          </li>
          <li>
            Include or exclude individual variants from a discount
          </li>
          <li>
            Set discounts per variant title for precise control
          </li>
        </ul>
      </div>
    </div>
  );
}