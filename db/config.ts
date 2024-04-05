import { defineDb, defineTable, column } from 'astro:db';

const Tourdate = defineTable({
  columns: {
    date: column.date(),
    venue: column.text(),
    city: column.text(),
    country: column.text(),
    url: column.text(),
    other: column.text(),
  }
})

const Release = defineTable({
  columns: {
    date: column.date(),
    title: column.text(),
    cat: column.text(),
    hasImage: column.boolean({ optional: true }),
    format: column.number(),
    label: column.text(),
    tracklisting: column.text({ optional: true }),
    notes: column.text({ optional: true }),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    Tourdate,
    Release
  }
});
