import { Inter } from "next/font/google";
import CommonLayout from "@/components/Layout/CommonLayout";
// import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/styles/bootstrap.custom.css";
import "../assets/styles/index.css";
import Providers from "@/redux/Providers";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "The Gadget Zone",
    description: "The Gadget Zone",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <CommonLayout>{children}</CommonLayout>
                    <ToastContainer />
                </Providers>
            </body>
        </html>
    );
}
