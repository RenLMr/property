import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/main/index.vue"),
    children: [
      {
        path: "/sysUserList",
        name: "sysUserList",
        component: () =>
          import("@/views/main/system/sysUserList/sysUserList.vue"),
        meta: {
          title: "员工管理",
        },
      },
      {
        path: "/sysRoleList",
        name: "sysRoleList",
        component: () =>
          import("@/views/main/system/sysRoleList/sysRoleList.vue"),
        meta: {
          title: "⻆色管理",
        },
      },
      {
        path: "/sysMenuList",
        name: "sysMenuList",
        component: () =>
          import("@/views/main/system/sysMenuList/sysMenuList.vue"),
        meta: {
          title: "权限管理",
        },
      },
      {
        path: "/houseBuilding",
        name: "houseBuilding",
        component: () =>
          import("@/views/main/house/houseBuilding/houseBuilding.vue"),
        meta: {
          title: "栋数管理",
        },
      },
      {
        path: "/houseUnit",
        name: "houseUnit",
        component: () => import("@/views/main/house/houseUnit/houseUnit.vue"),
        meta: {
          title: "单元管理",
        },
      },
      {
        path: "/sysHouseList",
        name: "sysHouseList",
        component: () =>
          import("@/views/main/house/sysHouseList/sysHouseList.vue"),
        meta: {
          title: "房屋列表",
        },
      },
      {
        path: "/parkList",
        name: "parkList",
        component: () => import("@/views/main/park/parkList/parkList.vue"),
        meta: {
          title: "⻋位管理",
        },
      },
      {
        path: "/liveUser",
        name: "liveUser",
        component: () => import("@/views/main/live/liveUser/liveUser.vue"),
        meta: {
          title: "业主列表",
        },
      },
      {
        path: "/feePower",
        name: "feePower",
        component: () => import("@/views/main/fee/feePower/feePower.vue"),
        meta: {
          title: "电费管理",
        },
      },
      {
        path: "/feeWater",
        name: "feeWater",
        component: () => import("@/views/main/fee/feeWater/feeWater.vue"),
        meta: {
          title: "水费管理",
        },
      },
      {
        path: "/feePark",
        name: "feePark",
        component: () => import("@/views/main/fee/feePark/feePark.vue"),
        meta: {
          title: "停⻋管理",
        },
      },
      {
        path: "/userComplaintList",
        name: "userComplaintList",
        component: () =>
          import(
            "@/views/main/userComplaint/userComplaint/userComplaintList.vue"
          ),
        meta: {
          title: "投诉列表",
        },
      },
      {
        path: "/myUserComplaint",
        name: "myUserComplaint",
        component: () =>
          import(
            "@/views/main/userComplaint/myUserComplaint/myUserComplaint.vue"
          ),
        meta: {
          title: "我的投诉",
        },
      },
      {
        path: "/myPowerFee",
        name: "myPowerFee",
        component: () =>
          import("@/views/main/feeList/myPowerFee/myPowerFee.vue"),
        meta: {
          title: "我的电费",
        },
      },
      {
        path: "/myWaterFee",
        name: "myWaterFee",
        component: () =>
          import("@/views/main/feeList/myWaterFee/myWaterFee.vue"),
        meta: {
          title: "我的水费",
        },
      },
      {
        path: "/myParkFee",
        name: "myParkFee",
        component: () => import("@/views/main/feeList/myParkFee/myParkFee.vue"),
        meta: {
          title: "我的停⻋费",
        },
      },
      {
        path: "/repairList",
        name: "repairList",
        component: () =>
          import("@/views/main/repair/repairList/repairList.vue"),
        meta: {
          title: "维修列表",
        },
      },
      {
        path: "/myRepair",
        name: "myRepair",
        component: () => import("@/views/main/repair/myRepair/myRepair.vue"),
        meta: {
          title: "我的维修",
        },
      },
      {
        path: "/noticeList",
        name: "noticeList",
        component: () =>
          import("@/views/main/notice/noticeList/noticeList.vue"),
        meta: {
          title: "公告列表",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
