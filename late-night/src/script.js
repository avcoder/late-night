// List each event in an array for that day.
// The properties begin/end are 24-hour time format.
// The link property will eventually be the anchor's href value
const day1 = [
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Appointment",
    link: "https://calendly.com/j-chevrier/gctutoring?month=2020-11",
    description: "Review your tutoring needs with a Tutoring Advisor",
    label: "Tutoring Advisor"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.705.728.1968 ext. 1307",
    link: "tel:17057281968p1307",
    description: "Call or email academicsuccess@georgiancollege.ca",
    label: "Academic Success"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "askON chat & text",
    link:
      "https://library.georgiancollege.ca/c.php?g=716796&p=5112428#s-lg-content-35538612",
    description: "Multiple Georgian staff available to help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2000",
    time: "6 pm to 8 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/lori.hallahan",
    description: "Drop-in for one-on-one help",
    label: "Research help"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/jennifer.varcoe",
    description: "Drop-in for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.877.890.8477 ext. 1744",
    link: "tel:18778908477p1744",
    description: "Call for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/sarah.hunter",
    description:
      "Ask your APA questions or get feedback on your writing and editing",
    label: "Writing"
  },
  {
    begin: "1800",
    end: "1900",
    time: "6 pm to 7 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/hanna.shrolyk",
    description: "Learn something new about: Preparing for Presentations",
    label: "Language Help Centre"
  },
  {
    begin: "2100",
    end: "2200",
    time: "9 pm to 10 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/celina.dunn",
    description:
      "Drop-in: bring an assignment and have your grammar questions answered",
    label: "Language Help Centre"
  },
  {
    begin: "1900",
    end: "2100",
    time: "7 pm to 9 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Civil Engineering",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Accounting/Bookkeeping",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Computer Programmer",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Fitness and Health Promotion",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Massage Therapy",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Practical Nursing",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Pre-Health Biology",
    label: "Tutoring"
  }
];

const day2 = [
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Appointment",
    link: "https://calendly.com/j-chevrier/gctutoring?month=2020-11",
    description: "Review your tutoring needs with a Tutoring Advisor",
    label: "Tutoring Advisor"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.705.728.1968 ext. 1307",
    link: "tel:17057281968p1307",
    description: "Call or email academicsuccess@georgiancollege.ca",
    label: "Academic Success"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "askON chat & text",
    link:
      "https://library.georgiancollege.ca/c.php?g=716796&p=5112428#s-lg-content-35538612",
    description: "Multiple Georgian staff available to help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Drop-in",
    link:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzE0ZjA2YjktMDIyNi00MTlhLTg0ZWMtNTRiY2RjY2U5YmU0%40thread.v2/0?context=%7b%22Tid%22%3a%22da9a94b6-4681-49bc-bd7c-bab9eac0ad3c%22%2c%22Oid%22%3a%2231964dd1-b5f3-41c4-ac40-79b99cf15414%22%7d",
    description: "Drop-in for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.877.890.8477 ext. 1744",
    link: "tel:18778908477p1744",
    description: "Call for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/kairi.kallai",
    description:
      "Ask your APA questions or get feedback on your writing and editing",
    label: "Writing"
  },
  {
    begin: "1800",
    end: "1900",
    time: "6 pm to 7 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/hanna.shrolyk",
    description: "Learn something new about: Common Grammatical Errors",
    label: "Language Help Centre"
  },
  {
    begin: "2100",
    end: "2200",
    time: "9 pm to 10 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/celina.dunn",
    description:
      "Drop-in: bring an assignment and have your grammar questions answered",
    label: "Language Help Centre"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Accounting/Bookkeeping",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Computer Programmer",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2100",
    time: "7 pm to 9 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Marine Technology",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Computer Networking",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Nursing",
    label: "Tutoring"
  }
];

