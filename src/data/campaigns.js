import moment from "moment-timezone";

export default [
    {
      Id : 1,
      "name" : "VideoFruit",
      "description" : "Videofruit set out to increase his email list through a giveaway",
      "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
      "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
      "client_id" : "MTN",
      "status" : "Active"
    },
    {
        Id : 2,
        "name" : "Powerbow Giveaway",
        "description" : "English sports equipment and apparel brand owned by Gray",
        "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
        "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
        "client_id" : "Telkom",
        "status" : "Active"
    },
    {
        Id : 3,
      "name" : "Liberty Express Giveaway ",
      "description" : "Liberty Express is a Venezuelan international shipping company that delivers",
      "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
      "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
      "client_id" : "MTN",
      "status" : "In-Progress"
    },
    {
        Id : 4,
      "name" : "#MyNeoShoot Campaign",
      "description" : "Adidas launched a new series of shoes in 2012 under the name of Adidas Neo",
      "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
      "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
      "client_id" : "Vodacom",
      "status" : "In-Active"
    },
    {
        Id : 5,
      "name" : "#RedCupContest",
      "description" : "starbucks launched a social media campaign about #RedCupContest in 2015.",
      "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
      "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
      "client_id" : "Cell C",
      "status" : "Active"
    },
    {
      Id : 6,
      "name" : "#time out",
      "description" : "starbucks launched a social media campaign about #RedCupContest in 2015.",
      "start_date" : moment().subtract(1, "days").format("DD MMM YYYY"),
      "end_date" : moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
      "client_id" : "Cell C",
      "status" : "In-Progress"
    }
];