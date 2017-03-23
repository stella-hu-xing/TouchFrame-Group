var express = require('express');
var router = express.Router();

// olders list
// carers list

// xxxx.xyz/:id/allold(age, name, picture id, relationship)
// xxxx.xyz/:id/:old_id/log
// xxxx.xyz/:id/:old_id/data
  // xxxx.xyz/:id/:old_id/day
  // xxxx.xyz/:id/:old_id/week
  // xxxx.xyz/:id/:old_id/month
  // xxxx.xyz/:id/:old_id/year
// xxxx.xyz/:id/:old_id/contacts
// xxxx.xyz/:id/ (name, phone, emergency?)

router.get('/carer', function(req, res, next) {
  res.json({
    id: 14,
    name: "Sonja",
    phone: "",
    emergency: "",
    nickname: "leon",
    email: "spedell@swin.edu.au"
  });
});

router.get('/old', function(req, res, next) {
  res.json({
    id: 4,
    name: "Leon Sterling",
    nickname: "leon",
    age: 66,
    email: "lsterling@swin.edu.au"
  });
});

router.get('/events', function(req, res, next) {
  res.json([
    {
      id:  1205,
      event_type: "device-moved",
      event_time: "2014-05-20 15:50:29",
    },
    {
      id:  1204,
      event_type: "device-moved",
      event_time: "2014-05-20 15:45:25",
    },
    {
      id:  1203,
      event_type: "device-moved",
      event_time: "2014-05-20 15:40:23",
    },
    {
      id:  1202,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:53",
    },
    {
      id:  1201,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:51",
    },
    {
      id:  1200,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:50",
    },
    {
      id:  1199,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:48",
    },
    {
      id:  1198,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:47",
    },
    {
      id:  1197,
      event_type: "device-moved",
      event_time: "2014-05-20 15:35:47",
    },
    {
      id:  1196,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:46",
    },
    {
      id:  1195,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:45",
    },
    {
      id:  1194,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:43",
    },
    {
      id:  1193,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:41",
    },
    {
      id:  1192,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:40",
    },
    {
      id:  1191,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:38",
    },
    {
      id:  1190,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:35:36",
    },
    {
      id:  1189,
      event_type: "device-moved",
      event_time: "2014-05-20 15:35:20",
    },
    {
      id:  1188,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:44",
    },
    {
      id:  1187,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:42",
    },
    {
      id:  1186,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:33",
    },
    {
      id:  1185,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:32",
    },
    {
      id:  1184,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:26",
    },
    {
      id:  1183,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:25",
    },
    {
      id:  1182,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:24",
    },
    {
      id:  1181,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:21",
    },
    {
      id:  1180,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:18",
    },
    {
      id:  1179,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:12",
    },
    {
      id:  1178,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:09",
    },
    {
      id:  1177,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:04",
    },
    {
      id:  1176,
      event_type: "viewed-photo",
      event_time: "2014-05-20 15:30:00",
    },
    {
      id:  1175,
      event_type: "device-moved",
      event_time: "2014-05-20 15:30:00",
    },
    {
      id:  1174,
      event_type: "device-moved",
      event_time: "2014-05-20 15:30:18",
    },
    {
      id:  1173,
      event_type: "device-moved",
      event_time: "2014-05-20 15:25:16",
    },
    {
      id:  1172,
      event_type: "device-moved",
      event_time: "2014-05-20 15:20:14",
    },
    {
      id:  1171,
      event_type: "device-moved",
      event_time: "2014-05-20 15:15:12",
    },
    {
      id:  1170,
      event_type: "device-moved",
      event_time: "2014-05-20 15:09:45",
    },
    {
      id:  1169,
      event_type: "device-moved",
      event_time: "2014-05-20 15:10:10",
    },
    {
      id:  1168,
      event_type: "device-moved",
      event_time: "2014-05-20 15:02:57",
    },
    {
      id:  1167,
      event_type: "device-moved",
      event_time: "2014-05-20 15:05:08",
    },
    {
      id:  1166,
      event_type: "device-moved",
      event_time: "2014-05-20 14:57:13",
    },
    {
      id:  1165,
      event_type: "device-moved",
      event_time: "2014-05-20 15:00:07",
    },
    {
      id:  1164,
      event_type: "device-moved",
      event_time: "2014-05-20 14:51:53",
    },
    {
      id:  1163,
      event_type: "device-moved",
      event_time: "2014-05-20 14:55:05",
    },
    {
      id:  1162,
      event_type: "device-moved",
      event_time: "2014-05-20 14:50:03",
    },
    {
      id:  1161,
      event_type: "device-moved",
      event_time: "2014-05-20 14:45:01",
    },
    {
      id:  1160,
      event_type: "device-moved",
      event_time: "2014-05-20 14:39:59",
    },
    {
      id:  1159,
      event_type: "chat-closed",
      event_time: "2014-05-20 14:36:08",
    },
    {
      id:  1158,
      event_type: "device-moved",
      event_time: "2014-05-20 14:31:49",
    },
    {
      id: 989,
      event_type: "device-moved",
      event_time: "2014-05-19 17:46:57",
    },
    {
      id: 988,
      event_type: "chat-closed",
      event_time: "2014-05-19 16:02:06",
    },
    {
      id: 987,
      event_type: "chat-opened",
      event_time: "2014-05-19 16:01:58",
    },
    {
      id: 986,
      event_type: "help-closed",
      event_time: "2014-05-19 16:01:56",
    },
    {
      id: 985,
      event_type: "device-moved",
      event_time: "2014-05-19 16:01:55",
    },
    {
      id: 984,
      event_type: "help-opened",
      event_time: "2014-05-19 16:01:51",
    },
    {
      id: 983,
      event_type: "chat-opened",
      event_time: "2014-05-19 15:57:51",
    },
    {
      id: 982,
      event_type: "device-moved",
      event_time: "2014-05-19 15:56:40",
    },
    {
      id: 981,
      event_type: "chat-opened",
      event_time: "2014-05-19 15:55:49",
    },
    {
      id: 980,
      event_type: "unfavourited-photo",
      event_time: "2014-05-19 15:55:14",
    },
    {
      id: 979,
      event_type: "chat-closed",
      event_time: "2014-05-19 15:54:32",
    },
    {
      id: 978,
      event_type: "chat-opened",
      event_time: "2014-05-19 15:51:01",
    },
    {
      id: 977,
      event_type: "device-moved",
      event_time: "2014-05-19 15:50:58",
    },
    {
      id: 976,
      event_type: "chat-closed",
      event_time: "2014-05-19 13:36:08",
    },
    {
      id: 975,
      event_type: "chat-opened",
      event_time: "2014-05-19 13:36:02",
    },
    {
      id: 974,
      event_type: "device-moved",
      event_time: "2014-05-19 13:35:49",
    },
    {
      id: 973,
      event_type: "device-moved",
      event_time: "2014-05-17 19:42:13",
    },
    {
      id: 972,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:23:43",
    },
    {
      id: 971,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:23:41",
    },
    {
      id: 970,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:23:40",
    },
    {
      id: 969,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:23:37",
    },
    {
      id: 968,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:23:35",
    },
    {
      id: 967,
      event_type: "help-closed",
      event_time: "2014-05-16 21:21:35",
    },
    {
      id: 966,
      event_type: "device-moved",
      event_time: "2014-05-16 21:21:18",
    },
    {
      id: 965,
      event_type: "help-opened",
      event_time: "2014-05-16 21:20:59",
    },
    {
      id: 964,
      event_type: "new-images-downloaded",
      event_time: "2014-05-16 21:20:40",
    },
    {
      id: 963,
      event_type: "chat-closed",
      event_time: "2014-05-16 21:19:29",
    },
    {
      id: 962,
      event_type: "chat-opened",
      event_time: "2014-05-16 21:19:17",
    },
    {
      id: 961,
      event_type: "favourited-photo",
      event_time: "2014-05-16 21:18:59",
    },
    {
      id: 960,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:17:06",
    },
    {
      id: 959,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:17:04",
    },
    {
      id: 958,
      event_type: "chat-closed",
      event_time: "2014-05-16 21:17:02",
    },
    {
      id: 957,
      event_type: "chat-opened",
      event_time: "2014-05-16 21:16:48",
    },
    {
      id: 956,
      event_type: "favourited-photo",
      event_time: "2014-05-16 21:16:45",
    },
    {
      id: 955,
      event_type: "unfavourited-photo",
      event_time: "2014-05-16 21:16:43",
    },
    {
      id: 954,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:16:41",
    },
    {
      id: 953,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:16:40",
    },
    {
      id: 952,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:16:39",
    },
    {
      id: 951,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:16:37",
    },
    {
      id: 950,
      event_type: "viewed-photo",
      event_time: "2014-05-16 21:16:35",
    },
    {
      id: 949,
      event_type: "device-moved",
      event_time: "2014-05-16 21:16:16",
    },
    {
      id: 948,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:43:14",
    },
    {
      id: 947,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:43:11",
    },
    {
      id: 946,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:43:03",
    },
    {
      id: 945,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:55",
    },
    {
      id: 944,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:54",
    },
    {
      id: 943,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:45",
    },
    {
      id: 942,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:41",
    },
    {
      id: 941,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:40",
    },
    {
      id: 940,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:39",
    },
    {
      id: 939,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:36",
    },
    {
      id: 938,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:35",
    },
    {
      id: 937,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:34",
    },
    {
      id: 936,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:31",
    },
    {
      id: 935,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:30",
    },
    {
      id: 934,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:29",
    },
    {
      id: 933,
      event_type: "viewed-photo",
      event_time: "2014-05-16 14:42:27",
    },
    {
      id: 932,
      event_type: "device-moved",
      event_time: "2014-05-16 14:42:03",
    },
    {
      id: 931,
      event_type: "device-moved",
      event_time: "2014-05-16 10:40:27",
    },
    {
      id: 930,
      event_type: "device-moved",
      event_time: "2014-05-16 10:33:27",
    },
    {
      id: 929,
      event_type: "device-moved",
      event_time: "2014-05-16 10:26:38",
    },
    {
      id: 928,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:55",
    },
    {
      id: 927,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:54",
    },
    {
      id: 926,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:37",
    },
    {
      id: 925,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:35",
    },
    {
      id: 924,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:34",
    },
    {
      id: 923,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:32",
    },
    {
      id: 922,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:07",
    },
    {
      id: 921,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:24:04",
    },
    {
      id: 920,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:23:12",
    },
    {
      id: 919,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:23:10",
    },
    {
      id: 918,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:23:09",
    },
    {
      id: 917,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:23:08",
    },
    {
      id: 916,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:23:06",
    },
    {
      id: 915,
      event_type: "device-moved",
      event_time: "2014-05-16 10:21:22",
    },
    {
      id: 914,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:20:36",
    },
    {
      id: 913,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:20:33",
    },
    {
      id: 912,
      event_type: "device-moved",
      event_time: "2014-05-16 10:11:48",
    },
    {
      id: 911,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:11:15",
    },
    {
      id: 910,
      event_type: "viewed-photo",
      event_time: "2014-05-16 10:11:08",
    },
    {
      id: 909,
      event_type: "device-moved",
      event_time: "2014-05-16 09:28:06",
    },
    {
      id: 908,
      event_type: "device-moved",
      event_time: "2014-05-16 09:22:40",
    },
    {
      id: 907,
      event_type: "device-moved",
      event_time: "2014-05-16 09:16:50",
    },
    {
      id: 906,
      event_type: "favourited-photo",
      event_time: "2014-05-16 09:16:27",
    },
    {
      id: 905,
      event_type: "new-images-downloaded",
      event_time: "2014-05-16 09:16:22",
    },
    {
      id: 904,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:18",
    },
    {
      id: 903,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:17",
    },
    {
      id: 902,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:16",
    },
    {
      id: 901,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:14",
    },
    {
      id: 900,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:13",
    },
    {
      id: 899,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:16:12",
    },
    {
      id: 898,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:13:03",
    },
    {
      id: 897,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:13:02",
    },
    {
      id: 896,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:12:29",
    },
    {
      id: 895,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:12:28",
    },
    {
      id: 894,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:12:27",
    },
    {
      id: 893,
      event_type: "viewed-photo",
      event_time: "2014-05-16 09:12:09",
    },
    {
      id: 892,
      event_type: "device-moved",
      event_time: "2014-05-16 09:11:44",
    },
    {
      id: 891,
      event_type: "viewed-photo",
      event_time: "2014-05-16 08:37:53",
    },
    {
      id: 890,
      event_type: "viewed-photo",
      event_time: "2014-05-16 08:37:50",
    },
    {
      id: 889,
      event_type: "device-moved",
      event_time: "2014-05-16 08:37:47",
    },
    {
      id: 888,
      event_type: "chat-closed",
      event_time: "2014-05-15 20:47:33",
    },
    {
      id: 887,
      event_type: "chat-opened",
      event_time: "2014-05-15 20:47:27",
    },
    {
      id: 886,
      event_type: "favourited-photo",
      event_time: "2014-05-15 20:47:24",
    },
    {
      id: 885,
      event_type: "device-moved",
      event_time: "2014-05-15 20:47:17",
    },
    {
      id: 884,
      event_type: "device-moved",
      event_time: "2014-05-15 16:33:55",
    },
    {
      id: 883,
      event_type: "chat-closed",
      event_time: "2014-05-15 16:23:18",
    },
    {
      id: 882,
      event_type: "chat-opened",
      event_time: "2014-05-15 16:22:50",
    },
    {
      id: 881,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:46",
    },
    {
      id: 880,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:45",
    },
    {
      id: 879,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:44",
    },
    {
      id: 878,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:42",
    },
    {
      id: 877,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:41",
    },
    {
      id: 876,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:22:37",
    },
    {
      id: 875,
      event_type: "new-images-downloaded",
      event_time: "2014-05-15 16:22:32",
    },
    {
      id: 874,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:21:38",
    },
    {
      id: 873,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:21:37",
    },
    {
      id: 872,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:21:36",
    },
    {
      id: 871,
      event_type: "viewed-photo",
      event_time: "2014-05-15 16:21:33",
    },
    {
      id: 870,
      event_type: "favourited-photo",
      event_time: "2014-05-15 16:21:29",
    },
    {
      id: 869,
      event_type: "help-closed",
      event_time: "2014-05-15 16:21:26",
    },
    {
      id: 868,
      event_type: "help-opened",
      event_time: "2014-05-15 16:21:24",
    },
    {
      id: 867,
      event_type: "device-moved",
      event_time: "2014-05-15 16:21:10",
    },
    {
      id: 866,
      event_type: "chat-closed",
      event_time: "2014-05-15 14:28:06",
    },
    {
      id: 865,
      event_type: "chat-opened",
      event_time: "2014-05-15 14:27:53",
    },
    {
      id: 864,
      event_type: "chat-closed",
      event_time: "2014-05-15 14:27:52",
    },
    {
      id: 863,
      event_type: "chat-opened",
      event_time: "2014-05-15 14:27:50",
    },
    {
      id: 862,
      event_type: "help-closed",
      event_time: "2014-05-15 14:27:49",
    },
    {
      id: 861,
      event_type: "help-opened",
      event_time: "2014-05-15 14:27:46",
    },
    {
      id: 860,
      event_type: "device-moved",
      event_time: "2014-05-15 14:27:20",
    },
    {
      id: 859,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:29",
    },
    {
      id: 858,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:28",
    },
    {
      id: 857,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:10",
    },
    {
      id: 856,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:09",
    },
    {
      id: 855,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:08",
    },
    {
      id: 854,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:07",
    },
    {
      id: 853,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:06",
    },
    {
      id: 852,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:05",
    },
    {
      id: 851,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:04",
    },
    {
      id: 850,
      event_type: "viewed-photo",
      event_time: "2014-05-15 08:14:02",
    },
    {
      id: 849,
      event_type: "device-moved",
      event_time: "2014-05-15 08:13:56",
    },
    {
      id: 848,
      event_type: "chat-opened",
      event_time: "2014-05-15 08:08:39",
    },
    {
      id: 847,
      event_type: "device-moved",
      event_time: "2014-05-15 08:08:36",
    },
    {
      id: 846,
      event_type: "device-moved",
      event_time: "2014-05-12 17:45:12",
    },
    {
      id: 845,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:38",
    },
    {
      id: 844,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:36",
    },
    {
      id: 843,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:35",
    },
    {
      id: 842,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:34",
    },
    {
      id: 841,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:33",
    },
    {
      id: 840,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:32",
    },
    {
      id: 839,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:30",
    },
    {
      id: 838,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:29",
    },
    {
      id: 837,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:27",
    },
    {
      id: 836,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:28",
    },
    {
      id: 835,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:24",
    },
    {
      id: 834,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:26",
    },
    {
      id: 833,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:23",
    },
    {
      id: 832,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:22",
    },
    {
      id: 831,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:20",
    },
    {
      id: 830,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:19",
    },
    {
      id: 829,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:16",
    },
    {
      id: 828,
      event_type: "viewed-photo",
      event_time: "2014-05-12 17:26:15",
    },
    {
      id: 827,
      event_type: "device-moved",
      event_time: "2014-05-12 17:26:07",
    },
    {
      id: 826,
      event_type: "device-moved",
      event_time: "2014-05-12 16:38:10",
    },
    {
      id: 825,
      event_type: "device-moved",
      event_time: "2014-05-12 16:24:42",
    },
    {
      id: 814,
      event_type: "viewed-photo",
      event_time: "2014-05-07 17:33:25",
    },
    {
      id: 815,
      event_type: "device-moved",
      event_time: "2014-05-07 17:58:39",
    },
    {
      id: 816,
      event_type: "viewed-photo",
      event_time: "2014-05-07 17:58:41",
    },
    {
      id: 817,
      event_type: "viewed-photo",
      event_time: "2014-05-07 17:58:41",
    },
    {
      id: 818,
      event_type: "favourited-photo",
      event_time: "2014-05-07 17:58:43",
    },
    {
      id: 819,
      event_type: "unfavourited-photo",
      event_time: "2014-05-07 17:58:44",
    },
    {
      id: 820,
      event_type: "viewed-photo",
      event_time: "2014-05-07 17:58:45",
    },
    {
      id: 821,
      event_type: "chat-opened",
      event_time: "2014-05-07 17:58:47",
    },
    {
      id: 822,
      event_type: "chat-closed",
      event_time: "2014-05-07 17:58:48",
    },
    {
      id: 823,
      event_type: "help-opened",
      event_time: "2014-05-07 17:58:49",
    },
    {
      id: 824,
      event_type: "help-closed",
      event_time: "2014-05-07 17:58:51",
    },
  ]);
});

module.exports = router;
