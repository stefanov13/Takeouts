import "./App.scss";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Header from "./components/header/Header";
import SignIn from "./routes/signIn/SignIn";
import CreateAccount from "./routes/createAccount/CreateAccount";
import AdminPanel from "./routes/adminPanel/AdminPanel";
import NotFound from "./routes/notFound/NotFound";
import CreateDish from "./routes/createDish/CreateDish";
import Layout from "./routes/guards/Layout";
import GuestRoute from "./routes/guards/GuestRoute";
import RequireAuth from "./routes/guards/RequireAuth";
import AdminGuard from "./routes/guards/AdminGuard";
import MealsList from "./components/meals/MealsList";
import DishDetails from "./components/dish/DishDetails";

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/meals-list" element={<MealsList />} />

          <Route element={<GuestRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path="/create-dish" element={<CreateDish />} />
            <Route path="/meals-list/:dishId" element={<DishDetails />} />
            <Route element={<AdminGuard />}>
              <Route path="/admin" element={<AdminPanel />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
