import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAntComponent, getAntTheme } from "./config/variables";
import { CustomTheme } from "./config/themeColor";
import BasicLayout from "./components/Layout/Layout";
import CashFlow from "./pages/CashFlow/CashFlow";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sales from "./pages/Sales/Sales";
import Invoices from "./pages/Invoices/Invoices";
import BankAccounts from "./pages/BankAccounts/BankAccounts";
import "./styles/global.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/cash-flow",
      element: <CashFlow />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/sales",
      element: <Sales />,
    },
    {
      path: "/invoices",
      element: <Invoices />,
    },
    {
      path: "/bank-accounts",
      element: <BankAccounts />,
    },
  ]);

  return (
    <ConfigProvider
      theme={{
        token: getAntTheme(CustomTheme.Default),
        components: getAntComponent(CustomTheme.Default),
      }}
    >
      <div className="App">
        <BasicLayout>
          {/* <DatePicker />
          <Button type="primary" label={"Test Button"} />
          <Button label={"Test Button"} />
          <div>
            <InputField type="text" placeholder="Basic usage"></InputField>
          </div> */}
          {/* <Dashboard /> */}
          <RouterProvider router={router} />
        </BasicLayout>
      </div>
    </ConfigProvider>
  );
}

export default App;
