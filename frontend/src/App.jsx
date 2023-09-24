import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import CreateBook from "./pages/CreateBook";

export default function App() {
	return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books/create" element={<CreateBook/>}/>
      <Route path="/books/details/:id" element={<ShowBook/>}/>
      <Route path="/books/edit/:id" element={<EditBook/>}/>
      <Route path="/books/delete/:id" element={<DeleteBook/>}/>
    </Routes>
  );
}
