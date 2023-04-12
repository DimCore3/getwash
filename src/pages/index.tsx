import { Suspense } from 'react';
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Download = lazy(() => import("./download"));
const Main = lazy(() => import("./main"));
const HowUse = lazy(() => import("./howUse"));
const Collegues = lazy(() => import("./collegues"));
const DownloadApp = lazy(() => import("./downloadApp"));
const Comments = lazy(() => import("./comments"));
const Policy = lazy(() => import("./policy"));

export const Routing = () => {
    return (
        <Suspense fallback={<Download />}>
            <Routes >
                <Route path="/" element={<Main />} />
                <Route path="how_use" element={<HowUse />} />
                <Route path="collegues" element={<Collegues />} />
                <Route path="download" element={<DownloadApp />} />
                <Route path="comments" element={<Comments />} />
                <Route path="policy" element={<Policy />} />
                <Route path="*" element={<p>Ничего не найдено</p>} />
            </Routes >
        </Suspense>
    );
};
