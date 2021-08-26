import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/home/HomePage"));
const Create = lazy(() => import("../../pages/create/CreatePage"));
const NftDetails = lazy(() => import("../../pages/nft-details/NFTDetailsPage"));
const Docs = lazy(() => import("../../pages/docs/DocsPage"));

export const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/create",
    name: "Create",
    exact: true,
    component: Create,
  },
  {
    path: "/docs",
    name: "Docs",
    exact: true,
    component: Docs,
  },
  {
    path: "/item-details",
    name: "NFT Details",
    exact: false,
    component: NftDetails,
  },
];
