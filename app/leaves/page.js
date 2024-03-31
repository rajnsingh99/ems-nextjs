import BaseLayout from "../components/BaseLayout";
import { getSession } from "../utility/SessionUtils";
import { isObjectEmpty } from "../utility/Tools";
import LeaveManagementView from "../components/LeaveManagementView";

export default async function Leaves() {
  const session = await getSession();
  console.log("Dashboard Page: Session - " + session.value);
  if (isObjectEmpty(session)) {
    redirect("/login");
  }

  return (
    <BaseLayout>
      <LeaveManagementView empid={session.value} />
    </BaseLayout>
  );
}
