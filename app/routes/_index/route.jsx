import { redirect, Form, useLoaderData } from "react-router";
import { login } from "../../shopify.server";
import styles from "./styles.module.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams.get("shop")) {
    throw redirect(`/app?${url.searchParams.toString()}`);
  }

  return { showForm: Boolean(login) };
};

export default function App() {
  const { showForm } = useLoaderData();

  return (
    <div className={styles.index}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Smart Discounts for Shopify Variants</h1>
        <p className={styles.text}>
          Apply percentage discounts to specific product variants, with smart include/exclude control.
        </p>
        {showForm && (
          <Form className={styles.form} method="post" action="/auth/login">
            <label className={styles.label}>
              <span>Shop domain</span>
              <input className={styles.input} type="text" name="shop" />
              <span>e.g: my-shop-domain.myshopify.com</span>
            </label>
            <button className={styles.button} type="submit">
              Log in
            </button>
          </Form>
        )}
        <ul className={styles.list}>
          <li>
            Apply percentage discounts to specific product variants.
          </li>
          <li>
            Include or exclude individual variants from a discount
          </li>
          <li>
            Works alongside product add-ons and custom options
          </li>
          <li>
            Set discounts per variant title for precise control
          </li>
        </ul>
      </div>
    </div>
  );
}
