"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mount, setMount] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);
  return mount && resolvedTheme === "dark" ? (
    <Button size={"icon"} onClick={() => setTheme("light")} variant={"ghost"}>
      <Sun />
    </Button>
  ) : (
    <Button size={"icon"} onClick={() => setTheme("dark")} variant={"ghost"}>
      <Moon />
    </Button>
  );
};

export default ModeToggle;
