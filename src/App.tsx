import { Routes, Route } from "react-router-dom"

import "./globals.css"

import SignInForm from "./_auth/forms/SignInForm"
import SignUpForm from "./_auth/forms/SignUpForm"
import AuthLayout from "./_auth/AuthLayout"

import { Home } from "./_root/pages"
import RootLayout from "./_root/RootLayout"

const App = () => {
   return (
      <main className="flex h-screen">
         <Routes>
            {/* Public Route */}
            <Route element={<AuthLayout />}>
               <Route path="/sign-in" element={<SignInForm />} />
               <Route path="/sign-up" element={<SignUpForm />} />
            </Route>

            {/* Private Route */}
            <Route element={<RootLayout />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </main>
   )
}

export default App