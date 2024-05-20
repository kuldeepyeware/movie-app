"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const MobileSearch = () => {
  const [query, setQuery] = useState("");
  return (
    <div className='z-50'>
      <Sheet>
        <SheetTrigger className='bg-white rounded-lg p-2'>
          <Menu />
        </SheetTrigger>
        <SheetContent className='bg-slate-950 text-white'>
          <SheetHeader>
            <SheetTitle className='text-white text-xl mb-10'>
              Search For Your Content
            </SheetTitle>
            <SheetDescription>
              <div className='flex w-full flex-col gap-5 max-w-sm items-center space-x-2'>
                <Input
                  type='search'
                  className='w-80'
                  placeholder='Search for a Movie...'
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Link href={`/search/${query}`}>
                  <Button type='submit' variant={"secondary"}>
                    Search
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSearch;
