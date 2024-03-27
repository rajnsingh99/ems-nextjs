import BaseLayout from "../components/BaseLayout";
import DashboardView from "../components/DashboardView";
import { getSession } from "../utility/SessionUtils";
import { isObjectEmpty } from "../utility/Tools";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  console.log("Dashboard Page: Session - " + session.value);
  if (isObjectEmpty(session)) {
    redirect("/login");
  }

  return (
    <BaseLayout>
      <DashboardView empId={session.value} />
    </BaseLayout>
  );
}
