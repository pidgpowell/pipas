<template>
  <div>
    <h2 class="mt-2 text-xl border-b pb-2 mb-3 border-emerald-300">Tour Dates</h2>

    <h3 class="mt-2">The Future</h3>
    <p class="text-gray-400">...is hazy.</p>

    <h3 class="mt-2">The Past</h3>

    <div class="rounded-t-sm sm:rounded-t-md bg-gradient-to-r from-emerald-50 to-teal-100 sm:p-1 mt-3">
      <table class="table-auto">
        <thead>
          <tr class="text-sm font-light text-left">
            <th class="pl-2 py-1 text-emerald-600 min-w-20">
              Date
            </th>
            <th class="pl-3 py-2 text-emerald-600">
              Venue
            </th>
             <th class="pl-2 py-2 text-emerald-600">
              Country
            </th>
          </tr>
        </thead>
        <tbody class="font-normal">
          <tr
            v-for="(tourdate, index) in tourdates"
            :key="index"
            class="hover:bg-emerald-100 border-b border-emerald-100"
          >
            <td class="pl-2 pb-2 pt-2 align-top leading-tight text-emerald-900">{{ tourdate.dateFormatted }}</td>
            <td class="pl-3 pt-2 pb-2 align-top max-w-xs leading-tight">
                <span v-html="tourdate.venue" />, {{ tourdate.city }}
                <div v-html="tourdate.generalInfo" class="text-gray-600" />
            </td>
            <td class="pl-2 pb-2 pt-2 align-top leading-tight">{{ tourdate.countryFormatted }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Airtable from "airtable";

export default {
  data() {
    return {
      tourdates: null,
    };
  },

  async asyncData() {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE
    );
    const countryCodes = {
      "GB-ENG": "England",
      "GB-SCT": "Scotland",
      ES: "Spain",
      SE: "Sweden",
      EE: "Estonia",
      GR: "Greece",
      DE: "Germany",
      US: "U.S.",
      IT: "Italy",
      AU: "Australia",
    };

    const tourdates = await base("tourdates")
      .select({
        view: "Grid view",
        sort: [{ field: "date", direction: "desc" }],
        filterByFormula: 'FIND("2",{bandcode})>0'
      })
      .firstPage()
      .then(response => {
        const tourdates = response
          .map(item => {
            let fields = item._rawJson.fields;
            let options = { year: "numeric", month: "short", day: "numeric" };
            fields.dateFormatted = new Date(fields.date).toLocaleString(
              "en-US",
              options
            );
            fields.countryFormatted = countryCodes[fields.country];
            return fields;
          });

        return tourdates;
      });

    return { tourdates };
  },
};
</script>