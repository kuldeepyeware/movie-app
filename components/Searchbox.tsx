"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const Searchbox = () => {
  const [query, setQuery] = useState("");

  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
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
  );
};

export default Searchbox;
