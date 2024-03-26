import BaseLayout from "../components/BaseLayout";
import DashboardView from "../components/DashboardView";
import { getAllEmployee, getEmployee } from "../components/Actions";
import { getSession } from "../utility/SessionUtils";
import { isObjectEmpty } from "../utility/Tools";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // const session = getSession();
  // console.log("Dashboard Page: Session - " + JSON.stringify(session));
  // if (isObjectEmpty(session)) {
  //   redirect("/login");
  // }
  const empDetailRes = await getEmployee(50001);
  const empListRes = await getAllEmployee();

  return (
    <BaseLayout>
      <DashboardView employeeDetail={empDetailRes} employeeList={empListRes} />
    </BaseLayout>
  );
}
