import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"

export default async function productUpdatedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  // send request to next.js storefront to revalidate cache
  await fetch(`${process.env.STOREFRONT_URL}/api/revalidate?tags=products`)
}

export const config: SubscriberConfig = {
  event: ["product.updated","product.created","product.deleted","variant.created","variant.updated","variant.deleted","category.created","category.updated","category.deleted","collection.created", "collection.updated", "collection.deleted"]
}