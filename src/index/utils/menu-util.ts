import type { RouteRecordRaw } from "vue-router";
import type { MenuDataItem } from "../router/typing";
import type { VNodeChild } from "vue";

export type TargetType = "_blank" | "_self" | unknown;

export type ContentWidth = "Fluid" | "Fixed";

export interface MetaRecord {
  icon?: string | VNodeChild | JSX.Element;
  title?: string;
  authority?: string | string[];
  [key: string]: any;
}

export interface RouteProps {
  [x: string]: any;
  key?: string | symbol;
  path: string;
  name?: string | symbol;
  meta?: MetaRecord;
  target?: TargetType;
  children?: RouteProps[];
  redirect?: any;
}

export const filterMenu = (routes: MenuDataItem[]): RouteRecordRaw[] => {
  return routes.find((item) => item.name === "index")?.children || [];
};
interface MenuMap {
  parentKeys?: string[];
}
type MenuKeyMap = Record<string, MenuMap>;
interface MenuInfo {
  menus: RouteProps[];
  menuKeyMap: MenuKeyMap;
}
export const genMenuInfo = (routes: RouteRecordRaw[]): MenuInfo => {
  const menuKeyMap: MenuKeyMap = {};
  const getMenuInfo = (
    routes: RouteRecordRaw[],
    parentKeys: string[] = []
  ): RouteProps[] => {
    return routes.map((route) => {
      const currentRouter: RouteProps = {
        ...route,
      };
      menuKeyMap[currentRouter.path] = { parentKeys: parentKeys };
      if (route.meta?.hideChildrenInMenu) {
        route.children &&
          route.children
            .map((item) => item.path)
            .forEach(
              (value) =>
                (menuKeyMap[value] = {
                  parentKeys: [...parentKeys, currentRouter.path],
                })
            );
      }
      // 是否有子菜单，并递归处理
      if (
        route.children &&
        route.children.length > 0 &&
        !route.meta?.hideChildrenInMenu
      ) {
        // Recursion
        currentRouter.children = getMenuInfo(route.children, [
          ...parentKeys,
          currentRouter.path,
        ]);
      } else {
        currentRouter.children = undefined;
      }

      return currentRouter;
    });
  };
  const menus = getMenuInfo(routes);
  return {
    menus,
    menuKeyMap,
  };
};

export const getMenuFirstChildren = (menus: RouteProps[]) => {
  return menus.map((menu) => {
    // eslint-disable-next-line
    const { children: _children, ...rest } = menu;
    return rest;
  });
};

export const findMenuChildren = (
  menus: RouteProps[] | undefined,
  key: string | symbol | undefined
) => {
  return (menus && menus.find((item) => item.name === key)?.children) || [];
};
