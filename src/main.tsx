import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App';
import CreateFlashcard from './pages/create-flashcard/create-flashcard';
import flashcards from './pages/flashcards/flashcards';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: CreateFlashcard },
      { path: "flashcrads", Component: flashcards },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router} />,
)
