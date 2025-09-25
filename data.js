var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.028339395378647936,
        "pitch": 0.011132990521922181,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": 1.8213924523924447,
          "pitch": 0.07797091361219444,
          "rotation": 0,
          "target": "3-bed-room-1"
        },
        {
          "yaw": 1.4027419551477127,
          "pitch": 0.08327941787204196,
          "rotation": 0,
          "target": "4-bed-room-2"
        },
        {
          "yaw": -2.483922480875016,
          "pitch": 0.20697224053585295,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.6843385685316257,
          "pitch": 0.12546298786298493,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.018904761361497435,
        "pitch": 0.02784074128320313,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": 0.9865038659817902,
          "pitch": 0.1786938570606047,
          "rotation": 4.71238898038469,
          "target": "0-hall"
        },
        {
          "yaw": 1.0861996882492875,
          "pitch": -0.015068608123220528,
          "rotation": 0,
          "target": "4-bed-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.013494813804079797,
        "pitch": -0.04267614243887152,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -2.9743165253109325,
          "pitch": 0.3655896373594274,
          "rotation": 1.5707963267948966,
          "target": "0-hall"
        },
        {
          "yaw": -3.0033185068934696,
          "pitch": 0.12831414127117036,
          "rotation": 0,
          "target": "4-bed-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed-room-1",
      "name": "BED ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8852597855476603,
        "pitch": -0.018554984203301927,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -0.25430242886316456,
          "pitch": 0.19540285836658278,
          "rotation": 4.71238898038469,
          "target": "0-hall"
        },
        {
          "yaw": -0.23877418854447718,
          "pitch": 0.024574877669556017,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bed-room-2",
      "name": "BED ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.028339108988571837,
        "pitch": -0.05752045103031733,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": 2.1754770436795035,
          "pitch": 0.0812417623116275,
          "rotation": 7.853981633974483,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MY HOME",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
