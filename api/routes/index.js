var express = require('express');
var router = express.Router();
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '260103',
  key: '54c49563766b8f0a752a',
  secret: 'd66c0048b7410eea0784',
  cluster: 'ap1',
  encrypted: true
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mydetail', function(req, res, next) {
  res.json({
    "id":34,
    "EMAIL":"sujokirt@optusnet.com.au",
    "PHONE":"0452500148",
    "NAME":"Sasha"
  });
});

router.get('/allolds', function(req, res, next) {
  res.json([
    // CHECKIN DATA
    {
      "USERID":3,
      "AGE":65,
      "EMAIL":"spedell@swin.edu.au",
      "REALNAME":"sonja",
      "PHONE":"0422368947",
      "LASTCHECKIN":0
    },
    {
      "USERID":4,
      "AGE":70,
      "EMAIL":"lsterling@swin.edu.au",
      "REALNAME":"Leon Sterling",
      "PHONE":"0452500148",
      "LASTCHECKIN":0
    },
    {
      "USERID":12,
      "AGE":59,
      "EMAIL":"bandfprice@gmail.com",
      "REALNAME":"Bambi Price",
      "PHONE":"0452500148",
      "LASTCHECKIN":0
    },
    {
      "USERID":13,
      "AGE":82,
      "EMAIL":"sujokirt@optusnet.com.au",
      "REALNAME":"Sasha Trikojus",
      "PHONE":"0452500148",
      "LASTCHECKIN":0
    },
    {
      "USERID":16,
      "AGE":61,
      "EMAIL":"flyflyerson@gmail.com",
      "REALNAME":"John Doe",
      "PHONE":"0452500148",
      "LASTCHECKIN":0
    }
  ]);
});

router.get('/:old_id/contacts', function(req, res, next) {
  var old = req.params.old_id;
  switch (old) {
    case '1':
      res.json([
        {
          "id":21,
          "EMAIL":"chaoge@qq.com",
          "PHONE":"0452500148",
          "NAME": "Deng Chao",
          "RELATIONSHIP": "Son"
        },
        {
          "id":25,
          "EMAIL":"frederick.price@telussupport.com.au",
          "PHONE":"0452500148",
          "NAME":"Frederick Price",
          "RELATIONSHIP": "Son"
        },
        {
          "id":28,
          "EMAIL":"baprice@swin.ed.au",
          "PHONE":"0452500148",
          "NAME":"Bambi Swinburne",
          "RELATIONSHIP": "Son"
        },
        {
          "id":34,
          "EMAIL":"kaishuai@qq.com",
          "PHONE":"0422358116",
          "NAME":"Wang Kai",
          "RELATIONSHIP": "Son"
        }
      ]);
      break;
    case '2': res.json([
        {
          "id":34,
          "EMAIL":"sujokirt@optusnet.com.au",
          "PHONE":"0452500148",
          "NAME":"Sasha",
          "RELATIONSHIP": "Daughter"
        },
        {
          "id":37,
          "EMAIL":"sonjapedell@gmail.com",
          "NAME":"sonja",
          "RELATIONSHIP": "Daughter"
        },
        {
          "id":38,
          "EMAIL":"flyflyerson@gmail.com",
          "NAME":"fly",
          "RELATIONSHIP": "Son"
        },
        {
          "id":48,
          "EMAIL":"anshulchopra@hotmail.com",
          "PHONE":"0452500148",
          "NAME":"Anshul Chopra",
          "RELATIONSHIP": "Carer"
        }
      ]);
      break;
    case '3':
      res.json([
        {
          "id":34,
          "EMAIL":"sujokirt@optusnet.com.au",
          "PHONE":"0452500148",
          "NAME":"Sasha",
          "RELATIONSHIP": "Carer"
        },
        {
          "id":39,
          "EMAIL":"flyflyerson2@gmail.com",
          "PHONE":"0452500148",
          "NAME":"john",
          "RELATIONSHIP": "Son"
         },
      ]);
      break;
    case '4':
      res.json([
        {
          "id":34,
          "EMAIL":"chaoge@qq.com",
          "PHONE":"0452500148",
          "NAME":"Deng Chao",
          "RELATIONSHIP": "Son"
        },
        {
          "id":50,
          "EMAIL":"natashagoss@gmail.com",
          "PHONE":"0452500148",
          "NAME":"Natasha",
          "RELATIONSHIP": "Daughter"
        },
        {
          "id":51,
          "EMAIL":"gerry@millerandbowman.com",
          "PHONE":"0452500148",
          "NAME":"Grandfather",
          "RELATIONSHIP": "Son"
        },
        {
          "id":52,
          "EMAIL":"lee@millerandbowman.com",
          "PHONE":"0452500148",
          "NAME":"Yaya",
          "RELATIONSHIP": "Daughter"
        }
      ]);
      break;
    case '5':
      res.json([
        {
          "id":34,
          "EMAIL":"sujokirt@optusnet.com.au",
          "PHONE":"0452500148",
          "NAME":"Sasha",
          "RELATIONSHIP": "Daughter"
        },
        {
          "id":105,
          "EMAIL":"freilich.andrew@gmail.com",
          "PHONE":"0452500148",
          "NAME":"Andy Freilich",
          "RELATIONSHIP": "Son"
        },
        {
          "id":106,
          "EMAIL":"freiliad@miamioh.edu",
          "PHONE":"0452500148",
          "NAME":"Austin Freilich",
          "RELATIONSHIP": "Daughter"
        },
        {
          "id":107,
          "EMAIL":"19bvires@gmail.com",
          "PHONE":"0452500148",
          "NAME":"Brooklyn Vires",
          "RELATIONSHIP": "Son"
        },
        {
          "id":108,
          "EMAIL":"athakar70@yahoo.com.au",
          "PHONE":"0452500148",
          "NAME":"Nelwin",
          "RELATIONSHIP": "Son"
        }
      ]);
      break;
  }
});

