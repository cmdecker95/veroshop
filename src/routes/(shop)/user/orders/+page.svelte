<script>
  import { formatPrice } from "$lib/utils";

  export let data;
  const { orders } = data;
</script>

<header>
  <h1>Orders</h1>
</header>

<article>
  {#if orders.length > 0}
    <figure>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
            <th scope="col">Products</th>
          </tr>
        </thead>
        <tbody>
          {#each orders as order, i}
            <tr>
              <td>
                <a href={`/user/orders/${order.id}`}>
                  <i class="fa-sharp fa-solid fa-eye" />
                </a>
              </td>
              <td>{order.createdAt.toLocaleString()}</td>
              <td>{order.fulfilled ? "✅ Fulfilled" : "📦 Processing"}</td>
              <td>{formatPrice(order.total)}</td>
              <td>{order.products.reduce((agg, a) => agg + a.qty, 0)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </figure>
  {:else}
    <p>Orders you place will appear here.</p>
    <footer>
      <a class="contrast" href="/shop" role="button">Continue Shopping</a>
    </footer>
  {/if}
</article>

<style>
  figure {
    overflow: scroll;
  }
</style>