const day3 = [
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Appointment",
    link: "https://calendly.com/j-chevrier/gctutoring?month=2020-11",
    description: "Review your tutoring needs with a Tutoring Advisor",
    label: "Tutoring Advisor"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.705.728.1968 ext. 1307",
    link: "tel:17057281968p1307",
    description: "Call or email academicsuccess@georgiancollege.ca",
    label: "Academic Success"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "askON chat & text",
    link:
      "https://library.georgiancollege.ca/c.php?g=716796&p=5112428#s-lg-content-35538612",
    description: "Multiple Georgian staff available to help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2000",
    time: "6 pm to 8 pm",
    linkText: "Drop-in",
    link:
      "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzE0ZjA2YjktMDIyNi00MTlhLTg0ZWMtNTRiY2RjY2U5YmU0%40thread.v2/0?context=%7b%22Tid%22%3a%22da9a94b6-4681-49bc-bd7c-bab9eac0ad3c%22%2c%22Oid%22%3a%2231964dd1-b5f3-41c4-ac40-79b99cf15414%22%7d",
    description: "Drop-in for one-on-one help",
    label: "Research help"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/jennifer.varcoe",
    description: "Drop-in for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Call 1.877.890.8477 ext. 1744",
    link: "tel:18778908477p1744",
    description: "Call for one-on-one help",
    label: "Research help"
  },
  {
    begin: "1800",
    end: "2200",
    time: "6 pm to 10 pm",
    linkText: "Drop-in",
    link: "https://georgiancollege.webex.com/meet/sarah.hunter",
    description:
      "Ask your APA questions or get feedback on your writing and editing",
    label: "Writing"
  },
  {
    begin: "1800",
    end: "1900",
    time: "6 pm to 7 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/hanna.shrolyk",
    description: "Learn something new about: Paraphrasing",
    label: "Language Help Centre"
  },
  {
    begin: "2100",
    end: "2200",
    time: "9 pm to 10 pm",
    linkText: "Workshop",
    link: "https://georgiancollege.webex.com/meet/celina.dunn",
    description:
      "Drop-in: bring an assignment and have your grammar questions answered",
    label: "Language Help Centre"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Accounting/Bookkeeping",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2200",
    time: "7 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Computer Programmer",
    label: "Tutoring"
  },
  {
    begin: "1900",
    end: "2100",
    time: "7 pm to 9 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Practical Nursing",
    label: "Tutoring"
  },
  {
    begin: "2000",
    end: "2200",
    time: "8 pm to 10 pm",
    linkText: "Appointment",
    link: "https://georgianc.libcal.com/booking/tutoring",
    description: "Nursing",
    label: "Tutoring"
  }
];

// Vue's data property "keywords" refers to the input box which eventually will help filter the list
// If you wish to hide the links temporarily,
// then setting "showLinks" to false, will replace all links with "TBA"
new Vue({
  el: "#app",
  data: {
    data1: day1,
    data2: day2,
    data3: day3,
    keywords: "",
    showLinks: true
  },
  methods: {
    // wanted to sort by beginning time first, and if both sessions begin at the same time,
    // then sort by ending time
    mySort(a, b) {
      if (a.begin < b.begin) {
        return -1;
      }
      if (a.begin > b.begin) {
        return 1;
      }
      if (a.end < b.end) {
        return -1;
      }
      if (a.end > b.end) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
  },
  computed: {
    sortedDay1() {
      return this.data1
        .sort(this.mySort)
        .filter(
          (record) =>
            record.description
              .toLowerCase()
              .includes(this.keywords.toLowerCase()) ||
            record.label.toLowerCase().includes(this.keywords.toLowerCase()) ||
            record.linkText.toLowerCase().includes(this.keywords.toLowerCase())
        );
    },
    sortedDay2() {
      return this.data2
        .sort(this.mySort)
        .filter(
          (record) =>
            record.description
              .toLowerCase()
              .includes(this.keywords.toLowerCase()) ||
            record.label.toLowerCase().includes(this.keywords.toLowerCase()) ||
            record.linkText.toLowerCase().includes(this.keywords.toLowerCase())
        );
    },
    sortedDay3() {
      return this.data3
        .sort(this.mySort)
        .filter(
          (record) =>
            record.description
              .toLowerCase()
              .includes(this.keywords.toLowerCase()) ||
            record.label.toLowerCase().includes(this.keywords.toLowerCase()) ||
            record.linkText.toLowerCase().includes(this.keywords.toLowerCase())
        );
    }
  }
});
