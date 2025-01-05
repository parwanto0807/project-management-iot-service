import {
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  Boxes
} from "lucide-react";
import { IconType } from 'react-icons';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: IconType;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "DASHBOARD",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "MASTER DATA",
      menus: [
        {
          href: "/dashboard",
          label: "MASTER DATA",
          active: pathname.includes("/dashboard"),
          icon: Boxes,
          submenus: [
            {
              href: "/dashboard/master/products",
              label: "Products",
              active: pathname === "/dashboard/master/products"
            },
            {
              href: "/dashboard/master/price-product",
              label: "Products Price",
              active: pathname === "/dashboard/master/price-product"
            },
            {
              href: "/dashboard/master/customers",
              label: "Customers",
              active: pathname === "/dashboard/master/customers"
            },
            {
              href: "/dashboard/master/supplier",
              label: "Suppliers",
              active: pathname === "/dashboard/master/employees"
            },
            {
              href: "/dashboard/master/employees",
              label: "Employees",
              active: pathname === "/dashboard/master/employees"
            }

          ]
        }
      ]
    },
    {
      groupLabel: "TRANSACTION",
      menus: [
        {
          href: "/dashboard/logistic",
          label: "Logistic",
          active: pathname.includes("/dashboard/logistic"),
          icon: SquarePen,
          submenus: [
            {
              href: "/dashboard/logistic/incoming",
              label: "Warehouse Entry",
              active: pathname === "/dashboard/logistic/incoming"
            },
            {
              href: "/dashboard/logistic/stock",
              label: "Inventory Data Stock",
              active: pathname === "/dashboard/logistic/stock"
            },
            {
              href: "/dashboard/logistic/outgoing",
              label: "Warehouse Outbound",
              active: pathname === "/dashboard/logistic/outgoing"
            }, 
            {
              href: "/dashboard/logistic/do",
              label: "Delivery Order",
              active: pathname === "/dashboard/logistic/do"
            }
          ]
        },
        {
          href: "/dashboard/engineering",
          label: "Engineering",
          active: pathname.includes("/dashboard/engineering"),
          icon: SquarePen,
          submenus: [
            {
              href: "/dashboard/logistic/comissioning",
              label: "Commisioning",
              active: pathname === "/dashboard/logistic/comissioning"
            }
          ]
        },
        
        {
          href: "/dashboard/finance",
          label: "Finance",
          active: pathname.includes("/dashboard/finance"),
          icon: Bookmark,
          submenus: [
            {
              href: "/dashboard/finance/invoice-do",
              label: "Invoice DO",
              active: pathname === "/dashboard/finance/invoice-do"
            },
            {
              href: "/dashboard/finance/faktur-number",
              label: "Register Invoice & Faktur Number",
              active: pathname === "/dashboard/finance/faktur-number"
            },
            {
              href: "/dashboard/finance/invoice",
              label: "Invoice",
              active: pathname === "/dashboard/finance/invoice"
            }]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "SETTINGS",
          active: pathname.includes("/dashboard"),
          icon: Settings,
          submenus: [
            {
              href: "/dashboard/settings/banks",
              label: "Bank",
              active: pathname.includes("/dashboard/settings/banks"),
            },
            {
              href: "/dashboard/settings/currency",
              label: "Currency",
              active: pathname.includes("/dashboard/settings/currency"),
            },
            {
              href: "/dashboard/settings/taxs",
              label: "Tax",
              active: pathname.includes("/dashboard/settings/taxs"),
            },
            {
              href: "/dashboard/settings/users",
              label: "User Setting",
              active: pathname.includes("/dashboard/settings/users"),
            },
            {
              href: "/dashboard/settings/account",
              label: "Account Setting",
              active: pathname.includes("/dashboard/settings/account"),
            }
          ]
        }

      ]
    }
  ];
}
