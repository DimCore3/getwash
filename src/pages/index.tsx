import { Suspense } from 'react';
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./main"));
const HowUse = lazy(() => import("./howUse"));
const Collegues = lazy(() => import("./collegues"));
const Download = lazy(() => import("./download"));
const Comments = lazy(() => import("./comments"));

export const Routing = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="/how_use" element={<HowUse />} />
                <Route path="/collegues" element={<Collegues />} />
                <Route path="/download" element={<Download />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="*" element={<p>Ничего не найдено</p>} />
            </Routes >
        </Suspense>
    );
};
