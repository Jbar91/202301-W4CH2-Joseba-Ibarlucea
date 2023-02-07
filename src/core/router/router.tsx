import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Step1 = lazy(() => import("../../feature/step1/step1"));
const Step2 = lazy(() => import("../../feature/step2/step2"));
const Step3 = lazy(() => import("../../feature/step3/step3"));

type AppRoutesTypes = {
  path: string;
}[];

const routes: AppRoutesTypes = [
  { path: "/step1" },
  { path: "/step2" },
  { path: "/step3" },
];

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Step1></Step1>}></Route>
        <Route path={routes[0].path} element={<Step1></Step1>}></Route>
        <Route path={routes[1].path} element={<Step2></Step2>}></Route>
        <Route path={routes[2].path} element={<Step3></Step3>}></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/"} replace={true}></Navigate>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