var data = [
  {
    "day": [
      {
        values: [
          { "x": "6", "y": 0},
          { "x": "12", "y": 7},
          { "x": "18", "y": 10},
          { "x": "24", "y": 3}
        ]
      }
    ],
    "week": [
      {
        values: [
          { "x": "Mon", "y": 20},
          { "x": "Tue", "y": 19},
          { "x": "Wen", "y": 25},
          { "x": "Thu", "y": 17},
          { "x": "Fri", "y": 15},
          { "x": "Sat", "y": 31},
          { "x": "Sun", "y": 37}
        ]
      }
    ],
    "month": [
      {
        values: [
          { "x": "week1", "y": 110},
          { "x": "week2", "y": 98},
          { "x": "week3", "y": 140},
          { "x": "week4", "y": 117}
        ]
      }
    ],
    "year": [
      {
        values: [
          { "x": "Spring", "y": 1234},
          { "x": "Summer", "y": 983},
          { "x": "Autumn", "y": 1823},
          { "x": "Winter", "y": 1532}
        ]
      }
    ]
  },
  {
    "day": [
      {
        values: [
          { "x": "6", "y": 10},
          { "x": "12", "y": 37},
          { "x": "18", "y": 10},
          { "x": "24", "y": 9}
        ]
      }
    ],
    "week": [
      {
        values: [
          { "x": "Mon", "y": 30},
          { "x": "Tue", "y": 29},
          { "x": "Wen", "y": 15},
          { "x": "Thu", "y": 7},
          { "x": "Fri", "y": 55},
          { "x": "Sat", "y": 21},
          { "x": "Sun", "y": 17}
        ]
      }
    ],
    "month": [
      {
        values: [
          { "x": "week1", "y": 140},
          { "x": "week2", "y": 100},
          { "x": "week3", "y": 70},
          { "x": "week4", "y": 171}
        ]
      }
    ],
    "year": [
      {
        values: [
          { "x": "Spring", "y": 1634},
          { "x": "Summer", "y": 1983},
          { "x": "Autumn", "y": 823},
          { "x": "Winter", "y": 932}
        ]
      }
    ]
  },
  {
    "day": [
      {
        values: [
          { "x": "6", "y": 9},
          { "x": "12", "y": 10},
          { "x": "18", "y": 20},
          { "x": "24", "y": 9}
        ]
      }
    ],
    "week": [
      {
        values: [
          { "x": "Mon", "y": 30},
          { "x": "Tue", "y": 40},
          { "x": "Wen", "y": 15},
          { "x": "Thu", "y": 37},
          { "x": "Fri", "y": 15},
          { "x": "Sat", "y": 21},
          { "x": "Sun", "y": 27}
        ]
      }
    ],
    "month": [
      {
        values: [
          { "x": "week1", "y": 240},
          { "x": "week2", "y": 80},
          { "x": "week3", "y": 278},
          { "x": "week4", "y": 71}
        ]
      }
    ],
    "year": [
      {
        values: [
          { "x": "Spring", "y": 1834},
          { "x": "Summer", "y": 1283},
          { "x": "Autumn", "y": 1823},
          { "x": "Winter", "y": 1932}
        ]
      }
    ]
  },
  {
    "day": [
      {
        values: [
          { "x": "6", "y": 19},
          { "x": "12", "y": 8},
          { "x": "18", "y": 29},
          { "x": "24", "y": 19}
        ]
      }
    ],
    "week": [
      {
        values: [
          { "x": "Mon", "y": 40},
          { "x": "Tue", "y": 48},
          { "x": "Wen", "y": 25},
          { "x": "Thu", "y": 73},
          { "x": "Fri", "y": 51},
          { "x": "Sat", "y": 32},
          { "x": "Sun", "y": 72}
        ]
      }
    ],
    "month": [
      {
        values: [
          { "x": "week1", "y": 140},
          { "x": "week2", "y": 180},
          { "x": "week3", "y": 178},
          { "x": "week4", "y": 171}
        ]
      }
    ],
    "year": [
      {
        values: [
          { "x": "Spring", "y": 1334},
          { "x": "Summer", "y": 1983},
          { "x": "Autumn", "y": 1123},
          { "x": "Winter", "y": 1332}
        ]
      }
    ]
  },
  {
    "day": [
      {
        values: [
          { "x": "6", "y": 9},
          { "x": "12", "y": 28},
          { "x": "18", "y": 19},
          { "x": "24", "y": 17}
        ]
      }
    ],
    "week": [
      {
        values: [
          { "x": "Mon", "y": 45},
          { "x": "Tue", "y": 58},
          { "x": "Wen", "y": 15},
          { "x": "Thu", "y": 83},
          { "x": "Fri", "y": 31},
          { "x": "Sat", "y": 52},
          { "x": "Sun", "y": 92}
        ]
      }
    ],
    "month": [
      {
        values: [
          { "x": "week1", "y": 210},
          { "x": "week2", "y": 180},
          { "x": "week3", "y": 188},
          { "x": "week4", "y": 181}
        ]
      }
    ],
    "year": [
      {
        values: [
          { "x": "Spring", "y": 1934},
          { "x": "Summer", "y": 1983},
          { "x": "Autumn", "y": 1923},
          { "x": "Winter", "y": 1932}
        ]
      }
    ]
  }
]
router.get('/:old_id/data', function(req, res, next) {
  var old = req.params.old_id;
  switch (old) {
    case '1':
      res.json(data[0]);
      break;
    case '2':
      res.json(data[1]);
      break;
    case '3':
      res.json(data[2]);
      break;
    case '4':
      res.json(data[3]);
      break;
    case '5':
      res.json(data[4]);
      break;
  }
});

router.put('/:old_id/data', function(req, res, next) {
  var id = parseInt(req.params.old_id);
  data[id-1][req.body.type][0].values[req.body.pos].y +=
    parseInt(req.body.num);
  pusher.trigger('test_channel', 'activity', {
    id: id,
    type: req.body.type,
    new: data[id-1][req.body.type]
  });
  res.send("Success");
});

router.get('/:old_id/events', function(req, res, next) {
  var old = req.params.old_id;
  switch (old) {
    case '1':
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
        }
      ]);
    break;

    case '2':
      res.json([
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
        }
      ]);
      break;

    case '3':
      res.json([
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
        }
      ]);
      break;

    case '4':
      res.json([
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
        }
      ]);
      break;

    case '5':
      res.json([
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
        }
      ]);
      break;
  }
});

module.exports = router;
