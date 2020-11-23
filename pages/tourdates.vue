<template>
  <div>
    <h2 class="pt-2">Tour Dates</h2>

    <div class="bg-white bg-opacity-70 my-6">
      <table class="mt-4 table-auto border-collapse w-full rounded">
        <thead>
          <!-- #198c53 -->
          <tr class="text-sm font-light text-left">
            <th class="rounded-tl-sm px-3 py-2 bg-green-400 text-white font-heavy">Date</th>
            <th class="px-3 py-2 bg-green-400 text-white font-heavy">Venue</th>
            <th class="px-3 py-2 bg-green-400 text-white font-heavy">City</th>
            <th class="rounded-tr-sm px-3 py-2 bg-green-400 text-white font-heavy">Country</th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal">
          <tr v-for="(tourdate, index) in tourdates" :key="index" class="hover:bg-gray-100 border-b border-gray-200 py-4">
            <td class="p-3">{{ tourdate.dateFormatted}}</td>
            <td class="p-3" v-html="tourdate.venue"></td>
            <td class="p-3">{{ tourdate.city}}</td>
            <td class="p-3">{{ tourdate.countryFormatted}}</td>
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
      'GB-ENG': 'England',
      'GB-SCT': 'Scotland',
      'ES': 'Spain',
      'SE': 'Sweden',
      'EE': 'Estonia',
      'GR': 'Greece',
      'DE': 'Germany',
      'US': 'U.S.',
      'IT': 'Italy',
      'AU': 'Australia'
    };

    const tourdates = await base("tourdates")
      .select({
        view: "Grid view",
      })
      .firstPage()
      .then((response) => {
        const tourdates = response
          .filter(
            (item) =>
              item._rawJson.fields.bandcode.indexOf("reco6s8krHblqjjWf") !== -1
          )
          .map((item) => {
            let fields = item._rawJson.fields;
            let options = { year: "numeric", month: "long", day: "numeric" };
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