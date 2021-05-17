<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <div v-for="currency in info" :key="currency" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "idicore",
  data() {
    return {
      info: null,
    };
  },
  methods(){

  },
  mounted() {
    var data = JSON.stringify({
      lastName: "BIGGERSTAFF",
      firstName: "Ronald",
      address: "1157 BOLENS CREEK RD",
      city: "BURNSVILL",
      state: "NC",
      zip: "28714",
      fields: [
        "name",
        "phone",
        "address",
        "email",
        "property",
        "isDead",
        "relationship",
        "dob",
      ],
    });
    var config = {
      method: "post",
      url: "https://api.idicore.com/search/",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXNzaW9uSWQiOiI4NmZjMTgyNy1jMmUxLTQ1YTMtYmE0OC0wOWY5NTkyZmI5ZjciLCJ1c2VyIjp7InVzZXJJZCI6ImRhNTJiMTQ5LTVhMmQtNDc2Yy1iMjkyLTVmN2MxMTAwMzkxOSIsImNvbXBhbnlJZCI6ImVlNTg1YTVjLTcwZTEtNGUzOS05ZjQzLWRlYjVjYTVmMzU2OSIsImNvbXBhbnlOYW1lIjoiU3VycGx1cyBMaXN0IEluYyAtIFJlc2VsbGVyIEFjY291bnQiLCJ1c2VybmFtZSI6ImFwaS1jbGllbnRAc3VycGx1c3Jlc2VsbCIsImluZHVzdHJ5IjoiY29uc3VtZXIiLCJhY2Nlc3NMZXZlbHMiOiJCaGJrcUk4UUFBQUFBQUFBQUFDQWdZQUFnWUNBZ1lFL2dZRUFBSUVBZ1lFQUFBQ0JnUUNCZ1lFQWdZRUFnSUdCQUFDQmdSQ0JnUUh3MGU3OS96NDlnQU1CIn0sImF1dGhlbnRpY2F0aW9uIjp7InBhc3N3b3JkUmVzZXQiOm51bGwsInBhc3N3b3JkIjp0cnVlLCJuZXR3b3JrIjp0cnVlLCJ0b3RwIjpudWxsfSwiZ2xiYSI6Im5vbnJlZyIsImRwcGEiOiJub25lIiwic2Vzc2lvblN0YXJ0IjoxNjE5NTM5Nzg0MzQ2LCJpYXQiOjE2MTk1Mzk3ODQsImV4cCI6MTYxOTU0MTU4NCwiaXNzIjoiSURJIiwic3ViIjoiYXBpLWNsaWVudEBzdXJwbHVzcmVzZWxsIn0.cT8lcOeR_Tf6smKC0cgfB6X0Bb3V0Pw80022G9XMc3k",
        "Content-Type": "application/json",
    'Cookie': 'visid_incap_1199546=DSYk/ButShSo5LV5PDnuyU8ULGAAAAAAQUIPAAAAAAB4h888QS1CQHGRamYvBVXQ; visid_incap_863480=Crnimz9zRR2etdh5vFVpzU0AOGAAAAAAQUIPAAAAAAC3n2u15yqcVqpuq6d9Kv0z; nlbi_1199546=lft+cRhblGEFdIYI9dLaYAAAAACg9qQni7EZo6h5a0b5nQCE; nlbi_863480=e3ZrZNKcrUwbGlpZ0+isngAAAADm1paj8Gs37tgd3ReoPawT; incap_ses_1167_1199546=IlrRPkqrUyBLfcsJlwQyEEg3iGAAAAAAh9B/LpHYLCh1xM46OBcPIw==; incap_ses_1167_863480=xn1Wdc+poRxx4csJlwQyEIA3iGAAAAAAw1MRPmwOsm8Y5cPpEwa2hA=='},
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>
