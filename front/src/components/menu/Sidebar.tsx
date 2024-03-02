"use client";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Dns from "@mui/icons-material/Dns";
import { Box } from "@mui/material";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "All",
      path: "/",
      icon: <Dns />,
    },
    {
      label: "Month",
      path: "/dashboard",
      icon: <Dns />,
    },
    {
      label: "Test3",
      path: "/template",
      icon: <Dns />,
    },
  ];

  const routerPush = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <aside className="layout_menu">
      <Box className={"title"}>Title</Box>
      <Box className={"items"}>
        <List className={"item"}>
          {routes.map((el) => (
            <ListItemButton
              key={el.label}
              className={"item_button"}
              alignItems="center"
              onClick={() => routerPush(el.path)}
              selected={isActive(el.path)}
            >
              <ListItemIcon className={"item_icon"}>{el.icon}</ListItemIcon>

              <ListItemText primary={el.label} className={"item_label"} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </aside>
  );
}
