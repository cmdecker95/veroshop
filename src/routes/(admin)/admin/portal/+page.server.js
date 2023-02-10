import { redirect } from "@sveltejs/kit";

export async function load() {
  const title = "Admin";

  return { title };
}

export const actions = {
  products: async () => {
    throw redirect(302, "/admin/products");
  },
  orders: async () => {
    throw redirect(302, "/admin/orders");
  },
  shop: async () => {
    throw redirect(302, "/shop");
  },
};
