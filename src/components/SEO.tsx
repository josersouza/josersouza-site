export function SEO({
  title,
  description,
  schema,
}: {
  title?: string
  description?: string
  schema?: any[]
}) {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {schema &&
        schema.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
    </>
  )
}
