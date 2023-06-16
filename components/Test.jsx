"use client"
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
 
export default function Test() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>

      <div  className={`${open? " fixed top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center bg-white ":'hidden' } p-4 block`}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm">Get Started</Button>
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
        </div>
      </div>
    </>
  );
}