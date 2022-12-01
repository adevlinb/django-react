import HomePage from './HomePage'
import React from 'react';
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/join" element={<RoomJoinPage /> } />
                <Route path="/create" element={<CreateRoomPage /> } />
            </Routes>
        </BrowserRouter>
    )
}
