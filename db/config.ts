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


// https://astro.build/db/config
export default defineDb({
  tables: {
    Tourdate
  }
});
