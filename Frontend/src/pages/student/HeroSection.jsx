import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div className="relative w-full  bg-gradient-to-r from-sky-700 to-sky-900 py-24 px-5 text-center">

      <div className="max-w-3xl mx-auto " >
        <h1 className="text-white text-4xl font-medium mb-4">
          Find Expert-led courses to Boost Your Career
        </h1>
        <p className="text-gray-200 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>

        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 placeholder-gray-400"
          />
          <Button
            type="submit"
            className="bg-sky-800 text-white px-6 py-3 rounded-r-full hover:bg-sky-700"
          >
            Search
          </Button>
        </form>

        <Button
          onClick={() => navigate(`/course/search?query=`)}
          className="bg-white text-sky-800 rounded-full hover:bg-gray-300"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
