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
const NotFound = lazy(() => import("./notFound"));

export const Routing = () => {
    const routes = [
        { path: '/', page: Main },
        { path: '/how_use', page: HowUse },
        { path: '/collegues', page: Collegues },
        { path: '/download', page: DownloadApp },
        { path: '/comments', page: Comments },
        { path: '/policy', page: Policy },
        { path: '*', page: NotFound },
    ]

    return (
        <Suspense fallback={<Download />}>
            <div className="root_pages">
                <Routes >
                    {routes.map(e => (
                        <Route path={e.path} element={<e.page />} />
                    ))}
                </Routes >
            </div>
        </Suspense>
    );
};
